import styled from "styled-components";

// Vertical list of dated/titled entries (experience, projects). Dims the others on hover.
export const ItemList = styled.ol`
  display: grid;
  gap: 3rem;
  list-style: none;

  @media (hover: hover) {
    &:hover > li:not(:hover) {
      opacity: 0.5;
    }
  }
  & > li {
    transition: opacity 0.2s ease;
  }
`;

// Short muted sentence under a list's label.
export const Intro = styled.p`
  margin-bottom: 2.5rem;
  font-size: 0.875rem;
`;
