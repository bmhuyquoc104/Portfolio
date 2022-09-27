import GlobalStyled from "./style/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./style/Theme";
import useTheme from "./hooks/useTheme";
import Header from "./components/Header/Header";
import SectionHome from "./components/SectionHome/SectionHome";


function App() {
  const [theme, themeToggler] = useTheme();

  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyled />
        <Header />
        <SectionHome />
    </ThemeProvider>
  );
}

export default App;
