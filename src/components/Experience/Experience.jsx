import styled from "styled-components";
import Section from "../Section/Section";
import { ItemList } from "../Section/parts";
import ExternalLink from "../ExternalLink/ExternalLink";
import Tag, { TagList } from "../Tag/Tag";
import experiences from "../../data/experience";
import { EDUCATION } from "../../data/site";

const Item = styled.li`
  display: grid;
  gap: 0.5rem;
  @media (min-width: 640px) {
    grid-template-columns: 9.5rem 1fr;
    gap: 1.5rem;
  }
  .period {
    padding-top: 0.25rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--clr-date);
  }
  h3 {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.4;
    color: var(--clr-text);
  }
  .bullets {
    display: grid;
    gap: 0.5rem;
    margin-top: 0.5rem;
    font-size: 0.875rem;
  }
`;

const Education = styled(ItemList)`
  margin-top: 2.5rem;
  .detail {
    margin-top: 0.25rem;
    font-size: 0.875rem;
  }
`;

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ItemList>
        {experiences.map(({ period, title, company, link, bullets, skills }) => (
          <Item key={company}>
            <span className="period">{period}</span>
            <div>
              <h3>
                {title} · <ExternalLink href={link}>{company}</ExternalLink>
              </h3>
              <ul className="bullets">
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <TagList aria-label="Technologies">
                {skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </TagList>
            </div>
          </Item>
        ))}
      </ItemList>
      <Education>
        <Item>
          <span className="period">{EDUCATION.period}</span>
          <div>
            <h3>
              {EDUCATION.degree} ·{" "}
              <ExternalLink href={EDUCATION.link}>{EDUCATION.school}</ExternalLink>
            </h3>
            <p className="detail">{EDUCATION.detail}</p>
          </div>
        </Item>
      </Education>
    </Section>
  );
}

export default Experience;
