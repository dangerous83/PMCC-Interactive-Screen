# PMCC 4th Watch — Interactive Leadership Directory

A futuristic touch-screen directory app for an **85-inch landscape display**
(16:9, 4K-friendly). Pure HTML/CSS/JavaScript — no build step, no backend,
works fully **offline** once opened in a browser.

## Run it

Just open `index.html` in Chrome or Edge. For the kiosk experience:

```
chrome --kiosk --autoplay-policy=no-user-gesture-required index.html
```

or open the file normally and press **F11** for fullscreen.

## What's inside

| File | What it does |
|---|---|
| `index.html` | Page structure: loader, dashboard, section panel, mute button |
| `styles.css` | All styling. Theme colors/sizes live in the `:root` block at the top |
| `app.js` | **All editable content** (`SECTIONS`), icons, sounds, and interactions |
| `assets/logo.png` | Center logo — **replace this file** with your own square PNG |
| `assets/placeholder-person.png` | Default portrait — replace or add your own photos |
| `assets/placeholder-branch.svg` | Default branch image |
| `assets/placeholder-history.svg` | Default history image |

## How to customize

### 1. Replace the logo
Overwrite `assets/logo.png` with your logo (square, transparent background
recommended). It appears in the loader and at the center of the dashboard.

### 2. Edit names, titles, and text
Open `app.js` and edit the `SECTIONS` array at the top. Each of the seven
sections (Apostle, Bishops, Presbyters, Pastors, Elders, Branches, History)
has a list of `items`:

```js
{ name: "Bishop Name One",              // person / branch / era name
  position: "Bishop — District 1",      // title shown under the name
  image: "assets/my-photo.jpg",         // photo (any path you like)
  description: "Short biography…",      // main paragraph
  extra: { District: "—" } }            // optional fact boxes (add/remove freely)
```

Add or remove items freely — the thumbnail selector at the bottom of each
panel adapts automatically (it hides when a section has only one entry).

### 3. Replace photos
Drop your images into `assets/` and point each item's `image` field at them.
Portrait orientation (~3:4) looks best in the panel's photo frame.

### 4. Sounds
Subtle UI sounds are synthesized in the browser (offline, no files needed).
To use your own audio files, set the paths in `app.js → SOUND_FILES`.
The speaker button at the bottom-right mutes/unmutes and remembers the
choice across restarts.

### 5. Colors & sizing
Edit the CSS variables at the top of `styles.css` (`--cyan`, `--gold`,
`--hub-size`, `--icon-size`, …) to re-theme the whole app.

## Notes for the touch screen

- Layout scales automatically from 1080p to 4K (`vmin`/`clamp()` based).
- Touch targets meet kiosk sizing; double-tap zoom and text selection are disabled.
- Browsers only allow audio after the first touch, so the boot sound plays
  once someone interacts (or use the `--autoplay-policy` flag above).
