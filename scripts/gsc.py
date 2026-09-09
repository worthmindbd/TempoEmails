#!/usr/bin/env python3
"""
Google Search Console Inspection & Diagnostic Tool
"""

import os
import sys
import json
import urllib.parse
import urllib.request
import urllib.error
from http.server import HTTPServer, BaseHTTPRequestHandler
import threading
import time

CREDS_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), ".gsc-credentials.json")
_creds = {}
if os.path.exists(CREDS_FILE):
    try:
        with open(CREDS_FILE, "r", encoding="utf-8") as _f:
            _creds = json.load(_f)
    except Exception:
        pass

CLIENT_ID = os.environ.get("GSC_CLIENT_ID", _creds.get("client_id", ""))
CLIENT_SECRET = os.environ.get("GSC_CLIENT_SECRET", _creds.get("client_secret", ""))
REDIRECT_URI = os.environ.get("GSC_REDIRECT_URI", "http://localhost:8080")
SCOPES = "https://www.googleapis.com/auth/webmasters.readonly https://www.googleapis.com/auth/webmasters"
TOKEN_FILE = os.environ.get("GSC_TOKEN_FILE", "/tmp/gsc-tokens.json")

def get_auth_url(redirect_uri=REDIRECT_URI):
    params = {
        "client_id": CLIENT_ID,
        "redirect_uri": redirect_uri,
        "response_type": "code",
        "scope": SCOPES,
        "access_type": "offline",
        "prompt": "consent",
    }
    return f"https://accounts.google.com/o/oauth2/v2/auth?{urllib.parse.urlencode(params)}"

def exchange_code_for_tokens(code, redirect_uri=REDIRECT_URI):
    token_url = "https://oauth2.googleapis.com/token"
    payload = urllib.parse.urlencode({
        "code": code,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "redirect_uri": redirect_uri,
        "grant_type": "authorization_code",
    }).encode("utf-8")

    req = urllib.request.Request(token_url, data=payload, headers={"Content-Type": "application/x-www-form-urlencoded"})
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            save_tokens(data)
            return data
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode("utf-8")
        print(f"Error exchanging token: {err_msg}", file=sys.stderr)
        raise

def refresh_access_token():
    tokens = load_tokens()
    if not tokens or "refresh_token" not in tokens:
        raise ValueError("No refresh token available. Run auth first.")

    token_url = "https://oauth2.googleapis.com/token"
    payload = urllib.parse.urlencode({
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "refresh_token": tokens["refresh_token"],
        "grant_type": "refresh_token",
    }).encode("utf-8")

    req = urllib.request.Request(token_url, data=payload, headers={"Content-Type": "application/x-www-form-urlencoded"})
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode("utf-8"))
        if "refresh_token" not in data:
            data["refresh_token"] = tokens["refresh_token"]
        save_tokens(data)
        return data["access_token"]

def save_tokens(tokens):
    with open(TOKEN_FILE, "w", encoding="utf-8") as f:
        json.dump(tokens, f, indent=2)

def load_tokens():
    if not os.path.exists(TOKEN_FILE):
        return None
    try:
        with open(TOKEN_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return None

def get_access_token():
    tokens = load_tokens()
    if not tokens:
        return None
    return tokens.get("access_token")

class OAuthCallbackHandler(BaseHTTPRequestHandler):
    auth_code = None

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        query = urllib.parse.parse_qs(parsed.query)

        if "code" in query:
            OAuthCallbackHandler.auth_code = query["code"][0]
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write(b"""
            <html><body style="font-family: sans-serif; text-align: center; padding: 50px;">
                <h1 style="color: #10b981;">Authentication Successful!</h1>
                <p>Google Search Console access token received. You can close this tab and return to your agent.</p>
            </body></html>
            """)
        elif "error" in query:
            OAuthCallbackHandler.auth_code = None
            self.send_response(400)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            err = query.get("error", ["Unknown"])[0]
            self.wfile.write(f"<h1>Authentication Failed: {err}</h1>".encode("utf-8"))
        else:
            self.send_response(404)
            self.end_headers()

    def log_message(self, format, *args):
        pass

def cmd_auth():
    print("\n" + "="*70)
    print("GOOGLE SEARCH CONSOLE AUTHENTICATION")
    print("="*70)
    
    url = get_auth_url()
    print("\nPlease open the following URL in your browser to authorize access:\n")
    print(url)
    print("\n" + "-"*70)
    print("Waiting for callback on http://localhost:8080 ...")
    print("-"*70)

    server = HTTPServer(("localhost", 8080), OAuthCallbackHandler)
    server.timeout = 180

    code = None
    while not code:
        server.handle_request()
        if OAuthCallbackHandler.auth_code:
            code = OAuthCallbackHandler.auth_code
            break

    if code:
        print("\nAuthorization code received! Exchanging for tokens...")
        tokens = exchange_code_for_tokens(code)
        print("Success! Tokens saved to .gsc-tokens.json")
    else:
        print("\nNo authorization code received.")

def api_request(url, method="GET", data=None):
    token = get_access_token()
    if not token:
        token = refresh_access_token()

    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
    }
    
    body = json.dumps(data).encode("utf-8") if data else None
    req = urllib.request.Request(url, data=body, headers=headers, method=method)

    try:
        with urllib.request.urlopen(req) as resp:
            content = resp.read().decode("utf-8")
            return json.loads(content) if content.strip() else {}
    except urllib.error.HTTPError as e:
        if e.code == 401:
            token = refresh_access_token()
            headers["Authorization"] = f"Bearer {token}"
            req = urllib.request.Request(url, data=body, headers=headers, method=method)
            with urllib.request.urlopen(req) as retry_resp:
                content = retry_resp.read().decode("utf-8")
                return json.loads(content) if content.strip() else {}
        err_msg = e.read().decode("utf-8")
        raise Exception(f"HTTP {e.code}: {err_msg}")

