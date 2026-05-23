# Contributing to Jakarta Design System

Thank you for your interest. This is an open design system built around Jakarta's civic brand identity. Contributions are welcome — whether it's a new token, a bug fix, or an improvement to the docs.

## What we're building

`ds-jakarta` ships design tokens (CSS custom properties + TypeScript), logo components, and SVG assets faithful to the official Jakarta brand book. We are not building a component library — the goal is a solid, well-documented token foundation that others can build upon.

## Prerequisites

- **Node 24** (see `.nvmrc`). We recommend [nvm](https://github.com/nvm-sh/nvm): `nvm use`
- **pnpm** — install via `npm install -g pnpm`

## Setup

```bash
git clone https://github.com/hkar19/jakarta.git
cd jakarta
nvm use
pnpm install
pnpm storybook        # starts dev server at http://localhost:6006
```

## Project structure

```
src/tokens/       TypeScript token definitions (one file per category)
src/tokens.css    CSS custom properties (--jkt-*)
src/components/   React SVG components (JakartaWordmark, PlusJIcon)
src/assets/       Static SVG files published to dist/assets/
stories/          Storybook MDX pages (token showcase, landing page)
.storybook/       Storybook configuration
docs/             JakartaBrandBook.pdf — source of truth for all values
```

## Token conventions

- **Prefix**: all CSS custom properties use `--jkt-` (e.g. `--jkt-color-menor-jingga-bis-kota`)
- **Source of truth**: `docs/JakartaBrandBook.pdf`. Read it before touching any token value
- **Naming**: follow the existing MENOR district naming scheme for colors
- **TypeScript**: tokens are plain typed objects exported from `src/tokens/`, re-exported from `src/index.ts`
- **CSS**: every token in TypeScript must have a matching `--jkt-*` property in `src/tokens.css`

## Adding a new token category

1. Create `src/tokens/<category>.ts` with a typed export
2. Add re-export to `src/tokens/index.ts`
3. Add corresponding `--jkt-<category>-*` variables to `src/tokens.css`
4. Add a showcase story in `stories/`

## Code style

- TypeScript strict mode — run `pnpm typecheck` before opening a PR
- No component library additions without prior discussion (open an issue first)
- No new dependencies without a clear reason — keep the package lean

## Running checks

```bash
pnpm typecheck          # TypeScript type checking
pnpm build              # verify the library builds cleanly
pnpm build-storybook    # verify Storybook builds
```

## Opening a pull request

1. Fork the repo and create a branch from `main`
2. Make your changes, run `pnpm typecheck` and `pnpm build`
3. Open a PR with a clear description of what changed and why
4. Reference the relevant section of the brand book if touching token values

## Design decisions

Significant changes to token values, naming, or the component API should start as an issue rather than a direct PR. This helps keep the system intentional and aligned with the Jakarta brand guidelines.

## License

By contributing, you agree that your contributions will be licensed under the same [ISC License](LICENSE) as the project.
