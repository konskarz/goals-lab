# goals-lab

Experimental playground for the main project [goals-vue](https://github.com/konskarz/goals-vue)

## Layout

**Dashboard shell** (topbar + sidebar) is well-established across apps — from mobile-first tools to desktop ERPs. **Content area** has no dominant UX pattern that works across different content types and screen widths. When a list or table stretches to the full width of a desktop content area:

- line length becomes too long, making rows harder to track;
- density vs. whitespace balance breaks, so the UI looks sparse despite heavy data;
- scanning rhythm degrades, increasing cognitive load when scanning rows.

This affects usability for data-heavy apps (CRM, ERP, analytics dashboards). List/detail view, list/card feed, and narrow list show how each affects readability on desktop.

- **Detail drawer** — Show record details alongside the list as a persistent drawer. The list width depends on drawer width, spacing is not stable across screen sizes. The approach is structurally and technically complex.
- **Detail panel** — Show record details alongside the list in a fixed two-column layout that keeps the list width constrained. Less modular than the drawer approach and structurally complex.
- **Feed row** — Show records as responsive horizontal cards in multiple columns. Horizontal arrangement reduces reading efficiency compared to a vertical layout.
- **Feed column** — Show records as vertical cards stacked in columns inside a horizontally scrollable row. The horizontal scrolling is unusual and unintuitive for most users.
- **Narrow layout** — Constrain the main content area to a fixed centered width in the dashboard. This resolves the full-width reading problem without introducing extra complexity.

## Typography Scaling

- lightweight modernization layer over Quasar defaults
- normalizes Quasar typography tokens to REM
- uses root `font-size` as the single scaling control for proportional UI scaling

## Setup

```sh
npm install
npm run dev
```

- Compile and Minify for Production: `npm run build`
- Lint with [ESLint](https://eslint.org/): `npm run lint`
- Customize configuration: see [Vite Configuration Reference](https://vitejs.dev/config/)
