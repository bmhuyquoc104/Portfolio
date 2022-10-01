import styled from "styled-components";
import { motion } from "framer-motion";

const GridContainerStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  padding: 0 3em;
  gap: 1em;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export default GridContainerStyled;
