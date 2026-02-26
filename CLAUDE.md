# CLAUDE.md - TableFinder Pro

## Project Overview

TableFinder Pro is a real-time restaurant and cafe table availability platform with interactive 3D visualization. It's a zero-dependency static site built for a university incubator program in France.

**Core thesis:** Cafes have high spontaneous visit rates. People don't book — they just go. TableFinder gives real-time visibility so they don't waste time walking to full venues.

## Architecture

```
index.html (Customer 3D View) <--BroadcastChannel + localStorage--> admin.html (Staff Panel)
                                          |
                                     js/data.js
                                  (Shared State Layer)
```

- **index.html** — Customer-facing app with Three.js 3D floor plan, venue browser sidebar, search, filters, stats overlay
- **admin.html** — Staff control panel with tap-to-toggle table cards, bulk actions, venue tabs, occupancy stats
- **js/data.js** — Shared data layer managing localStorage persistence and BroadcastChannel cross-tab sync

## Tech Stack

- **3D:** Three.js r128 (CDN)
- **Frontend:** Vanilla JavaScript, no frameworks, no build step
- **State:** localStorage + BroadcastChannel API for real-time cross-tab sync
- **Fonts:** DM Sans + JetBrains Mono (Google Fonts CDN)
- **Styling:** CSS variables, Flexbox, CSS Grid, dark theme
- **Deploy:** Static files — works on GitHub Pages, any HTTP server

## Design System (CSS Variables)

```css
--bg: #0c0e13           /* Dark background */
--surface: #15171e      /* Card backgrounds */
--surface-2: #1c1f28    /* Secondary surfaces */
--border: #2a2d38       /* Borders */
--text: #e4e4e7         /* Primary text */
--text-dim: #71717a     /* Secondary text */
--accent: #6366f1       /* Primary CTA (Indigo) */
--green: #22c55e        /* Available / success */
--red: #ef4444          /* Occupied / error */
--yellow: #eab308       /* Reserved / warning */
--radius: 14px          /* Standard border radius */
```

## Key Patterns

### Cross-Tab Sync
State changes in admin panel broadcast via `BroadcastChannel('tablefinder-sync')` and persist to `localStorage('tablefinder_venues')`. Customer view listens on the channel with a 1.5s localStorage polling fallback.

### 3D Rendering
Tables are Three.js mesh groups (table top, glow edge, leg, base, chairs) with raycaster click detection. Color-coded by status. Camera uses manual drag-to-orbit + scroll-to-zoom controls.

### Data Model
3 sample venues (Cafe Mocha, Italian Kitchen, Sunrise Bistro) with 12-15 tables each. Tables have: id, status (empty/occupied), location (indoor/outdoor), seats, smoking, hasWindow, serverName, x/z coordinates.

## Development

```bash
# Run locally
python3 -m http.server 8000
# or
npx serve .

# Customer view: http://localhost:8000
# Admin panel: http://localhost:8000/admin.html
```

No install step needed. No package.json. No build tools.

## Code Conventions

- All CSS is embedded in `<style>` tags within each HTML file (no external stylesheets)
- All JS is inline `<script>` tags except the shared `js/data.js` module
- The `TF` namespace object on `window` holds all shared state functions
- Use CSS custom properties (variables) for all colors/spacing
- Mobile-first responsive design with breakpoints at 768px and 600px
- Touch-optimized UI in admin panel (large tap targets, no hover-dependent interactions)

## File Map

| File | Lines | Purpose |
|------|-------|---------|
| `index.html` | ~834 | Customer 3D viewer + venue browser |
| `admin.html` | ~536 | Staff tap-to-toggle control panel |
| `js/data.js` | ~172 | Shared state, sync, and data defaults |
| `README.md` | ~173 | Project documentation |
| `SKILL.md` | ~73 | Claude skill manifest |

## What's Implemented

- 3D interactive floor plans with Three.js
- Real-time cross-tab state sync (BroadcastChannel + localStorage polling)
- Venue search and filtering (indoor/outdoor/empty)
- Enhanced table search with attribute filtering (seats, window, smoking, location)
- Staff admin panel with three-state cycling (empty/occupied/reserved)
- Bulk actions (mark all, toggle sections)
- Occupancy statistics and progress bars (including reserved count)
- Dark theme with design tokens
- Mobile responsive layout with touch controls (pinch-to-zoom, touch-drag-to-rotate)
- Toast notifications in admin panel with pulse animations
- Working 3D/List view toggle (full grid list view in main area)
- Sidebar collapse toggle visible on all screen sizes
- Venue details panel (address, phone, hours, rating, features)
- Hover tooltips on 3D tables showing quick info
- Branded loading screen with spinner and fade-in
- Server assignment dropdown per table in admin
- Table notes feature (admin add/edit, customer read-only)
- Accessibility: ARIA labels, roles, keyboard navigation, focus styles
- SEO: meta tags, Open Graph, Twitter Card, robots noindex on admin

## What's Not Yet Implemented

- Backend API (currently localStorage only)
- IoT sensor integration (ESP32)
- User accounts and booking
- Push notifications
- Multi-language support (i18n)
- Service worker / offline support
- Error boundaries and graceful degradation
- Analytics integration

## Important Notes

- No secrets or API keys in the codebase
- All data is client-side only (localStorage)
- Three.js loaded from CDN — requires internet connection
- BroadcastChannel has limited browser support — localStorage polling is the fallback
- The 3D scene is hardware-accelerated and may perform poorly on low-end devices
