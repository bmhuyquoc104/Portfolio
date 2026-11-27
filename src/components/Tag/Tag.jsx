import styled from "styled-components";

const TagStyled = styled.li`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  color: var(--clr-tag);
  background-color: color-mix(in srgb, var(--clr-tag) 14%, transparent);
`;

function Tag({ children }) {
  return <TagStyled>{children}</TagStyled>;
}

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export default Tag;
