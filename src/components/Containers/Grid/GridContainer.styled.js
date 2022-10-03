import styled from "styled-components";
import { motion } from "framer-motion";

const GridContainerStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  row-gap: 1.5em;
  column-gap: 1em;
  &.mobile {
    place-content:space-around;
    grid-template-columns: repeat(auto-fit, minmax(278px, 278px));
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export default GridContainerStyled;
