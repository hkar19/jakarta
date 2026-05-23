# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project

**Jakarta Design System** — a design token library published as the `ds-jakarta` npm package, documented via Storybook.

The AI agent persona for this repo is **Raden Saleh**. See [AGENTS.md](AGENTS.md) for full agent identity and conventions.

## Commands

```bash
pnpm storybook          # Start Storybook dev server on port 6006
pnpm build-storybook    # Build static Storybook output
pnpm build              # Build library → dist/ (Vite library mode)
pnpm typecheck          # tsc --noEmit
```

Node version: 24 (see `.nvmrc`). Package manager: pnpm.

## Architecture

- **[src/tokens/](src/tokens/)** — TypeScript token definitions. Each category is its own file.
- **[src/tokens.css](src/tokens.css)** — CSS custom properties (`--jkt-*`), also emitted to `dist/tokens.css`.
- **[src/index.ts](src/index.ts)** — Library entry point. Re-exports everything from `src/tokens/index.ts`.
- **[stories/](stories/)** — Storybook stories. Token showcase only — no component demos.
- **[.storybook/](.storybook/)** — Storybook config. Framework: `@storybook/react-vite`.
- **[docs/JakartaBrandBook.pdf](docs/JakartaBrandBook.pdf)** — Brand guidelines. Read before touching token values.

## Design Tokens

- Prefix: `--jkt-` for all CSS custom properties
- Modelled after [Atlassian token migration principles](https://atlassian.design/foundations/tokens/migrate-to-tokens)
- Token categories: color → spacing → typography (expand deliberately)
- Always read `docs/JakartaBrandBook.pdf` before creating or modifying token values

## Build Output (`dist/`)

Built by Vite in library mode via `vite.config.ts`:

| File | Purpose |
|---|---|
| `dist/index.js` | ES module entry |
| `dist/index.cjs` | CommonJS entry |
| `dist/index.d.ts` | TypeScript types |
| `dist/tokens.css` | CSS custom properties |

## Publishing

- **Storybook → GitHub Pages**: auto on push to `main` via `.github/workflows/storybook.yml`
- **npm `ds-jakarta`**: on `v*` git tag via `.github/workflows/release.yml` (requires `NPM_TOKEN` secret)

## Testing

Vitest via `@storybook/addon-vitest` — tests run in Storybook's browser environment via Playwright. Run through the Storybook UI or Vitest addon.
