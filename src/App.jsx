import styled, { ThemeProvider } from "styled-components";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import GlobalStyled from "./style/GlobalStyled";
import useTheme from "./hooks/useTheme";
import Sidebar from "./components/Sidebar/Sidebar";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";

const Layout = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    padding: 0 6rem;
  }
`;

const SkipLink = styled.a`
  position: absolute;
  left: 1rem;
  top: -4rem;
  z-index: 20;
  padding: 0.5rem 1rem;
  color: var(--clr-bg);
  background: var(--clr-accent);
  border-radius: 4px;
  &:focus {
    top: 1rem;
  }
`;

const Main = styled.main`
  @media (min-width: 1024px) {
    width: 52%;
    padding: 6rem 0 0;
  }
`;

function App() {
  const { theme, isDark, toggle } = useTheme();
  // Two pages only, so a pathname check beats adding a router. Netlify serves index.html for /projects (public/_redirects).
  const isProjectsPage = window.location.pathname.replace(/\/$/, "") === "/projects";

  return (
    <ThemeProvider theme={theme}>
      {/* LazyMotion loads only the DOM animation features; reducedMotion="user" honours the OS setting. */}
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
      <GlobalStyled />
      <SkipLink href="#main">Skip to content</SkipLink>
      <ThemeToggle isDark={isDark} toggle={toggle} />
      {isProjectsPage ? (
        <ProjectsPage />
      ) : (
        <Layout>
          <Sidebar />
          <Main id="main" tabIndex={-1}>
            <About />
            <Experience />
            <Projects />
            <Footer />
          </Main>
        </Layout>
      )}
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
}

export default App;
