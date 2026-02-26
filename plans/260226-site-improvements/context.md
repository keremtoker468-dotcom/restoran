# Context

## Key Files
- `index.html` — Customer-facing 3D viewer (834 lines)
- `admin.html` — Staff control panel (536 lines)
- `js/data.js` — Shared state layer (172 lines)

## Tech Stack
- Three.js r128 (CDN), Vanilla JS, localStorage + BroadcastChannel
- No build tools, no package.json, pure static files
- CSS variables for theming, dark theme throughout

## Conventions
- All CSS embedded in `<style>` tags per HTML file
- All JS inline except shared `js/data.js`
- `TF` namespace on `window` for shared state
- Design tokens via CSS custom properties
