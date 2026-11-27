import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../style/Theme";

const STORAGE_KEY = "theme";

// Storage can throw (Safari private mode, blocked site data), so never let it break rendering.
const readStored = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const writeStored = (value) => {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // The choice just won't persist.
  }
};

// A saved choice wins; otherwise follow the visitor's OS setting.
const initialIsDark = () => {
  const stored = readStored();
  if (stored) return stored !== "lightTheme";
  return !window.matchMedia("(prefers-color-scheme: light)").matches;
};

const useTheme = () => {
  const [isDark, setIsDark] = useState(initialIsDark);
  const theme = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    // Keeps the mobile browser bar in step with the page, including after the manual toggle.
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme.colors.bg);
  }, [theme]);

  const toggle = () => {
    writeStored(isDark ? "lightTheme" : "darkTheme");
    setIsDark(!isDark);
  };

  return { theme, isDark, toggle };
};

export default useTheme;
