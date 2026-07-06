/* ==========================================================================
   PMCC 4TH WATCH — LEADERSHIP DIRECTORY  ·  APP LOGIC  (Glass / rainy edition)
   ==========================================================================

   ┌──────────────────────────────────────────────────────────────────────┐
   │  EDIT CONTENT BELOW. Leadership text lives in CONTENT.sections;        │
   │  branch regions/countries in CONTENT.branches; assistant name, sounds, │
   │  gallery scenes and color themes each have their own clearly-labelled  │
   │  config block. No photos are used for now — each entry shows an icon.  │
   └──────────────────────────────────────────────────────────────────────┘
   ========================================================================== */
"use strict";

/* ═══════════════════ 1. ASSISTANT (JARVIS) NAME — EDIT ════════════════ */
const ASSISTANT_NAME = "Brother Thomas";   // ← rename your assistant here

/* ═══════════════════ 2. LEADERSHIP CONTENT — EDIT ════════════════════ */
/* Facts below are drawn from pmcc4thwatch.org / Wikipedia (public sources).
   Replace or extend freely. Entries marked "(edit)" are editable slots.   */
const CONTENT = {
  church: {
    name: "Pentecostal Missionary Church of Christ (4th Watch)",
    tagline: "Evangelizing the Lost · Edifying the Saints",
    headquarters: "Marikina City, Metro Manila, Philippines",
    founded: "1972 (registered August 30, 1973)",
    members: "~1 million believers worldwide",
    countries: "72+ countries · 1,055 locale churches",
    meaningOf4thWatch:
      "From the church's ‘Watches of the Night’ doctrine. The ‘4th Watch’ comes from Matthew 14:25, where Jesus walks on the sea ‘in the fourth watch of the night’ — the last, darkest watch before dawn, understood as the present end-time era of Christ's imminent return.",
    doctrineSummary:
      "A Philippines-based Pentecostal denomination holding Scripture as verbally inspired and the sole authority for faith and conduct, affirming the Godhead of Father, Son and Holy Spirit, water baptism by immersion, the baptism of the Holy Spirit, the continued gift of apostleship (Ephesians 4:11), holiness, and the second coming of Christ.",
  },

  sections: [
    {
      id: "apostle", label: "APOSTLE", subtitle: "CHIEF EXECUTIVE MINISTRY", icon: "apostle",
      items: [
        { name: "Apostle Jonathan S. Ferriol",
          position: "Chief Executive Minister",
          description:
            "Apostle Jonathan S. Ferriol is the Chief Executive Minister of the PMCC (4th Watch). The second eldest son of founder " +
            "Apostle Arsenio T. Ferriol and Evangelist Leticia S. Ferriol, he was appointed Deputy Executive Minister in May 2023 and " +
            "succeeded his father as Chief Executive Minister in 2024. He founded the church's Media Communications Department and the " +
            "‘Oras ng Katotohanan’ radio and television program.",
          extra: { Role: "Chief Executive Minister", "Deputy Since": "May 2023", "CEM Since": "2024" } },
        { name: "Apostle Arsenio Tan Ferriol",
          position: "Founder · First Chief Executive Minister (1936 – 2024)",
          description:
            "Born January 14, 1936 in Odiongan, Romblon, Apostle Arsenio Tan Ferriol founded the PMCC (4th Watch) in 1972 following a " +
            "claimed 1970 divine calling to restore the apostolic church. A former Foursquare Gospel minister, he led the fellowship into a " +
            "global denomination and was regarded by members as the end-time apostle. He went home to be with the Lord on May 19, 2024, at age 88.",
          extra: { Born: "Jan 14, 1936 · Odiongan, Romblon", "Home to Glory": "May 19, 2024" } },
      ],
    },
    {
      id: "bishops", label: "BISHOPS", subtitle: "EPISCOPAL COUNCIL", icon: "bishops",
      items: [
        { name: "Archbishop Arturo “Art” Ferriol", position: "Archbishop",
          description: "Brother of founder Arsenio T. Ferriol. He established Maranatha Bible School International — the church's ministerial training arm — in 1975 and later led construction of the main church in Marikina.",
          extra: { Founded: "Maranatha Bible School (1975)" } },
        { name: "Bishop Osinando “Osie” Quillao", position: "Senior Bishop",
          description: "Senior Bishop providing international oversight for districts worldwide through preaching, worship services, and educational programs. He ministered in the US District and joined missionary journeys to Occidental Mindoro.",
          extra: { Oversight: "International districts" } },
        { name: "Bishop Rustico “Resting” Zonio", position: "Bishop",
          description: "Born April 5, 1952 in Guadalupe, Libacao, Aklan. An early disciple and a pioneer across the Visayas and Mindanao, and author of the book ‘Sa Akon Mga Pagpangwali’.",
          extra: { Born: "Apr 5, 1952 · Aklan", Region: "Visayas & Mindanao" } },
        { name: "Bishop Samuel Santos Ferriol", position: "Bishop · Marikina City Councilor",
          description: "Son of founder Arsenio and Leticia Ferriol. He became a Church Presbyter in 2021 and was elevated to Bishop in 2023, and also serves as an elected city councilor for Marikina City District 1.",
          extra: { Elevated: "Bishop (2023)", "Civic Role": "Marikina Councilor" } },
        { name: "Bishop Aldrin Palanca", position: "Bishop · Middle East District",
          description: "A bishop associated with the Middle East District. He spoke on behalf of the church during the 50th (Golden) Anniversary celebration in 2023.",
          extra: { District: "Middle East" } },
        { name: "Bishop Reynald Sulayao", position: "Bishop",
          description: "Described as a seasoned, prophetic voice in the global church and a servant leader of character; a distinguished guest at the Canada District Conference.",
          extra: { Ministry: "Global preaching" } },
        { name: "Bishop Domingo “Dodoy” Ferriol", position: "Bishop (1943 – 2021)",
          description: "Brother of the founder. He pioneered one of the first church buildings in Malagasang, Imus, Cavite, and undertook missionary journeys to Occidental Mindoro.",
          extra: { Pioneered: "Imus, Cavite" } },
      ],
    },
    {
      id: "presbyters", label: "PRESBYTERS", subtitle: "PRESBYTERY · DISTRICT COORDINATORS", icon: "presbyters",
      items: [
        { name: "Presbyter Marites Ferriol", position: "U.S. District Coordinator",
          description: "Wife of Chief Executive Minister Apostle Jonathan S. Ferriol, she coordinates the U.S. District, which comprises roughly 50 local churches and recently marked its 35th anniversary.",
          extra: { District: "United States (~50 churches)" } },
        { name: "Presbyter Joseph Concepcion", position: "Canada District Coordinator",
          description: "Leads the Canada District — 30+ locations across Canada and the Caribbean — serving with Pastor Genalyn Concepcion. Credited with planting and strengthening churches from British Columbia to Quebec.",
          extra: { District: "Canada & Caribbean (30+)" } },
        { name: "Presbyter Levi S. Ferriol", position: "Presbyter",
          description: "Son of founder Arsenio and Leticia Ferriol; serves as a presbyter in the church.",
          extra: { Family: "Ferriol" } },
        { name: "Presbyter Raquel Dela Cruz", position: "Head Minister · Singapore / S.E. Asia District",
          description: "Presbyter and head minister of PMCC (4th Watch) Singapore, part of the South East Asia District.",
          extra: { District: "South East Asia" } },
        { name: "Presbyter Erwin Dela Cruz", position: "Presbyter · U.S. District",
          description: "A U.S. District leader working alongside U.S. District Coordinator Presbyter Marites Ferriol.",
          extra: { District: "United States" } },
        { name: "Presbyter Isabel Obsanga", position: "Presbyter · Canada District",
          description: "Listed among Canada District leaders; served as a keynote speaker at Canada District Camp 2025.",
          extra: { District: "Canada" } },
      ],
    },
    {
      id: "pastors", label: "PASTORS", subtitle: "PASTORAL TEAM · DISTRICT COORDINATORS", icon: "pastors",
      items: [
        { name: "Pastor Tess Salanap", position: "Southern Europe District Coordinator",
          description: "District Coordinator of the Southern Europe District — Spain, Portugal, Greece, Cyprus, Italy and Malta. She rallied ministers for Apostle Jonathan Ferriol's apostolic visitation in Madrid.",
          extra: { District: "Southern Europe" } },
        { name: "Pastor Jesette Noche", position: "Western Europe District Coordinator",
          description: "Coordinator of the Western Europe District; present at the global apostolic visitation in Madrid.",
          extra: { District: "Western Europe" } },
        { name: "Pastor Genalyn Concepcion", position: "Eastern Sub-District Coordinator · Canada",
          description: "Canada Sub-District coordinator serving with Presbyter Joseph Concepcion; among the leaders of the Toronto locale.",
          extra: { "Sub-District": "Canada (East)" } },
        { name: "Pastor Asherlyn Valeroso", position: "Western Sub-District Coordinator · Canada",
          description: "Canada Sub-District coordinator associated with the Edmonton locale.",
          extra: { "Sub-District": "Canada (West)" } },
        { name: "Pastor Arlet Joy F. Guerrero", position: "Pastor",
          description: "Daughter of founder Arsenio and Leticia Ferriol; serves as a pastor in the church.",
          extra: { Family: "Ferriol" } },
        { name: "Pastor Jhun Valeroso", position: "Pastor · Edmonton, Canada",
          description: "Named as a pastor at the Edmonton locale alongside Pastor Asherlyn Valeroso.",
          extra: { Locale: "Edmonton" } },
        { name: "Pastor Daniel Ferriol", position: "Sub-District Coordinator · Canada",
          description: "Listed as one of the Canada District sub-coordinators.",
          extra: { "Sub-District": "Canada" } },
        { name: "Pastor Luis Concepcion", position: "Sub-District Coordinator · Canada",
          description: "Listed among the Canada District sub-coordinators.",
          extra: { "Sub-District": "Canada" } },
        { name: "Pastor Hilda Arganda", position: "Associate Pastor · Toronto, Canada",
          description: "Listed as an associate pastor for the Toronto congregation.",
          extra: { Locale: "Toronto" } },
      ],
    },
    {
      id: "elders", label: "ELDERS", subtitle: "COUNCIL OF ELDERS", icon: "elders",
      items: [
        { name: "Elder — Name to be added", position: "Local Church Elder", confidence: "placeholder",
          description: "Elders are a recognized local-church leadership tier below pastors in the PMCC (4th Watch) hierarchy. No individually named elders were confirmed in public sources — add your elders here. Duplicate this entry for each one.",
          extra: { Ministry: "(edit)", "Local Church": "(edit)" } },
      ],
    },
    {
      id: "history", label: "HISTORY", subtitle: "OUR JOURNEY OF FAITH", icon: "history",
      items: [
        { name: "Founding of PMCC (4th Watch)", position: "1972",
          description: "Apostle Arsenio Tan Ferriol founds the church after separating from the Foursquare Gospel Church, following a claimed 1970 divine calling in Odiongan to restore the apostolic church.",
          extra: { Founder: "Arsenio T. Ferriol" } },
        { name: "Formal Registration", position: "August 30, 1973",
          description: "The church is formally registered. Arsenio Ferriol becomes its first Chief Executive Minister and takes the title of Apostle.",
          extra: { Title: "Chief Executive Minister" } },
        { name: "First Foreign Church", position: "1989",
          description: "The church's first overseas congregation is established in Hong Kong, growing out of Filipino labor migration, and reaches North America the same year — beginning decades of global expansion.",
          extra: { "First Abroad": "Hong Kong" } },
        { name: "Golden (50th) Anniversary", position: "August 27, 2023",
          description: "Celebrated at New Clark City Athletics Stadium in Capas, Tarlac. The church reports presence in 72 countries with 1,055 locale churches and ~1 million members. Jonathan Ferriol takes his oath as Deputy Executive Minister.",
          extra: { Milestone: "50 years", Reach: "72 countries" } },
        { name: "Founder's Passing & Succession", position: "May 19, 2024",
          description: "Founder Apostle Arsenio Tan Ferriol dies at age 88. His son, Apostle Jonathan S. Ferriol, succeeds him as Chief Executive Minister, making his first official visit in the role on June 23, 2024.",
          extra: { Succession: "Jonathan S. Ferriol" } },
        { name: "Home Free Global Crusade", position: "January 17–18, 2026",
          description: "The Home Free Global Crusade launches in Manila at Quirino Grandstand, drawing well over 100,000 attendees across two nights, with thousands baptized on the spot.",
          extra: { Venue: "Quirino Grandstand, Manila" } },
      ],
    },
  ],

  /* ═════════════════ 3. BRANCHES — regions & countries — EDIT ════════ */
  branches: [
    { region: "Middle East", countries:
      ["Dubai","Abu Dhabi","Turkey","Jordan","Lebanon","Israel","Syria","Qatar","Saudi Arabia","Kuwait","Yemen","Iran"] },
    { region: "Asia", countries:
      ["China","Japan","Mongolia","North Korea","South Korea","Taiwan"] },
    { region: "South Asia", countries:
      ["Afghanistan","Bangladesh","Bhutan","India","Maldives","Nepal","Pakistan","Sri Lanka"] },
    { region: "Americas & Oceania", countries:
      ["USA","Canada","Australia"] },
    { region: "Europe", countries:
      ["Netherlands"] },
    { region: "Home Country", countries:
      ["Philippines"] },
  ],
};

