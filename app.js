/* ==========================================================================
   PMCC 4TH WATCH — LEADERSHIP DIRECTORY  ·  APP LOGIC
   ==========================================================================

   ┌─────────────────────────────────────────────────────────────────────┐
   │  EVERYTHING YOU NORMALLY NEED TO EDIT IS IN THE "SECTIONS" OBJECT   │
   │  JUST BELOW. Each section has a list of items (people / branches /  │
   │  history entries). Replace names, positions, descriptions, and      │
   │  image paths. Add or remove items freely — the UI adapts.          │
   └─────────────────────────────────────────────────────────────────────┘
   ========================================================================== */

"use strict";

/* ═════════════════════════ 1. CONTENT — EDIT ME ═══════════════════════ */

// Shown in the loading screen status line. EDIT freely.
const APP_TITLE = "PMCC 4TH WATCH DIRECTORY";

// Default placeholder images (replace the files in /assets, or point
// individual items below at your own image files, e.g. "assets/bishop-juan.jpg")
const IMG_PERSON  = "assets/placeholder-person.png";
const IMG_BRANCH  = "assets/placeholder-branch.svg";
const IMG_HISTORY = "assets/placeholder-history.svg";

const SECTIONS = [
  {
    id: "apostle",
    label: "APOSTLE",                       // text under the orbital icon
    subtitle: "FOUNDING LEADERSHIP",        // small text under the panel title
    icon: "apostle",                        // key into ICONS (see section 2)
    items: [
      {
        name: "Apostle Name Here",                          // ← EDIT
        position: "Apostle & Presiding Overseer",           // ← EDIT
        image: IMG_PERSON,                                  // ← REPLACE IMAGE
        description:
          "Placeholder biography. Write a short profile of the Apostle here — " +
          "calling, ministry milestones, and vision for the church. " +
          "Two to four sentences read best on the big screen.",
        // Optional extra fact boxes — add, edit, or delete lines freely.
        extra: { "Years in Ministry": "—", "Home Branch": "—" },
      },
    ],
  },
  {
    id: "bishops",
    label: "BISHOPS",
    subtitle: "EPISCOPAL COUNCIL",
    icon: "bishops",
    items: [
      // Duplicate this block for every bishop. ─────────────────────────
      { name: "Bishop Name One",   position: "Bishop — District 1", image: IMG_PERSON,
        description: "Placeholder profile for this bishop. Replace with a short biography and current assignment.",
        extra: { District: "—", "Home Branch": "—" } },
      { name: "Bishop Name Two",   position: "Bishop — District 2", image: IMG_PERSON,
        description: "Placeholder profile for this bishop. Replace with a short biography and current assignment.",
        extra: { District: "—", "Home Branch": "—" } },
      { name: "Bishop Name Three", position: "Bishop — District 3", image: IMG_PERSON,
        description: "Placeholder profile for this bishop. Replace with a short biography and current assignment.",
        extra: { District: "—", "Home Branch": "—" } },
      { name: "Bishop Name Four",  position: "Bishop — District 4", image: IMG_PERSON,
        description: "Placeholder profile for this bishop. Replace with a short biography and current assignment.",
        extra: { District: "—", "Home Branch": "—" } },
    ],
  },
  {
    id: "presbyters",
    label: "PRESBYTERS",
    subtitle: "PRESBYTERY",
    icon: "presbyters",
    items: [
      { name: "Presbyter Name One",   position: "Presbyter — Area 1", image: IMG_PERSON,
        description: "Placeholder profile for this presbyter. Replace with a short biography and area of oversight.",
        extra: { Area: "—" } },
      { name: "Presbyter Name Two",   position: "Presbyter — Area 2", image: IMG_PERSON,
        description: "Placeholder profile for this presbyter. Replace with a short biography and area of oversight.",
        extra: { Area: "—" } },
      { name: "Presbyter Name Three", position: "Presbyter — Area 3", image: IMG_PERSON,
        description: "Placeholder profile for this presbyter. Replace with a short biography and area of oversight.",
        extra: { Area: "—" } },
    ],
  },
  {
    id: "pastors",
    label: "PASTORS",
    subtitle: "PASTORAL TEAM",
    icon: "pastors",
    items: [
      { name: "Pastor Name One",   position: "Pastor — Branch Name", image: IMG_PERSON,
        description: "Placeholder profile for this pastor. Replace with a short biography and assigned branch.",
        extra: { Branch: "—" } },
      { name: "Pastor Name Two",   position: "Pastor — Branch Name", image: IMG_PERSON,
        description: "Placeholder profile for this pastor. Replace with a short biography and assigned branch.",
        extra: { Branch: "—" } },
      { name: "Pastor Name Three", position: "Pastor — Branch Name", image: IMG_PERSON,
        description: "Placeholder profile for this pastor. Replace with a short biography and assigned branch.",
        extra: { Branch: "—" } },
      { name: "Pastor Name Four",  position: "Pastor — Branch Name", image: IMG_PERSON,
        description: "Placeholder profile for this pastor. Replace with a short biography and assigned branch.",
        extra: { Branch: "—" } },
    ],
  },
  {
    id: "elders",
    label: "ELDERS",
    subtitle: "COUNCIL OF ELDERS",
    icon: "elders",
    items: [
      { name: "Elder Name One",   position: "Elder — Ministry Name", image: IMG_PERSON,
        description: "Placeholder profile for this elder. Replace with a short biography and ministry responsibility.",
        extra: { Ministry: "—" } },
      { name: "Elder Name Two",   position: "Elder — Ministry Name", image: IMG_PERSON,
        description: "Placeholder profile for this elder. Replace with a short biography and ministry responsibility.",
        extra: { Ministry: "—" } },
      { name: "Elder Name Three", position: "Elder — Ministry Name", image: IMG_PERSON,
        description: "Placeholder profile for this elder. Replace with a short biography and ministry responsibility.",
        extra: { Ministry: "—" } },
    ],
  },
  {
    id: "branches",
    label: "BRANCHES",
    subtitle: "LOCAL CONGREGATIONS",
    icon: "branches",
    items: [
      // For branches, "name" is the branch name and "position" its location.
      { name: "Main Branch",     position: "City, Country", image: IMG_BRANCH,
        description: "Placeholder description of this branch — service schedule, address, and a short welcome message.",
        extra: { Pastor: "—", "Service Times": "—", Established: "—" } },
      { name: "Branch Two",      position: "City, Country", image: IMG_BRANCH,
        description: "Placeholder description of this branch — service schedule, address, and a short welcome message.",
        extra: { Pastor: "—", "Service Times": "—", Established: "—" } },
      { name: "Branch Three",    position: "City, Country", image: IMG_BRANCH,
        description: "Placeholder description of this branch — service schedule, address, and a short welcome message.",
        extra: { Pastor: "—", "Service Times": "—", Established: "—" } },
      { name: "Branch Four",     position: "City, Country", image: IMG_BRANCH,
        description: "Placeholder description of this branch — service schedule, address, and a short welcome message.",
        extra: { Pastor: "—", "Service Times": "—", Established: "—" } },
    ],
  },
  {
    id: "history",
    label: "HISTORY",
    subtitle: "OUR JOURNEY OF FAITH",
    icon: "history",
    items: [
      // For history, "name" is the era/heading and "position" the year range.
      { name: "The Beginning",   position: "19— — Founding Years", image: IMG_HISTORY,
        description: "Placeholder history text. Describe how the church began — the founders, the first gatherings, and the early vision.",
        extra: { Milestone: "—" } },
      { name: "Growth & Mission", position: "19— — 20—", image: IMG_HISTORY,
        description: "Placeholder history text. Describe the years of growth — new branches, missions, and key milestones.",
        extra: { Milestone: "—" } },
      { name: "The Church Today", position: "20— — Present", image: IMG_HISTORY,
        description: "Placeholder history text. Describe the church today — its reach, ministries, and vision for the future.",
        extra: { Milestone: "—" } },
    ],
  },
];

