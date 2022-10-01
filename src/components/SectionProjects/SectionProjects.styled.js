import styled from "styled-components";
import {motion} from "framer-motion"

const SectionProjectsStyled = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  gap:2em;
  width: 85%;
  flex-direction:column;
  padding: 3em 3em 1em 3em;
  @media (max-width:768px){
    width: 100%;
    padding:3em 0;
    & >*{
      width: 80%;
    }
  }
  @media (max-width:480px){
    & >*{
      width: 100%;
    }
  }
`;

export default SectionProjectsStyled;
