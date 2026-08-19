---
version: 1.0
name: TempoEmails-design-system
description: |
  TempoEmails's visual identity is built on glassmorphism — translucent panels
  with backdrop blur layered over a warm atmospheric glow. The system pairs a
  cream canvas (light) / deep charcoal (dark) base with a single bold red-orange
  accent reserved for CTAs, OTP highlights, and brand marks. Three font families
  divide labor strictly: Bricolage Grotesque for display headings, Inter for
  body/UI, JetBrains Mono for email addresses, codes, and timestamps.

colors:
  # Brand & Accent
  primary: "#ea2804"
  primary-deep: "#c01f00"
  on-primary: "#ffffff"
  glow-orange: "#ff6a3d"
  glow-pink: "#f4a8a0"

  # Text (Light Mode)
  ink: "#202020"
  body: "#3a3a3a"
  charcoal: "#575757"
  mute: "#646464"
  ash: "#8d8d8d"
  stone: "#bbbbbb"

  # Text (Dark Mode)
  on-dark: "#fcfcfc"
  on-dark-mute: "rgba(252,252,252,0.72)"

  # Surfaces (Light Mode)
  canvas: "#f9f7f3"
  surface-bone: "#f3f0e8"
  surface-card: "#ffffff"

  # Surfaces (Dark Mode)
  surface-deep: "#0e0e11"
  surface-dark: "#202020"
  divider-dark: "rgba(255,255,255,0.16)"

  # Semantic
  badge-success: "#2b9a66"
  ring-focus: "rgba(234,40,4,0.4)"

  # Hairlines
  hairline: "rgba(32,32,32,0.12)"
  hairline-strong: "#202020"

typography:
  display:
    fontFamily: Bricolage Grotesque
    letterSpacing: -0.03em
    lineHeight: 1.05
    usage: Hero headlines, section titles, showcase headings
  body:
    fontFamily: Inter
    usage: Body copy, button labels, captions, metadata, UI text
  mono:
    fontFamily: JetBrains Mono
    usage: Email addresses, OTP codes, timestamps, code snippets

glassmorphism:
  glass-panel:
    light: "bg white/72%, blur 16px, border white/60%, shadow sm"
    dark: "bg rgba(22,22,26,0.75), blur 20px, border white/8%, shadow lg black/20%"
    radius: rounded-2xl to rounded-3xl
    usage: Main containers (email bar, inbox panel, modals)
  glass-card:
    light: "bg white/60%, blur 12px, border white/50%"
    dark: "bg rgba(28,28,34,0.65), blur 16px, border white/8%"
    radius: rounded-xl to rounded-2xl
    usage: Feature cards, FAQ items, showcase panels
  glass-pill:
    light: "bg white/80%, blur 8px, border white/60%"
    dark: "bg rgba(36,36,44,0.7), blur 8px, border white/10%"
    radius: rounded-full
    usage: Badges, status pills, small tags

background:
  hero-glow-mesh:
    description: >
      Radial gradient centered at 50% 20% using primary red/orange at very low
      opacity. Creates an ambient atmospheric glow behind all content. Intensity
      increases in dark mode.
    light: "radial-gradient primary at 8% opacity, glow-orange at 5%, transparent)"
    dark: "radial-gradient primary at 12% opacity, glow-orange at 8%, transparent)"

animations:
  pulse-ring: "Expanding concentric ring animation — used in empty inbox state"
  ping: "Standard Tailwind ping — live status indicator"
  spin: "Standard Tailwind spin — loading states"

rounded:
  none: 0px
  sm: 6px
  md: 10px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px
  full: 9999px

theme:
  strategy: "Class-based dark mode (html.dark toggle)"
  persistence: "localStorage key 'theme'"
  detection: "prefers-color-scheme media query on initial load"
  fouc-prevention: "Inline <script> in <head> sets class before first paint"
  custom-event: "tempomail:themechange dispatched on toggle"
  selection: "selection:bg-[#ea2804] selection:text-white"
---

## Overview

TempoEmails's visual language is **glassmorphism over atmospheric glow**. Every
panel, card, and modal is a translucent frosted surface floating above a subtle
red-orange radial gradient that washes the entire viewport. The effect reads as
"modern privacy tool with editorial warmth" — polished enough for a utility app
but with enough personality to feel distinct from generic dashboards.

Light mode sits on a warm cream canvas (`#f9f7f3`), never pure white at the page
level. Dark mode drops to a near-black deep surface (`#0e0e11`) with increased
glow intensity behind the glass layers. The brand red (`#ea2804`) appears
sparingly — primary CTA buttons, OTP highlight banners, live status indicators,
and the logo accent. Everything else is neutral.

**Key Characteristics:**
- Glassmorphism at three tiers: `glass-panel` (main containers), `glass-card` (content cards), `glass-pill` (badges/pills)
- Warm cream canvas light / deep charcoal dark, never pure white or pure black at page level
- Single red-orange accent (`#ea2804`) reserved for CTAs, OTP highlights, brand marks, and live indicators
- Three-family typography: Bricolage Grotesque (display), Inter (body/UI), JetBrains Mono (code/addresses)
- Atmospheric `hero-glow-mesh` radial gradient behind all content
- Every interactive element is pill-shaped (`rounded-full`) — buttons, inputs, badges, toggles
- Content cards use `rounded-xl` to `rounded-2xl`, modals use `rounded-2xl` to `rounded-3xl`
- Press feedback: `active:scale-[0.98]` on all buttons
- Focus ring in brand red at 40% opacity