/* ═══════════════════ 4. GALLERY SCENES (backgrounds) ══════════════════ */
/* Built-in CSS scenes need no image files. "photo" points at your own file. */
const SCENES = [
  { id: "photo",   label: "Signature",     type: "photo", src: "assets/background.jpg" }, // ships by default
  { id: "royal",   label: "Royal Night",   type: "scene" },                                // CSS navy-gold fallback
  { id: "golden",  label: "Golden Aura",   type: "css", css: "radial-gradient(circle at 50% 42%, #3a3212 0%, #14265e 42%, #05091a 82%)" },
  { id: "deep",    label: "Deep Navy",     type: "css", css: "radial-gradient(circle at 50% 40%, #17285f, #060b20 72%)" },
  { id: "emerald", label: "Emerald Court", type: "css", css: "radial-gradient(circle at 50% 42%, #123f34, #06231d 55%, #04101a 85%)" },
  { id: "crimson", label: "Crimson Royal", type: "css", css: "radial-gradient(circle at 50% 40%, #4a1622, #1a0a1e 60%, #05091a 90%)" },
];

/* ═══════════════════ 5. COLOR THEMES (accent) ═════════════════════════ */
const THEMES = [
  { id: "gold",      color: "#e8c66a" },   // default — matches the logo/brand
  { id: "champagne", color: "#f0d9a6" },
  { id: "royal",     color: "#8fb2ff" },
  { id: "emerald",   color: "#8fe0b8" },
  { id: "rose",      color: "#f0a4b0" },
  { id: "amber",     color: "#f2b661" },
];

