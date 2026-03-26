# Discord ICYMI — Style Guide

This document captures every design decision in the app so new components stay visually consistent.

---

## Color System

All colors are Discord's dark theme. No light mode exists.

### Tailwind Custom Colors (`discord.*`)

| Token | Hex | Usage |
|---|---|---|
| `discord-bg` | `#111214` | Outermost page background |
| `discord-bg-secondary` | `#1e1f22` | Secondary surfaces |
| `discord-bg-tertiary` | `#232428` | Active states, pressed buttons |
| `discord-bg-elevated` | `#2b2d31` | Reaction pills, elevated surfaces |
| `discord-bg-hover` | `#35373c` | Hover state on interactive elements |
| `discord-text-normal` | `#dbdee1` | Primary body text |
| `discord-text-secondary` | `#b5bac1` | Secondary labels, section headers |
| `discord-text-muted` | `#80848e` | Timestamps, helper text, placeholders |
| `discord-brand` | `#5865f2` | Primary brand color, active toggle |
| `discord-brand-light` | `#949cf7` | Badge text, accent labels |
| `discord-green` | `#23a55a` | Online indicator dot |

### Inline / One-off Colors

These appear as inline styles where Tailwind tokens aren't sufficient.

| Usage | Value |
|---|---|
| Viewport background | `#0a0a0c` |
| Cards, headers, status bar | `#1C1D23` |
| Bottom nav, home indicator area | `#2C2D35` |
| Server list card background | `#2C2D35` |
| Card separator (thick) | `#131318` |
| Header/modal border | `#2D2E33` or `#26262E` |
| Segmented control background | `#27272F` |
| Selected segment background | `#3A3B45` |
| Channel list background | `#27272F` |
| Toggle disabled | `#4e5058` |
| Action button background | `#26262E` |
| Thin row divider | `rgba(255,255,255,0.06)` |
| Reaction pill border | `rgba(255,255,255,0.08)` — `border-white/[0.08]` |

### Opacity Utilities

- Hover backgrounds: `bg-white/10` → `rgba(255,255,255,0.1)`
- Active backgrounds: `bg-white/[0.06]` or `bg-white/[0.08]`
- Home indicator bar: `opacity-30`
- Modal backdrop: `rgba(0,0,0,0.6)`
- ICYMI modal backdrop: `opacity-[0.4]`, black

---

## Typography

### Font Family

**gg sans** is the only font used — the same font Discord ships.

```css
font-family: var(--font-gg-sans), "gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

Loaded from `/public/fonts/ggsansvf-*` (WOFF2 + WOFF). Applied globally via `layout.tsx`.

### Font Size Scale

| Element | Size | Weight | Notes |
|---|---|---|---|
| ICYMI header | `20px` | `font-extrabold` | `tracking-tight` |
| Screen titles (modal headers) | `17px` | `font-bold` | `whitespace-nowrap` |
| Author name | `15px` | `font-semibold` | Role color applied inline |
| Body text | `14–15px` | regular | `leading-[1.375]` |
| Section labels | `13px` | `font-semibold` | `text-discord-text-secondary` |
| Helper text | `13px` | regular | `text-discord-text-muted` |
| Server name (card row) | `16px` | `font-semibold` | |
| Channel name (row) | `15px` | `font-semibold` | |
| Visibility label (row) | `13px` | regular | `text-discord-text-muted` |
| Reaction count | `12px` | `font-semibold` | |
| Reaction custom text | `11px` | `font-extrabold` | `text-cyan-400`, underlined |
| Bottom nav labels | `10px` | `font-semibold` | `tracking-wide` |
| Timestamps | `12px` | regular | `text-discord-text-muted` |
| PRE-ALPHA badge | `13px` | `font-bold` | `tracking-[0.04em]`, uppercase |
| Action button labels | `14px` | `font-semibold` | |

### Line Heights

| Class | Value | Used for |
|---|---|---|
| `leading-none` | `1` | Badges, pill labels |
| `leading-snug` | `1.25` | Author + context line |
| `leading-[1.375]` | `1.375` | Message body text |
| Default | `1.5` | Everything else |

---

## Spacing

Based on a 4px grid. Use Tailwind spacing utilities (`gap-1` = 4px, `gap-2` = 8px, etc.).

### Common Padding

| Class | Value | Usage |
|---|---|---|
| `px-4` | `16px` | Standard horizontal padding on cards, headers |
| `px-6` | `24px` | Status bar horizontal padding |
| `py-3` | `12px` | Header top/bottom padding |
| `py-4` | `16px` | Toggle rows, section containers |
| `pt-4` | `16px` | Top of server list |
| `pb-2` | `8px` | Home indicator spacing |
| `p-1.5` | `6px` | Segmented control inner padding |

### Common Gaps

| Class | Value | Usage |
|---|---|---|
| `gap-1` | `4px` | Reaction pill internals |
| `gap-1.5` | `6px` | Channel header icon + label |
| `gap-2` | `8px` | Reactions row |
| `gap-2.5` | `10px` | Channel list row internals |
| `gap-3` | `12px` | Server list row internals, card header |
| `gap-[3px]` | `3px` | Bottom nav icon + label |

---

## Border Radius

| Class | Value | Usage |
|---|---|---|
| `rounded-full` | `9999px` | Circle avatars, icon buttons, home indicator, toggle knob |
| `rounded-2xl` | `16px` | Bottom sheets (top corners only via `rounded-t-2xl`) |
| `rounded-xl` | `12px` | Cards, segmented controls, container blocks |
| `rounded-lg` | `8px` | Reaction pills, add-reaction button, segment items, message images |
| `rounded-t-[20px]` | `20px` | ICYMI modal top rounded corners |
| `10` (inline) | `10px` | Server icon in avatar stack (rounded square) |
| `15` (inline) | `15px` | iOS toggle track |

---

## Layout

### Phone Frame

The entire app renders inside a simulated iPhone shell.

- **Size:** `390 × 844px` (iPhone 12/13)
- **Outer bg:** `#0a0a0c`
- **Scaling:** `Math.min(1, viewportW / 390, viewportH / 844)` — never upscales, only shrinks
- **Transform origin:** `center center`
- **Padding around phone:** `24px` on all sides

