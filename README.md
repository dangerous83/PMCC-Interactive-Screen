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

- **Tap the center logo** to reveal the organized grid of section icons; tap again to collapse.
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
- **Brother Thomas** — the ministry assistant. Works **offline** out of the box (built-in answers about leadership, branches, history, doctrine, and how to use the screen), and can optionally be connected to a **local OpenJarvis AI** for real conversational answers (see below). He also **speaks his replies aloud** using the kiosk's built-in text-to-speech voices — toggle with the **VOICE ON/OFF** button in his header (voice also respects the SOUND mute). Rename him in `app.js → ASSISTANT_NAME`; edit the offline answers in `app.js → jarvisReply`.
- **Internet Browser** — an in-app browser with an address bar (opens the church site by default). Sites that block embedding, or an offline kiosk, fall back to an “open in a new tab” button.

## How to edit the content

Everything editable lives at the top of **`app.js`**:

- `CONTENT.church` — church-wide facts (name, tagline, HQ, founding, members…).
- `CONTENT.sections` — the leadership tiers (Apostle, Bishops, Presbyters, Pastors, Elders, History). Each has an `items` array — edit `name`, `position`, `description`, and the `extra` fact boxes. Add or remove items freely; the entry selector adapts.
- `CONTENT.branches` — the regions and their countries shown in the BRANCHES panel.
- `SCENES` — the Gallery backgrounds. `THEMES` — the accent-color swatches.
- `ASSISTANT_NAME`, `SOUND_FILES`, `ICONS` — assistant name, custom audio files, and icon artwork.

No photos are used for people right now — each entry shows a soft-glow icon glyph, so the app looks complete without any images to source.

## Dashboard layout & interactions

Tapping the logo reveals a clean, organized **grid** of section tiles beneath it:
a top row of **Apostle · Bishops · Presbyters · Pastors** and a centered lower
row of **Elders · Branches · History** — no connector lines, no clutter.

- **Tap the center logo** → the logo lifts to the top and the section tiles fade
  in one after another in reading order (left→right, top→bottom), settling into
  the grid. Tap the logo again to collapse it back to the centre.
- **Tap a leadership icon** (Apostle / Bishops / Presbyters / Pastors / Elders)
  → an animated **name dropdown** opens beside it listing everyone in that group;
  tap a name → the **profile modal** opens with a **large portrait on the left**.
  The right side shows the person's **About** description by default, with a row
  of tab buttons to switch to *Ministry Role · Church Assignment · Messages &
  Teachings · Activities* (the person's photo gallery).
- **Brother Thomas** floats as a looping widget on the right edge (and is in the
  dock). Tapping it opens the assistant with **voice active** — he **speaks his
  replies** in a natural British voice. Toggle voice with the header button.
- **Tap Branches** → an **interactive 3D globe**: it auto-rotates, you can drag to
  spin it, and each congregation country is a glowing point. **Tap a point** (or
  use the search box) to select it — its details appear in the panel on the left.
  Add real per-branch details and coordinates in `app.js → Globe → COORDS`.
- **Tap History** → the ministry timeline panel.

## Directory (Bishops · Presbyters · Pastors · Elders · Testimonies)

The **DIRECTORY** dock icon opens a clean, guided flow designed for touch:

**Directory icon → Category dropdown → Name list → Profile modal**

1. Tap **DIRECTORY** — a dropdown shows the five categories with live counts.
2. Pick one (e.g. Bishops) — a clean, tappable **list of names** opens.
3. Tap a name — a professional **profile modal** opens with a **large portrait**
   and the person's name, title, and location. The **About** description shows
   first; tap a button to switch section: *Ministry Role · Church Assignment ·
   Messages & Teachings · Activities* (the photo gallery).
   Testimonies open a simple testimony card instead.
4. Close with the **✕**, **Esc**, or tapping outside; the dropdown also closes on
   an outside tap. **“Categories”** returns to the dropdown.

### Editing directory content

All data lives in `app.js → CONTENT`:

- **People** (`CONTENT.sections` → `bishops` / `pastors` / `elders`): each entry
  can have `name`, `position`, `location`, `description` (→ *About*),
  `ministryRole`, `assignment`, `messages: [ … ]` (→ *Messages & Teachings*), and
  `gallery: [ imageURLs ]` (→ the *Activities* tab). Any field you omit falls back
  to a sensible default, so partial entries still look complete.
- **Testimonies** (`CONTENT.testimonies`): `{ name, role, date, text }`.
- **Photos**: add `image: "assets/your-photo.jpg"` to any person. Photos appear in
  the name-list avatars, the profile header, **and** the main dashboard panels,
  and quietly fall back to an icon if the file is missing.
  **Bishop Aldrin Palanca** and **Presbyter Elleza Palanca** ship with a styled
  “REPLACE WITH PHOTO” placeholder at `assets/bishop-aldrin-palanca.jpg` and
  `assets/presbyter-elleza-palanca.jpg` — **overwrite those two files with the
  real headshots** (any JPG, portrait works best) and they appear automatically.

  > ⚠️ Images pasted into the chat are **not** added to the app — only files
  > committed to the repo's `assets/` folder are used. Replace a photo by
  > committing a file at its path (e.g. drag it into `assets/` on GitHub, or
  > `git add`/`commit`/`push`), keeping the **same filename**.
  >
  > After replacing a photo, bump `ASSET_VERSION` at the top of `app.js`
  > (e.g. 4 → 5). That forces every browser/kiosk to load the fresh image
  > instead of a cached old copy. If a photo ever looks stale, also try a
  > hard refresh: **Ctrl+Shift+R** (Windows) / **Cmd+Shift+R** (Mac).

The existing orbital dashboard (Apostle, Bishops, Presbyters, …) is unchanged —
the Directory is an additional, more structured way to browse the same people.

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

- **Runs full-screen.** On the **first tap/touch** the app requests browser
  full-screen automatically, so the toolbar/tabs disappear — it fills the whole
  85" display like a native kiosk app (press **F11** to toggle manually). For a
  guaranteed chrome-free launch, start it with `--kiosk` (see *Run it* above).
- Scales automatically from 1080p to 4K (`vmin`/`clamp()` based).
- Double-tap zoom and text selection are disabled for kiosk use.
- Browsers only allow audio after the first touch, so the boot sound plays once someone interacts (or use the `--autoplay-policy` flag above).