/* ═══════════════════ 6. SOUND SETTINGS ════════════════════════════════ */
/* Synthesized offline — no files needed. To use your own audio files, set
   paths here (leave null to keep the built-in synth sound):                */
const SOUND_FILES = { tap: null, open: null, back: null, boot: null };

/* ═══════════════════ 7. ICON ARTWORK (24×24 line-art) ═════════════════ */
const ICONS = {
  apostle: `<path d="M12 3v5M9.5 5.5h5"/><circle cx="12" cy="11.5" r="2.6"/><path d="M6.5 20c.6-3.4 2.9-5 5.5-5s4.9 1.6 5.5 5"/>`,
  bishops: `<path d="M12 3l3.5 4.5v4h-7v-4L12 3z"/><path d="M8.5 11.5h7L17 20H7l1.5-8.5z"/><path d="M12 6.2v2.6M10.9 7.5h2.2"/>`,
  presbyters: `<path d="M7 20V6a3 3 0 0 1 6 0"/><path d="M7 20h4"/><path d="M14 12h6M14 15.5h6M14 19h6"/>`,
  pastors: `<circle cx="9" cy="8" r="2.5"/><path d="M4.5 20c.5-3.2 2.3-4.8 4.5-4.8s4 1.6 4.5 4.8"/><path d="M17.5 4v6.5M17.5 4a2.2 2.2 0 1 1 2.2 2.3"/>`,
  elders: `<circle cx="8" cy="9" r="2.3"/><circle cx="16" cy="9" r="2.3"/><path d="M3.5 19c.4-2.8 2-4.3 4.5-4.3 1.6 0 2.8.6 3.6 1.7.8-1.1 2-1.7 3.6-1.7 2.5 0 4.1 1.5 4.5 4.3"/>`,
  branches: `<circle cx="12" cy="9" r="5.5"/><path d="M12 3.5v11M6.8 7h10.4M6.8 11h10.4"/><path d="M12 14.5v3M8 21h8M12 17.5l-3 3.5M12 17.5l3 3.5"/>`,
  history: `<circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2.2"/><path d="M4 12h-1.5M21.5 12H20"/>`,
  // menu / feature glyphs
  home: `<path d="M4 11l8-6 8 6"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>`,
  gallery: `<rect x="3.5" y="5" width="17" height="14" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M4 17l5-4 4 3 3-2 4 3"/>`,
  settings: `<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2.1 2.1M16.9 16.9L19 19M19 5l-2.1 2.1M7.1 16.9L5 19"/>`,
  jarvis: `<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3"/><path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3"/>`,
  browser: `<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17"/>`,
  search: `<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>`,
};

/* ══════════════════════════════════════════════════════════════════════
   ▼▼▼  ENGINE — normally no need to edit past this line  ▼▼▼
   ══════════════════════════════════════════════════════════════════════ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const store = {
  get: (k, d) => { try { const v = localStorage.getItem("pmcc-" + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set: (k, v) => { try { localStorage.setItem("pmcc-" + k, JSON.stringify(v)); } catch {} },
};
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.remove("hidden");
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toast._t); toast._t = setTimeout(() => { t.classList.remove("show"); }, 2000);
}
function svg(paths) { return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`; }

/* ─────────────────────────── Settings state ─────────────────────────── */
const settings = {
  volume:    store.get("volume", 70),
  accent:    store.get("accent", THEMES[0].color),
  iconStyle: store.get("iconStyle", "line"),   // "line" | "solid"
  user:      store.get("user", "guest"),
  scene:     store.get("scene", "photo"),   // ship the rainy background.jpg by default
};
function applyAccent(c) { document.documentElement.style.setProperty("--accent", c); }
function applyIconStyle(s) { $$(".icon-tile").forEach(t => t.classList.toggle("solid", s === "solid")); }
applyAccent(settings.accent);

