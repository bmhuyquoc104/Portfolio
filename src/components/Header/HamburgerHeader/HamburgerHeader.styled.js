import styled from "styled-components";
import { motion } from "framer-motion";

const HamburgerHeaderStyled = styled(motion.div)`
  padding: 3em;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    padding: 3em 1.5em 2em 1.5em;
  }
`;

export default HamburgerHeaderStyled;
