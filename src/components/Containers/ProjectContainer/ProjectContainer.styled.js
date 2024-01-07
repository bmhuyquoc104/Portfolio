import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectContainerStyled = styled(motion.div)`
  border-radius: 5px;
  position: relative;
  min-height: 350px;
  img {
    width: 100%;
    border-radius: 5px;
    height: 100%;
    object-fit: fill;
  }
  .mobile{
    width: 100%;
    border-radius: 5px;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 480px) {
    min-height: 400px;
  }
`;

export default ProjectContainerStyled;
