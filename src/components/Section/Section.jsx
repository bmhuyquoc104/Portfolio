import styled from "styled-components";

const SectionStyled = styled.section`
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
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      padding: 0;
      margin: -1px;
    }
  }
`;

function Section({ id, title, children }) {
  return (
    <SectionStyled id={id} aria-label={title}>
      <h2 className="title">{title}</h2>
      {children}
    </SectionStyled>
  );
}

export default Section;