def cmd_sites():
    print("\nFetching verified sites from Google Search Console...")
    try:
        data = api_request("https://www.googleapis.com/webmasters/v3/sites")
        entries = data.get("siteEntry", [])
        if not entries:
            print("No sites found in this Search Console account.")
            return []
        print(f"\nFound {len(entries)} site(s):")
        for idx, site in enumerate(entries):
            print(f" [{idx+1}] {site.get('siteUrl')} (Permission: {site.get('permissionLevel')})")
        return entries
    except Exception as e:
        print(f"Error fetching sites: {e}")
        return []

def cmd_sitemaps(site_url):
    encoded_url = urllib.parse.quote(site_url, safe="")
    print(f"\nFetching sitemaps for site: {site_url}...")
    try:
        data = api_request(f"https://www.googleapis.com/webmasters/v3/sites/{encoded_url}/sitemaps")
        sitemaps = data.get("sitemap", [])
        if not sitemaps:
            print("No sitemaps found.")
            return []
        for s in sitemaps:
            print(f"\nSitemap: {s.get('path')}")
            print(f"  Last downloaded: {s.get('lastDownloaded', 'Never')}")
            print(f"  Last submitted:  {s.get('lastSubmitted', 'Never')}")
            print(f"  Warnings:        {s.get('warnings', 0)}")
            print(f"  Errors:          {s.get('errors', 0)}")
            for content in s.get("contents", []):
                print(f"  Type: {content.get('type')} | Submitted: {content.get('submitted')} | Indexed: {content.get('indexed')}")
        return sitemaps
    except Exception as e:
        print(f"Error fetching sitemaps: {e}")
        return []

def cmd_submit_sitemap(site_url, feedpath):
    encoded_site = urllib.parse.quote(site_url, safe="")
    encoded_feed = urllib.parse.quote(feedpath, safe="")
    api_url = f"https://www.googleapis.com/webmasters/v3/sites/{encoded_site}/sitemaps/{encoded_feed}"
    print(f"\nSubmitting sitemap {feedpath} to {site_url}...")
    try:
        api_request(api_url, method="PUT")
        print("Sitemap successfully submitted to Google Search Console!")
    except Exception as e:
        print(f"Error submitting sitemap: {e}")

def cmd_inspect(inspection_url, site_url):
    print(f"\nInspecting URL: {inspection_url} (Site: {site_url})...")
    api_url = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect"
    payload = {
        "inspectionUrl": inspection_url,
        "siteUrl": site_url,
    }
    try:
        data = api_request(api_url, method="POST", data=payload)
        res = data.get("inspectionResult", {})
        idx = res.get("indexStatusResult", {})
        print("\n--- URL Inspection Result ---")
        print(f"Verdict:         {idx.get('verdict')}")
        print(f"Coverage State:  {idx.get('coverageState')}")
        print(f"Indexing State:  {idx.get('indexingState')}")
        print(f"RobotsTxt State: {idx.get('robotsTxtState')}")
        print(f"Crawled As:      {idx.get('crawledAs')}")
        print(f"Last Crawl Time: {idx.get('lastCrawlTime')}")
        print(f"Google Canon:    {idx.get('googleCanonical')}")
        print(f"User Canon:      {idx.get('userCanonical')}")
        print(f"Page Fetch:      {idx.get('pageFetchState')}")
        return data
    except Exception as e:
        print(f"Error inspecting URL: {e}")
        return None

