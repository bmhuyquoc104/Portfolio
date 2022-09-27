import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderStyled = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 3em;

  & > :last-child {
    display: none;
  }

  @media (max-width: 768px) {
    & > :last-child {
      display: revert;
    }
    & > :nth-child(2) {
      display: none;
    }
  }
`;

export default HeaderStyled;
