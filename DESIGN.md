---
version: 2.0
name: TempoEmails-design-system
description: |
  Warm, quiet, premium. One warm-neutral family and a single ember accent,
  generous whitespace, and visuals instead of paragraphs. The live mailbox is
  the hero: everything else on the page explains it with as few words as
  possible. Bricolage Grotesque for display, Geist for UI/body, Geist Mono for
  addresses and codes.

tokens:
  # Semantic CSS variables in src/styles/global.css. They flip under html.dark
  # and are exposed as Tailwind utilities via `@theme inline`
  # (bg-canvas, text-ink, border-line, bg-accent/10, text-accent-text …).
  light:
    canvas: "#f6f4ef"      # page background (warm cream, never pure white)
    canvas-2: "#eeeae2"    # footer / recessed areas
    surface: "#ffffff"     # cards, panels, dialogs
    surface-2: "#f9f8f5"   # inset wells inside a surface
    ink: "#1b1916"         # headings, primary text
    ink-2: "#3d3934"       # body copy
    muted: "#6b655d"       # secondary text
    subtle: "#8f897f"      # meta, timestamps
    line: "rgba(27,25,22,.09)"
    line-strong: "rgba(27,25,22,.16)"
    accent: "#dc2d05"      # CTA fill — white text stays above 4.5:1
    accent-text: "#c42804" # accent used as text
  dark:
    canvas: "#0e0d0c"
    canvas-2: "#141210"
    surface: "#181614"
    surface-2: "#1f1c19"
    ink: "#f5f2ed"
    ink-2: "#d9d4cc"
    muted: "#a39c92"
    subtle: "#7c766d"
    accent-text: "#ff7a4f"
  fixed:
    brand: "#ea2804"       # logo mark, gradients, glows
    brand-glow: "#ff6a3d"
    success: "#23885a / #3fbf86 (dark)"  # live dots, detected states only
    danger: "#c81e3a"      # destructive actions only

typography:
  display: "Bricolage Grotesque 500–800, tracking -0.035em to -0.045em, line-height ~1"
  body: "Geist 400/500/600"
  mono: "Geist Mono, tabular numerals — email addresses, OTP codes, timestamps"
  section-title: "clamp(2rem → 3.5rem), weight 700"
  note: "CJK locales relax display tracking to -0.01em"

radius:
  controls: "9999px (buttons, chips, inputs in bars)"
  inputs: "12px"
  cards: "24px (rounded-3xl)"
  app-window-and-dialogs: "28–32px"

elevation:
  surface: "1px line border + inner top highlight + soft warm-tinted shadow"
  surface-raised: "same, with a long diffuse shadow (app window, dialogs, menus)"
  glass: "translucent surface + blur — header bar only"
---

## Principles

1. **The product is the hero.** The mailbox app sits directly under a short
   headline. Nothing above it competes for attention.
2. **Show, don't tell.** Each section leads with a visual (live mock, bento
   tile illustration, step markers). Copy is secondary and set in `text-muted`.
3. **Progressive disclosure over walls of text.** Use cases are tabs, FAQs are
   native `<details>`, the blog grid shows titles only. All copy stays in the
   HTML for SEO; it is just not all on screen at once.
4. **One accent.** Ember is reserved for primary actions, detected OTPs and the
   brand mark. No per-provider or per-category colours.
5. **Tokens, never hex.** Markup uses semantic utilities so dark mode is free.

## Components (CSS classes in `global.css`)

| Class | Use |
| --- | --- |
| `.btn` + `.btn-primary` / `.btn-secondary` / `.btn-ghost` / `.btn-icon` / `.btn-danger`, sizes `.btn-sm` `.btn-lg` | Every button and button-like link, including ones built in JS |
| `.chip` | Small labels, tags, filters, provider badge |
| `.surface`, `.surface-raised`, `.surface-inset`, `.glass` | Elevation levels |
| `.dialog-overlay`, `.dialog-panel` | All modals. JS toggles `opacity-0 pointer-events-none` on the overlay and `scale-95`/`scale-100` on the panel. Panels dock to the bottom edge on phones |
| `.eyebrow`, `.section-title` | Section headings (via `SectionHeading.astro`) |
| `.icon-tile` | Accent icon container |
| `.card-hover` | Lift on hover for interactive cards |
| `.content-body` | Article/legal prose. Styles **direct children** only so embedded widgets keep their own look |
| `[data-reveal]` (+ `--reveal-delay`) | Scroll reveal. Hidden state only applies under `html.js`, and is disabled for reduced motion |

## Layout

- Content container: `max-w-6xl` with `px-5 sm:px-8` outside it.
- Section rhythm: `py-16 sm:py-24`.
- Homepage order: hero → app → works-with marquee → OTP showcase → feature
  bento → use-case tabs → 4-step timeline → featured guides → FAQ → closing CTA.
- Articles: centred header, prose column (`max-w-3xl`), sticky server-rendered
  "On this page" index on `xl` when a page has ≥3 `<h2>`s, reading progress bar.

## Gotchas

- Do not leave a `transform`/`filter` on any ancestor of the app dialogs (e.g.
  an entrance animation with `fill-mode: both`), and do not give `<main>` a
  `z-index`. Either one traps the `position: fixed` dialogs. `.animate-rise-in`
  uses `fill-mode: backwards` for this reason.
- Tailwind v4 `scale-*` uses the CSS `scale` property, not `transform`;
  transitions must name `scale`.
- `.hidden` beats `.flex`/`.grid`/`.block` in the generated CSS but not
  `.inline-flex`. Don't toggle `hidden` on an element whose base display is the
  `inline-flex` utility.
