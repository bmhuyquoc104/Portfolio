import styled from "styled-components";
import { motion } from "framer-motion";

const UnorderedListStyled = styled(motion.ul)`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "column" ? "column" : "row"};
  gap: 2em;

  @media (max-width: 480px){
    flex-direction:row;
    justify-content:space-evenly;
    width: 100%;
    padding:1em;
  }
`;

export default UnorderedListStyled;
