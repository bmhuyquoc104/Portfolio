import styled from "styled-components";
import { m } from "motion/react";
import ExternalLink from "../ExternalLink/ExternalLink";
import Tag, { TagList } from "../Tag/Tag";
import { ItemList } from "../Section/parts";

const Item = styled(m.li)`
  display: grid;
  gap: 0.75rem;
  @media (min-width: 640px) {
    grid-template-columns: 9.5rem 1fr;
    gap: 1.5rem;
  }
  .thumb {
    justify-self: start;
    align-self: start; /* don't stretch to the row height */
    width: 100%;
    max-width: 9.5rem;
    overflow: hidden; /* clips the hover zoom */
    border-radius: 4px;
    border: 2px solid var(--clr-line);
  }
  .thumb img {
    display: block;
    width: 100%;
    height: auto;
  }
  /* Phone screenshots are tall; cap their height so they show whole instead of being cropped. */
  .thumb.mobile {
    width: auto;
    max-width: 100%;
  }
  .thumb.mobile img {
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

const zoom = { rest: { scale: 1 }, hover: { scale: 1.06 } };

function ProjectList({ projects }) {
  return (
    <ItemList>
      {projects.map(({ id, name, description, image, website, repo, demo, technologies, kind }) => (
        <Item key={id} initial="rest" whileHover="hover">
          <div className={`thumb ${kind === "mobile" ? "mobile" : ""}`}>
            <m.img
              variants={zoom}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={image}
              alt={`${name} screenshot`}
              loading="lazy"
            />
          </div>
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
