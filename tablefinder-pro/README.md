# 🍽️ TableFinder Pro

**Real-time restaurant & cafe table availability platform with 3D visualization.**

> See which tables are empty *right now*. No more walking into a packed cafe.

![Status](https://img.shields.io/badge/status-active-22c55e)
![License](https://img.shields.io/badge/license-MIT-6366f1)
![Tech](https://img.shields.io/badge/stack-vanilla_JS_%2B_Three.js-eab308)

---

## 🎯 What Is This?

TableFinder Pro solves a daily frustration: **"I need a place to sit right now — which cafes near me have open tables?"**

Unlike traditional booking platforms (OpenTable, Resy), TableFinder focuses on **real-time discovery** for spontaneous visits — especially for students and remote workers who need a table *now*, not tomorrow at 7pm.

### Key Features

- **🏗️ Interactive 3D Floor Plans** — See the exact layout of a venue with Three.js-powered visualization
- **📱 Staff Admin Panel** — Dead-simple tap-to-toggle interface for waitstaff to update table status
- **⚡ Real-Time Sync** — Admin changes appear instantly on the customer view via BroadcastChannel + localStorage
- **🔍 Smart Filtering** — Filter by indoor/outdoor, table size, availability, and more
- **📊 Live Stats** — Occupancy rate, available count, and per-venue breakdowns

---

## 📁 Project Structure

```
tablefinder-pro/
├── index.html          # Customer-facing app (3D viewer + venue browser)
├── admin.html          # Staff control panel (tap to toggle tables)
├── js/
│   └── data.js         # Shared data layer & cross-tab sync engine
├── README.md
├── LICENSE
└── skills.json         # skills.sh manifest
```

### Architecture

```
┌──────────────┐    BroadcastChannel    ┌──────────────┐
│  admin.html  │ ◄────────────────────► │  index.html  │
│  (Staff)     │    localStorage sync   │  (Customer)  │
└──────┬───────┘                        └──────┬───────┘
       │                                       │
       └───────────┐               ┌───────────┘
                   ▼               ▼
              ┌──────────────────────┐
              │      js/data.js      │
              │  Shared state layer  │
              │  localStorage + sync │
              └──────────────────────┘
```

---

## 🚀 Quick Start

### Option 1: Just open it
```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/tablefinder-pro.git
cd tablefinder-pro

# Open in browser (any local server works)
npx serve .
# or
python3 -m http.server 8000
```

Then open:
- **Customer view:** `http://localhost:8000`
- **Admin panel:** `http://localhost:8000/admin.html`

### Option 2: GitHub Pages
Push to GitHub and enable Pages — it works out of the box with no build step.

### How to Use
1. Open `admin.html` in one tab (this is the restaurant staff view)
2. Open `index.html` in another tab (this is the customer view)
3. Tap any table in the admin panel to toggle between empty/occupied
4. Watch the customer view update in real-time

---

## 🛠️ Tech Stack

| Layer | Tech | Why |
|-------|------|-----|
| 3D Engine | Three.js r128 | Hardware-accelerated table visualization |
| Frontend | Vanilla JS | Zero build step, instant deploy |
| State Sync | BroadcastChannel + localStorage | Cross-tab real-time updates |
| Fonts | DM Sans + JetBrains Mono | Clean UI + monospace data display |
| Deploy | Static files | Works on GitHub Pages, Netlify, anywhere |

**No frameworks. No build tools. No dependencies to install.**

---

## 🎨 Design System

The UI uses a dark theme with these design tokens:

| Token | Value | Usage |
|-------|-------|-------|
| `--accent` | `#6366f1` | Primary actions, selections |
| `--green` | `#22c55e` | Available / success states |
| `--red` | `#ef4444` | Occupied / error states |
| `--yellow` | `#eab308` | Reserved / warning states |
| `--surface` | `#15171e` | Card backgrounds |

---

## 📱 Admin Panel Features

The admin panel is designed for restaurant staff using tablets or phones:

- **One-tap toggle** — Tap any table card to flip between empty ↔ occupied
- **Bulk actions** — "Mark All Empty", "Mark All Occupied", toggle indoor/outdoor
- **Venue tabs** — Switch between venues with live availability counts
- **Toast notifications** — Visual feedback on every action
- **Touch-optimized** — Large tap targets, no hover-dependent interactions

---

## 🗺️ Roadmap

- [ ] IoT sensor integration (ESP32 + FSR pressure sensors)
- [ ] Backend API (replace localStorage with real database)
- [ ] User accounts & booking system
- [ ] Push notifications when tables become available
- [ ] Multi-language support (FR/TR/EN)
- [ ] Mobile native apps (React Native)

---

## 🏫 Background

This project is being developed for a university incubator program in France. The core thesis:

> Cafes and casual restaurants have high spontaneous visit rates. People don't book a cafe table — they just go. But they waste time walking to places that turn out to be full. TableFinder bridges this gap with real-time visibility.

**Phase 1:** Manual validation (tablet app, no sensors)
**Phase 2:** DIY sensor automation (ESP32 + FSR, 50-100 units)
**Phase 3:** Scale to 500+ locations

---

## 📄 License

MIT — see [LICENSE](LICENSE)

---

## 🤝 Contributing

PRs welcome! If you want to help:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/awesome`)
3. Commit your changes
4. Push & open a PR

---

<p align="center">
  Built with ☕ and Three.js<br>
  <strong>TableFinder Pro</strong> — Know before you go.
</p>
