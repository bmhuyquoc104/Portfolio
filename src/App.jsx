import GlobalStyled from "./style/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./style/Theme";
import useTheme from "./hooks/useTheme";
import Header from "./components/Header/Header";
import SectionHome from "./components/SectionHome/SectionHome";
import SocialContact from "./components/SocialContact/SocialContact";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionSkills from "./components/SectionSkills/SectionSkills";
import SectionProjects from "./components/SectionProjects/SectionProjects";
import SectionContact from "./components/SectionContact/SectionContact";
import SectionExperience from "./components/SectionExperience/SectionExperience";

function App() {
  const [theme, toggleDirection, themeToggler] = useTheme();

  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyled />
      <Header
        toggleDirection={toggleDirection}
        themeToggler={themeToggler}
        theme={theme}
      />
      <SectionHome />
      <SocialContact />
      <SectionAbout />
      <SectionSkills />
      <SectionExperience/>
      <SectionProjects />
      <SectionContact />
    </ThemeProvider>
  );
}

export default App;
