import styled from "styled-components";
import {motion} from "framer-motion"

const FlexContainerStyled = styled(motion.div)`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  gap: ${({ gap }) => gap || "1em"};
`;

export default FlexContainerStyled;
