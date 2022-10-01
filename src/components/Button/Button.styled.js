import styled from "styled-components";

const ButtonStyled = styled.button`
  font-family: var(--font_sans);
  font-size: clamp(0.8rem, 0.76rem + 0.19999999999999996vw, 1rem);
  font-weight: 300;
  color: ${({ theme }) => theme.header.color};
  border-radius: 4px;
  border: none;
  padding: 1em 1.25em;
  cursor: pointer;
`;
