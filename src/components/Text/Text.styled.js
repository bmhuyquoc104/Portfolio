import styled from "styled-components";
import { motion } from "framer-motion";

const Heading1Styled = styled(motion.h1)`
  font-family: var(--font_sans);
  font-size: clamp(1.8rem, 0.96rem + 4.2vw, 6rem);
  font-weight: 900;
  line-height: 1em;
  color: ${({ theme }) => theme.header.color};
  display: flex;
  gap: 0.2em;

  .words > * {
    display: inline-block;

    letter-spacing: -0.04em;
  }
`;

const StyledHeading2 = styled.h2``;

const StyledHeading3 = styled.h3``;

const LinkStyled = styled.a`
  font-family: var(--font_sans);
  font-size: ${({ direction }) =>
    direction === "column" ? "1.25rem" : "0.8125rem"};
  font-weight: 300;
  color: ${({ theme }) => theme.header.color};
  cursor: pointer;
`;

const ButtonLinkStyled = styled(motion.a)`
  font-family: var(--font_sans);
  font-size: ${({ size, direction }) =>
    direction === "column" ? "1.25rem" : size};
  font-weight: 300;
  color: var(--clr_primary_color);
  border-radius: 4px;
  border: 1px solid var(--clr_primary_color);
  padding: 1em 1.25em;
  width: max-content;
  cursor: pointer;
`;

const ParagraphStyled = styled(motion.p)`
  font-family: var(--font_sans);
  font-size: clamp(0.85rem, 0.77rem + 0.4vw, 1.25rem);
  line-height: 1.7em;
  font-weight: 400;
  color: ${({ theme }) => theme.text.color};
`;

export { LinkStyled, Heading1Styled, ButtonLinkStyled, ParagraphStyled };