### Screen Layer Order (top → bottom)

1. **iOS Status Bar** — `44px` tall, `#1C1D23`, `px-6`, time left + icons right
2. **Header** — `flex items-center`, `px-4 py-3`, `border-b #26262E`, `#1C1D23`
3. **Scrollable body** — `flex-1 overflow-y-auto`, `-webkit-overflow-scrolling: touch`
4. **Bottom Nav** — fixed at bottom, `#2C2D35`, `border-t`
5. **Home Indicator** — `134 × 5px`, `rounded-full`, `bg-white opacity-30`, centered, `pb-2 pt-3`

---

## Components

### Message Card

```
<article>  px-4 pt-4 pb-5, #1C1D23 background
  Header row:  flex items-start justify-between gap-3
    AvatarStack (46×46px)
    Text block:  flex-1
      Server name:  13px font-semibold, truncate
      Author + context:  15px, leading-snug
      Body:  14–15px, leading-[1.375], discord-text-normal
  Image (optional):  aspect-[5/3], rounded-lg, full width, mt-2
  Reactions:  flex items-center gap-2 flex-wrap, mt-3
  Actions:  flex items-center gap-3, mt-4
```

Between cards: a `10px` (`h-2.5`) full-width block in `#131318`.

### Avatar Stack

- **Container:** `46 × 46px`, relative
- **Server icon (back):** `40 × 40px`, `borderRadius: 10` (rounded square), `object-cover`
- **User avatar (front):** `22 × 22px`, `rounded-full`, positioned bottom-right, `boxShadow: 0 0 0 2px [card bg]`

### Reaction Pill

```
<button>  h-7, px-2.5, rounded-lg
  bg-discord-bg-elevated
  border border-white/[0.08]
  hover: bg-discord-bg-hover, border-discord-brand/40
  active: bg-discord-bg-tertiary

  Emoji:       16×16px Twemoji image (unoptimized, from jsdelivr CDN)
  Count:       12px font-semibold, text-discord-text-secondary
```

Twemoji URL format:
```
https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/{codepoint}.png
```
Strip `fe0f` (variation selector-16) from codepoints before building the URL.

### Action Buttons (Reply / Forward)

```
<button>  flex-1, h-[42px], rounded-full, #26262E background
  flex items-center justify-center gap-2
  hover: bg-discord-bg-hover
  active: bg-discord-bg-tertiary

  Icon:   SVG, 16px
  Label:  14px font-semibold, text-white
```

### Segmented Control (Visibility Picker)

```
Container:  rounded-xl, #27272F, flex gap-1 p-1.5

Segment:    flex-1, flex-col items-center, gap-1, py-3, rounded-lg
  Selected:   #3A3B45 background, white text
  Default:    transparent, #80848e text
  Icon:       26×26px custom SVG (See Less / Good As Is / See More)
  Label:      12px font-semibold
```

### iOS Toggle

```
Track:   width: 50, height: 30, borderRadius: 15
  On:    background #5865f2
  Off:   background #4e5058
  transition: background-color 200ms

Knob:    width: 24, height: 24, rounded-full, white
  On:    translateX(23px), shows checkmark SVG (#5865f2 stroke, 13×13px)
  Off:   translateX(3px)
  transition: transform 200ms
```

### Server List Row

