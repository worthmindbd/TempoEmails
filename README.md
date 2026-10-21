# TempoEmails — Instant Disposable Email

A modern, privacy-first temporary email web app. Generate a burner inbox in one click, receive emails instantly, auto-detect OTP codes, and forget it all when you close the tab. No registration, no database, no logs.

**Live multilingual app + SEO content site** built with Astro, Tailwind CSS v4, and vanilla TypeScript — zero framework runtime. The interactive inbox (`/`) ships alongside localized homepages (`/[lang]/`), 15 blog articles, and about/contact/legal pages.

---

## ✨ Features

- **Instant inbox generation** — one click, no sign-up required
- **5 live mail provider backends** with automatic failover (Mail.tm/Mail.gw, Inboxes, TempMail.lol, Guerrilla Mail, + offline mock; 1secmail legacy accounts are migrated)
- **40+ available domains** — pick a random one or choose a custom username + domain
- **Smart OTP extraction** — keyword-proximity engine detects 4–8 digit verification codes (including space-grouped codes) from subject and body
- **Verification link detection** — finds confirm/activate/verify URLs automatically (https-only)
- **1-click copy** for email address, OTP codes, and verification links
- **Real-time delivery** — SSE push for Mail.tm, 10-second polling with visual progress for others (pauses when tab hidden)
- **Audio chime notifications** — synthesized via Web Audio API (no audio files), throttled on bursts
- **Multi-inbox history** — up to 25 saved inboxes, instantly switchable
- **QR code mobile handoff** — scan to open your temp address on another device
- **HTML + plain text views** — sanitized HTML (scripts/forms/trackers stripped) in a sandboxed iframe, monospace for text
- **Email download** as `.txt`
- **Dark / light theme** — localStorage persistence, zero-FOUC init
- **Responsive split-pane** — desktop shows inbox + detail side-by-side; mobile switches full-screen
- **Offline resilience** — message caching in localStorage, mock provider as ultimate fallback
- **10 locales** — en, es, pt, fr, de, ru, zh, ja, ar, id with hreflang + sitemap

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build) (static-first, island architecture) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` |
| Language | TypeScript (client-side), Astro components |
| Runtime UI | 100% vanilla JS — no React/Vue/Svelte |
| State | `localStorage` via `StorageManager` class (schema-validated, quota-evicted) |
| Audio | Web Audio API (synthesized chime) |
| QR Codes | [qrserver.com](https://goqr.me/api/) external API |
| Fonts | Bricolage Grotesque · Geist · Geist Mono (Google Fonts) |
| Prod server | `server.mjs` — static files + same-origin `/api/mail/*` proxy + canonical 301s |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build) (static-first, island architecture) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` |
| Language | TypeScript (client-side), Astro components |
| Runtime UI | 100% vanilla JS — no React/Vue/Svelte |
| State | `localStorage` via `StorageManager` class |
| Audio | Web Audio API (synthesized chime) |
| QR Codes | [qrserver.com](https://goqr.me/api/) external API |
| Fonts | Bricolage Grotesque · Geist · Geist Mono (Google Fonts) |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 🚀 Dokploy VPS Deployment (Nixpacks)

TempoEmails is pre-configured for one-click deployment on **Dokploy** using Nixpacks:

1. Create an Application in Dokploy connected to this Git repository.
2. Set **Build Type** to `Nixpacks` and **Publish Directory** to `dist`.
3. Add your domain (e.g., `tempoemails.com`) with SSL enabled in the Domains tab.

For step-by-step instructions, see [DOKPLOY_DEPLOYMENT.md](./DOKPLOY_DEPLOYMENT.md).

> Set `SITE_URL` and all `PUBLIC_*` env vars **before** `npm run build` — they are baked into the static HTML (canonical URLs, SEO tags, analytics).

### Runtime environment variables

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `4321` | Port for `server.mjs` |
| `HOST` | `0.0.0.0` | Bind address for `server.mjs` |
| `SITE_URL` | `https://tempoemails.com` | Canonical domain, used for redirects and build-time URLs |
| `TRUST_PROXY` | *(unset)* | Set to `1`/`true` **only** when a reverse proxy you control sets/overwrites `X-Forwarded-For`. The `/api/mail/*` per-IP rate limiter uses the socket address by default, because a client-supplied `X-Forwarded-For` would let anyone bypass it. |
| `PUBLIC_GOOGLE_ANALYTICS_ID` | *(unset)* | GA4 measurement ID (loaded only after cookie consent) |
| `PUBLIC_GOOGLE_ADSENSE_ID` | *(unset)* | AdSense publisher ID (loaded only after cookie consent) |

> `npm run preview` cannot serve `/api/mail/*` — Astro 7 strips user Vite plugins from its preview
> server. Run `npm start` instead to exercise the built output with the mail proxy.

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── index.astro              # English app entry (hero + MailboxManager + sections)
│   ├── [lang]/index.astro       # Localized homepages (es, pt, fr, de, ru, zh, ja, ar, id)
│   ├── about.astro, contact.astro, privacy-policy.astro, terms-of-service.astro, disclaimer.astro
│   ├── blog/index.astro + blog/*.astro (15 articles)
│   ├── 404.astro, [lang]/404.astro
│   ├── robots.txt.ts, sitemap.xml.ts
├── layouts/
│   ├── Layout.astro             # Shell: SEO, fonts, theme, background, consent-gated analytics
│   └── ContentLayout.astro      # Article shell: breadcrumbs, Article JSON-LD, link localizer
├── middleware.ts                # /api/mail/* proxy for Astro-served runtimes (dev; prod uses server.mjs)
├── styles/
│   └── global.css               # Tailwind v4 tokens, component classes, prose, motion
├── i18n/
│   ├── languages.ts, translations.ts, utils.ts, blog-data.ts, pages-data.ts
├── components/
│   ├── app/                     # Core application components
│   │   ├── MailboxManager.astro # Central controller + MailboxController script
│   │   ├── EmailAddressBar.astro
│   │   ├── InboxList.astro
│   │   ├── EmailDetail.astro
│   │   ├── CustomInboxModal.astro
│   │   ├── InboxHistoryDrawer.astro
│   │   └── QrCodeModal.astro
│   ├── sections/                # Landing page sections
│   │   ├── HomePage.astro       # Homepage composition shared by / and /[lang]/
│   │   ├── Header.astro         # Floating glass nav
│   │   ├── Features.astro       # Bento feature grid
│   │   ├── HowItWorks.astro     # 4-step timeline
│   │   ├── OtpShowcase.astro    # OTP engine showcase
│   │   ├── UseCases.astro       # Tabbed use cases
│   │   ├── Faq.astro            # Split FAQ (<details>)
│   │   └── Footer.astro         # Footer
│   └── ui/                      # Reusable UI pieces
│       ├── Logo.astro
│       ├── SectionHeading.astro
│       ├── DialogHeader.astro
│       ├── ThemeToggle.astro
│       ├── ToastContainer.astro
│       ├── ConfirmModal.astro
│       ├── CookieConsent.astro
│       └── LanguageSelector.astro
├── lib/
│   ├── mail/                    # Mail service layer
│   │   ├── types.ts             # Core interfaces
│   │   ├── service.ts           # Orchestrator + fallback chain
│   │   ├── mailtm-client.ts     # Mail.tm / Mail.gw (JWT auth, SSE)
│   │   ├── inboxes-client.ts    # Inboxes.com / GetNada / AirMail (18+ domains)
│   │   ├── tempmaillol-client.ts # TempMail.lol (token auth)
│   │   ├── guerrilla-client.ts  # Guerrilla Mail (per-account session auth)
│   │   ├── secmail-client.ts    # 1secmail legacy (API shut down; stored accounts migrate)
│   │   └── mock-client.ts       # Offline fallback with sample emails
│   └── utils/
│       ├── otp-extractor.ts     # Keyword-proximity OTP + verification link extraction
│       ├── clipboard.ts         # Clipboard API with fallback
│       ├── qrcode.ts            # QR code generation via external API
│       ├── sound.ts             # Web Audio API chime (singleton, throttled)
│       ├── storage.ts           # localStorage manager (SSR-safe, validated)
│       ├── sanitize.ts          # Email HTML sanitizer + escapeHtml
│       ├── fetch-with-timeout.ts # AbortController fetch helper (10s)
│       └── date-formatter.ts    # Relative time formatting
└── server/
    └── mail-proxy.mjs           # Shared /api/mail/* allowlist proxy (used by server.mjs, Vite plugin, middleware)
```

---

## 🏗 Architecture

### Mail Provider Fallback Chain

When creating a new inbox, `MailService` tries providers in order until one succeeds:

```
Preferred Provider → Mail.tm → Inboxes → TempMail.lol → Guerrilla → Mock (offline)
```

All providers' domains are fetched concurrently via `Promise.allSettled()` with per-client timeouts. A random domain is picked from the merged pool; if the empty pool or every provider fails, the simulated mock inbox is used (the UI warns it cannot receive real email).

### Custom Event Bus

Components communicate via `window.dispatchEvent`:

| Event | Purpose |
|---|---|
| `tempomail:toast` | Trigger toast notifications |
| `tempomail:openhistory` | Open inbox history drawer |
| `tempomail:themechange` | Theme toggle notification (re-themes the email reader) |
| `tempomail:consent` | Cookie consent choice (gates analytics/ads) |

### State Management

All state lives in `localStorage` via `StorageManager`:

| Key | Content |
|---|---|
| `tempomail_current_account` | Active mailbox account |
| `tempomail_saved_accounts` | Up to 25 recent inboxes |
| `tempomail_msgs_{address}` | Cached messages per inbox (max 100) |
| `tempomail_detail_msgs_{address}` | Cached full bodies per inbox (max 60) |
| `theme` | `'dark'` or `'light'` |
| `tempomail_sound_enabled` | Sound preference |

---

## 🔀 Canonical URLs, Redirects & Index Coverage

There is exactly **one** indexable URL per page: `https://tempoemails.com/<path>/`
(apex host, HTTPS, always a trailing slash). `server.mjs` folds every other form
into that URL with a **single 301** — the scheme upgrade, the apex/`www` choice,
the duplicate-slash collapse, the drop of `/index.html`, and the trailing slash
are all resolved in the same hop, so Google never has to follow a chain.
`/404.html` and `/<locale>/404.html` are templates and answer with a real `404`,
never a `200` (soft 404).

This matters for Search Console. Google's **Page indexing → Page with redirect**
report lists URLs such as the ones below, and it is **working as intended** —
each is a permanent redirect to a live, self-canonical, sitemapped page:

| Reported URL | Resolves to (1 hop) |
|---|---|
| `http://tempoemails.com/` | `https://tempoemails.com/` |
| `http://www.tempoemails.com/` / `https://www.tempoemails.com/` | `https://tempoemails.com/` |
| `https://tempoemails.com/contact` | `https://tempoemails.com/contact/` |
| `https://tempoemails.com/blog/<slug>` | `https://tempoemails.com/blog/<slug>/` |

The bucket is informational, not an error. It cannot be driven to zero and its
**Validate fix** button will always fail, because Google re-crawls those URLs and
correctly sees the same 301 again. Judge health by whether the *canonical* URLs
are indexed, not by this count. Do not "fix" it by serving the non-canonical form
with a 200 — that reintroduces duplicate content. See commit `eb3b4ae`
(2026-08-26), which switched the internal link graph to trailing slashes and
turned the previously-indexed no-slash URLs into redirects.

Two items live outside this repo and can still shrink the report:

1. **Cloudflare's "Always Use HTTPS"** upgrade runs at the edge and preserves the
   path verbatim, so `http://tempoemails.com/contact` gains a second hop
   (`https://tempoemails.com/contact` → `…/contact/`) before the origin ever sees
   it. Confirm the origin handles the scheme upgrade in one hop
   (`curl -H 'X-Forwarded-Proto: http' …`), then either disable the edge rule and
   let `server.mjs` redirect (it returns the absolute Location *and* HSTS), or add
   a Cloudflare Single Redirect rule that also appends the trailing slash.
2. **HSTS preload is advertised but not submitted.** The site sends
   `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`, yet
   `https://hstspreload.org/api/v2/status?domain=tempoemails.com` reports
   `"status": "unknown"`. Because both browsers and Googlebot honour the preload
   list, submitting the domain is what actually stops `http://` variants from
   being discovered and crawled at all.

---

## 📄 License

MIT
