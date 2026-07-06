# PMCC 4th Watch — Interactive Leadership Directory

A futuristic **glassmorphic** touch-screen directory for an **85-inch landscape
display** (16:9, 4K-friendly). Pure HTML/CSS/JavaScript — no build step, no
backend, works fully **offline** once opened in a browser.

## Run it

Open `index.html` in Chrome or Edge. For kiosk mode:

```
chrome --kiosk --autoplay-policy=no-user-gesture-required index.html
```

or open the file normally and press **F11** for fullscreen.

## What's inside

| File | What it does |
|---|---|
| `index.html` | Page structure: loader, dashboard, panels, menu, feature overlays |
| `styles.css` | All styling. Theme tokens (colors/sizes) live in the `:root` block |
| `app.js` | **All editable content** (`CONTENT`), icons, sounds, features, interactions |
| `assets/logo.png` | Center logo — replace with your own square PNG |
| `assets/background.jpg` | *(optional)* drop your own background photo here |

## How to use it (touch gestures)

- **Tap the center logo** to reveal the node network of section icons; tap again to collapse.
- **Drag an icon** to move it anywhere (positions are remembered).
- **Tap or press-and-hold** an icon to open its section — opening plays an elegant golden bloom transition with a soft chime.
- **Pinch** the dashboard to stretch the whole network; pinch inside a panel to enlarge the text. Double-tap empty space to reset. (Mouse: wheel = dashboard zoom, Ctrl+wheel = panel zoom.)
- **Bottom dock** (icons, centered) holds: Home · Gallery · Settings · Brother Thomas · Browser · Search · Sound (mute).
- **Search** (dock, or Ctrl/⌘-K) pops up centered and blurs everything to focus the search bar.
- Every panel has an **X** (top-right) and a **BACK** button. **Esc** also steps back out.

## Brand & background

The interface uses a **royal navy + gold** palette drawn from the PMCC 4th
Watch logo (navy · gold · red · white). The app ships with a matching
navy-and-gold "Signature" background at `assets/background.jpg` (used by
default). **To use your own photo, just overwrite that file** (any 16:9 image),
or pick a different look from **Gallery** (Royal Night, Golden Aura, Deep Navy,
Emerald Court, Crimson Royal — all need no image file). Change the gold accent
to another color in **Settings ▸ Accent Color**.

## The dock features

- **Home** — return to the dashboard.
- **Gallery** — switch the background. The shipped photo is `assets/background.jpg` ("My Photo"); built-in scenes (Rainy Dusk, Aurora, Deep Space, Warm Sunset, Soft Slate) need no files.
- **Settings** — username & password, volume, accent color, interface icon style (outline/filled), and a “check for updates” action. Saved to the browser (`localStorage`).
- **Brother Thomas** — the ministry assistant. Works **offline** out of the box (built-in answers about leadership, branches, history, doctrine, and how to use the screen), and can optionally be connected to a **local OpenJarvis AI** for real conversational answers (see below). Rename it in `app.js → ASSISTANT_NAME`; edit the offline answers in `app.js → jarvisReply`.
- **Internet Browser** — an in-app browser with an address bar (opens the church site by default). Sites that block embedding, or an offline kiosk, fall back to an “open in a new tab” button.

## How to edit the content

Everything editable lives at the top of **`app.js`**:

- `CONTENT.church` — church-wide facts (name, tagline, HQ, founding, members…).
- `CONTENT.sections` — the leadership tiers (Apostle, Bishops, Presbyters, Pastors, Elders, History). Each has an `items` array — edit `name`, `position`, `description`, and the `extra` fact boxes. Add or remove items freely; the entry selector adapts.
- `CONTENT.branches` — the regions and their countries shown in the BRANCHES panel.
- `SCENES` — the Gallery backgrounds. `THEMES` — the accent-color swatches.
- `ASSISTANT_NAME`, `SOUND_FILES`, `ICONS` — assistant name, custom audio files, and icon artwork.

No photos are used for people right now — each entry shows a soft-glow icon glyph, so the app looks complete without any images to source.

## Connecting Brother Thomas to a local AI (OpenJarvis)

Brother Thomas can talk to **[OpenJarvis](https://github.com/open-jarvis/OpenJarvis)** —
a local-first AI framework — so answers come from a real language model running
**privately on the kiosk's own PC** (no cloud). OpenJarvis is a server-side
program; it can't run inside the browser, so it runs alongside the kiosk and the
app talks to its local OpenAI-compatible API. If it isn't running, Brother Thomas
automatically falls back to the built-in offline answers.

**On the kiosk PC (one-time):**

1. Install OpenJarvis (installs `uv`, Python, Ollama, and a starter model):
   ```
   curl -fsSL https://open-jarvis.github.io/OpenJarvis/install.sh | bash
   ```
   (Windows: `irm https://open-jarvis.github.io/OpenJarvis/install.ps1 | iex`)
2. Start its OpenAI-compatible server:
   ```
   jarvis serve --port 8000 --engine ollama --model qwen3:8b
   ```
3. **Allow the kiosk's origin (CORS).** Easiest: serve this app from
   `http://localhost:5173` (already allow-listed by OpenJarvis). Otherwise add
   your kiosk's origin to `server.cors_origins` in the OpenJarvis config. Opening
   the app via `file://` won't work for the live AI because its origin is `null` —
   serve it from a local web server for the OpenJarvis connection.

**In the app:** open **Settings ▸ Assistant · Brother Thomas**, turn on
**“Use local OpenJarvis AI”**, confirm the endpoint
(`http://localhost:8000/v1/chat/completions`), optionally set a model, **Save**,
then **Test connection**. The assistant header shows a status dot:
gold = configured, green = last reply succeeded, red = unreachable (offline
fallback in use). The assistant is grounded with the church's own facts so it
answers in character as Brother Thomas.

## Content sourcing

The leadership names, dates, doctrine, and history in this build were compiled
from public sources including **pmcc4thwatch.org**, its district sites, and
Wikipedia. Entries that could not be individually confirmed (e.g. named elders)
are left as clearly-labelled editable slots for you to complete.

## Notes for the touch screen

- Scales automatically from 1080p to 4K (`vmin`/`clamp()` based).
- Double-tap zoom and text selection are disabled for kiosk use.
- Browsers only allow audio after the first touch, so the boot sound plays once someone interacts (or use the `--autoplay-policy` flag above).
