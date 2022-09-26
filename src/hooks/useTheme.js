import {useState, useEffect} from "react"

function useTheme() {
  const [theme,setTheme] = useState("darkTheme");

  const setMode = (mode) => {
    localStorage.setItem("theme",mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("darkTheme");
  },[])

  const themeToggler = () => {
    theme === "darkTheme" ? setMode("lightTheme") : setMode("darkTheme");
  } 
  
  return [theme,themeToggler];
}

export default useTheme