/* ─────────────────────────── Audio engine ───────────────────────────── */
const Sound = {
  ctx: null, muted: store.get("muted", false), buffers: {},
  ensure() {
    if (!this.ctx) { const AC = window.AudioContext || window.webkitAudioContext; if (AC) this.ctx = new AC(); this.loadFiles(); }
    if (this.ctx && this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  },
  async loadFiles() {
    for (const [k, url] of Object.entries(SOUND_FILES)) {
      if (!url) continue;
      try { this.buffers[k] = await this.ctx.decodeAudioData(await (await fetch(url)).arrayBuffer()); } catch {}
    }
  },
  gain() { return this.muted ? 0 : (settings.volume / 100); },
  play(kind) {
    if (this.muted) return;
    const ctx = this.ensure(); if (!ctx) return;
    const vol = this.gain();
    if (this.buffers[kind]) { const s = ctx.createBufferSource(); s.buffer = this.buffers[kind]; const g = ctx.createGain(); g.gain.value = vol; s.connect(g).connect(ctx.destination); s.start(); return; }
    const R = {
      tap:  [{ f:880, t:"sine", d:.09, g:.10 }, { f:1320, t:"sine", d:.07, g:.05, at:.02 }],
      open: [{ f:440, t:"sine", d:.30, g:.10, slide:880 }, { f:1760, t:"triangle", d:.18, g:.04, at:.10 }],
      back: [{ f:660, t:"sine", d:.22, g:.09, slide:330 }],
      // elegant bell-like "chime" played on the open transition
      chime: [{ f:784, t:"sine", d:.7, g:.07 }, { f:1175, t:"sine", d:.7, g:.05, at:.07 }, { f:1568, t:"sine", d:.8, g:.035, at:.15 }, { f:2350, t:"sine", d:.6, g:.02, at:.22 }],
      boot: [{ f:220, t:"sine", d:.9, g:.07, slide:660 }, { f:1108, t:"triangle", d:.4, g:.03, at:.35 }, { f:1662, t:"sine", d:.5, g:.03, at:.55 }],
    };
    (R[kind] || R.tap).forEach(r => {
      const t0 = ctx.currentTime + (r.at || 0);
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = r.t; o.frequency.setValueAtTime(r.f, t0);
      if (r.slide) o.frequency.exponentialRampToValueAtTime(r.slide, t0 + r.d);
      g.gain.setValueAtTime(0, t0);
      g.gain.linearRampToValueAtTime(r.g * vol, t0 + .015);
      g.gain.exponentialRampToValueAtTime(.0001, t0 + r.d);
      o.connect(g).connect(ctx.destination); o.start(t0); o.stop(t0 + r.d + .05);
    });
  },
  toggleMute() { this.muted = !this.muted; store.set("muted", this.muted); updateMuteButton(); if (!this.muted) this.play("tap"); },
};
function updateMuteButton() {
  $("#btn-mute").classList.toggle("muted", Sound.muted);
  $("#icon-sound-on").classList.toggle("hidden", Sound.muted);
  $("#icon-sound-off").classList.toggle("hidden", !Sound.muted);
}

/* ─────────────────────── Background: rain + scene ────────────────────── */
const Rain = (() => {
  const c = $("#rain-canvas"), x = c.getContext("2d");
  let W, H, drops = [];
  function resize() { W = c.width = innerWidth; H = c.height = innerHeight; seed(); }
  function seed() {
    // gentle floating gold dust (regal), not rain
    const n = Math.round((W * H) / 14000);
    drops = Array.from({ length: n }, () => ({ x: Math.random()*W, y: Math.random()*H, r: .6 + Math.random()*2, v: .3 + Math.random()*.9, drift: (Math.random()-.5)*.4, a: .12 + Math.random()*.5, tw: .5 + Math.random()*2 }));
  }
  let t = 0;
  function frame() {
    t += .016; x.clearRect(0, 0, W, H);
    for (const d of drops) {
      const a = d.a * (.6 + .4 * Math.sin(t * d.tw));
      x.beginPath(); x.arc(d.x, d.y, d.r, 0, Math.PI*2);
      x.fillStyle = `rgba(240,214,140,${a.toFixed(3)})`; x.fill();
      d.y += d.v; d.x += d.drift;
      if (d.y > H + 4) { d.y = -4; d.x = Math.random()*W; }
    }
    requestAnimationFrame(frame);
  }
  addEventListener("resize", resize); resize(); frame();
  return {};
})();

function applyScene(id) {
  settings.scene = id; store.set("scene", id);
  const scene = SCENES.find(s => s.id === id) || SCENES[0];
  const photo = $("#bg-photo"), cssLayers = $$(".bg-sky, .bg-buildings, .bg-bokeh");
  if (scene.type === "photo") {
    photo.style.backgroundImage = `url("${scene.src}")`;
    // verify the file exists; if not, fall back to the rainy scene
    const img = new Image();
    img.onload = () => photo.classList.add("active");
    img.onerror = () => { photo.classList.remove("active"); toast("No photo at " + scene.src + " — using Rainy Dusk"); applyScene("rainy"); };
    img.src = scene.src;
  } else if (scene.type === "css") {
    photo.style.backgroundImage = scene.css;
    photo.classList.add("active");
  } else {
    photo.classList.remove("active"); photo.style.backgroundImage = "";
  }
  $$(".gallery-tile").forEach(t => t.classList.toggle("active", t.dataset.scene === id));
}

/* ─────────────────────── Orbital dashboard build ────────────────────── */
const SVG_NS = "http://www.w3.org/2000/svg";
// nav = 7 leadership sections + branches (branches has its own special panel)
function navSections() {
  const list = CONTENT.sections.slice();
  // insert branches between elders and history for a balanced ring
  const branchesNav = { id: "branches", label: "BRANCHES", subtitle: "GLOBAL CONGREGATIONS", icon: "branches", isBranches: true };
  const idx = list.findIndex(s => s.id === "history");
  list.splice(idx < 0 ? list.length : idx, 0, branchesNav);
  return list;
}
const NAV = navSections();

function buildOrbit() {
  const nav = $("#orbit-icons"), links = $("#orbit-links");
  nav.innerHTML = ""; links.innerHTML = "";
  NAV.forEach((sec, i) => {
    const g = document.createElementNS(SVG_NS, "g");
    g.innerHTML = `<line class="link-base"></line><line class="link-flow"></line><circle class="link-node" r="3.5"></circle><circle class="link-node-ring" r="8"></circle>`;
    links.appendChild(g);

    const btn = document.createElement("button");
    btn.className = "orbit-icon"; btn.dataset.section = sec.id;
    btn.style.setProperty("--pulse-delay", `${(i * .45).toFixed(2)}s`);
    btn.style.transitionDelay = `${i * 60}ms`;
    btn.innerHTML = `
      <span class="press-ring"></span>
      <span class="icon-float" style="--float-delay:${(i*.7).toFixed(2)}s">
        <span class="icon-tile ${settings.iconStyle === 'solid' ? 'solid' : ''}" style="--shine-delay:${(i*0.9).toFixed(2)}s">
          <span class="tile-shine"></span>
          ${svg(ICONS[sec.icon] || ICONS.history)}
        </span>
        <span class="icon-label">${sec.label}</span>
      </span>`;
    attachIconGestures(btn, sec);
    nav.appendChild(btn);
  });
  layoutOrbit();
}

function layoutOrbit() {
  const stage = $("#orbit-stage");
  const { width: w, height: h } = stage.getBoundingClientRect();
  if (!w || !h) return;
  const icons = $$(".orbit-icon", stage), groups = $$("#orbit-links g", stage);
  const n = icons.length;
  const iconSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--icon-size")) || 160;
  const hubSize  = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hub-size")) || 300;
  // reserve the bottom band for the dock so orbit icons never collide with it
  const bottomReserve = Math.min(h * 0.28, iconSize * 1.5 + 140);
  const cx = w/2;
  const cy = Math.max(hubSize*0.55 + 20, (h - bottomReserve) / 2);
  const rx = Math.min(w/2 - iconSize*0.75, w*0.36);
  const ry = Math.min(h/2 - iconSize*0.85, cy - iconSize*0.6);
  // move the center hub to match the icon/link center
  const hub = $(".hub"); if (hub) hub.style.top = `${cy}px`;
  $("#orbit-links").setAttribute("viewBox", `0 0 ${w} ${h}`);
  icons.forEach((btn, i) => {
    const ang = -Math.PI/2 + (i * 2*Math.PI)/n;
    const dx = Math.cos(ang)*rx, dy = Math.sin(ang)*ry;
    btn.style.left = `${cx}px`; btn.style.top = `${cy}px`;
    btn.style.setProperty("--tx", `${dx}px`); btn.style.setProperty("--ty", `${dy}px`);
    if (!btn._drag) { btn.style.setProperty("--dx", "0px"); btn.style.setProperty("--dy", "0px"); }
    const g = groups[i]; if (!g) return;
    const len = Math.hypot(dx, dy), ux = dx/len, uy = dy/len;
    const x1 = cx + ux*(hubSize*0.42), y1 = cy + uy*(hubSize*0.42);
    const x2 = cx + ux*(len - iconSize*0.62), y2 = cy + uy*(len - iconSize*0.62);
    g._end = { x2, y2 };
    for (const cls of ["link-base","link-flow"]) { const L = g.querySelector("."+cls); L.setAttribute("x1",x1); L.setAttribute("y1",y1); L.setAttribute("x2",x2); L.setAttribute("y2",y2); }
    const base = g.querySelector(".link-base"); const seg = Math.hypot(x2-x1, y2-y1);
    base.style.strokeDasharray = seg; base.style.strokeDashoffset = stage.classList.contains("expanded") ? 0 : seg; base.style.transitionDelay = `${i*60}ms`;
    for (const sel of [".link-node",".link-node-ring"]) { const cc = g.querySelector(sel); cc.setAttribute("cx",x2); cc.setAttribute("cy",y2); cc.style.transitionDelay = `${200+i*60}ms`; }
    btn._linkGroup = g; btn._center = { cx, cy };
  });
}
addEventListener("resize", layoutOrbit);

/* update one icon's connector line end to follow a dragged icon */
function updateLinkFor(btn) {
  const g = btn._linkGroup; if (!g || !btn._center) return;
  const dx = parseFloat(btn.style.getPropertyValue("--dx")) || 0;
  const dy = parseFloat(btn.style.getPropertyValue("--dy")) || 0;
  const baseEnd = g._end; if (!baseEnd) return;
  const x2 = baseEnd.x2 + dx, y2 = baseEnd.y2 + dy;
  for (const sel of [".link-base",".link-flow"]) { const L = g.querySelector(sel); L.setAttribute("x2", x2); L.setAttribute("y2", y2); }
  for (const sel of [".link-node",".link-node-ring"]) { const cc = g.querySelector(sel); cc.setAttribute("cx", x2); cc.setAttribute("cy", y2); }
  const base = g.querySelector(".link-base"); const seg = Math.hypot(x2 - (+g.querySelector(".link-base").getAttribute("x1")), y2 - (+g.querySelector(".link-base").getAttribute("y1")));
  base.style.strokeDasharray = seg; base.style.strokeDashoffset = 0;
}

/* ───────────────── Expand / collapse the icon network ───────────────── */
let orbitExpanded = false;
function setOrbit(expand) {
  if (expand === orbitExpanded) return;
  orbitExpanded = expand;
  const stage = $("#orbit-stage");
  stage.classList.toggle("expanded", expand);
  Sound.play(expand ? "open" : "back");
  $("#hud-hint").textContent = expand ? "DRAG AN ICON · HOLD OR TAP TO OPEN" : "TAP THE LOGO TO BEGIN";
  stage.querySelectorAll("#orbit-links .link-base").forEach(b => { b.style.strokeDashoffset = expand ? 0 : parseFloat(b.style.strokeDasharray || 0); });
  if (!expand) { $("#orbit-icons").style.transform = ""; $("#orbit-links").style.transform = ""; }  // clear parallax
}

/* ── Premium pointer parallax: the constellation gently follows the cursor ── */
let parRAF = 0, parX = 0, parY = 0;
function onParallaxMove(e) {
  if (!orbitExpanded || activeOverlay || document.querySelector(".orbit-icon.dragging")) return;
  parX = e.clientX / innerWidth - 0.5;
  parY = e.clientY / innerHeight - 0.5;
  if (!parRAF) parRAF = requestAnimationFrame(applyParallax);
}
function applyParallax() {
  parRAF = 0;
  const ix = (parX * 30).toFixed(1), iy = (parY * 30).toFixed(1);
  $("#orbit-icons").style.transform = `translate(${ix}px, ${iy}px)`;
  $("#orbit-links").style.transform = `translate(${(parX*21).toFixed(1)}px, ${(parY*21).toFixed(1)}px)`;
}
addEventListener("pointermove", onParallaxMove);

/* ──────────── Draggable icons + long-press to open ──────────────────── */
/* Short tap OR press-and-hold (long-press) opens the section. Dragging past
   a small threshold moves the icon instead (and cancels the open).        */
function attachIconGestures(btn, sec) {
  let startX, startY, baseDX, baseDY, moved, holdTimer, longFired, pid;
  const THRESH = 10, HOLD = 500;

  const down = (e) => {
    if (!orbitExpanded) return;
    pid = e.pointerId; btn.setPointerCapture(pid);
    startX = e.clientX; startY = e.clientY; moved = false; longFired = false;
    baseDX = parseFloat(btn.style.getPropertyValue("--dx")) || 0;
    baseDY = parseFloat(btn.style.getPropertyValue("--dy")) || 0;
    btn.classList.add("pressing");
    Sound.play("tap");
    holdTimer = setTimeout(() => {          // long-press → node animation + open
      if (moved) return;
      longFired = true;
      btn.classList.remove("pressing");
      openFor(sec, btn);
    }, HOLD);
  };
  const move = (e) => {
    if (pid === undefined) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if (!moved && Math.hypot(dx, dy) > THRESH) { moved = true; clearTimeout(holdTimer); btn.classList.remove("pressing"); btn.classList.add("dragging"); btn._drag = true; }
    if (moved) {
      const zoom = stageZoom();
      btn.style.setProperty("--dx", `${baseDX + dx / zoom}px`);
      btn.style.setProperty("--dy", `${baseDY + dy / zoom}px`);
      updateLinkFor(btn);
    }
  };
  const up = () => {
    if (pid === undefined) return;
    clearTimeout(holdTimer);
    btn.classList.remove("pressing", "dragging");
    try { btn.releasePointerCapture(pid); } catch {}
    if (!moved && !longFired) openFor(sec, btn);   // quick tap = open
    else if (moved) { store.set("pos-" + sec.id, { dx: parseFloat(btn.style.getPropertyValue("--dx")), dy: parseFloat(btn.style.getPropertyValue("--dy")) }); }
    pid = undefined;
  };
  btn.addEventListener("pointerdown", down);
  btn.addEventListener("pointermove", move);
  btn.addEventListener("pointerup", up);
  btn.addEventListener("pointercancel", up);

  // restore any saved drag position
  const saved = store.get("pos-" + sec.id, null);
  if (saved) { btn.style.setProperty("--dx", saved.dx + "px"); btn.style.setProperty("--dy", saved.dy + "px"); btn._drag = true; }
}

function openFor(sec, btn) {
  if (sec.isBranches) return openBranches(btn);
  return openSection(sec, btn);
}

/* ─────────────────────────── Section panel ──────────────────────────── */
let activeSection = null, activeIcon = null, activeOverlay = null;

function openSection(sec, iconBtn) {
  if (activeOverlay) return;
  activeSection = sec; activeIcon = iconBtn; activeOverlay = "panel";
  runCyberFX(); Sound.play("open");
  if (iconBtn) iconBtn.classList.add("launching");
  $("#dashboard").classList.add("defocus");
  $("#panel-title").textContent = sec.label;
  $("#panel-subtitle").textContent = sec.subtitle;
  $("#panel-glyph").innerHTML = svg(ICONS[sec.icon] || ICONS.history);
  renderItem(sec, 0);
  buildChips(sec);
  panelStretch.reset();
  const panel = $("#panel"); panel.classList.remove("hidden", "closing");
  setTimeout(() => panel.classList.add("open"), 190);   // let the cyber FX lead
}
function renderItem(sec, index) {
  const item = sec.items[index];
  for (const id of ["#detail-name","#detail-position","#detail-description","#panel-glyph"]) { const el = $(id); el.style.animation = "none"; void el.offsetWidth; el.style.animation = ""; }
  $("#panel-caption").textContent = item.position || sec.label;
  $("#detail-name").textContent = item.name;
  $("#detail-position").textContent = item.position || "";
  $("#detail-description").textContent = item.description || "";
  const extra = $("#detail-extra"); extra.innerHTML = "";
  for (const [k, v] of Object.entries(item.extra || {})) { const d = document.createElement("div"); d.innerHTML = `<dt>${k.toUpperCase()}</dt><dd>${v}</dd>`; extra.appendChild(d); }
  $$(".list-chip").forEach((c, i) => c.classList.toggle("active", i === index));
}
function buildChips(sec) {
  const list = $("#panel-list"); list.innerHTML = "";
  if (sec.items.length < 2) return;
  sec.items.forEach((item, i) => {
    const chip = document.createElement("button");
    chip.className = "list-chip" + (i === 0 ? " active" : "");
    chip.innerHTML = `<span class="chip-glyph">${svg(ICONS[sec.icon] || ICONS.history)}</span><span>${item.name}</span>`;
    chip.addEventListener("click", () => { Sound.play("tap"); renderItem(sec, i); });
    list.appendChild(chip);
  });
}

/* ─────────────────────────── Branches panel ─────────────────────────── */
function openBranches(iconBtn) {
  if (activeOverlay) return;
  activeOverlay = "branches"; activeIcon = iconBtn;
  runCyberFX(); Sound.play("open");
  if (iconBtn) iconBtn.classList.add("launching");
  $("#dashboard").classList.add("defocus");
  const grid = $("#regions-grid"); grid.innerHTML = "";
  CONTENT.branches.forEach((r, i) => {
    const card = document.createElement("div");
    card.className = "region-card"; card.style.animationDelay = `${i * 70}ms`;
    const chips = r.countries.map(c => `<button class="country-chip">${c}</button>`).join("");
    card.innerHTML = `<h3><span class="dot"></span>${r.region}</h3><div class="country-list">${chips}</div>`;
    grid.appendChild(card);
  });
  $$("#regions-grid .country-chip").forEach(chip => chip.addEventListener("click", () => { Sound.play("tap"); toast(chip.textContent + " — branch details coming soon"); }));
  const panel = $("#branches-panel"); panel.classList.remove("hidden", "closing");
  setTimeout(() => panel.classList.add("open"), 190);   // let the cyber FX lead
}

/* ─────────────── Generic overlay close (panel / branches) ────────────── */
function closeOverlay() {
  if (!activeOverlay) return;
  Sound.play("back");
  const panel = activeOverlay === "branches" ? $("#branches-panel") : $("#panel");
  panel.classList.add("closing"); panel.classList.remove("open");
  $("#dashboard").classList.remove("defocus");
  if (activeIcon) activeIcon.classList.remove("launching");
  setTimeout(() => { panel.classList.add("hidden"); panel.classList.remove("closing"); }, 400);
  activeSection = null; activeIcon = null; activeOverlay = null;
}

/* ─────────────────────── Bottom icon DOCK (menu) ────────────────────── */
const MENU = [
  { id: "home",     label: "HOME",     sub: "Return to dashboard", icon: "home" },
  { id: "gallery",  label: "GALLERY",  sub: "Change the background", icon: "gallery" },
  { id: "settings", label: "SETTINGS", sub: "Account · sound · colors · icons", icon: "settings" },
  { id: "jarvis",   label: ASSISTANT_NAME.toUpperCase(), sub: "Ministry assistant", icon: "jarvis" },
  { id: "browser",  label: "BROWSER",  sub: "Open the web", icon: "browser" },
  { id: "search",   label: "SEARCH",   sub: "Find anything", icon: "search" },
];
function buildDock() {
  const dock = $("#dock"); dock.innerHTML = "";
  MENU.forEach(m => {
    const b = document.createElement("button");
    b.className = "dock-btn"; b.dataset.id = m.id; b.title = m.sub;
    b.innerHTML = `<span class="db-icon">${svg(ICONS[m.icon])}</span><span class="db-label">${m.label}</span>`;
    b.addEventListener("click", () => onMenu(m.id));
    dock.appendChild(b);
  });
  // mute toggle lives in the dock too
  const mute = document.createElement("button");
  mute.className = "dock-btn"; mute.id = "btn-mute"; mute.title = "Mute / unmute";
  mute.innerHTML =
    `<span class="db-icon">
       <svg id="icon-sound-on" viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="#eaf7ff" stroke="none"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="#eaf7ff" stroke-width="1.8" stroke-linecap="round"/></svg>
       <svg id="icon-sound-off" viewBox="0 0 24 24" class="hidden"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="#eaf7ff" stroke="none"/><path d="M16 9l6 6M22 9l-6 6" fill="none" stroke="#eaf7ff" stroke-width="1.8" stroke-linecap="round"/></svg>
     </span><span class="db-label">SOUND</span>`;
  mute.addEventListener("click", () => { Sound.ensure(); Sound.toggleMute(); });
  dock.appendChild(mute);
  updateMuteButton();
}
function onMenu(id) {
  Sound.play("tap");
  if (id === "home")     { closeOverlay(); closeAllFeatures(); closeSearch(); setOrbit(false); }
  else if (id === "gallery")  openFeature("gallery");
  else if (id === "settings") openFeature("settings");
  else if (id === "jarvis")   openFeature("jarvis");
  else if (id === "browser")  openFeature("browser");
  else if (id === "search")   openSearch();
}

/* ───────────────────── Cyber-style open transition ──────────────────── */
function runCyberFX() {
  const fx = $("#cyber-fx");
  fx.classList.remove("run"); void fx.offsetWidth;   // restart the animation
  fx.classList.add("run");
  Sound.play("chime");
  setTimeout(() => fx.classList.remove("run"), 900);
}

/* ─────────────────────── Feature overlays (generic) ─────────────────── */
function openFeature(id) {
  Sound.play("open");
  const el = $("#" + id); el.classList.remove("hidden");
  requestAnimationFrame(() => el.classList.add("open"));
  if (id === "jarvis" && !$("#jarvis-log").childElementCount) jarvisGreet();
  if (id === "browser") { /* lazy-load on open */ browserGo($("#browser-url").value); }
}
function closeFeature(el) { el.classList.remove("open"); setTimeout(() => el.classList.add("hidden"), 400); if (el.id === "browser") $("#browser-frame").src = "about:blank"; }
function closeAllFeatures() { $$(".feature-overlay").forEach(el => { if (!el.classList.contains("hidden")) closeFeature(el); }); }

/* ─────────────────────────── Gallery ────────────────────────────────── */
function buildGallery() {
  const grid = $("#gallery-grid"); grid.innerHTML = "";
  SCENES.forEach(s => {
    const tile = document.createElement("button");
    tile.className = "gallery-tile" + (s.id === settings.scene ? " active" : "");
    tile.dataset.scene = s.id;
    let bg = "", hint = "";
    if (s.type === "css") bg = s.css;
    else if (s.type === "photo") {
      // don't reference the file in CSS (avoids a 404 when it's absent);
      // applyScene() loads it via JS and falls back gracefully if missing.
      bg = "radial-gradient(circle at 50% 42%, rgba(240,208,120,.25), #14265e 45%, #060c22 82%)";
      hint = `<span class="gt-hint">★</span>`;
    } else bg = "radial-gradient(circle at 50% 40%, #1a2e6e, #0a1436 70%)";
    tile.style.background = bg;
    tile.innerHTML = `${hint}<span class="gt-label">${s.label}</span>`;
    tile.addEventListener("click", () => { Sound.play("tap"); applyScene(s.id); toast(s.label + " background applied"); });
    grid.appendChild(tile);
  });
}

/* ─────────────────────────── Settings ───────────────────────────────── */
function buildSettings() {
  $("#set-user").value = settings.user === "guest" ? "" : settings.user;
  $("#set-vol").value = settings.volume; $("#vol-val").textContent = settings.volume + "%";
  const sw = $("#color-swatches"); sw.innerHTML = "";
  THEMES.forEach(t => {
    const b = document.createElement("button");
    b.className = "swatch" + (t.color === settings.accent ? " active" : "");
    b.style.background = t.color; b.style.color = t.color; b.dataset.color = t.color;
    b.addEventListener("click", () => { Sound.play("tap"); settings.accent = t.color; applyAccent(t.color); $$("#color-swatches .swatch").forEach(s => s.classList.toggle("active", s.dataset.color === t.color)); });
    sw.appendChild(b);
  });
  const seg = $("#iconstyle-opts"); seg.innerHTML = "";
  [["line","Outline"],["solid","Filled"]].forEach(([v, lbl]) => {
    const b = document.createElement("button");
    b.className = "seg-opt" + (v === settings.iconStyle ? " active" : ""); b.textContent = lbl; b.dataset.v = v;
    b.addEventListener("click", () => { Sound.play("tap"); settings.iconStyle = v; applyIconStyle(v); $$("#iconstyle-opts .seg-opt").forEach(o => o.classList.toggle("active", o.dataset.v === v)); });
    seg.appendChild(b);
  });
  $("#set-vol").oninput = (e) => { settings.volume = +e.target.value; $("#vol-val").textContent = settings.volume + "%"; };
  $("#set-vol").onchange = () => Sound.play("tap");
}
function saveSettings() {
  settings.user = $("#set-user").value.trim() || "guest";
  const pass = $("#set-pass").value;
  store.set("volume", settings.volume); store.set("accent", settings.accent);
  store.set("iconStyle", settings.iconStyle); store.set("user", settings.user);
  if (pass) store.set("passSet", true);   // note: demo only — do not store real passwords in a kiosk
  Sound.play("open"); toast("Settings saved");
}
function resetSettings() {
  settings.volume = 70; settings.accent = THEMES[0].color; settings.iconStyle = "line"; settings.user = "guest";
  ["volume","accent","iconStyle","user","passSet"].forEach(k => store.set(k, k === "volume" ? 70 : k === "accent" ? THEMES[0].color : k === "iconStyle" ? "line" : k === "user" ? "guest" : false));
  applyAccent(settings.accent); applyIconStyle(settings.iconStyle); buildSettings();
  toast("Settings reset");
}

/* ─────────────────── Jarvis / Brother Thomas (offline) ───────────────── */
function jarvisSay(cls, text) {
  const log = $("#jarvis-log");
  const div = document.createElement("div"); div.className = "j-msg " + cls; div.textContent = text;
  log.appendChild(div); log.scrollTop = log.scrollHeight;
}
function jarvisGreet() {
  jarvisSay("bot", `Peace be with you. I am ${ASSISTANT_NAME}, your ministry assistant. Ask me about our leadership, branches, history, or how to use this directory.`);
}
function jarvisReply(q) {
  const t = q.toLowerCase();
  const c = CONTENT.church;
  if (/hello|hi|peace|good (morning|evening|afternoon)/.test(t)) return "Peace be with you! How may I help you today?";
  if (/apostle|leader|chief|minister|ferriol/.test(t)) return `Our Chief Executive Minister is ${CONTENT.sections[0].items[0].name}. The church was founded in ${c.founded} by Apostle Arsenio T. Ferriol.`;
  if (/bishop/.test(t)) return "You can view the Bishops from the BISHOPS icon on the dashboard. Add their names in the content file to complete their profiles.";
  if (/branch|country|location|where|middle east|asia|dubai|philippines/.test(t)) return `We have congregations in ${c.countries}. Open the BRANCHES icon to browse regions and countries.`;
  if (/history|found|1972|began|start/.test(t)) return `The PMCC (4th Watch) was founded in ${c.founded} in the Philippines and has grown into a global fellowship. Tap HISTORY to read the timeline.`;
  if (/member|how many|people/.test(t)) return `The church has ${c.members} across ${c.countries}.`;
  if (/head ?quarter|based|office/.test(t)) return `Our headquarters is in ${c.headquarters}.`;
  if (/4th watch|fourth watch|watch mean|name mean/.test(t)) return c.meaningOf4thWatch;
  if (/believe|doctrine|teach|baptism|holy spirit/.test(t)) return c.doctrineSummary;
  if (/motto|tagline|mission|vision/.test(t)) return `Our guiding call is: “${c.tagline}.”`;
  if (/background|wallpaper|theme|color|gallery/.test(t)) return "Open MENU ▸ Gallery to change the background, or MENU ▸ Settings to change the accent color and icons.";
  if (/help|how|use|navigate/.test(t)) return "Tap the center logo to reveal the icons. Drag an icon to move it, or hold/tap it to open a section. Use the MENU for Gallery, Settings, me, the Browser, and Search.";
  if (/thank/.test(t)) return "You are most welcome. God bless you!";
  if (/name|who are you/.test(t)) return `I am ${ASSISTANT_NAME}, here to help you explore the PMCC (4th Watch) directory.`;
  return `I'm still learning. Try asking me about our Apostle, Bishops, Branches, History, or how to use this screen. (You can teach me more in app.js → jarvisReply.)`;
}
$("#jarvis-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = $("#jarvis-text"), q = input.value.trim(); if (!q) return;
  jarvisSay("me", q); input.value = ""; Sound.play("tap");
  setTimeout(() => { jarvisSay("bot", jarvisReply(q)); Sound.play("open"); }, 420);
});

