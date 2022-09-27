import styled from "styled-components";

const Heading1Styled = styled.h1`
  font-family:var(--font_playFair);
  font-size:1.75rem;
  color:${({theme}) => theme.header.color};
`

const StyledHeading2 = styled.h2``

const StyledHeading3 = styled.h3``

const LinkStyled = styled.a`
  font-family:var(--font_sans);
  font-size: ${({ direction }) => (direction === "column" ? "1.25rem" : "0.8125rem")};
  font-weight:300;
  color:${({theme}) => theme.header.color};
  cursor:pointer;
`

const ButtonLinkStyled = styled.a`
  font-family:var(--font_sans);
  font-size: ${({ direction }) => (direction === "column" ? "1.25rem" : "0.8125rem")};
  font-weight:300;
  color:var(--clr_primary_color);
  border-radius:4px;
  border:1px solid var(--clr_primary_color);
  padding:0.75rem 1rem;

`

const StyledParagraph = styled.p`
`

export {LinkStyled,Heading1Styled,ButtonLinkStyled}