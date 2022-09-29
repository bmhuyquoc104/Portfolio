import styled from "styled-components";
import { motion } from "framer-motion";

const SectionAboutStyled = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 3em 0 1em 3em;
  width: 85%;

  & > :first-child {
    width: 50%;
  }
  & >:last-child {
    width:45%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding:3em 0 3em 0;
    width: 100%;
    & > :first-child {
      width: 100%;
      & > *{
        width: 70%;
      }
    }
    & >:last-child {
      width: max(60%,210px);
    }
  }
  
`;

export default SectionAboutStyled;