/* ═════════════════════════ 2. ICON ARTWORK ════════════════════════════ */
/* Inline SVG line-art for each orbital icon (24×24 viewBox).
   To change an icon, edit its path data or paste your own SVG paths.   */

const ICONS = {
  apostle: `<path d="M12 3v5M9.5 5.5h5"/><circle cx="12" cy="11.5" r="2.6"/>
            <path d="M6.5 20c.6-3.4 2.9-5 5.5-5s4.9 1.6 5.5 5"/>`,
  bishops: `<path d="M12 3l3.5 4.5v4h-7v-4L12 3z"/><path d="M8.5 11.5h7L17 20H7l1.5-8.5z"/>
            <path d="M12 6.2v2.6M10.9 7.5h2.2"/>`,
  presbyters: `<path d="M7 20V6a3 3 0 0 1 6 0"/><path d="M7 20h4"/>
            <path d="M14 12h6M14 15.5h6M14 19h6"/>`,
  pastors: `<circle cx="9" cy="8" r="2.5"/><path d="M4.5 20c.5-3.2 2.3-4.8 4.5-4.8s4 1.6 4.5 4.8"/>
            <path d="M17.5 4v6.5M17.5 4a2.2 2.2 0 1 1 2.2 2.3"/>`,
  elders: `<circle cx="8" cy="9" r="2.3"/><circle cx="16" cy="9" r="2.3"/>
            <path d="M3.5 19c.4-2.8 2-4.3 4.5-4.3 1.6 0 2.8.6 3.6 1.7.8-1.1 2-1.7 3.6-1.7 2.5 0 4.1 1.5 4.5 4.3"/>`,
  branches: `<circle cx="12" cy="9" r="5.5"/><path d="M12 3.5v11M6.8 7h10.4M6.8 11h10.4"/>
            <path d="M12 14.5v3M8 21h8M12 17.5l-3 3.5M12 17.5l3 3.5"/>`,
  history: `<circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2.2"/>
            <path d="M4 12h-1.5M21.5 12H20"/>`,
};

