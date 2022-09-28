import styled from "styled-components";
import { motion } from "framer-motion";

const Heading1Styled = styled(motion.h1)`
  font-family: var(--font_sans);
  font-size: clamp(1.8rem, 0.96rem + 4.2vw, 6rem);
  font-weight: 700;
  line-height: 1em;
  color: ${({ theme }) => theme.header.color};
  display: flex;
  gap: 0.2em;

  .words > * {
    display: inline-block;

    letter-spacing: -0.04em;
  }
`;

const Heading2Styled = styled(motion.h2)`
  font-family: var(--font_sans);
  font-size: clamp(1.5rem, 0.7999999999999999rem + 3.5000000000000004vw, 5rem);
  font-weight: 500;
  line-height: 1em;
  color: ${({ theme, color }) => (color == "" ? theme.header.color : color)};
  display: flex;
  gap: 0.2em;

  .words > * {
    display: inline-block;
    letter-spacing: -0.01em;
  }
`;

const StyledHeading3 = styled.h3``;

const LinkStyled = styled(motion.a)`
  font-family: var(--font_playFair);
  font-size: clamp(0.8rem, 0.76rem + 0.19999999999999996vw, 1rem);
  font-weight: 300;
  color: ${({ theme, color }) => (color == "" ? theme.header.color : color)};
  cursor: pointer;
  text-decoration: none;
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
  text-decoration: none;
`;

const ParagraphStyled = styled(motion.p)`
  font-family: var(--font_playFair);
  font-size: clamp(0.8rem, 0.76rem + 0.19999999999999996vw, 1rem);
  line-height: 1.7em;
  font-weight: 300;
  color: ${({ theme }) => theme.text.color};
`;

export {
  LinkStyled,
  Heading1Styled,
  ButtonLinkStyled,
  ParagraphStyled,
  Heading2Styled,
};
