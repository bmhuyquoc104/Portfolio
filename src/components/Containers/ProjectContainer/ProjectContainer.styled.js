import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectContainerStyled = styled(motion.div)`
  border-radius: 5px;
  position: relative;
  min-height: 300px;
  img {
    width: 100%;
    border-radius: 5px;
    height: 100%;
    object-fit: cover;
  }
`;

export default ProjectContainerStyled;
