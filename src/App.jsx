import GlobalStyled from "./style/GlobalStyled";
import { ThemeProvider } from "styled-components";
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
  const { theme, isDark, toggle } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Header isDark={isDark} toggle={toggle} />
      <SectionHome />
      <SocialContact />
      <SectionAbout />
      <SectionSkills />
      <SectionExperience />
      <SectionProjects />
      <SectionContact />
    </ThemeProvider>
  );
}

export default App;
