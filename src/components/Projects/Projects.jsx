import styled from "styled-components";
import Section from "../Section/Section";
import ProjectList from "./ProjectList";
import { Intro } from "../Section/parts";
import { allProjects } from "../../data/projects";
import { PROJECTS_INTRO } from "../../data/site";
import { FiArrowRight } from "react-icons/fi";

const featured = allProjects
  .filter((project) => project.featured)
  .sort((a, b) => a.featured - b.featured);

// Desktop has no visible section titles, so the label is shown here; mobile already has a sticky title.
const Label = styled.p`
  display: none;
  margin-bottom: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--clr-accent);

  @media (min-width: 1024px) {
    display: block;
  }
`;

const AllLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: 2.5rem;
  font-weight: 500;
  color: var(--clr-text);

  svg {
    transition: transform 0.2s ease;
  }
  &:hover,
  &:focus-visible {
    color: var(--clr-accent);
    svg {
      transform: translateX(3px);
    }
  }
`;

function Projects() {
  return (
    <Section id="projects" title="Personal projects">
      <Label>Personal projects</Label>
      <Intro>{PROJECTS_INTRO}</Intro>
      <ProjectList projects={featured} />
      <AllLink href="/projects">
        View all {allProjects.length} projects
        <FiArrowRight aria-hidden="true" />
      </AllLink>
    </Section>
  );
}

export default Projects;