/* ─────────────────────────── Browser ────────────────────────────────── */
function normalizeUrl(u) {
  u = u.trim(); if (!u) return "https://pmcc4thwatch.org/";
  if (!/^https?:\/\//.test(u)) { if (u.includes(" ") || !u.includes(".")) return "https://duckduckgo.com/?q=" + encodeURIComponent(u); u = "https://" + u; }
  return u;
}
let browserLast = "https://pmcc4thwatch.org/";
function browserGo(u) {
  const url = normalizeUrl(u); browserLast = url;
  $("#browser-url").value = url;
  $("#browser-fallback").classList.add("hidden");
  const frame = $("#browser-frame"); frame.classList.remove("hidden");
  frame.src = url;
  clearTimeout(browserGo._t);
  // if the frame is still blank after a moment (X-Frame-Options / offline), show fallback
  browserGo._t = setTimeout(() => {
    try { if (!frame.contentDocument && frame.src !== "about:blank") showBrowserFallback(); }
    catch { /* cross-origin = it likely loaded fine */ }
  }, 3500);
  frame.onerror = showBrowserFallback;
}
function showBrowserFallback() { $("#browser-fallback").classList.remove("hidden"); }
$("#browser-form").addEventListener("submit", (e) => { e.preventDefault(); Sound.play("tap"); browserGo($("#browser-url").value); });
$("#browser-newtab").addEventListener("click", () => { Sound.play("tap"); window.open(browserLast, "_blank", "noopener"); });
$("#browser-open2").addEventListener("click", () => { Sound.play("tap"); window.open(browserLast, "_blank", "noopener"); });

/* ─────────────────────────── Search ─────────────────────────────────── */
function buildSearchIndex() {
  const idx = [];
  CONTENT.sections.forEach(sec => {
    idx.push({ kind: "Section", label: sec.label, sub: sec.subtitle, icon: sec.icon, open: () => openSection(sec, iconEl(sec.id)) });
    sec.items.forEach((it, i) => idx.push({ kind: sec.label, label: it.name, sub: it.position || "", icon: sec.icon, open: () => { openSection(sec, iconEl(sec.id)); setTimeout(() => renderItem(sec, i), 60); } }));
  });
  idx.push({ kind: "Section", label: "BRANCHES", sub: "Global congregations", icon: "branches", open: () => openBranches(iconEl("branches")) });
  CONTENT.branches.forEach(r => {
    idx.push({ kind: "Region", label: r.region, sub: r.countries.length + " countries", icon: "branches", open: () => openBranches(iconEl("branches")) });
    r.countries.forEach(c => idx.push({ kind: "Branch · " + r.region, label: c, sub: "Country", icon: "branches", open: () => openBranches(iconEl("branches")) }));
  });
  MENU.forEach(m => idx.push({ kind: "Menu", label: m.label, sub: m.sub, icon: m.icon, open: () => onMenu(m.id) }));
  return idx;
}
function iconEl(id) { return $(`.orbit-icon[data-section="${id}"]`); }
let SEARCH_INDEX = [];
function openSearch() {
  Sound.play("open");
  const s = $("#search"); s.classList.remove("hidden");
  requestAnimationFrame(() => s.classList.add("open"));
  $("#search-input").value = ""; $("#search-results").innerHTML = "";
  setTimeout(() => $("#search-input").focus(), 200);
}
function closeSearch() { const s = $("#search"); s.classList.remove("open"); setTimeout(() => s.classList.add("hidden"), 350); }
function runSearch(q) {
  const res = $("#search-results"); res.innerHTML = "";
  const term = q.trim().toLowerCase(); if (!term) return;
  const hits = SEARCH_INDEX.filter(e => (e.label + " " + e.sub + " " + e.kind).toLowerCase().includes(term)).slice(0, 12);
  if (!hits.length) { res.innerHTML = `<li class="sr-empty">No matches for “${q}”.</li>`; return; }
  hits.forEach((h, i) => {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.className = "sr-item"; b.style.animationDelay = `${i * 30}ms`;
    b.innerHTML = `<span class="sr-glyph">${svg(ICONS[h.icon] || ICONS.search)}</span><span>${h.label}<span class="sr-sub">${h.kind}${h.sub ? " · " + h.sub : ""}</span></span>`;
    b.addEventListener("click", () => { Sound.play("tap"); closeSearch(); if (!orbitExpanded) setOrbit(true); setTimeout(() => h.open && h.open(), 260); });
    li.appendChild(b); res.appendChild(li);
  });
}
$("#search-input").addEventListener("input", (e) => runSearch(e.target.value));

/* ─────────────────── Pinch-to-stretch ("hologram zoom") ──────────────── */
const zoomBadge = $("#zoom-badge"); let badgeTimer = null;
function flashZoom(v) { zoomBadge.textContent = `${Math.round(v*100)}%`; zoomBadge.classList.add("show"); clearTimeout(badgeTimer); badgeTimer = setTimeout(() => zoomBadge.classList.remove("show"), 900); }
function stageZoom() { return parseFloat(getComputedStyle($("#orbit-stage")).getPropertyValue("--zoom")) || 1; }
function makeStretchable(surface, applyZoom, { min = .6, max = 1.8, wheelNeedsCtrl = false } = {}) {
  let zoom = 1; const pointers = new Map(); let d0 = 0, z0 = 1, lastTap = 0;
  const apply = (z) => { zoom = Math.min(max, Math.max(min, z)); applyZoom(zoom); flashZoom(zoom); };
  surface.addEventListener("pointerdown", (e) => {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 2) { const [a, b] = [...pointers.values()]; d0 = Math.hypot(a.x-b.x, a.y-b.y); z0 = zoom; }
    const now = performance.now();
    if (pointers.size === 1 && now - lastTap < 350 && !e.target.closest(".orbit-icon, .hub, button, .list-chip, input")) { apply(1); Sound.play("tap"); }
    lastTap = now;
  });
  surface.addEventListener("pointermove", (e) => {
    if (!pointers.has(e.pointerId)) return; pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 2 && d0 > 0) { const [a, b] = [...pointers.values()]; apply(z0 * (Math.hypot(a.x-b.x, a.y-b.y) / d0)); }
  });
  const lift = (e) => { pointers.delete(e.pointerId); if (pointers.size < 2) d0 = 0; };
  surface.addEventListener("pointerup", lift); surface.addEventListener("pointercancel", lift); surface.addEventListener("pointerleave", lift);
  surface.addEventListener("wheel", (e) => { if (wheelNeedsCtrl && !e.ctrlKey) return; e.preventDefault(); apply(zoom * (e.deltaY < 0 ? 1.07 : .93)); }, { passive: false });
  return { reset: () => { zoom = 1; applyZoom(1); } };
}
const stageStretch = makeStretchable($("#orbit-stage"), (z) => $("#orbit-stage").style.setProperty("--zoom", z.toFixed(3)), { min: .65, max: 1.6 });
const panelStretch = makeStretchable($("#panel .panel-shell"), (z) => { $("#panel .panel-content").style.zoom = z.toFixed(3); }, { min: .8, max: 1.7, wheelNeedsCtrl: true });

