# Deploying TempoEmails on Dokploy (VPS)

This guide walks you through deploying **TempoEmails** to your VPS using [Dokploy](https://dokploy.com).

TempoEmails uses a multi-stage Docker build with **Node.js 22** for compilation and **NGINX Alpine** for high-performance static file serving with gzip compression, cache headers, and clean routing.

---

## 📋 Prerequisites

1. A VPS with **Dokploy** installed and running.
2. A domain name pointed to your VPS IP address (e.g., `tempomail.yourdomain.com` or `yourdomain.com`).
3. Your TempoEmails repository pushed to GitHub, GitLab, or accessible via Git.

---

## ⚙️ Environment Variables (`prod.env`)

TempoEmails supports optional environment variables for **Google AdSense, Google Analytics 4, Tag Manager, and Search Console verifications**. 

Refer to [`prod.env`](file:///home/worthmind/Coding/TempoEmails/prod.env) or [`.env.example`](file:///home/worthmind/Coding/TempoEmails/.env.example):

| Variable | Description | Example |
| :--- | :--- | :--- |
| `SITE_URL` / `PUBLIC_SITE_URL` | Canonical production domain URL | `https://tempoemails.dev` |
| `PUBLIC_GOOGLE_ADSENSE_ID` | Google AdSense Publisher ID | `ca-pub-1234567890123456` |
| `PUBLIC_GOOGLE_ADSENSE_SLOT_ID` | Default Ad Unit Slot ID | `1234567890` |
| `PUBLIC_GOOGLE_ANALYTICS_ID` | Google Analytics 4 Measurement ID | `G-XXXXXXXXXX` |
| `PUBLIC_GTM_ID` | Google Tag Manager ID (Optional) | `GTM-XXXXXXX` |
| `PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification meta | `google_token_here` |
| `PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster verification code | `bing_code_here` |
| `PUBLIC_PLAUSIBLE_DOMAIN` | Plausible Analytics domain (Optional) | `tempoemails.dev` |
| `PUBLIC_UMAMI_WEBSITE_ID` | Umami Analytics website ID (Optional) | `uuid-here` |
| `PORT` | Container exposed port | `3012` |

> **Note on Google AdSense `ads.txt`**: Remember to update [`public/ads.txt`](file:///home/worthmind/Coding/TempoEmails/public/ads.txt) with your approved Google AdSense publisher ID.

---

## 🚀 Deployment Methods

You can deploy TempoEmails on Dokploy using either **Standard Application (Dockerfile)** or **Docker Compose**.

---

### Option 1: Standard Application (Recommended)

1. **Log in to your Dokploy Dashboard**.
2. Navigate to your **Project** and click **Create Service** → **Application**.
3. Fill in the general details:
   - **Name**: `tempoemails`
4. In the **Provider / Source** tab:
   - Select **GitHub** (or **Git** / **Docker**).
   - Choose your repository and the branch (e.g., `main`).
5. In the **Build** tab:
   - **Build Type**: Select **`Dockerfile`**.
   - **Dockerfile Path**: `Dockerfile` (default).
   - **Context**: `.` (default).
6. In the **Environment Variables / Build Arguments** tab:
   - Paste the contents of your [`prod.env`](file:///home/worthmind/Coding/TempoEmails/prod.env) file (e.g. `SITE_URL`, `PUBLIC_GOOGLE_ANALYTICS_ID`, `PUBLIC_GOOGLE_ADSENSE_ID`, etc.).
7. In the **General / Network / Domains** tab:
   - **Port**: Enter `3012` (the container exposes port 3012).
   - Add your domain (e.g., `tempomail.yourdomain.com`).
   - Enable **HTTPS / SSL** (Dokploy/Traefik will automatically issue a Let's Encrypt certificate).
8. Click **Deploy**.

---

### Option 2: Docker Compose

1. In Dokploy, click **Create Service** → **Compose**.
2. Set the name to `tempoemails`.
3. In the Compose configuration, point to the repository or paste the `docker-compose.yml` contents:
   ```yaml
   services:
     tempoemails:
       build:
         context: .
         dockerfile: Dockerfile
         args:
           SITE_URL: ${SITE_URL:-https://tempoemails.dev}
           PUBLIC_SITE_URL: ${PUBLIC_SITE_URL:-https://tempoemails.dev}
           PUBLIC_GOOGLE_ANALYTICS_ID: ${PUBLIC_GOOGLE_ANALYTICS_ID:-}
           PUBLIC_GOOGLE_ADSENSE_ID: ${PUBLIC_GOOGLE_ADSENSE_ID:-}
       image: tempoemails:latest
       container_name: tempoemails
       restart: unless-stopped
       ports:
         - "3012:3012"
       env_file:
         - path: prod.env
           required: false
       healthcheck:
         test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://127.0.0.1:3012/healthz"]
         interval: 30s
         timeout: 3s
         retries: 3
         start_period: 5s
   ```
4. Set the environment variables in Dokploy's **Environment** tab.
5. In the **Domains** section, map your domain to port `3012` with SSL enabled.
6. Click **Deploy**.

---

## 🔄 Automated CI/CD (Auto-Deploy on Git Push)

To enable automatic redeployment whenever you push changes to your repository:

1. In Dokploy, go to your Application's **Deployments** or **General** tab.
2. Copy the **Webhook URL**.
3. In GitHub / GitLab:
   - Go to your repository **Settings** → **Webhooks** → **Add Webhook**.
   - **Payload URL**: Paste your Dokploy Webhook URL.
   - **Content type**: `application/json`.
   - **Events**: Just the `push` event.
4. Save the webhook. Now every `git push` triggers an automatic zero-downtime rebuild and rollout.

---

## 🔍 Healthcheck & Monitoring

The container includes a built-in healthcheck:
- **Endpoint**: `http://localhost:3012/healthz`
- **Response**: `200 OK` (`healthy`)

Dokploy and Traefik monitor this endpoint to ensure traffic is only routed to healthy containers.

---

## 🛠 Local Docker Testing

If you want to test the Docker build locally before deploying to your VPS:

```bash
# Build the Docker image with environment variables
docker build \
  --build-arg SITE_URL="http://localhost:3012" \
  --build-arg PUBLIC_GOOGLE_ANALYTICS_ID="G-XXXXXXXXXX" \
  -t tempoemails .

# Run the container
docker run -d -p 3012:3012 --name tempoemails tempoemails

# Test in browser
open http://localhost:3012

# Test healthcheck
curl http://localhost:3012/healthz
```

Or with Docker Compose:

```bash
docker compose up -d --build
```
