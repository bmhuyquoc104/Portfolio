import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectDetailContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  display: flex;
  gap: 1.5em;
  flex-direction: column;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.navbar.backgroundColor};
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  z-index: 10;
  overflow-y: scroll;
  padding: 2em 1.25em;
  width: 32em;
  height: 100%;
  img {
    width: 100%;
    border-radius: 5px;
    height: 100%;
    object-fit: cover;
  }
  .mobile{
    width: 299px;
    border-radius: 5px;
    height: 600px;
    object-fit: cover;
    align-self:center;
  }

  @media (max-width: 510px) {
    width: 100%;
  }
`;

export default ProjectDetailContainerStyled;
