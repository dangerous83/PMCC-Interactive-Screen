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
          // PHOTO: drop the file at this path and it appears automatically.
          image: "assets/bishop-aldrin-palanca.jpg",
          location: "Dubai, United Arab Emirates",
          description: "A bishop associated with the Middle East District. He spoke on behalf of the church during the 50th (Golden) Anniversary celebration in 2023.",
          ministryRole: "Provides episcopal oversight for the Middle East District — shepherding pastors and local churches, guiding worship and discipleship, and representing the church at regional gatherings.",
          assignment: "Middle East District — overseeing congregations across the Gulf region and supporting multiple branch churches.",
          messages: ["Watchmen of the Fourth Watch", "Faith Across the Nations", "The Church Christ Builds", "Standing Firm in a Foreign Land"],
          contact: { Email: "middleeast@pmcc4thwatch.org", Office: "Sun–Thu · 9:00 AM – 5:00 PM (GST)", Branch: "PMCC (4th Watch) Dubai" },
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
        { name: "Presbyter Elleza Palanca", position: "Presbyter · Middle East District",
          // PHOTO: drop the file at this path and it appears automatically.
          image: "assets/presbyter-elleza-palanca.jpg",
          location: "Dubai, United Arab Emirates",
          description: "Serves as a presbyter in the Middle East District, supporting pastoral care, women's and youth ministries, and the growth of local congregations across the Gulf region.",
          extra: { District: "Middle East" } },
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
      // SAMPLE elders (dummy data) — replace names/details with your real elders.
      items: [
        { name: "Elder Nathaniel Cruz", position: "Elder · Worship Ministry", location: "Dubai, UAE",
          description: "Sample elder profile. Oversees the worship and music ministry of the local church and mentors the praise team.",
          ministryRole: "Leads worship ministry, service planning, and the spiritual care of the music team.",
          assignment: "Main regional church, supporting midweek and weekend services.",
          messages: ["A Heart of Worship", "Serving in Spirit and Truth"],
          contact: { Email: "worship@pmcc4thwatch.org", Office: "By appointment", Branch: "PMCC (4th Watch) Dubai" },
          extra: { Ministry: "Worship" } },
        { name: "Elder Peter Villamor", position: "Elder · Discipleship", location: "Manila, Philippines",
          description: "Sample elder profile. Leads discipleship classes and small-group pastoral care for new believers.",
          ministryRole: "Guides discipleship, new-members classes, and small-group leaders.",
          assignment: "Main church discipleship program and satellite groups.",
          extra: { Ministry: "Discipleship" } },
        { name: "Elder Ruth Delos Santos", position: "Elder · Women's Ministry", location: "Toronto, Canada",
          description: "Sample elder profile. Coordinates the women's ministry, prayer groups, and community outreach.",
          ministryRole: "Coordinates women's ministry, prayer, and outreach initiatives.",
          assignment: "Canada District — Toronto locale and surrounding groups.",
          extra: { Ministry: "Women's Ministry" } },
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

  /* ═════════════════ TESTIMONIES — sample dummy data (edit) ══════════ */
  testimonies: [
    { name: "Sister Maria Santos", role: "Member · Dubai", date: "2025",
      text: "I came to the 4th Watch broken and searching. Through the teaching of the Word and the love of the brethren, God restored my family and gave me a living hope. I am forever grateful." },
    { name: "Brother David Reyes", role: "Youth · Manila", date: "2024",
      text: "As a young man I was lost in the world. The youth ministry welcomed me, discipled me, and showed me my purpose in Christ. Today I serve joyfully in the media ministry." },
    { name: "Sister Grace Almazan", role: "Member · Toronto", date: "2025",
      text: "Far from home, I found a family in the Canada District. The Lord provided work, community, and a deeper walk of faith — truly He watches over us in the fourth watch of the night." },
    { name: "Brother Samuel Cruz", role: "Member · Riyadh", date: "2024",
      text: "God healed me when the doctors had given up. I testify that the same Jesus who walked on the sea still moves today. To Him be all the glory." },
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
  directory: `<path d="M5 5.5A2 2 0 0 1 7 4h4.5v16H7a2 2 0 0 0-2 1.2z"/><path d="M19 5.5A2 2 0 0 0 17 4h-4.5v16H17a2 2 0 0 1 2 1.2z"/><path d="M8 8h2M14 8h2M8 11h2M14 11h2"/>`,
  testimonies: `<path d="M5 5h14a1.6 1.6 0 0 1 1.6 1.6v8A1.6 1.6 0 0 1 19 16.2H10l-4 3.4V16.2H5A1.6 1.6 0 0 1 3.4 14.6V6.6A1.6 1.6 0 0 1 5 5z"/><path d="M8.2 10.4h.01M12 10.4h.01M15.8 10.4h.01"/>`,
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
  // ── Brother Thomas / OpenJarvis (local AI) ──────────────────────────
  jarvisEnabled:  store.get("jarvisEnabled", false),
  jarvisEndpoint: store.get("jarvisEndpoint", "http://localhost:8000/v1/chat/completions"),
  jarvisModel:    store.get("jarvisModel", ""),
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

/* Fixed, organized arrangement (deg: 0=right, 90=bottom, -90=top, 180=left):
   Apostle top-center; Bishops↔Presbyters upper pair; Pastors↔Elders lower
   pair; Branches↔History bottom pair. */
const ORBIT_ANGLES = {
  apostle:   -90,
  bishops:  -142, presbyters: -38,
  pastors:   142, elders:      38,
  branches:  108, history:     72,
};

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
  const rx = Math.min(w/2 - iconSize*0.8, w*0.40);
  // size vertical radius so the top (Apostle) and deepest bottom icons
  // (Branches/History, sin≈0.95) both stay clear of edges and the dock
  const ryTop = cy - iconSize*0.5 - 10;
  const ryBot = (h - Math.max(230, iconSize*1.3 + 96) - iconSize*0.5 - cy) / 0.96;
  const ry = Math.max(120, Math.min(ryTop, ryBot));
  // move the center hub to match the icon/link center
  const hub = $(".hub"); if (hub) hub.style.top = `${cy}px`;
  $("#orbit-links").setAttribute("viewBox", `0 0 ${w} ${h}`);
  icons.forEach((btn, i) => {
    const aDeg = ORBIT_ANGLES[btn.dataset.section];
    const ang = ((aDeg != null ? aDeg : -90 + i * 360 / n)) * Math.PI / 180;
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
}

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
  if (sec.isBranches) return openGlobe(btn);          // interactive globe
  if (sec.id === "history") return openSection(sec, btn);  // timeline panel
  return openIconMenu(sec, btn);                      // name dropdown → profile
}

/* ── Per-icon name dropdown (click a leadership icon → its names) ──────── */
function openIconMenu(sec, btn) {
  const menu = $("#icon-menu");
  const items = (CONTENT.sections.find(s => s.id === sec.id)?.items || []).filter(i => i.confidence !== "placeholder");
  menu.innerHTML =
    `<div class="im-head"><span class="im-ico">${svg(ICONS[sec.icon] || ICONS.apostle)}</span><span class="im-title">${sec.label}</span><span class="im-count">${items.length}</span></div>` +
    `<div class="im-list">` + (items.length ? items.map((it, i) =>
      `<button class="im-row" data-i="${i}">${avatarHTML(it, sec.id)}<span class="im-txt"><span class="im-name">${esc(it.name)}</span><span class="im-sub">${esc(it.position || "")}</span></span><span class="im-chev"><svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button>`
    ).join("") : `<p class="dir-empty">No entries yet — add them in app.js → CONTENT.</p>`) + `</div>`;
  menu.querySelectorAll(".im-row").forEach(r => r.addEventListener("click", () => { const i = +r.dataset.i; closeIconMenu(); setTimeout(() => dirOpenProfile(sec.id, i), 120); }));
  menu.classList.remove("hidden");
  positionIconMenu(menu, btn);
  Sound.play("open");
  requestAnimationFrame(() => menu.classList.add("open"));
}
function positionIconMenu(menu, btn) {
  const m = 16, r = btn.getBoundingClientRect();
  const mw = menu.offsetWidth, mh = menu.offsetHeight;
  let left = Math.max(m, Math.min(r.left + r.width / 2 - mw / 2, innerWidth - mw - m));
  let top, origin;
  if (r.bottom + 12 + mh <= innerHeight - m) { top = r.bottom + 12; origin = "top"; }
  else if (r.top - 12 - mh >= m) { top = r.top - 12 - mh; origin = "bottom"; }
  else { top = Math.max(m, Math.min(r.top, innerHeight - mh - m)); origin = "center"; }
  menu.style.left = left + "px"; menu.style.top = top + "px";
  menu.style.transformOrigin = `${Math.round(r.left + r.width / 2 - left)}px ${origin === "bottom" ? "100%" : origin === "center" ? "50%" : "0"}`;
}
function closeIconMenu() { const m = $("#icon-menu"); if (m.classList.contains("hidden")) return; m.classList.remove("open"); setTimeout(() => m.classList.add("hidden"), 200); }

/* ══════════════════════════════════════════════════════════════════════
   INTERACTIVE GLOBE (Branches)
   Rotating orthographic globe with glowing branch points. Tap a point (or
   search) → its info shows on the left. Drag to spin; auto-rotates idle.
   Add real branch details in COORDS below.
   ══════════════════════════════════════════════════════════════════════ */
const Globe = (() => {
  // approximate [lat, lng] per country in CONTENT.branches
  const COORDS = {
    "Dubai":[25.2,55.3],"Abu Dhabi":[24.45,54.37],"Turkey":[39,35],"Jordan":[31,36],
    "Lebanon":[33.9,35.5],"Israel":[31.5,34.8],"Syria":[35,38],"Qatar":[25.3,51.2],
    "Saudi Arabia":[24,45],"Kuwait":[29.3,47.9],"Yemen":[15.5,48],"Iran":[32,53],
    "China":[35,105],"Japan":[36,138],"Mongolia":[46,105],"North Korea":[40,127],
    "South Korea":[36.5,128],"Taiwan":[23.7,121],"Afghanistan":[33,66],"Bangladesh":[23.7,90],
    "Bhutan":[27.5,90.4],"India":[22,79],"Maldives":[3.2,73],"Nepal":[28,84],
    "Pakistan":[30,70],"Sri Lanka":[7.9,80.8],"USA":[39,-98],"Canada":[56,-106],
    "Australia":[-25,133],"Netherlands":[52.3,5.6],"Philippines":[12.9,121.8],
  };
  let canvas, ctx, raf = 0, W = 0, H = 0, R = 0, cx = 0, cy = 0, dpr = 1;
  let yaw = 0, pitch = 0.28, auto = true, dragging = false, lastX = 0, lastY = 0, moved = 0, t = 0;
  let points = [], screen = [], selected = -1, targetYaw = null, targetPitch = null, resumeTimer = 0, inited = false;

  function buildPoints() {
    points = [];
    (CONTENT.branches || []).forEach(r => r.countries.forEach(c => {
      const k = COORDS[c]; if (k) points.push({ name: c, region: r.region, lat: k[0], lng: k[1] });
    }));
  }
  function project(latDeg, lngDeg) {
    const f = latDeg * Math.PI / 180, l = lngDeg * Math.PI / 180 + yaw;
    const x0 = Math.cos(f) * Math.sin(l), y0 = Math.sin(f), z0 = Math.cos(f) * Math.cos(l);
    const cp = Math.cos(pitch), sp = Math.sin(pitch);
    return { x: cx + x0 * R, y: cy - (y0 * cp - z0 * sp) * R, z: y0 * sp + z0 * cp };
  }
  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = rect.width; H = rect.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    R = Math.min(W, H) * 0.4; cx = W / 2; cy = H / 2;
  }
  function meridian(lng) { ctx.beginPath(); let on = false; for (let la = -90; la <= 90; la += 4) { const s = project(la, lng); if (s.z > 0) { on ? ctx.lineTo(s.x, s.y) : ctx.moveTo(s.x, s.y); on = true; } else on = false; } ctx.stroke(); }
  function parallel(lat) { ctx.beginPath(); let on = false; for (let ln = -180; ln <= 180; ln += 4) { const s = project(lat, ln); if (s.z > 0) { on ? ctx.lineTo(s.x, s.y) : ctx.moveTo(s.x, s.y); on = true; } else on = false; } ctx.stroke(); }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    let g = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.3);
    g.addColorStop(0, "rgba(232,198,106,0)"); g.addColorStop(0.72, "rgba(232,198,106,0.06)"); g.addColorStop(1, "rgba(232,198,106,0)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R * 1.3, 0, 7); ctx.fill();
    const sg = ctx.createRadialGradient(cx - R * 0.32, cy - R * 0.32, R * 0.1, cx, cy, R);
    sg.addColorStop(0, "#213a80"); sg.addColorStop(0.6, "#0e1c48"); sg.addColorStop(1, "#070f2a");
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.fillStyle = sg; ctx.fill();
    ctx.lineWidth = 1.5; ctx.strokeStyle = "rgba(232,198,106,0.5)"; ctx.stroke();
    ctx.lineWidth = 1; ctx.strokeStyle = "rgba(232,198,106,0.13)";
    for (let ln = -180; ln < 180; ln += 30) meridian(ln);
    for (let la = -60; la <= 60; la += 30) parallel(la);
    screen = [];
    const sc = R / 300;
    points.forEach((p, i) => {
      const s = project(p.lat, p.lng); if (s.z <= 0.02) return;
      screen.push({ i, x: s.x, y: s.y });
      const depth = 0.55 + 0.45 * s.z, pulse = 0.5 + 0.5 * Math.sin(t * 2 + i), pr = (i === selected ? 6 : 4) * depth * sc;
      ctx.beginPath(); ctx.arc(s.x, s.y, pr * 3.2, 0, 7); ctx.fillStyle = `rgba(255,220,140,${(0.09 + 0.10 * pulse) * depth})`; ctx.fill();
      ctx.beginPath(); ctx.arc(s.x, s.y, pr, 0, 7); ctx.fillStyle = i === selected ? "#fff2c8" : "#f0cf7a"; ctx.fill();
      if (i === selected) {
        ctx.beginPath(); ctx.arc(s.x, s.y, pr * 2.4, 0, 7); ctx.strokeStyle = "rgba(255,240,200,0.9)"; ctx.lineWidth = 2; ctx.stroke();
        ctx.font = `600 ${Math.round(13 * sc)}px "Segoe UI",Arial`; ctx.fillStyle = "#fff8ea"; ctx.textAlign = "center";
        ctx.fillText(p.name, s.x, s.y - pr * 2.4 - 8);
      }
    });
  }
  function frame() {
    t += 0.016;
    if (targetYaw != null) { yaw += (targetYaw - yaw) * 0.09; if (Math.abs(targetYaw - yaw) < 0.002) { yaw = targetYaw; targetYaw = null; } }
    else if (auto && !dragging) yaw += 0.0022;
    if (targetPitch != null) { pitch += (targetPitch - pitch) * 0.09; if (Math.abs(targetPitch - pitch) < 0.002) { pitch = targetPitch; targetPitch = null; } }
    draw(); raf = requestAnimationFrame(frame);
  }
  function hit(mx, my) { let b = -1, bd = 1e9; screen.forEach(s => { const d = Math.hypot(s.x - mx, s.y - my); if (d < bd) { bd = d; b = s.i; } }); return bd <= 24 ? b : -1; }
  function flyTo(i) { const p = points[i]; targetYaw = -p.lng * Math.PI / 180; targetPitch = Math.max(-0.6, Math.min(0.6, p.lat * Math.PI / 180)); }
  function pause() { auto = false; clearTimeout(resumeTimer); resumeTimer = setTimeout(() => auto = true, 5000); }
  function select(i) { selected = i; renderInfo(); if (i >= 0) Sound.play("tap"); }
  function renderInfo() {
    const box = $("#globe-info");
    if (selected < 0) { box.innerHTML = `<div class="gi-empty">🌍 Tap a glowing point on the globe to open that branch — or search a country above. Drag to spin the globe.</div>`; return; }
    const p = points[selected];
    box.innerHTML =
      `<div class="gi-region">${esc(p.region)}</div><div class="gi-name">${esc(p.name)}</div><div class="gi-divider"></div>` +
      `<dl class="gi-field"><dt>Congregation</dt><dd>PMCC (4th Watch) ${esc(p.name)}</dd></dl>` +
      `<dl class="gi-field"><dt>Region</dt><dd>${esc(p.region)}</dd></dl>` +
      `<dl class="gi-field"><dt>Services</dt><dd>—</dd></dl>` +
      `<dl class="gi-field"><dt>Contact</dt><dd>—</dd></dl>` +
      `<p class="gi-note">Editable placeholder — add this branch's address, service times and contact in <code>app.js</code>.</p>`;
  }
  function doSearch(q) {
    q = (q || "").trim().toLowerCase(); if (!q) return;
    const i = points.findIndex(p => p.name.toLowerCase().includes(q) || p.region.toLowerCase().includes(q));
    if (i >= 0) { select(i); flyTo(i); pause(); } else toast(`No branch matches “${q}”`);
  }
  function init() {
    if (inited) return; inited = true;
    canvas = $("#globe-canvas"); ctx = canvas.getContext("2d"); buildPoints();
    canvas.addEventListener("pointerdown", e => { dragging = true; auto = false; moved = 0; lastX = e.clientX; lastY = e.clientY; try { canvas.setPointerCapture(e.pointerId); } catch {} });
    canvas.addEventListener("pointermove", e => { if (!dragging) return; const dx = e.clientX - lastX, dy = e.clientY - lastY; lastX = e.clientX; lastY = e.clientY; moved += Math.abs(dx) + Math.abs(dy); yaw += dx * 0.006; pitch = Math.max(-0.7, Math.min(0.7, pitch + dy * 0.006)); targetYaw = targetPitch = null; });
    canvas.addEventListener("pointerup", e => { dragging = false; try { canvas.releasePointerCapture(e.pointerId); } catch {} const r = canvas.getBoundingClientRect(); if (moved < 7) { const i = hit(e.clientX - r.left, e.clientY - r.top); if (i >= 0) { select(i); flyTo(i); } } pause(); });
    $("#globe-search-form").addEventListener("submit", e => { e.preventDefault(); doSearch($("#globe-search").value); });
    addEventListener("resize", () => { if (!$("#globe").classList.contains("hidden")) resize(); });
  }
  function start() { init(); selected = -1; renderInfo(); resize(); if (!raf) frame(); }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
  return { start, stop };
})();
function openGlobe() { Sound.play("open"); const el = $("#globe"); el.classList.remove("hidden"); requestAnimationFrame(() => el.classList.add("open")); Globe.start(); }

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
  // show the person's photo when available (falls back to the icon glyph)
  const frame = $("#panel .media-frame");
  let img = frame.querySelector(".media-photo");
  if (item.image) {
    if (!img) { img = document.createElement("img"); img.className = "media-photo"; img.alt = ""; img.onerror = () => img.remove(); frame.insertBefore(img, frame.firstChild); }
    img.src = item.image;
  } else if (img) { img.remove(); }
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
  { id: "directory",label: "DIRECTORY",sub: "Bishops · Pastors · Elders · Testimonies", icon: "directory" },
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
    b.addEventListener("click", () => onMenu(m.id, b));
    if (m.id === "directory") dirDockBtn = b;
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
function onMenu(id, anchor) {
  Sound.play("tap");
  if (id === "home")     { closeOverlay(); closeAllFeatures(); closeSearch(); closeDirDropdown(); closeProfile(); setOrbit(false); }
  else if (id === "directory") toggleDirDropdown(anchor);
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
function closeFeature(el) { el.classList.remove("open"); setTimeout(() => el.classList.add("hidden"), 400); if (el.id === "browser") $("#browser-frame").src = "about:blank"; if (el.id === "globe") Globe.stop(); }
function closeAllFeatures() { $$(".feature-overlay").forEach(el => { if (!el.classList.contains("hidden")) closeFeature(el); }); }

/* ══════════════════════════════════════════════════════════════════════
   DIRECTORY FLOW
   MainIcon (dock) → CategoryDropdown → NameList → ProfileModal → Accordion
   A clean, self-contained browse experience. Categories are the four
   requested: Bishops · Pastors · Elders · Testimonies.
   ══════════════════════════════════════════════════════════════════════ */
let dirDockBtn = null;                 // the DIRECTORY dock button (anchor)
const DIR_CATEGORIES = [
  { id: "bishops",     label: "Bishops",     icon: "bishops" },
  { id: "presbyters",  label: "Presbyters",  icon: "presbyters" },
  { id: "pastors",     label: "Pastors",     icon: "pastors" },
  { id: "elders",      label: "Elders",      icon: "elders" },
  { id: "testimonies", label: "Testimonies", icon: "testimonies" },
];
// small line-icons for the profile accordion sections
const DIR_ICONS = {
  about:      `<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.6v.01"/>`,
  role:       `<rect x="3.5" y="7.5" width="17" height="12" rx="2"/><path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3.5 12.5h17"/>`,
  assignment: `<path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10z"/><circle cx="12" cy="11" r="2.2"/>`,
  messages:   `<path d="M6 4h9a3 3 0 0 1 3 3v13H8a2 2 0 0 1-2-2z"/><path d="M9 8.5h6M9 12h6M9 15.5h4"/>`,
  gallery:    ICONS.gallery,
  contact:    `<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4.2 7l7.8 6 7.8-6"/>`,
};

const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// people for a category (excludes editable placeholders); testimonies pass through
function dirItems(catId) {
  if (catId === "testimonies") return CONTENT.testimonies || [];
  const sec = CONTENT.sections.find(s => s.id === catId);
  return sec ? sec.items.filter(i => i.confidence !== "placeholder") : [];
}
// avatar: person photo when present (fails over to the category glyph)
function avatarHTML(person, glyphKey) {
  const glyph = svg(ICONS[glyphKey] || ICONS.apostle);
  return person && person.image
    ? `<span class="ava"><img src="${person.image}" alt="" onerror="this.remove()">${glyph}</span>`
    : `<span class="ava">${glyph}</span>`;
}

/* ── CategoryDropdown ────────────────────────────────────────────────── */
function buildDirDropdown() {
  const dd = $("#dir-dropdown"); dd.innerHTML = "";
  DIR_CATEGORIES.forEach(c => {
    const n = dirItems(c.id).length;
    const b = document.createElement("button");
    b.className = "dir-drop-item"; b.setAttribute("role", "menuitem");
    b.innerHTML = `<span class="ddi-icon">${svg(ICONS[c.icon])}</span><span class="ddi-label">${c.label}</span><span class="ddi-count">${n}</span>`;
    b.addEventListener("click", () => { closeDirDropdown(); dirShowCategory(c.id); });
    dd.appendChild(b);
  });
}
function openDirDropdown(anchor) {
  const dd = $("#dir-dropdown"); buildDirDropdown();
  dd.classList.remove("hidden");
  const r = (anchor || dirDockBtn).getBoundingClientRect();
  dd.style.left = Math.round(r.left + r.width / 2) + "px";
  Sound.play("open");
  requestAnimationFrame(() => {
    dd.style.top = Math.round(r.top - dd.offsetHeight - 14) + "px";
    dd.classList.add("open");
  });
}
function closeDirDropdown() { const dd = $("#dir-dropdown"); if (dd.classList.contains("hidden")) return; dd.classList.remove("open"); setTimeout(() => dd.classList.add("hidden"), 200); }
function toggleDirDropdown(anchor) { const dd = $("#dir-dropdown"); dd.classList.contains("hidden") ? openDirDropdown(anchor) : closeDirDropdown(); }

/* ── NameList (in the directory overlay) ─────────────────────────────── */
function dirShowCategory(catId) {
  const cat = DIR_CATEGORIES.find(c => c.id === catId); if (!cat) return;
  const items = dirItems(catId);
  $("#dir-title").textContent = cat.label.toUpperCase();
  $("#dir-sub").textContent = items.length
    ? (catId === "testimonies" ? `${items.length} testimonies · tap to read` : `${items.length} ${cat.label.toLowerCase()} · tap a name`)
    : "No entries yet";
  const list = $("#dir-list"); list.innerHTML = "";
  if (!items.length) { list.innerHTML = `<p class="dir-empty">No entries yet — add them in <code>app.js → CONTENT</code>.</p>`; }
  items.forEach((it, i) => {
    const sub = catId === "testimonies" ? [it.role, it.date].filter(Boolean).join(" · ") : (it.position || "");
    const row = document.createElement("button");
    row.className = "dir-row"; row.style.animationDelay = `${i * 40}ms`;
    row.innerHTML = `${avatarHTML(it, catId === "testimonies" ? "testimonies" : catId)}` +
      `<span class="dir-row-txt"><span class="dir-row-name">${esc(it.name)}</span><span class="dir-row-sub">${esc(sub)}</span></span>` +
      `<span class="dir-row-chev"><svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;
    row.addEventListener("click", () => { Sound.play("tap"); dirOpenProfile(catId, i); });
    list.appendChild(row);
  });
  openFeature("directory");
}
function dirBack() { Sound.play("back"); closeFeature($("#directory")); setTimeout(() => openDirDropdown(dirDockBtn), 240); }

/* ── ProfileModal + ProfileAccordion ────────────────────────────────── */
function personSections(p, catId) {
  if (catId === "testimonies") {
    return [{ title: "The Testimony", icon: DIR_ICONS.about, html: `<p class="pm-quote">${esc(p.text)}</p>` }];
  }
  const noun = catId === "bishops" ? "Bishop" : catId === "presbyters" ? "Presbyter" : catId === "pastors" ? "Pastor" : catId === "elders" ? "Elder" : "Leader";
  const assignment = p.assignment || (p.extra ? Object.entries(p.extra).map(([k, v]) => `${k}: ${v}`).join(" · ") : "") || "—";
  const messages = (p.messages && p.messages.length) ? p.messages : ["Living in the Fourth Watch", "Faith for the Nations", "The House That Christ Builds"];
  const contact = p.contact || { Email: "office@pmcc4thwatch.org", Office: "By appointment", Branch: "Main regional church" };
  const gallery = (p.gallery && p.gallery.length)
    ? p.gallery.map(g => `<div class="pm-gtile" style="background-image:url('${g}')"></div>`).join("")
    : Array.from({ length: 4 }, () => `<div class="pm-gtile placeholder">${svg(ICONS.gallery)}</div>`).join("");
  return [
    { title: `About the ${noun}`, icon: DIR_ICONS.about, html: `<p>${esc(p.about || p.description || "—")}</p>` },
    { title: "Ministry Role", icon: DIR_ICONS.role, html: `<p>${esc(p.ministryRole || `Serves as a ${noun.toLowerCase()} in the PMCC (4th Watch), providing spiritual leadership, pastoral care, and ministry development within the church.`)}</p>` },
    { title: "Church Assignment", icon: DIR_ICONS.assignment, html: `<p>${esc(assignment)}</p>` },
    { title: "Messages & Teachings", icon: DIR_ICONS.messages, html: `<ul class="pm-list">${messages.map(m => `<li>${esc(m)}</li>`).join("")}</ul>` },
    { title: "Gallery", icon: DIR_ICONS.gallery, html: `<div class="pm-gallery">${gallery}</div>` },
    { title: "Contact / Office Info", icon: DIR_ICONS.contact, html: `<dl class="pm-contact">${Object.entries(contact).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` },
  ];
}
function buildAccordion(sections) {
  const acc = $("#profile-accordion"); acc.innerHTML = "";
  sections.forEach((s, i) => {
    const item = document.createElement("div");
    item.className = "acc-item" + (i === 0 ? " open" : "");
    item.innerHTML =
      `<button class="acc-head" aria-expanded="${i === 0}"><span class="acc-ico">${svg(s.icon)}</span>` +
      `<span class="acc-title">${s.title}</span>` +
      `<span class="acc-chev"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button>` +
      `<div class="acc-body"><div class="acc-inner">${s.html}</div></div>`;
    const head = item.querySelector(".acc-head");
    head.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      acc.querySelectorAll(".acc-item.open").forEach(o => { o.classList.remove("open"); o.querySelector(".acc-head").setAttribute("aria-expanded", "false"); });
      if (!isOpen) { item.classList.add("open"); head.setAttribute("aria-expanded", "true"); }
      Sound.play("tap");
    });
    acc.appendChild(item);
  });
}
function dirOpenProfile(catId, index) {
  const p = dirItems(catId)[index]; if (!p) return;
  Sound.play("open");
  $("#pm-avatar").innerHTML = avatarHTML(p, catId === "testimonies" ? "testimonies" : catId);
  $("#pm-name").textContent = p.name;
  $("#pm-title").textContent = catId === "testimonies" ? (p.role || "Testimony") : (p.position || "");
  const chips = [];
  if (p.location) chips.push(p.location);
  if (catId === "testimonies" && p.date) chips.push(p.date);
  $("#pm-meta").innerHTML = chips.map(c => `<span class="pm-chip">${esc(c)}</span>`).join("");
  buildAccordion(personSections(p, catId));
  const m = $("#profile-modal"); m.classList.remove("hidden", "closing");
  requestAnimationFrame(() => requestAnimationFrame(() => m.classList.add("open")));
}
function closeProfile() {
  const m = $("#profile-modal"); if (m.classList.contains("hidden")) return;
  Sound.play("back"); m.classList.add("closing"); m.classList.remove("open");
  setTimeout(() => { m.classList.add("hidden"); m.classList.remove("closing"); }, 300);
}

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
  // Assistant / OpenJarvis
  const je = $("#set-jarvis-enabled"), jep = $("#set-jarvis-endpoint"), jm = $("#set-jarvis-model");
  je.checked = settings.jarvisEnabled; jep.value = settings.jarvisEndpoint; jm.value = settings.jarvisModel;
  je.onchange = () => { settings.jarvisEnabled = je.checked; updateJarvisMode(); Sound.play("tap"); };
  jep.oninput = () => { settings.jarvisEndpoint = jep.value.trim(); };
  jm.oninput = () => { settings.jarvisModel = jm.value.trim(); };
  $("#btn-jarvis-test").onclick = testJarvis;
}
async function testJarvis() {
  const s = $("#jarvis-test-status");
  settings.jarvisEndpoint = $("#set-jarvis-endpoint").value.trim();
  settings.jarvisModel = $("#set-jarvis-model").value.trim();
  if (!settings.jarvisEndpoint) { s.textContent = "Enter an API endpoint first"; return; }
  s.textContent = "Testing…"; Sound.play("tap");
  try {
    const text = await callOpenJarvis([
      { role: "system", content: "You are a health check. Reply with exactly one word." },
      { role: "user", content: "Reply with the single word: ready" },
    ]);
    s.textContent = "✓ Connected — model replied: " + text.slice(0, 40);
    setJarvisStatus(true); toast("OpenJarvis connected");
  } catch (err) {
    s.textContent = "✗ " + err.message + " — is `jarvis serve` running and is this origin allowed by CORS?";
    setJarvisStatus(false);
  }
}
function saveSettings() {
  settings.user = $("#set-user").value.trim() || "guest";
  const pass = $("#set-pass").value;
  store.set("volume", settings.volume); store.set("accent", settings.accent);
  store.set("iconStyle", settings.iconStyle); store.set("user", settings.user);
  if (pass) store.set("passSet", true);   // note: demo only — do not store real passwords in a kiosk
  settings.jarvisEnabled = $("#set-jarvis-enabled").checked;
  settings.jarvisEndpoint = $("#set-jarvis-endpoint").value.trim();
  settings.jarvisModel = $("#set-jarvis-model").value.trim();
  store.set("jarvisEnabled", settings.jarvisEnabled);
  store.set("jarvisEndpoint", settings.jarvisEndpoint);
  store.set("jarvisModel", settings.jarvisModel);
  jarvisResetHistory(); updateJarvisMode();
  Sound.play("open"); toast("Settings saved");
}
function resetSettings() {
  settings.volume = 70; settings.accent = THEMES[0].color; settings.iconStyle = "line"; settings.user = "guest";
  settings.jarvisEnabled = false; settings.jarvisEndpoint = "http://localhost:8000/v1/chat/completions"; settings.jarvisModel = "";
  ["volume","accent","iconStyle","user","passSet"].forEach(k => store.set(k, k === "volume" ? 70 : k === "accent" ? THEMES[0].color : k === "iconStyle" ? "line" : k === "user" ? "guest" : false));
  store.set("jarvisEnabled", false); store.set("jarvisEndpoint", settings.jarvisEndpoint); store.set("jarvisModel", "");
  applyAccent(settings.accent); applyIconStyle(settings.iconStyle); buildSettings();
  jarvisResetHistory(); updateJarvisMode();
  toast("Settings reset");
}

/* ─────────────────── Jarvis / Brother Thomas (offline) ───────────────── */
function jarvisSay(cls, text) {
  const log = $("#jarvis-log");
  const div = document.createElement("div"); div.className = "j-msg " + cls; div.textContent = text;
  log.appendChild(div); log.scrollTop = log.scrollHeight;
}
function jarvisGreet() {
  updateJarvisMode();
  const extra = settings.jarvisEnabled ? "" : " (Tip: an administrator can connect me to a local OpenJarvis AI in Settings.)";
  jarvisSay("bot", `Peace be with you. I am ${ASSISTANT_NAME}, your ministry assistant. Ask me about our leadership, branches, history, or how to use this directory.${extra}`);
}
/* Grounds a local model as Brother Thomas using the church content. */
function jarvisSystemPrompt() {
  const c = CONTENT.church;
  const leaders = CONTENT.sections
    .filter(s => s.items && s.items.length && s.items[0].confidence !== "placeholder")
    .map(s => `${s.label} — ${s.items.map(i => i.name).join("; ")}`).join(" | ");
  return `You are ${ASSISTANT_NAME}, the warm, respectful ministry assistant on an information kiosk for the ${c.name} (PMCC 4th Watch). ` +
    `Answer concisely (2-4 sentences), reverently, and helpfully. Never invent church leaders or facts not given here. ` +
    `Church facts: founded ${c.founded}; headquarters ${c.headquarters}; ${c.members}; present in ${c.countries}; motto "${c.tagline}". ` +
    `Meaning of "4th Watch": ${c.meaningOf4thWatch} Beliefs: ${c.doctrineSummary} ` +
    `Known leadership — ${leaders}. If asked to navigate the screen: tapping the center logo reveals the section icons; the bottom dock has Home, Gallery, Settings, me, Browser and Search.`;
}
let jarvisHistory = [];
function jarvisResetHistory() { jarvisHistory = [{ role: "system", content: jarvisSystemPrompt() }]; }
jarvisResetHistory();

function updateJarvisMode() {
  const on = settings.jarvisEnabled && settings.jarvisEndpoint;
  const dot = $("#jarvis-dot"), mode = $("#jarvis-mode");
  if (!dot || !mode) return;
  dot.className = "j-dot" + (on ? " ready" : "");
  mode.childNodes[1] && (mode.childNodes[1].nodeValue = on ? "Local AI · OpenJarvis" : "Offline assistant");
}
function setJarvisStatus(online) {
  const dot = $("#jarvis-dot"); if (dot) dot.className = "j-dot " + (online ? "on" : "off");
}
/* animated "typing" bubble; returns a remover */
function jarvisTyping() {
  const log = $("#jarvis-log");
  const div = document.createElement("div"); div.className = "j-msg bot j-typing";
  div.innerHTML = `<span></span><span></span><span></span>`;
  log.appendChild(div); log.scrollTop = log.scrollHeight;
  return () => div.remove();
}
/* Call a local OpenJarvis server (OpenAI-compatible /v1/chat/completions). */
async function callOpenJarvis(history) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 40000);
  try {
    const body = { messages: history, stream: false, temperature: 0.4 };
    if (settings.jarvisModel) body.model = settings.jarvisModel;
    const r = await fetch(settings.jarvisEndpoint, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body), signal: ctrl.signal,
    });
    if (!r.ok) throw new Error("HTTP " + r.status);
    const j = await r.json();
    const text = j && j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content;
    if (!text || !text.trim()) throw new Error("empty response");
    return text.trim();
  } finally { clearTimeout(timer); }
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
let jarvisBusy = false;
$("#jarvis-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = $("#jarvis-text"), q = input.value.trim();
  if (!q || jarvisBusy) return;
  jarvisSay("me", q); input.value = ""; Sound.play("tap");

  // Offline path: instant canned reply grounded in the church content.
  if (!settings.jarvisEnabled || !settings.jarvisEndpoint) {
    setTimeout(() => { jarvisSay("bot", jarvisReply(q)); Sound.play("open"); }, 420);
    return;
  }
  // Online path: ask the local OpenJarvis AI, fall back gracefully on failure.
  jarvisBusy = true;
  jarvisHistory.push({ role: "user", content: q });
  const stopTyping = jarvisTyping();
  try {
    const text = await callOpenJarvis(jarvisHistory);
    stopTyping(); jarvisSay("bot", text);
    jarvisHistory.push({ role: "assistant", content: text });
    if (jarvisHistory.length > 21) jarvisHistory.splice(1, jarvisHistory.length - 21); // keep system + last ~20
    setJarvisStatus(true); Sound.play("open");
  } catch (err) {
    stopTyping();
    const fb = jarvisReply(q);
    jarvisSay("bot", fb);
    jarvisSay("note", "⚠︎ Couldn’t reach the local AI (" + err.message + ") — answered from the built-in guide. Check MENU ▸ Settings ▸ Assistant.");
    jarvisHistory.push({ role: "assistant", content: fb });
    setJarvisStatus(false); Sound.play("open");
  } finally { jarvisBusy = false; }
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
  (CONTENT.testimonies || []).forEach((t, i) => idx.push({ kind: "Testimony", label: t.name, sub: t.role || "", icon: "testimonies", open: () => dirOpenProfile("testimonies", i) }));
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
  updateMuteButton(); updateJarvisMode();
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
// Directory flow wiring
$("#dir-back").addEventListener("click", dirBack);
$$("[data-pm-close]").forEach(el => el.addEventListener("click", closeProfile));
// close the category dropdown when clicking outside it (or the DIRECTORY button)
addEventListener("pointerdown", (e) => {
  const dd = $("#dir-dropdown");
  if (dd.classList.contains("hidden")) return;
  if (e.target.closest("#dir-dropdown") || e.target.closest('.dock-btn[data-id="directory"]')) return;
  closeDirDropdown();
}, true);
// close the per-icon name dropdown on outside tap (but not when tapping an icon)
addEventListener("pointerdown", (e) => {
  const m = $("#icon-menu");
  if (m.classList.contains("hidden")) return;
  if (e.target.closest("#icon-menu") || e.target.closest(".orbit-icon")) return;
  closeIconMenu();
}, true);
$("#btn-update").addEventListener("click", () => { $("#update-status").textContent = "Checking…"; Sound.play("tap"); setTimeout(() => { $("#update-status").textContent = "You’re up to date · v2.0"; toast("No updates available — you're current"); }, 1200); });

addEventListener("pointerdown", () => Sound.ensure(), { once: true });
addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!$("#profile-modal").classList.contains("hidden")) return closeProfile();
    if (!$("#icon-menu").classList.contains("hidden")) return closeIconMenu();
    if (!$("#dir-dropdown").classList.contains("hidden")) return closeDirDropdown();
    if (!$("#search").classList.contains("hidden")) return closeSearch();
    const openFeat = $$(".feature-overlay").find(el => !el.classList.contains("hidden"));
    if (openFeat) return closeFeature(openFeat);
    if (activeOverlay) return closeOverlay();
    return setOrbit(false);
  }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); }
});

boot();
