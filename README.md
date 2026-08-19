# TempoEmails — Instant Disposable Email

A modern, privacy-first temporary email web app. Generate a burner inbox in one click, receive emails instantly, auto-detect OTP codes, and forget it all when you close the tab. No registration, no database, no logs.

**Live single-page app** built with Astro, Tailwind CSS v4, and vanilla TypeScript — zero framework runtime.

---

## ✨ Features

- **Instant inbox generation** — one click, no sign-up required
- **6 mail provider backends** with automatic failover (Mail.tm, Inboxes, TempMail.lol, Guerrilla Mail, 1secmail, + offline mock)
- **40+ available domains** — pick a random one or choose a custom username + domain
- **Smart OTP extraction** — regex engine detects 4–8 digit verification codes from subject and body
- **Verification link detection** — finds confirm/activate/verify URLs automatically
- **1-click copy** for email address, OTP codes, and verification links
- **Real-time delivery** — SSE push for Mail.tm, 10-second polling with visual countdown for others
- **Audio chime notifications** — synthesized via Web Audio API (no audio files)
- **Browser native notifications** for new emails
- **Multi-inbox history** — up to 8 saved inboxes, instantly switchable
- **QR code mobile handoff** — scan to open your temp address on another device
- **HTML + plain text views** — sandboxed iframe for HTML, monospace for text
- **Email download** as `.txt`
- **Dark / light theme** — system preference detection + localStorage persistence
- **Responsive split-pane** — desktop shows inbox + detail side-by-side; mobile switches full-screen
- **Offline resilience** — message caching in localStorage, mock provider as ultimate fallback

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
| Fonts | Bricolage Grotesque · Inter · JetBrains Mono (Google Fonts) |

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

---

## 📁 Project Structure

```
src/
├── pages/
│   └── index.astro              # Single-page app entry
├── layouts/
│   └── Layout.astro             # Shell: SEO, fonts, theme, background
├── styles/
│   └── global.css               # Tailwind v4 + glassmorphism + animations
├── components/
│   ├── app/                     # Core application components
│   │   ├── MailboxManager.astro # Central controller (~900 LOC)
│   │   ├── EmailAddressBar.astro
│   │   ├── InboxList.astro
│   │   ├── EmailDetail.astro
│   │   ├── CustomInboxModal.astro
│   │   ├── InboxHistoryDrawer.astro
│   │   └── QrCodeModal.astro
│   ├── sections/                # Landing page sections
│   │   ├── Header.astro         # Sticky glass nav
│   │   ├── Features.astro       # 6-card feature grid
│   │   ├── HowItWorks.astro     # 4-step process
│   │   ├── OtpShowcase.astro    # OTP engine showcase
│   │   ├── Faq.astro            # Accordion FAQ
│   │   └── Footer.astro         # Dark footer
│   └── ui/                      # Reusable UI primitives
│       ├── Badge.astro
│       ├── Button.astro
│       ├── GlassCard.astro
│       ├── ThemeToggle.astro
│       ├── ToastContainer.astro
│       └── ConfirmModal.astro
└── lib/
    ├── mail/                    # Mail service layer
    │   ├── types.ts             # Core interfaces
    │   ├── service.ts           # Orchestrator + fallback chain
    │   ├── mailtm-client.ts     # Mail.tm / Mail.gw (JWT auth, SSE)
    │   ├── inboxes-client.ts    # Inboxes.com / GetNada / AirMail (18+ domains)
    │   ├── tempmaillol-client.ts # TempMail.lol (token auth)
    │   ├── guerrilla-client.ts  # Guerrilla Mail (session auth)
    │   ├── secmail-client.ts    # 1secmail (stateless)
    │   └── mock-client.ts       # Offline fallback with sample emails
    └── utils/
        ├── otp-extractor.ts     # Regex OTP + verification link extraction
        ├── clipboard.ts         # Clipboard API with fallback
        ├── qrcode.ts            # QR code generation via external API
        ├── sound.ts             # Web Audio API chime (singleton)
        ├── storage.ts           # localStorage manager (SSR-safe)
        └── date-formatter.ts    # Relative time formatting
```

---

## 🏗 Architecture

### Mail Provider Fallback Chain

When creating a new inbox, `MailService` tries providers in order until one succeeds:

```
Preferred Provider → Inboxes → Mail.tm → TempMail.lol → Guerrilla → Mock (offline)
```

All providers' domains are fetched concurrently via `Promise.allSettled()`. A random domain is picked from the merged pool.

### Custom Event Bus

Components communicate via `window.dispatchEvent`:

| Event | Purpose |
|---|---|
| `tempomail:toast` | Trigger toast notifications |
| `tempomail:openhistory` | Open inbox history drawer |
| `tempomail:themechange` | Theme toggle notification |

### State Management

All state lives in `localStorage` via `StorageManager`:

| Key | Content |
|---|---|
| `tempomail_current_account` | Active mailbox account |
| `tempomail_saved_accounts` | Up to 8 recent inboxes |
| `tempomail_msgs_{address}` | Cached messages per inbox |
| `theme` | `'dark'` or `'light'` |
| `tempomail_sound_enabled` | Sound preference |

---

## 📄 License

MIT