## Colors

### Brand & Accent
- **Primary Red** (`#ea2804`): The single accent color. Used on primary CTA buttons (with red glow shadow), OTP detection banners, live status dots, logo "Mail" text, and selection highlight. One red element per viewport is ideal.
- **Deep Red** (`#c01f00`): Hover/pressed state for primary buttons.
- **Glow Orange** (`#ff6a3d`): Gradient partner in the hero-glow-mesh and decorative blobs.
- **Glow Pink** (`#f4a8a0`): Soft outer wash in atmospheric backgrounds.

### Surfaces
- **Canvas** (`#f9f7f3`): Default page background in light mode. Warm cream.
- **Bone** (`#f3f0e8`): Inset card surface variant, one step deeper than canvas.
- **Card** (`#ffffff`): Pure white only inside glass panels and cards — never at page level.
- **Deep** (`#0e0e11`): Dark mode page background and footer.
- **Dark** (`#202020`): Dark mode card/panel fill.

### Text
- Light mode: `ink` (#202020) → `body` (#3a3a3a) → `charcoal` (#575757) → `mute` (#646464) → `ash` (#8d8d8d) → `stone` (#bbbbbb)
- Dark mode: `on-dark` (#fcfcfc) → `on-dark-mute` (rgba 252,252,252,0.72)

### Semantic
- **Success Green** (`#2b9a66`): Live status badges, auto-refresh indicators.
- **Focus Ring** (`rgba(234,40,4,0.4)`): Focus-visible ring on interactive elements — brand red, not blue.

## Typography

| Role | Family | Usage |
|---|---|---|
| Display | Bricolage Grotesque | Hero headlines, section titles, showcase headings. Tight letter-spacing (-0.03em), near-unit line-height (1.05). |
| Body/UI | Inter | All body copy, button labels, captions, navigation, descriptions. |
| Monospace | JetBrains Mono | Email addresses, OTP codes, timestamps, provider labels, any literal/technical content. |

**Principles:**
- Display type uses negative letter-spacing and tight line-height — multi-line stacks read as typographic blocks.
- Never use Bricolage Grotesque below ~20px. Below that threshold, switch to Inter.
- Every literal value the user might copy (email address, code, URL) renders in JetBrains Mono.

## Components

### Buttons
- **Primary**: Red bg with red glow shadow, white text, pill-shaped, `active:scale-[0.98]`
- **Dark**: Dark bg, light text, pill-shaped
- **Outline**: Glass bg, ink text, subtle border, pill-shaped
- **Ghost**: Transparent, ink text, pill-shaped
- **Icon**: 40px circle, glass bg, subtle border
- Sizes: `sm` (h-8), `md` (h-11), `lg` (h-12)

### Cards
- **GlassCard panel**: `glass-panel` class, `rounded-2xl`/`rounded-3xl`, used for main containers
- **GlassCard card**: `glass-card` class, `rounded-xl`/`rounded-2xl`, used for feature cards
- **GlassCard inset**: Bone/dark bg, subtle border, used for nested content areas

### Badges
- Variants: `success` (green), `neutral`, `otp` (red glow + mono font), `outline`, `orange` (solid red)
- All pill-shaped (`rounded-full`)

### Modals
- Glass-panel backdrop with blur, scale-in animation
- ConfirmModal: promise-based (`window.showConfirmDialog()` → `Promise<boolean>`)
- Icon types: `random` (shuffle), `trash` (delete), `warning` (triangle)

### Toast Notifications
- Fixed bottom-right, pill-shaped with backdrop blur
- Two styles: success (dark bg, red checkmark) and error (rose bg, warning icon)
- Auto-dismiss (default 3s), slide-up enter / slide-down exit

## Layout

### Page Structure
Single-page app: Hero → MailboxManager → OtpShowcase → Features → HowItWorks → FAQ → Footer

### Responsive Strategy
- **Desktop**: Split-pane inbox (list | detail) side-by-side
- **Mobile**: Full-screen pane switching — tap message shows detail, back button returns to list
- Header nav collapses: center status pill hides, history button hides
- Feature/step grids: 3-col → 2-col → 1-col
- Max content width: `max-w-7xl` (1280px)

### Email Application Layout
- `EmailAddressBar`: Glassmorphic pill bar spanning full width above the inbox
- Below: GlassCard split into `InboxList` (left/full) + `EmailDetail` (right/full)
- Mobile breakpoint at `md` (768px) switches from side-by-side to stacked

## Do's and Don'ts

### Do
- Use `glass-panel` / `glass-card` / `glass-pill` classes for all translucent surfaces
- Keep red accent scarce — one red element per viewport
- Render all copyable values (addresses, codes) in JetBrains Mono
- Use `active:scale-[0.98]` on all interactive elements
- Show confirmation dialogs before destructive actions
- Use toast events for all user feedback
- Respect the warm cream / deep charcoal base — never pure white or pure black at page level

### Don't
- Don't use red as a decorative surface color — it's accent only
- Don't use sharp corners on interactive elements — everything interactive is pill-shaped
- Don't add a second accent color — red-orange is the only one
- Don't use `alert()` or `confirm()` — use toast events and `showConfirmDialog()`
- Don't call provider clients directly — always go through `MailService`
- Don't use raw `localStorage` — use `StorageManager`
- Don't introduce React/Vue/Svelte — the project is intentionally vanilla JS
