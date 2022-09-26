import styled from "styled-components";

const NavbarStyled = styled.div`
  display: flex;
  gap:1em;
  align-items:center;
  ol{
    display: flex;
    gap:1em;
    list-style: none;
    counter-reset: my-counter;
  }
  ol li {
  counter-increment: my-counter;
  display: flex;

}
ol li::before {
  content: "0" counter(my-counter) ".";
  font-size: 0.8125rem;
  color:var(--clr_primary_color);
  display: flex;
  align-items: flex-end;
  margin-right: 0.5rem;
}
`
export default NavbarStyled