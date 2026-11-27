import { flavors } from "@catppuccin/palette";

// Mocha for dark, Latte for light. Components use these semantic tokens
// (theme.colors.* or the matching --clr-* CSS variable), never raw hex.
const buildTheme = (flavor) => {
  const c = (name) => flavor.colors[name].hex;
  return {
    isDark: flavor.dark,
    colors: {
      bg: c("base"),
      bgAlt: c("mantle"), // navbar, panels
      text: c("text"),
      accent: c("peach"),
      onAccent: flavor.dark ? c("crust") : c("base"),
      chip: c("surface1"),
      chipText: c("text"),
      toggleTrack: c("surface0"),
    },
  };
};

// Cards sit on photos, so their overlay is dark in both modes.
const media = flavors.mocha.colors;
export const mediaColors = {
  onMedia: media.text.hex,
  mediaScrim: media.crust.hex,
};

export const darkTheme = buildTheme(flavors.mocha);
export const lightTheme = buildTheme(flavors.latte);
