import { useState, useEffect } from "react";

const useTheme = () => {

  const [theme, setTheme] = useState("darkTheme");
  const [toggleDirection, setToggleDirection] = useState(0);

  const setMode = (mode) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("darkTheme");
    localTheme === "darkTheme" ? setToggleDirection(0) : setToggleDirection(30);
  }, []);
  const themeToggler = () => {
    setToggleDirection(toggleDirection === 0 ? 30 : 0);
    theme === "lightTheme" ? setMode("darkTheme") : setMode("lightTheme");
  };

  return [theme, toggleDirection, themeToggler];
};

export default useTheme;
