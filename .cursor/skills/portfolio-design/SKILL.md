---
name: portfolio-design
description: Portfolio design and styling conventions. Use when writing or editing CSS, Vue pages, or UI components in this project.
---

# Portfolio Design

## Colors

All colors should use root color tokens from `public/css/styles.css` (`:root`), never hard-coded hex values.

Use `var(--color-...)` for backgrounds, text, borders, shadows, and hover states. Examples:

- `--color-background`
- `--color-foreground`
- `--color-primary`
- `--color-primary-light`
- `--color-primary-dark`

If a new reusable color is needed, add it to `:root` in `public/css/styles.css` first, then reference it elsewhere.

## CSS Units

Do not use `clamp()` for any CSS value. Use fixed `px` values instead.

See `design.md` for full design rules.