/* ─────────────────────────── HUD clock ──────────────────────────────── */
function tickClock() {
  const now = new Date();
  $("#hud-clock").textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  $("#hud-date").textContent = now.toLocaleDateString([], { weekday: "long", year: "numeric", month: "long", day: "numeric" }).toUpperCase();
}

/* ───────────────────────── Boot sequence ────────────────────────────── */
const BOOT = [ [10,"INITIALIZING…"], [30,"LOADING INTERFACE…"], [52,"PREPARING SCENE…"], [74,"SYNCING DIRECTORY…"], [93,"RENDERING NETWORK…"], [100,"WELCOME"] ];
function boot() {
  buildOrbit(); buildDock(); buildGallery(); buildSettings();
  SEARCH_INDEX = buildSearchIndex();
  applyScene(settings.scene);
  tickClock(); setInterval(tickClock, 1000);
  updateMuteButton();
  let step = 0; const bar = $("#loader-progress"), status = $("#loader-status");
  const advance = () => { if (step >= BOOT.length) return finishBoot(); const [p, l] = BOOT[step++]; bar.style.width = p + "%"; status.textContent = l; setTimeout(advance, 420 + Math.random()*280); };
  setTimeout(advance, 500);
}
function finishBoot() {
  setTimeout(() => {
    $("#loader").classList.add("done");
    const dash = $("#dashboard"); dash.classList.remove("hidden");
    requestAnimationFrame(() => { layoutOrbit(); dash.classList.add("visible"); });
    Sound.play("boot");
  }, 500);
}

/* ─────────────────────────── Wire-up ────────────────────────────────── */
$(".hub-core").addEventListener("click", () => setOrbit(!orbitExpanded));
$$("[data-close]").forEach(el => el.addEventListener("click", closeOverlay));
$$("[data-feature-close]").forEach(el => el.addEventListener("click", (e) => closeFeature(e.target.closest(".feature-overlay"))));
$$("[data-search-close]").forEach(el => el.addEventListener("click", closeSearch));
$("#btn-save-settings").addEventListener("click", saveSettings);
$("#btn-reset-settings").addEventListener("click", resetSettings);
$("#btn-update").addEventListener("click", () => { $("#update-status").textContent = "Checking…"; Sound.play("tap"); setTimeout(() => { $("#update-status").textContent = "You’re up to date · v2.0"; toast("No updates available — you're current"); }, 1200); });

addEventListener("pointerdown", () => Sound.ensure(), { once: true });
addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!$("#search").classList.contains("hidden")) return closeSearch();
    const openFeat = $$(".feature-overlay").find(el => !el.classList.contains("hidden"));
    if (openFeat) return closeFeature(openFeat);
    if (activeOverlay) return closeOverlay();
    return setOrbit(false);
  }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); }
});

boot();