def cmd_analytics(site_url, days=30):
    from datetime import datetime, timedelta
    end_date = datetime.now().strftime("%Y-%m-%d")
    start_date = (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")
    print(f"\nFetching search analytics for {site_url} from {start_date} to {end_date}...")
    encoded_url = urllib.parse.quote(site_url, safe="")
    api_url = f"https://www.googleapis.com/webmasters/v3/sites/{encoded_url}/searchAnalytics/query"
    payload = {
        "startDate": start_date,
        "endDate": end_date,
        "dimensions": ["page"],
        "rowLimit": 100
    }
    try:
        data = api_request(api_url, method="POST", data=payload)
        rows = data.get("rows", [])
        print(f"\nFound {len(rows)} page(s) receiving impressions/clicks:")
        for r in rows:
            print(f" - {r.get('keys', [''])[0]}: Clicks: {r.get('clicks')}, Impr: {r.get('impressions')}, CTR: {r.get('ctr', 0)*100:.1f}%, Pos: {r.get('position', 0):.1f}")
        return rows
    except Exception as e:
        print(f"Error fetching analytics: {e}")
        return []

def cmd_audit(site_url="sc-domain:tempoemails.com"):
    urls = [
        "https://tempoemails.com/",
        "https://tempoemails.com/about/",
        "https://tempoemails.com/contact/",
        "https://tempoemails.com/privacy-policy/",
        "https://tempoemails.com/terms-of-service/",
        "https://tempoemails.com/blog/",
        "https://tempoemails.com/blog/how-temporary-email-works/",
        "https://tempoemails.com/blog/understanding-otp-verification-codes/",
        "https://tempoemails.com/es/",
        "https://tempoemails.com/fr/",
        "https://tempoemails.com/de/",
        "https://tempoemails.com/ja/",
        "https://tempoemails.com/ar/",
    ]
    print(f"\nRunning Search Console audit on {len(urls)} key URLs for {site_url}...")
    results = []
    for u in urls:
        api_url = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect"
        payload = {"inspectionUrl": u, "siteUrl": site_url}
        try:
            data = api_request(api_url, method="POST", data=payload)
            res = data.get("inspectionResult", {})
            idx = res.get("indexStatusResult", {})
            verdict = idx.get("verdict", "UNKNOWN")
            coverage = idx.get("coverageState", "UNKNOWN")
            crawl_time = idx.get("lastCrawlTime", "Never")
            g_canon = idx.get("googleCanonical")
            u_canon = idx.get("userCanonical")
            print(f"[{verdict}] {u}")
            print(f"       Coverage: {coverage} | Crawled: {crawl_time}")
            if g_canon and u_canon and g_canon != u_canon:
                print(f"       Canonical mismatch! User: {u_canon} | Google: {g_canon}")
            results.append({"url": u, "verdict": verdict, "coverage": coverage, "googleCanonical": g_canon, "userCanonical": u_canon})
        except Exception as e:
            print(f"[ERROR] {u}: {e}")
        time.sleep(0.5)
    return results

def main():
    if len(sys.argv) < 2:
        print("Usage: gsc.py [auth | exchange <code> | sites | sitemaps <siteUrl> | inspect <url> <siteUrl> | analytics <siteUrl> | audit <siteUrl>]")
        return

    cmd = sys.argv[1]
    if cmd == "auth":
        cmd_auth()
    elif cmd == "exchange":
        if len(sys.argv) < 3:
            print("Usage: gsc.py exchange <auth_code>")
            return
        code = sys.argv[2]
        tokens = exchange_code_for_tokens(code)
        print("Success! Tokens saved.")
    elif cmd == "sites":
        cmd_sites()
    elif cmd == "sitemaps":
        if len(sys.argv) < 3:
            print("Usage: gsc.py sitemaps <siteUrl>")
            return
        cmd_sitemaps(sys.argv[2])
    elif cmd == "inspect":
        if len(sys.argv) < 4:
            print("Usage: gsc.py inspect <inspectionUrl> <siteUrl>")
            return
        cmd_inspect(sys.argv[2], sys.argv[3])
    elif cmd == "analytics":
        site_url = sys.argv[2] if len(sys.argv) > 2 else "sc-domain:tempoemails.com"
        cmd_analytics(site_url)
    elif cmd == "audit":
        site_url = sys.argv[2] if len(sys.argv) > 2 else "sc-domain:tempoemails.com"
        cmd_audit(site_url)
    elif cmd == "submit-sitemap":
        if len(sys.argv) < 4:
            print("Usage: gsc.py submit-sitemap <siteUrl> <feedpath>")
            return
        cmd_submit_sitemap(sys.argv[2], sys.argv[3])
    else:
        print(f"Unknown command: {cmd}")

if __name__ == "__main__":
    main()
