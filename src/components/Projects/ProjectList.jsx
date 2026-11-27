import styled from "styled-components";
import ExternalLink from "../ExternalLink/ExternalLink";
import Tag, { TagList } from "../Tag/Tag";
import { ItemList } from "../Section/parts";

const Item = styled.li`
  display: grid;
  gap: 0.75rem;
  @media (min-width: 640px) {
    grid-template-columns: 9.5rem 1fr;
    gap: 1.5rem;
  }
  img {
    display: block;
    width: 100%;
    max-width: 9.5rem;
    height: auto;
    border-radius: 4px;
    border: 2px solid var(--clr-line);
  }
  /* Phone screenshots are tall; cap their height so they show whole instead of being cropped. */
  img.mobile {
    width: auto;
    max-width: 100%;
    max-height: 11rem;
  }
  h3 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--clr-text);
  }
  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
  }
`;

function ProjectList({ projects }) {
  return (
    <ItemList>
      {projects.map(({ id, name, description, image, website, repo, demo, technologies, kind }) => (
        <Item key={id}>
          <img
            className={kind === "mobile" ? "mobile" : ""}
            src={image}
            alt={`${name} screenshot`}
            loading="lazy"
          />
          <div>
            <h3>
              <ExternalLink href={website || repo}>{name}</ExternalLink>
            </h3>
            <p>{description}</p>
            {demo && (
              <p className="demo">
                <ExternalLink href={demo}>Live demo</ExternalLink>
              </p>
            )}
            <TagList aria-label="Technologies">
              {technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </TagList>
          </div>
        </Item>
      ))}
    </ItemList>
  );
}

export default ProjectList;
