import styled from "styled-components";
import Section from "../Section/Section";
import { ABOUT, SKILL_GROUPS } from "../../data/site";

const Skills = styled.dl`
  margin-top: 2rem;
  display: grid;
  gap: 0.75rem;

  & > div {
    display: grid;
    gap: 0.125rem;
    @media (min-width: 640px) {
      grid-template-columns: 9rem 1fr;
      gap: 1rem;
    }
  }
  dt {
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--clr-accent);
  }
  dd {
    font-size: 0.875rem;
  }
`;

const Paragraphs = styled.div`
  display: grid;
  gap: 1rem;
`;

function About() {
  return (
    <Section id="about" title="About">
      <Paragraphs>
        {ABOUT.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </Paragraphs>
      <Skills>
        {SKILL_GROUPS.map(({ title, items }) => (
          <div key={title}>
            <dt>{title}</dt>
            <dd>{items.join(" · ")}</dd>
          </div>
        ))}
      </Skills>
    </Section>
  );
}

export default About;
