import { flavors } from "@catppuccin/palette";

// Mocha for dark, Latte for light. Components use these semantic tokens
// (theme.colors.* or the matching --clr-* CSS variable), never raw hex.
const buildTheme = (flavor) => {
  const c = (name) => flavor.colors[name].hex;
  // Latte's accents are too light for small text on a pale background, so blend them toward
  // the text colour. `share` is how much of the accent stays; the values below keep every
  // token >= 4.5:1 (tags sit on a tinted background, so they need the most blending).
  const accent = (name, share = 0.6) =>
    flavor.dark ? c(name) : `color-mix(in srgb, ${c(name)} ${share * 100}%, ${c("text")})`;

  return {
    isDark: flavor.dark,
    colors: {
      bg: c("base"),
      panel: c("mantle"),
      text: c("text"), // headings and emphasis
      muted: flavor.dark ? c("subtext0") : c("subtext1"), // body copy
      line: c("surface1"),
      accent: accent("mauve"), // links, focus, active nav
      role: accent("blue"), // job title under the name
      date: accent("peach", 0.4), // dates and timeline meta
      ok: accent("green", 0.5), // "open to roles" status
      tag: accent("teal", 0.3), // technology tags
    },
  };
};

export const darkTheme = buildTheme(flavors.mocha);
export const lightTheme = buildTheme(flavors.latte);
