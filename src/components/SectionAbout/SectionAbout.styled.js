import styled from "styled-components";
import {motion} from "framer-motion"

const SectionAboutStyled = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & > *{
    width:42%;
  }
`;

export default SectionAboutStyled;
