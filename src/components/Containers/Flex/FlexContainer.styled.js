import styled from "styled-components";
import { motion } from "framer-motion";

const FlexContainerStyled = styled(motion.div)`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  gap: ${({ gap }) => gap || "1em"};
  width: ${({ width }) => width || "100%"};
`;

const AbsoluteFlexContainerStyled = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap:1em;
  justify-content: flex-end;
  padding: 1em 1.5em;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-image: linear-gradient(180deg, rgba(64,59,52,0.2), rgba(37,33,31,1));


`;

export { FlexContainerStyled, AbsoluteFlexContainerStyled };
