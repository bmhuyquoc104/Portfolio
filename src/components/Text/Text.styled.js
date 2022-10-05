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

const Heading3Styled = styled(motion.h3)`
  font-family: var(--font_sans);
  font-size: ${({ fz }) => fz || "clamp(1rem, 0.8rem + 1vw, 2rem)"};
  font-weight: 900;
  color: ${({ theme }) => theme.header.color};
`;

const Heading4Styled = styled(motion.h4)`
  font-family: var(--font_sans);
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--clr_primary_color);
`;

const LinkStyled = styled(motion.a)`
  font-family: var(--font_playFair);
  font-size: clamp(0.8rem, 0.76rem + 0.19999999999999996vw, 1rem);
  font-weight: 300;
  color: ${({ theme, color }) =>
    color == undefined ? theme.header.color : color};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: ${({ td }) => td || ""};
  }
`;

const ButtonLinkStyled = styled(motion.a)`
  font-family: var(--font_sans);
  font-size: ${({ size, direction }) =>
    direction === "column" ? "1rem" : size};
  font-weight: 300;
  color: var(--clr_primary_color);
  border-radius: 4px;
  border: 1px solid var(--clr_primary_color);
  padding: 1em 1.25em;
  width: max-content !important;  
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
  Heading3Styled,
  Heading4Styled,
};
