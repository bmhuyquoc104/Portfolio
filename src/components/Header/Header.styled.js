import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderStyled = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 1em 3em;

  &.active {
    background-color: ${({ theme }) => theme.navbar.backgroundColor};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5); 
;
  }

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
  @media (max-width:480px){
    padding: 1em 1.25em;

  }
`;

export default HeaderStyled;