/* ═════════════════════════ 3. SOUND SETTINGS ══════════════════════════ */
/* Sounds are synthesized with the Web Audio API — fully offline, no files.
   ── TO USE YOUR OWN SOUND FILES INSTEAD ──────────────────────────────
   Put mp3/wav files in /assets and set the paths below, e.g.:
       const SOUND_FILES = { tap: "assets/tap.mp3", open: "assets/open.mp3",
                             back: "assets/back.mp3", boot: "assets/boot.mp3" };
   Leave a value as null to keep the built-in synthesized sound.        */

const SOUND_FILES = { tap: null, open: null, back: null, boot: null };

/* ══════════════════════════════════════════════════════════════════════
   ▼▼▼  ENGINE CODE BELOW — normally no need to edit past this line  ▼▼▼
   ══════════════════════════════════════════════════════════════════════ */

const $ = (sel) => document.querySelector(sel);

/* ─────────────────────────── Audio engine ───────────────────────────── */
const Sound = {
  ctx: null,
  muted: localStorage.getItem("pmcc-muted") === "1",
  buffers: {},

  ensure() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) this.ctx = new AC();
      this.loadFiles();
    }
    if (this.ctx && this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  },

  async loadFiles() {
    for (const [key, url] of Object.entries(SOUND_FILES)) {
      if (!url) continue;
      try {
        const buf = await (await fetch(url)).arrayBuffer();
        this.buffers[key] = await this.ctx.decodeAudioData(buf);
      } catch (e) { /* missing file → fall back to synth */ }
    }
  },

  play(kind) {
    if (this.muted) return;
    const ctx = this.ensure();
    if (!ctx) return;
    if (this.buffers[kind]) {                    // custom audio file
      const src = ctx.createBufferSource();
      src.buffer = this.buffers[kind];
      src.connect(ctx.destination);
      src.start();
      return;
    }
    // Synthesized fallback: soft digital blips per interaction type
    const recipes = {
      tap:  [{ f: 880,  t: "sine",     d: 0.09, g: 0.10 },
             { f: 1320, t: "sine",     d: 0.07, g: 0.05, at: 0.02 }],
      open: [{ f: 440,  t: "sine",     d: 0.30, g: 0.10, slide: 880 },
             { f: 1760, t: "triangle", d: 0.18, g: 0.04, at: 0.10 }],
      back: [{ f: 660,  t: "sine",     d: 0.22, g: 0.09, slide: 330 }],
      boot: [{ f: 220,  t: "sine",     d: 0.90, g: 0.07, slide: 660 },
             { f: 1108, t: "triangle", d: 0.40, g: 0.03, at: 0.35 },
             { f: 1662, t: "sine",     d: 0.50, g: 0.03, at: 0.55 }],
    };
    (recipes[kind] || recipes.tap).forEach((r) => {
      const t0 = ctx.currentTime + (r.at || 0);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = r.t;
      osc.frequency.setValueAtTime(r.f, t0);
      if (r.slide) osc.frequency.exponentialRampToValueAtTime(r.slide, t0 + r.d);
      gain.gain.setValueAtTime(0, t0);
      gain.gain.linearRampToValueAtTime(r.g, t0 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + r.d);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + r.d + 0.05);
    });
  },

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem("pmcc-muted", this.muted ? "1" : "0");
    updateMuteButton();
    if (!this.muted) this.play("tap");
  },
};

