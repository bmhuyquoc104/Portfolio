import styled from "styled-components";
import { motion } from "framer-motion";

const SectionExperienceStyled = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 0 1em 3em;
  gap: 4em;
  width: 85%;
  & > :first-child {
    align-self: center;
  }
  .experience-detail-container{
    display: flex;
    align-items: flex-start;
    width: min(100%, 50em);
    justify-content:center;
    gap: 2em;
  
    & >:first-child {
      width:max-content;
      font-weight:200;
      opacity:0.7;
    }
    & >:nth-child(2){
      flex:1;
    }
  }
  .experience-info{
    display: flex;
    flex-direction: column;
    gap:1em;
  }
  .experience-description{
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  @media (max-width: 768px) {
    padding: 0;

    .experience-detail-container{
      flex-direction:column;
    }
  }
`;

export default SectionExperienceStyled;
