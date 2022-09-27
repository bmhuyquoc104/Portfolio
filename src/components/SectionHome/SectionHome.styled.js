import styled from "styled-components";
import { motion } from "framer-motion";

const SectionHomeStyled = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 3em 3em 1em 3em;
  width: 85%;
  & > :nth-child(4) {
    width: 50%;
    margin-top:1em;
  }
  & > :last-child {
    margin-top: 1em;
  }
  @media (max-width: 950px) {
    & > :nth-child(4) {
      width: 70%;
    }
  }
  @media (max-width: 768px) {
    width:100%;
    padding:3em 0 3em 0;
    & > :nth-child(4) {
      width: 85%;
    }
  }
`;

export default SectionHomeStyled;
