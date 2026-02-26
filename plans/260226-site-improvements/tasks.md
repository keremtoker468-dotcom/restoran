# Tasks

## Phase 1: Core UX Fixes

- [x] Implement working List View toggle (3D/List switch actually hides/shows content)
  - **AC:** Clicking "List" hides 3D canvas and shows a full table list view in the main area
  - **AC:** Clicking "3D" restores the 3D canvas and hides the list view
  - **AC:** Selected table state persists across view switches

- [x] Add touch controls for 3D view (pinch-to-zoom, touch-drag-to-rotate)
  - **AC:** Touch drag rotates camera on mobile
  - **AC:** Pinch gesture zooms in/out on mobile
  - **AC:** Existing mouse controls still work on desktop

- [x] Add sidebar collapse button visible on all screen sizes
  - **AC:** A toggle button is always visible to collapse/expand sidebar
  - **AC:** Main content area resizes to fill space when sidebar collapses

## Phase 2: Accessibility & SEO

- [x] Add comprehensive meta tags and Open Graph tags to both HTML files
  - **AC:** Both files have description, viewport, theme-color, og:title, og:description meta tags
  - **AC:** Admin panel has robots noindex tag

- [x] Add ARIA labels and roles to interactive elements
  - **AC:** All buttons have aria-label attributes
  - **AC:** Live regions use aria-live for dynamic content updates
  - **AC:** Filter bar uses role="tablist" pattern
  - **AC:** 3D canvas has aria-label describing its purpose

- [x] Add keyboard navigation support
  - **AC:** Tab key navigates between venue cards and table items
  - **AC:** Enter/Space activates focused elements
  - **AC:** Escape closes table overlay
  - **AC:** Focus styles are visible (outline on focused elements)

## Phase 3: New Features

- [x] Add "reserved" status support to data layer and both views
  - **AC:** Tables can be empty, occupied, or reserved
  - **AC:** Reserved tables show yellow in 3D view and admin panel
  - **AC:** Admin panel shows three-state cycle: empty → occupied → reserved → empty
  - **AC:** Stats include reserved count

- [x] Add enhanced search that filters tables by attributes (seats, smoking, window)
  - **AC:** Search input accepts queries like "4 seats", "window", "outdoor smoking"
  - **AC:** Matching tables are highlighted in both list and 3D view
  - **AC:** Clear search button resets filters

- [x] Add venue details panel with address, hours, phone, and features
  - **AC:** Clicking venue info icon shows a detail panel
  - **AC:** Panel shows address, phone, hours, rating, and all features
  - **AC:** Panel is dismissible

## Phase 4: Visual Polish

- [x] Add smooth loading animation on initial page load
  - **AC:** A branded loading spinner shows while Three.js initializes
  - **AC:** Content fades in after 3D scene is ready
  - **AC:** Loading state is under 2 seconds on modern hardware

- [x] Add hover tooltips on 3D tables showing quick info
  - **AC:** Hovering over a 3D table shows a floating tooltip with table number, seats, status
  - **AC:** Tooltip follows cursor position
  - **AC:** Tooltip disappears when mouse moves away

- [x] Improve admin panel with animated status transitions
  - **AC:** Table cards animate smoothly when status changes (color transition)
  - **AC:** Stats numbers animate when values change (count up/down)
  - **AC:** Occupancy bar fill animates smoothly

## Phase 5: Admin Enhancements

- [x] Add server assignment dropdown in admin panel
  - **AC:** Each table card has a dropdown to reassign server
  - **AC:** Server list is derived from current venue's servers
  - **AC:** Changes persist via data layer and sync cross-tab

- [x] Add table notes feature in admin panel
  - **AC:** Each table card has an expandable notes field
  - **AC:** Notes persist in localStorage via data layer
  - **AC:** Notes are visible but not editable in customer view overlay
