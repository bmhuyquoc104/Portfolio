import styled from "styled-components";
import StatusPanel from "../StatusPanel/StatusPanel";
import Reveal from "../Reveal/Reveal";
import { FiFileText } from "react-icons/fi";
import useActiveSection from "../../hooks/useActiveSection";
import { NAME, ALIAS, ROLE, TAGLINE, NAV_SECTIONS, SOCIAL_LINKS, RESUME_URL } from "../../data/site";

const SECTION_IDS = NAV_SECTIONS.map(({ id }) => id);

const SidebarStyled = styled.header`
  padding: 5rem 0 3rem;

  @media (min-width: 1024px) {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 48%;
    max-height: 100vh;
    overflow-y: auto;
    padding: 4rem 0;
  }

  h1 {
    font-size: clamp(2.25rem, 1.5rem + 2.5vw, 3rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--clr-text);
  }
  .alias {
    margin-top: 0.25rem;
    font-size: 0.875rem;
  }
  .role {
    margin-top: 0.75rem;
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--clr-role);
  }
  .tagline {
    max-width: 20rem;
    margin-top: 1rem;
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--clr-text);
  border: 1px solid var(--clr-line);
  border-radius: 6px;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: var(--clr-accent);
    border-color: var(--clr-accent);
  }
`;

const Nav = styled.nav`
  display: none;
  margin-top: 2.5rem;

  @media (min-width: 1024px) {
    display: block;
  }
  ul {
    display: grid;
    gap: 1rem;
  }
  a {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 0.625rem 0;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--clr-muted);
  }
  .line {
    width: 2rem;
    height: 1px;
    background: var(--clr-muted);
    transition: width 0.2s ease, background 0.2s ease;
  }
  a:hover,
  a[aria-current="true"] {
    color: var(--clr-accent);
  }
  a:hover .line,
  a[aria-current="true"] .line {
    width: 4rem;
    background: var(--clr-accent);
  }
`;

const Socials = styled.ul`
  display: flex;
  gap: 1.25rem;
  margin-top: 2.5rem;

  a {
    display: block;
    padding: 0.5rem;
    margin: -0.5rem;
    font-size: 1.5rem;
    color: var(--clr-muted);
    transition: color 0.2s ease;
  }
  a:hover,
  a:focus-visible {
    color: var(--clr-text);
  }
`;

function Sidebar() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <SidebarStyled>
      <div>
        <Reveal as="h1">{NAME}</Reveal>
        <Reveal as="p" className="alias" delay={0.04}>
          Also known as {ALIAS}
        </Reveal>
        <Reveal as="p" className="role" delay={0.08}>
          {ROLE}
        </Reveal>
        <Reveal as="p" className="tagline" delay={0.16}>
          {TAGLINE}
        </Reveal>
        <Reveal delay={0.24}>
          <StatusPanel />
        </Reveal>
        <Reveal delay={0.32}>
          <ResumeButton href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            <FiFileText aria-hidden="true" />
            Résumé
          </ResumeButton>
        </Reveal>
        <Nav aria-label="Sections">
          <ul>
            {NAV_SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={active === id}>
                  <span className="line" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Nav>
      </div>
      <Socials>
        {SOCIAL_LINKS.map(({ name, href, Icon }) => (
          <li key={name}>
            <a
              href={href}
              aria-label={name}
              {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <Icon />
            </a>
          </li>
        ))}
      </Socials>
    </SidebarStyled>
  );
}

export default Sidebar;
