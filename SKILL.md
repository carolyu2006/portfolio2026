---
name: portfolio-design
description: Portfolio design and styling conventions. Use when writing or editing CSS, Vue pages, or UI components in this project.
---

# Portfolio Design

## Project Case Studies

The portfolio is one website, not a collection of independently art-directed
microsites. Every visible page, component, interaction, and project case study
must feel like it belongs to this site's established visual system.

`pages/projects/intertabs.vue` is the required structural and styling reference
for every project detail page in `pages/projects/`. This requirement applies to
existing pages as well as newly created pages: when touching a project that
does not conform, bring it back to the shared structure before adding new work.
Do not introduce a standalone visual system, page shell, or large page-scoped
style block for an individual project.

Every project detail page must use this baseline order:

1. `<AppHeader />`
2. Full-width cover media using `.hero-image`
3. `.content` wrapper
4. `.project-header-container` with year tag, title, role/summary, and optional
   project link buttons
5. `.key-info` with the four standard fields: timeline, team, role, and skills
6. Case-study sections using the existing shared project classes; use the
   standard narrative order when relevant: overview, problem, research/process,
   solution, and impact
7. Related/next projects
8. `<AppFooter />`

If a project has less material, keep the same shell and omit only the empty
case-study content—not the cover, header, metadata, shared content width, or
footer. Use clear section headings and the site's editorial typography instead
of inventing an alternate storytelling format.

Project pages must load both shared stylesheets through `useHead`:

```js
{ rel: 'stylesheet', href: '/css/styles.css' },
{ rel: 'stylesheet', href: '/css/project.css' }
```

Reuse the structural classes in `public/css/project.css`, including
`.hero-image`, `.content`, `.project-header-container`, `.tag`,
`.button-container`, `.key-info`, `.key-info-item`, `.overview-container`, and
`.project-wide-image`. Extend that stylesheet only when a pattern will be
useful across case studies. All CSS must live in a stylesheet under
`public/css/`; never put a `<style>` or `<style scoped>` block in a Vue page.
For page-specific rules, create a clearly named file such as
`public/css/project-name.css` and load it after `project.css` in `useHead`.
Do not use inline `style` attributes except for a one-off project-brand color
that cannot be expressed through an existing class. A narrowly named project
class is allowed only for a small,
brand-specific media or storytelling treatment that sits inside the shared
layout and does not redefine global typography, spacing, cards, buttons,
navigation, or section structure.

### Site-Wide Consistency Rules

- Start every edit by reusing the existing layout, typography, button, link,
  tag, card, media, and spacing patterns. Do not recreate an existing pattern
  under a new class name.
- Keep the shared fonts (`Gabarito`, `ArchivoBlack`, and `GajrajOne`) and their
  established roles. Do not add a new typeface or an unrelated type scale for a
  single page.
- Use the shared spacing tokens and the desktop/mobile spacing rhythm already
  present in `public/css/styles.css` and `public/css/project.css`. Do not use
  `clamp()`, one-off viewport-based type scales, or arbitrary page-wide padding
  systems.
- Use root color tokens by default. Project-brand colors may appear in project
  media, an individual tag, or a restrained accent, but must not replace the
  site's background, foreground, navigation, button, or metadata styling.
- Preserve the common header and footer exactly. Do not create an alternate
  header, hide the header/footer, or change their visual language per project.
- Match existing image treatment: full-width cover media, contained editorial
  content media, and the shared border-radius/cropping behavior. Avoid
  decorative graphics that compete with the project story.
- Keep motion understated and compatible with shared interaction patterns.
  Avoid page-specific cursor behavior, theatrical entrance animation, or
  layout-shifting animation.
- New reusable patterns belong in the shared CSS after checking that they are
  needed by more than one project. Keep one-off content markup simple.

### Required Consistency Check

Before completing any page or component work, inspect the changed result next
to the relevant existing portfolio pages and verify all of the following:

- It uses the shared header, footer, fonts, global stylesheet, and project
  stylesheet where applicable.
- It follows the `intertabs` case-study shell for project detail pages.
- Its content width, section spacing, headings, metadata, buttons, cards, and
  media treatment match the existing site patterns.
- It introduces no duplicate component style, standalone CSS system, hard-coded
  global theme, or responsive `clamp()` typography.
- Any brand-specific treatment is limited to the project's content and does not
  change the surrounding site's visual language.

Before finishing work on a project page, compare it with
`pages/projects/intertabs.vue` and confirm that it uses the shared header,
footer, cover-media treatment, content width, metadata block, and shared CSS.
Brand-specific media, colors, and content are welcome, but they must sit within
this common structure.

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
