import styled from "styled-components";

const ButtonStyled = styled.button`
  font-family: var(--font_sans);
  font-size: clamp(0.8rem, 0.76rem + 0.19999999999999996vw, 1rem);
  font-weight: 300;
  color: var(--clr_primary_color);
  width: max-content !important;
  cursor: pointer;
  text-decoration: none;
  text-transform:uppercase;
  background-color:transparent;
  border:none;
`;

export default ButtonStyled;
