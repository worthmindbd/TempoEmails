# TempoEmails — Agent Instructions

## Project Overview

TempoEmails is a multilingual disposable email web app + SEO content site built with **Astro + Tailwind CSS v4 + vanilla TypeScript**. No framework runtime (React/Vue/etc.). All interactivity is vanilla JS in `<script>` tags.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Dev server runs on `localhost:4321` with `host: true` for network access.

`astro preview` serves the static build but **cannot** serve `/api/mail/*`: Astro 7
strips user Vite plugins from the preview server and a static build never runs
`src/middleware.ts`. Use `npm start` (server.mjs) to exercise the built output
with the mail proxy.

Do not gate dev/prod behaviour on `NODE_ENV` — the Dockerfile and
`nixpacks.toml` both export `NODE_ENV=production`, which silently turns dev
behaviour on. `astro.config.mjs` detects `dev`/`preview` from argv instead.

## Key Architecture

### App + Content Pages
- `src/pages/index.astro` — English app entry, renders hero + MailboxManager + landing sections
- `src/pages/[lang]/index.astro` — localized homepages (es, pt, fr, de, ru, zh, ja, ar, id)
- `src/pages/blog/*.astro` (15 articles), `about/contact/privacy-policy/terms-of-service/disclaimer`, `404.astro`, `robots.txt.ts`, `sitemap.xml.ts`
- `src/layouts/Layout.astro` — shell with SEO, fonts, theme init, background glow, consent-gated analytics
- `src/layouts/ContentLayout.astro` — article shell (breadcrumbs, Article JSON-LD)
- `src/middleware.ts` — `/api/mail/*` proxy for Astro-served runtimes (dev); production uses `server.mjs` + shared `server/mail-proxy.mjs`
- `astro.config.mjs` — mounts the same proxy as Vite middleware in `astro dev`; no env gates (see Development)

### Component Organisation
- `src/components/app/` — core app components (MailboxManager is the central controller)
- `src/components/sections/` — landing page sections (Header, Features, HowItWorks, OtpShowcase, UseCases, Faq, Footer)
- `src/components/ui/` — reusable primitives (Badge, Button, GlassCard, ThemeToggle, ToastContainer, ConfirmModal, CookieConsent, LanguageSelector)

### Mail Service (`src/lib/mail/`)
- `types.ts` — core interfaces (`MailAccount`, `MailMessage`, `DetailedMailMessage`, provider union type)
- `service.ts` — orchestrator that routes to provider clients with automatic fallback chain
- Provider clients: `mailtm-client.ts`, `inboxes-client.ts`, `tempmaillol-client.ts`, `guerrilla-client.ts`, `mock-client.ts`
- `secmail-client.ts` was removed: 1secmail is dead and its upstream is not in the proxy allowlist. Legacy stored accounts are still migrated by `service.ts` (`migrateSecmailAccount`) and the `secmail` value stays in the provider union for that reason.
- Fallback order: preferred → Mail.tm → Inboxes → TempMail.lol → Guerrilla → Mock
- All client fetches go through `fetchWithTimeout` (`src/lib/utils/fetch-with-timeout.ts`); email HTML goes through `sanitizeEmailHtml`/`escapeHtml` (`src/lib/utils/sanitize.ts`) before iframe render

### Utilities (`src/lib/utils/`)
- `otp-extractor.ts` — keyword-proximity OTP code + https-only verification link extraction
- `clipboard.ts` — clipboard with fallback + toast events
- `qrcode.ts` — QR generation via external API
- `sound.ts` — Web Audio API chime (singleton, throttled)
- `storage.ts` — localStorage manager (SSR-safe, schema-validated)
- `sanitize.ts` — email HTML sanitizer + escapeHtml
- `fetch-with-timeout.ts` — AbortController fetch helper
- `date-formatter.ts` — relative time formatting

### Custom Events
- `tempomail:toast` — toast notifications
- `tempomail:openhistory` — open inbox history drawer
- `tempomail:themechange` — theme toggle (re-themes the email reader)
- `tempomail:consent` — cookie consent choice (gates analytics/ads)

### Styling
- Tailwind CSS v4 via `@tailwindcss/vite` plugin
- `src/styles/global.css` — glassmorphism classes (`glass-panel`, `glass-card`, `glass-pill`), hero glow mesh, custom animations, scrollbar styles
- Dark mode: class-based (`html.dark`), zero-FOUC inline script in Layout head
- Fonts: Bricolage Grotesque (display), Inter (body), JetBrains Mono (mono)

## Conventions

- **No framework components** — everything is `.astro` + vanilla JS `<script>` blocks
- **Event-driven communication** — components talk via custom `window` events, not props
- **Provider-agnostic** — mail operations go through `MailService`, never call provider clients directly
- **localStorage for state** — use `StorageManager` class, not raw `localStorage`
- **Toast for user feedback** — dispatch `tempomail:toast` events, don't use `alert()`
- **Confirm before destructive actions** — use `window.showConfirmDialog()` (returns `Promise<boolean>`)

## Documentation

Full Astro documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
