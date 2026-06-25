# Design Rules

## 1) Color System

- In most cases, use color tokens defined in `public/css/styles.css` (`:root` section).
- Primary source of truth for colors:
  - `--color-background`
  - `--color-foreground`
  - `--color-black`
  - `--color-white`
  - `--color-gray`
  - `--color-gray-light`
  - `--color-primary-dark`
  - `--color-primary-dark2`
  - `--color-primary`
  - `--color-primary-light`
  - `--color-green-primary`
  - `--color-green-secondary`
  - `--color-red-main`
  - `--color-yellow`
  - `--color-green`
  - `--color-blue`
  - `--color-purple`

## 2) Exception for Project Pages

- For project-specific sections/pages, project colors are allowed when needed for branding and storytelling.
- Outside of those project-specific contexts, default back to shared tokens from `public/css/styles.css`.

## 3) Typography

- Keep typography clear, warm, and editorial.
- Use existing global font styles before creating new type styles.
- Use pixel values for font sizes, for example `font-size: 24px;`.
- Avoid fluid font-size formulas like `clamp()`, `vw`, or `rem` unless there is a clear responsive design reason.
- Headings should feel intentional and spacious; avoid adding many competing heading sizes.
- Body text should stay readable with comfortable line-height.
- Avoid all-caps text except for small labels, tags, or decorative UI moments.

## 4) Layout and Spacing

- Use existing spacing tokens from `public/css/styles.css` where possible:
  - `--margin-x`
  - `--margin-y`
  - `--padding-480`
  - `--padding-768`
  - `--padding-1024`
  - `--padding-full`
- Keep page sections airy and avoid visually crowding text, images, and cards.
- Prefer consistent horizontal alignment across sections.
- Avoid one-off margins and paddings unless the composition needs a specific visual adjustment.

## 5) Cards

- Cards should feel clean, readable, and lightweight.
- Use shared color tokens for card backgrounds, borders, text, and shadows.
- Keep card padding consistent within the same section.
- Card corners, borders, and shadows should be subtle; avoid heavy drop shadows unless the design intentionally calls for depth.
- Card hover states should be smooth and modest, such as a small translate, border-color shift, background shift, or image scale.
- Do not make every card interaction loud. Use motion to guide attention, not distract.

## 6) Buttons and Links

- Buttons should have clear visual hierarchy:
  - primary actions use stronger color or filled treatment
  - secondary actions use outline, text, or lighter treatment
- Use `var(--color-...)` tokens for button text, background, border, and hover states.
- Buttons need clear hover and focus-visible states.
- Keep button padding and border radius consistent across similar button types.
- Links should look clickable through underline, color, arrow, icon, or motion. Do not rely only on tiny color differences.

## 7) Tags and Labels

- Tags should stay compact and scannable.
- Use shared colors unless the tag belongs to a project-specific visual system.
- Keep icon, text, and spacing consistent across tag groups.
- Avoid adding many different tag shapes in the same page.

## 8) Images and Media

- Images should support the story and composition; avoid stretching or distorting assets.
- Use consistent border radius and cropping behavior within the same section.
- Decorative images, icons, leaves, and floating elements should not block text readability.
- Motion on decorative assets should be slow, smooth, and lightweight.

## 9) Motion and Interaction

- Motion should feel soft, responsive, and intentional.
- Prefer transform and opacity for animations.
- Keep hover transitions short and page-level transitions smoother.
- Avoid animating layout-heavy properties like `width`, `height`, `top`, and `left` unless necessary.
- Repeating decorative animations should be slow enough that they do not compete with content.

## 10) Implementation Rules

- Prefer `var(--token-name)` over hard-coded hex values.
- Do not introduce new color values directly in page-level CSS unless there is a clear, approved design reason.
- If a new reusable color is needed, add it to `public/css/styles.css` first, then reference it from other CSS files.
- Reuse existing CSS class patterns before creating new component styles.
- Keep page-specific CSS in a separate stylesheet under `public/css/` instead of placing large `<style>` blocks inside page `.vue` files.
- Keep new styles close to the page or component they belong to unless they are reusable across pages.
- Avoid duplicating the same card, button, or tag styling across many files. Promote shared patterns when repetition becomes clear.

