# TableFinder Pro

## Project Overview
Real-time restaurant and cafe table availability platform with 3D visualization, staff admin panel, and cross-tab live sync.

## Architecture
- **Customer view** (`index.html`) — 3D floor plan (Three.js) with live table status, venue browser, and filtering
- **Admin panel** (`admin.html`) — Tap-to-toggle interface for restaurant staff
- **Shared data layer** (`js/data.js`) — State sync via `localStorage` + `BroadcastChannel`

## Tech Stack
- Three.js r128 — 3D rendering
- GSAP 3 — Animations and transitions
- Vanilla JavaScript — No build step required
- BroadcastChannel API + localStorage — Cross-tab real-time sync
- DM Sans + JetBrains Mono — Typography

## Key Patterns
- All state flows through `TF.loadVenues()` / `TF.saveVenues()` in `js/data.js`
- Cross-tab sync uses `BroadcastChannel('tablefinder-sync')`
- Tables are 3D meshes with raycaster click detection
- Admin changes broadcast instantly to all open customer tabs

## File Structure
```
restoran/
├── index.html      # Customer-facing 3D viewer + venue browser
├── admin.html      # Staff control panel (tap to toggle)
├── js/
│   └── data.js     # Shared state layer & sync engine
├── SKILL.md        # Skill manifest
├── CLAUDE.md       # This file
├── README.md       # Documentation
└── LICENSE          # MIT
```

## Development
```bash
# Serve locally
npx serve .
# or
python3 -m http.server 8000
```
- Customer view: http://localhost:8000
- Admin panel: http://localhost:8000/admin.html

## Conventions
- No build tools or bundlers — static files only
- Design tokens are CSS custom properties on `:root`
- All venue/table state goes through the `TF` namespace in `js/data.js`
- Use GSAP for all UI animations (entrance, hover, state transitions)
- Dark theme with accent color `#6366f1`