```
<button>  w-full, height: 64px, px-4, gap-3, flex items-center
  hover: bg-white/[0.04]
  active: bg-white/[0.08]

  Avatar:   46×46px, rounded-full, overflow-hidden
  Name:     16px font-semibold, text-white, flex-1, text-left
  Chevron:  18px, text-discord-text-muted
```

Row divider: `1px`, `mx-4`, `rgba(255,255,255,0.06)` — skip before first row.

### Channel List Row

```
<button>  w-full, height: 52px, px-4, gap-2.5, flex items-center
  hover/active: same as server row

  # mark:   16px font-bold, #80848e
  Name:     15px font-semibold, text-white, flex-1
  Label:    13px, #80848e (current visibility)
  Chevron:  16px, #80848e
```

### Bottom Sheet

```
Backdrop:    absolute inset-0, z-10, rgba(0,0,0,0.6)
             opacity: 0 → 1 on mount (300ms)

Sheet:       absolute bottom-0 left-0 right-0, z-20
             rounded-t-2xl, #1C1D22
             maxHeight: 88%
             translateY(100%) → translateY(0) on mount
             transition: 300ms cubic-bezier(0.32, 0.72, 0, 1)

Drag handle: w-9 h-1 rounded-full, rgba(255,255,255,0.25), centered, pt-3 pb-1
```

### Bottom Navigation

```
Container:  flex items-stretch, border-t, #2C2D35

Tab button: flex-1, flex-col items-center justify-center, py-2, gap-[3px]
  Active:   text-white, filled icon
  Default:  text-discord-text-muted, stroked icon

Icon:       24px Lucide icon
  Active strokeWidth:  2.5
  Default strokeWidth: 1.75

Label:      10px font-semibold, tracking-wide
Online dot: 9×9px, rounded-full, #23a55a, border-2 border matching nav bg
```

---

## Motion & Animation

### ICYMI Modal (sheet slides up over feed)

| Property | Value |
|---|---|
| Duration | `320ms` |
| Easing | `cubic-bezier(0.32, 0.72, 0, 1)` |
| Feed scale | `scale(1)` → `scale(0.93)` |
| Feed border-radius | `0px` → `12px` |
| Sheet slide | `translateY(100%)` → `translateY(0)` |
| Backdrop opacity | `0` → `0.4` |
| `willChange` | `transform` (GPU hint) on both sheet and feed |

### Bottom Sheet (channel detail)

| Property | Value |
|---|---|
| Duration | `300ms` |
| Easing | `cubic-bezier(0.32, 0.72, 0, 1)` |
| Sheet slide | `translateY(100%)` → `translateY(0)` |
| Backdrop opacity | `0` → `1` (300ms) |

### Toggle Switch

| Property | Value |
|---|---|
| Track color | `200ms` ease |
| Knob position | `200ms` ease |

### General Interactive States

- All buttons: `transition-colors` (Tailwind default `300ms`)
- Hover/active: background color shift using opacity utilities
- No scale transforms on taps — color feedback only

---

## Images

| Context | Size | Shape | Source |
|---|---|---|---|
| Message image | full width, `aspect-[5/3]` | `rounded-lg` | Unsplash |
| Server icon (avatar stack) | `40×40px` | `borderRadius: 10` (rounded square) | Unsplash |
| User avatar (avatar stack) | `22×22px` | `rounded-full` | Unsplash |
| Server icon (list row) | `46×46px` | `rounded-full` | Unsplash |
| Reaction emoji | `16×16px` | — | Twemoji CDN (jsdelivr) |

All images use Next.js `<Image>` with `fill` + `object-cover` or explicit `width`/`height`. Twemoji images use `unoptimized` since they come from an external CDN.

**Allowed remote domains** (next.config.ts):
- `images.unsplash.com`
- `cdn.jsdelivr.net`

---

## Do's and Don'ts

**Do**
- Use `#1C1D23` for card and header backgrounds
- Use `#27272F` for inset container backgrounds (segmented controls, channel lists)
- Use `rounded-xl` for card-level containers, `rounded-lg` for pill/row-level elements
- Use `border-white/[0.08]` for subtle borders on interactive elements
- Render emoji as Twemoji images — never rely on OS native emoji rendering
- Keep font sizes in explicit `text-[Npx]` values, not Tailwind named sizes
- Use `flex-1 overflow-y-auto` on scrollable body regions, keep header/footer `flex-shrink-0`
- Match the `cubic-bezier(0.32, 0.72, 0, 1)` easing for any new sheet/modal animations

**Don't**
- Don't introduce new font families
- Don't use light backgrounds or light mode colors
- Don't use Tailwind named font sizes (`text-sm`, `text-base`) — the project uses explicit pixel values
- Don't add drop shadows — elevation is expressed through background color steps, not shadows
- Don't scale elements on tap — use background color feedback only
- Don't create new separator styles — use the existing `rgba(255,255,255,0.06)` thin rule or `#131318` thick block
