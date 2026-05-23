# Jakarta Design System

Design tokens, logo components, and SVG assets for Jakarta's civic visual identity — open for everyone to use, remix, and build upon.

**[Storybook →](https://hkar19.github.io/jakarta)** · **[npm →](https://www.npmjs.com/package/@hkar19/ds-jakarta)**

---

## Install

```bash
npm install ds-jakarta
# or
pnpm add ds-jakarta
```

## Usage

### CSS tokens

```css
@import "ds-jakarta/tokens.css";

.my-button {
  background: var(--jkt-color-menor-jingga-bis-kota); /* #fc351c */
  color: #fff;
}
```

### React components

```tsx
import { JakartaWordmark, PlusJIcon } from "ds-jakarta";
import "ds-jakarta/tokens.css";

export function Header() {
  return <JakartaWordmark height={48} color="#1a1a1a" />;
}
```

### SVG assets

```js
import wordmark from "ds-jakarta/assets/JakartaWordMarkNoSubs.svg";
import icon from "ds-jakarta/assets/PlusJakartaIcon.svg";
```

---

## What's included

| Export                    | Description                                     |
| ------------------------- | ----------------------------------------------- |
| `ds-jakarta/tokens.css`   | CSS custom properties (`--jkt-*`)               |
| `ds-jakarta` (JS)         | TypeScript token objects + React SVG components |
| `ds-jakarta/assets/*.svg` | Static SVG wordmark and icon variants           |

### Color tokens — MENOR palette

Six colors named after Jakarta's administrative districts:

| Name                                   | District         | Value     |
| -------------------------------------- | ---------------- | --------- |
| `--jkt-color-menor-biru-pesisir`       | Kepulauan Seribu | `#00aaff` |
| `--jkt-color-menor-biru-abang`         | Utara            | `#1c5ddc` |
| `--jkt-color-menor-kuning-gigi-balang` | Barat            | `#feb52b` |
| `--jkt-color-menor-jingga-bis-kota`    | Pusat            | `#fc351c` |
| `--jkt-color-menor-pink-none`          | Timur            | `#eb30a2` |
| `--jkt-color-menor-hijau-betawi`       | Selatan          | `#19ae5d` |

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Bug reports and token proposals welcome via [GitHub Issues](https://github.com/hkar19/jakarta/issues).

## Brand

Token values are derived from the official Jakarta brand book published by Pemprov DKI Jakarta (2020), designed by 6616 Creative House.

## License

[ISC](LICENSE)
