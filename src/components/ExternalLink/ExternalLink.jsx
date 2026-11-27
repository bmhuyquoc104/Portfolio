import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";

const LinkStyled = styled.a`
  display: inline-flex;
  align-items: baseline;
  gap: 0.25rem;
  font-weight: 500;
  color: var(--clr-text);

  svg {
    align-self: center;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }
  &:hover,
  &:focus-visible {
    color: var(--clr-accent);
    svg {
      transform: translate(2px, -2px);
    }
  }
`;

function ExternalLink({ href, children }) {
  return (
    <LinkStyled href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <FiArrowUpRight aria-hidden="true" />
    </LinkStyled>
  );
}

export default ExternalLink;