function updateMuteButton() {
  $("#btn-mute").classList.toggle("muted", Sound.muted);
  $("#icon-sound-on").classList.toggle("hidden", Sound.muted);
  $("#icon-sound-off").classList.toggle("hidden", !Sound.muted);
}

/* ───────────────────── Background particle field ────────────────────── */
const Particles = (() => {
  const canvas = $("#bg-canvas");
  const ctx = canvas.getContext("2d");
  let W, H, dots = [], mode = "loading", t = 0;

  function resize() {
    W = canvas.width = innerWidth;
    H = canvas.height = innerHeight;
  }

  function seed() {
    const n = Math.round((W * H) / 16000);        // density scales with screen
    dots = Array.from({ length: n }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 0.6 + Math.random() * 1.8,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: 0.15 + Math.random() * 0.5,
      tw: 0.5 + Math.random() * 2,               // twinkle speed
    }));
  }

  function frame() {
    t += 0.016;
    ctx.clearRect(0, 0, W, H);
    const cx = W / 2, cy = H / 2;
    for (const d of dots) {
      if (mode === "loading") {
        // gentle pull toward the center during the cinematic intro
        d.x += (cx - d.x) * 0.004 + d.vx;
        d.y += (cy - d.y) * 0.004 + d.vy;
      } else {
        d.x += d.vx; d.y += d.vy;
        if (d.x < -10) d.x = W + 10; if (d.x > W + 10) d.x = -10;
        if (d.y < -10) d.y = H + 10; if (d.y > H + 10) d.y = -10;
      }
      const alpha = d.a * (0.6 + 0.4 * Math.sin(t * d.tw));
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(89, 216, 255, ${alpha.toFixed(3)})`;
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }

  addEventListener("resize", () => { resize(); seed(); });
  resize(); seed(); frame();
  return { setMode: (m) => { mode = m; } };
})();

/* ─────────────────────── Orbital dashboard build ────────────────────── */
/* Icons start COLLAPSED behind the center logo. Tapping the logo expands
   them outward and draws glowing node connector lines from the hub.      */

const SVG_NS = "http://www.w3.org/2000/svg";

function buildOrbit() {
  const nav = $("#orbit-icons");
  const links = $("#orbit-links");
  nav.innerHTML = "";
  links.innerHTML = "";
  SECTIONS.forEach((sec, i) => {
    // connector line group: base line + flowing energy dashes + end nodes
    const g = document.createElementNS(SVG_NS, "g");
    g.innerHTML = `
      <line class="link-base"></line>
      <line class="link-flow"></line>
      <circle class="link-node" r="3.5"></circle>
      <circle class="link-node-ring" r="8"></circle>`;
    links.appendChild(g);

    const btn = document.createElement("button");
    btn.className = "orbit-icon";
    btn.dataset.section = sec.id;
    btn.style.setProperty("--pulse-delay", `${(i * 0.45).toFixed(2)}s`);
    // staggered expansion: each icon leaves the hub slightly after the last
    btn.style.transitionDelay = `${i * 60}ms`;
    btn.innerHTML = `
      <span class="icon-float" style="--float-delay:${(i * 0.7).toFixed(2)}s">
        <span class="icon-tile"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[sec.icon] || ICONS.history}</svg></span>
        <span class="icon-label">${sec.label}</span>
      </span>`;
    btn.addEventListener("click", () => openSection(sec, btn));
    nav.appendChild(btn);
  });
  layoutOrbit();
}

/* Position the 7 icons evenly on an ellipse around the center hub and
   aim each connector line at its icon. Landscape screens get a wider,
   flatter ring so labels never clip.                                    */
function layoutOrbit() {
  const stage = $("#orbit-stage");
  const { width: w, height: h } = stage.getBoundingClientRect();
  if (!w || !h) return;
  const icons = stage.querySelectorAll(".orbit-icon");
  const linkGroups = stage.querySelectorAll("#orbit-links g");
  const n = icons.length;
  const iconSize = parseFloat(getComputedStyle(document.documentElement)
    .getPropertyValue("--icon-size")) || 160;
  const hubSize = parseFloat(getComputedStyle(document.documentElement)
    .getPropertyValue("--hub-size")) || 300;
  const rx = Math.min(w / 2 - iconSize * 0.75, w * 0.36); // horizontal radius
  const ry = h / 2 - iconSize * 0.85;                     // vertical radius
  const cx = w / 2, cy = h / 2;
  $("#orbit-links").setAttribute("viewBox", `0 0 ${w} ${h}`);

  icons.forEach((btn, i) => {
    const ang = -Math.PI / 2 + (i * 2 * Math.PI) / n;    // start at 12 o'clock
    const dx = Math.cos(ang) * rx;
    const dy = Math.sin(ang) * ry;
    // icon sits at the center; --tx/--ty carry it outward when .expanded
    btn.style.left = `${cx}px`;
    btn.style.top = `${cy}px`;
    btn.style.setProperty("--tx", `${dx}px`);
    btn.style.setProperty("--ty", `${dy}px`);

    // connector: from just outside the hub to just short of the icon tile
    const g = linkGroups[i];
    if (!g) return;
    const len = Math.hypot(dx, dy);
    const ux = dx / len, uy = dy / len;
    const start = hubSize * 0.42;                        // hub edge
    const end = len - iconSize * 0.62;                   // icon edge
    const x1 = cx + ux * start, y1 = cy + uy * start;
    const x2 = cx + ux * end,   y2 = cy + uy * end;
    for (const cls of ["link-base", "link-flow"]) {
      const line = g.querySelector("." + cls);
      line.setAttribute("x1", x1); line.setAttribute("y1", y1);
      line.setAttribute("x2", x2); line.setAttribute("y2", y2);
    }
    // the base line "draws" itself via dash offset when expanding
    const base = g.querySelector(".link-base");
    const seg = Math.hypot(x2 - x1, y2 - y1);
    base.style.strokeDasharray = seg;
    base.style.strokeDashoffset = stage.classList.contains("expanded") ? 0 : seg;
    base.style.transitionDelay = `${i * 60}ms`;
    // node dot + ring at the icon end of the line
    for (const sel of [".link-node", ".link-node-ring"]) {
      const c = g.querySelector(sel);
      c.setAttribute("cx", x2); c.setAttribute("cy", y2);
      c.style.transitionDelay = `${200 + i * 60}ms`;
    }
  });
}
addEventListener("resize", layoutOrbit);

/* ───────────────── Expand / collapse the icon network ───────────────── */
let orbitExpanded = false;

function setOrbit(expand) {
  if (expand === orbitExpanded) return;
  orbitExpanded = expand;
  const stage = $("#orbit-stage");
  stage.classList.toggle("expanded", expand);
  Sound.play(expand ? "open" : "back");
  $("#hud-hint").textContent = expand ? "TAP AN ICON TO EXPLORE" : "TAP THE LOGO TO BEGIN";
  // animate the connector lines drawing out (or retracting)
  stage.querySelectorAll("#orbit-links .link-base").forEach((base) => {
    base.style.strokeDashoffset = expand ? 0 : parseFloat(base.style.strokeDasharray || 0);
  });
}

/* ─────────────────────────── Section panel ──────────────────────────── */
let activeSection = null;
let activeIcon = null;

function openSection(sec, iconBtn) {
  if (activeSection) return;
  activeSection = sec;
  activeIcon = iconBtn;
  Sound.play("open");

  // tapped icon zooms toward the viewer, dashboard blurs behind
  iconBtn.classList.add("launching");
  $("#dashboard").classList.add("defocus");

  $("#panel-title").textContent = sec.label;
  $("#panel-subtitle").textContent = sec.subtitle;
  renderItem(sec, 0);
  buildChips(sec);

  const panel = $("#panel");
  panelStretch.reset();                       // every panel opens at 100%
  panel.classList.remove("hidden", "closing");
  requestAnimationFrame(() => requestAnimationFrame(() => panel.classList.add("open")));
}

function renderItem(sec, index) {
  const item = sec.items[index];
  const img = $("#panel-image");
  // retrigger entrance animations
  for (const id of ["#panel-image", "#detail-name", "#detail-position", "#detail-description"]) {
    const el = $(id);
    el.style.animation = "none";
    void el.offsetWidth;               // reflow to restart CSS animation
    el.style.animation = "";
  }
  img.src = item.image;
  img.alt = item.name;
  $("#panel-caption").textContent = item.position || sec.label;
  $("#detail-name").textContent = item.name;
  $("#detail-position").textContent = item.position || "";
  $("#detail-description").textContent = item.description || "";

  const extra = $("#detail-extra");
  extra.innerHTML = "";
  for (const [key, val] of Object.entries(item.extra || {})) {
    const box = document.createElement("div");
    box.innerHTML = `<dt>${key.toUpperCase()}</dt><dd>${val}</dd>`;
    extra.appendChild(box);
  }
  // mark active chip
  document.querySelectorAll(".list-chip").forEach((c, i) =>
    c.classList.toggle("active", i === index));
}

function buildChips(sec) {
  const list = $("#panel-list");
  list.innerHTML = "";
  if (sec.items.length < 2) return;    // single entry → no selector row
  sec.items.forEach((item, i) => {
    const chip = document.createElement("button");
    chip.className = "list-chip" + (i === 0 ? " active" : "");
    chip.innerHTML = `<img src="${item.image}" alt=""><span>${item.name}</span>`;
    chip.addEventListener("click", () => { Sound.play("tap"); renderItem(sec, i); });
    list.appendChild(chip);
  });
}

function closeSection() {
  if (!activeSection) return;
  Sound.play("back");
  const panel = $("#panel");
  panel.classList.add("closing");
  panel.classList.remove("open");
  $("#dashboard").classList.remove("defocus");
  if (activeIcon) {
    const icon = activeIcon;
    icon.classList.remove("launching");
  }
  setTimeout(() => {
    panel.classList.add("hidden");
    panel.classList.remove("closing");
  }, 400);
  activeSection = null;
  activeIcon = null;
}

/* ─────────────────────────── HUD clock ──────────────────────────────── */
function tickClock() {
  const now = new Date();
  $("#hud-clock").textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  $("#hud-date").textContent = now.toLocaleDateString([], {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  }).toUpperCase();
}

/* ───────────────────────── Boot sequence ────────────────────────────── */
const BOOT_STEPS = [
  [8,   "INITIALIZING SYSTEM…"],
  [26,  "LOADING INTERFACE MODULES…"],
  [48,  "CALIBRATING DISPLAY GRID…"],
  [70,  "SYNCING DIRECTORY DATA…"],
  [92,  "RENDERING ORBITAL LAYOUT…"],
  [100, "WELCOME"],
];

function boot() {
  buildOrbit();
  tickClock();
  setInterval(tickClock, 1000);
  updateMuteButton();

  // animated fake progress through the boot steps
  let step = 0;
  const bar = $("#loader-progress");
  const status = $("#loader-status");
  const advance = () => {
    if (step >= BOOT_STEPS.length) return finishBoot();
    const [pct, label] = BOOT_STEPS[step++];
    bar.style.width = pct + "%";
    status.textContent = label;
    setTimeout(advance, 420 + Math.random() * 300);
  };
  setTimeout(advance, 500);
}

function finishBoot() {
  setTimeout(() => {
    $("#loader").classList.add("done");
    Particles.setMode("ambient");
    const dash = $("#dashboard");
    dash.classList.remove("hidden");
    requestAnimationFrame(() => {
      layoutOrbit();                      // now that the stage has real size
      dash.classList.add("visible");
      // icons stay tucked behind the logo until the logo is tapped
    });
    Sound.play("boot");                   // plays once audio is unlocked
  }, 500);
}

/* ────────────────── Pinch-to-stretch ("hologram zoom") ──────────────── */
/* Two-finger pinch (or mouse wheel) stretches the dashboard network or an
   open info panel so content can be enlarged for readability, with a HUD
   readout of the current zoom level. Double-tap resets to 100%.          */

const zoomBadge = $("#zoom-badge");
let badgeTimer = null;

function flashZoom(value) {
  zoomBadge.textContent = `${Math.round(value * 100)}%`;
  zoomBadge.classList.add("show");
  clearTimeout(badgeTimer);
  badgeTimer = setTimeout(() => zoomBadge.classList.remove("show"), 900);
}

function makeStretchable(surface, applyZoom, { min = 0.6, max = 1.8, wheelNeedsCtrl = false } = {}) {
  let zoom = 1;
  const pointers = new Map();
  let pinchStartDist = 0, pinchStartZoom = 1;
  let lastTap = 0;

  const apply = (z) => {
    zoom = Math.min(max, Math.max(min, z));
    applyZoom(zoom);
    flashZoom(zoom);
  };

  surface.addEventListener("pointerdown", (e) => {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinchStartDist = Math.hypot(a.x - b.x, a.y - b.y);
      pinchStartZoom = zoom;
    }
    // double-tap anywhere on empty surface → reset stretch
    const now = performance.now();
    if (pointers.size === 1 && now - lastTap < 350 &&
        !e.target.closest(".orbit-icon, .hub, button, .list-chip")) {
      apply(1);
      Sound.play("tap");
    }
    lastTap = now;
  });
  surface.addEventListener("pointermove", (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 2 && pinchStartDist > 0) {
      const [a, b] = [...pointers.values()];
      apply(pinchStartZoom * (Math.hypot(a.x - b.x, a.y - b.y) / pinchStartDist));
    }
  });
  const lift = (e) => { pointers.delete(e.pointerId); if (pointers.size < 2) pinchStartDist = 0; };
  surface.addEventListener("pointerup", lift);
  surface.addEventListener("pointercancel", lift);
  surface.addEventListener("pointerleave", lift);
  // mouse-wheel stretch for desktop testing (Ctrl+wheel inside the panel,
  // so plain wheel still scrolls the profile text)
  surface.addEventListener("wheel", (e) => {
    if (wheelNeedsCtrl && !e.ctrlKey) return;
    e.preventDefault();
    apply(zoom * (e.deltaY < 0 ? 1.07 : 0.93));
  }, { passive: false });

  return { reset: () => { zoom = 1; applyZoom(1); } };
}

// Dashboard: the whole hologram network scales around the logo.
const stageStretch = makeStretchable(
  $("#orbit-stage"),
  (z) => $("#orbit-stage").style.setProperty("--zoom", z.toFixed(3)),
  { min: 0.65, max: 1.6 });

// Panel: the INFORMATION grows — text reflows and stays scrollable, so the
// title and BACK button are never pushed off screen.
const panelStretch = makeStretchable(
  $("#panel .panel-shell"),
  (z) => { $("#panel .panel-content").style.zoom = z.toFixed(3); },
  { min: 0.8, max: 1.7, wheelNeedsCtrl: true });

/* ─────────────────────────── Wire-up ────────────────────────────────── */
// tapping the center logo reveals / hides the icon network
$(".hub-core").addEventListener("click", () => setOrbit(!orbitExpanded));

$("#panel-back").addEventListener("click", closeSection);
$("#panel .panel-backdrop").addEventListener("click", closeSection);
$("#btn-mute").addEventListener("click", () => { Sound.ensure(); Sound.toggleMute(); });

// Browsers only allow audio after the first user gesture — unlock it then.
addEventListener("pointerdown", () => Sound.ensure(), { once: true });

// Escape goes back: closes the panel first, then collapses the network
addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (activeSection) closeSection();
  else setOrbit(false);
});

boot();
