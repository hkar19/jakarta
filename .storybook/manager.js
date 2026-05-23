import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

const theme = create({
  base: "light",

  // Brand
  brandTitle: "+Jakarta Design System",
  brandImage: "/JakartaWordMarkNoSubs.svg",
  brandUrl: "https://ds-jakarta.hadikar.id",
  brandTarget: "_blank",

  // Typography — Plus Jakarta Sans throughout
  fontBase: '"Plus Jakarta Sans", sans-serif',
  fontCode: 'ui-monospace, "Cascadia Code", monospace',

  // Brand palette: Jingga Bis Kota red + Biru Abang
  colorPrimary: "#fc351c",
  colorSecondary: "#1c5ddc",

  // Surface
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#f7f7f7",
  appBorderColor: "#ebebeb",
  appBorderRadius: 0,

  // Text
  textColor: "#1a1a1a",
  textInverseColor: "#ffffff",
  textMutedColor: "#6e6e6e",

  // Toolbar / nav
  barTextColor: "#4d4d4d",
  barSelectedColor: "#fc351c",
  barHoverColor: "#1c5ddc",
  barBg: "#ffffff",

  // Form inputs
  inputBg: "#ffffff",
  inputBorder: "#d6d6d6",
  inputTextColor: "#1a1a1a",
  inputBorderRadius: 4,

  // Buttons
  buttonBg: "#f7f7f7",
  buttonBorder: "#d6d6d6",

  booleanBg: "#f7f7f7",
  booleanSelectedBg: "#fc351c",
});

addons.setConfig({
  theme,
  sidebar: {
    filters: {
      // Filter out any story where the title or id starts with "Hidden/"
      hidden: (item) => !item.id.startsWith("hidden/"),
    },
  },
});
