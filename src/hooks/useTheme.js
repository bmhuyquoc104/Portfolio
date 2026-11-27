import { useState } from "react";
import { lightTheme, darkTheme } from "../style/Theme";

const useTheme = () => {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") !== "lightTheme"
  );

  const toggle = () => {
    localStorage.setItem("theme", isDark ? "lightTheme" : "darkTheme");
    setIsDark(!isDark);
  };

  return { theme: isDark ? darkTheme : lightTheme, isDark, toggle };
};

export default useTheme;
