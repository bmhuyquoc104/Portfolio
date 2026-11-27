import styled from "styled-components";
import { m } from "motion/react";

const SectionStyled = styled(m.section)`
  margin-bottom: 4.5rem;
  scroll-margin-top: 4rem;

  /* On small screens there is no sidebar nav, so show the section titles. */
  .title {
    position: sticky;
    top: 0;
    z-index: 1;
    margin: 0 -1.5rem 1rem;
    padding: 1.25rem 1.5rem 0.75rem;
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--clr-accent);
    background-color: color-mix(in srgb, var(--clr-bg) 85%, transparent);
    backdrop-filter: blur(8px);
  }
  @media (min-width: 1024px) {
    scroll-margin-top: 6rem;
    .title {
      position: static;
      margin: 0 0 1.5rem;
      padding: 0;
      background: none;
      backdrop-filter: none;
    }
  }
`;

function Section({ id, title, children }) {
  return (
    <SectionStyled
      id={id}
      aria-label={title}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="title">{title}</h2>
      {children}
    </SectionStyled>
  );
}

export default Section;
