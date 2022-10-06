import styled from "styled-components";
import { motion } from "framer-motion";

const SocialContactStyled = styled(motion.aside)`
  display: flex;
  min-height: 40vh;
  width: 60px;
  align-items: center;
  position: fixed;
  z-index:10;
  top: 30%;
  left: 2em;
  justify-content: center;
  @media (max-width: 768px) {
    left: revert;
    right: 2em;
  }
  @media (max-width: 480px) {
    background-color: ${({ theme }) => theme.navbar.backgroundColor};
    right: revert;
    left: 0;
    bottom: 0;
    top: revert;
    width: 100%;
    min-height: revert;
  }
`;

export default SocialContactStyled;
