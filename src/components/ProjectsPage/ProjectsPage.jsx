import { useEffect } from "react";
import styled from "styled-components";
import ProjectList from "../Projects/ProjectList";
import Footer from "../Footer/Footer";
import { allProjects } from "../../data/projects";
import { NAME, PROJECTS_INTRO } from "../../data/site";
import { Intro } from "../Section/parts";
import { FiArrowLeft } from "react-icons/fi";

const Page = styled.main`
  max-width: 48rem;
  margin: 0 auto;
  padding: 5rem 1.5rem 6rem;

  @media (min-width: 1024px) {
    padding-top: 6rem;
  }
  a.back {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--clr-muted);
  }
  a.back:hover,
  a.back:focus-visible {
    color: var(--clr-accent);
  }
  h1 {
    margin: 1.5rem 0 0.75rem;
    font-size: clamp(1.75rem, 1.25rem + 1.5vw, 2.25rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--clr-text);
  }
`;

function ProjectsPage() {
  useEffect(() => {
    document.title = `Personal projects · ${NAME}`;
  }, []);

  return (
    <Page id="main" tabIndex={-1}>
      <a className="back" href="/#projects">
        <FiArrowLeft aria-hidden="true" />
        {NAME}
      </a>
      <h1>Personal projects</h1>
      <Intro>{PROJECTS_INTRO}</Intro>
      <ProjectList projects={allProjects} />
      <Footer />
    </Page>
  );
}

export default ProjectsPage;
