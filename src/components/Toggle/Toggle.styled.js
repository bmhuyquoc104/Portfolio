import styled from "styled-components";
import { motion } from "framer-motion";

const ToggleStyled = styled(motion.div)`
  .background {
    width: 55px;
    height: 26px;
    background-color: var(--clr-toggle-track);
    display: flex;
    border-radius: 50px;
    padding: 10px;
    cursor: pointer;
    position: relative;
  }
  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:3px;
    left:2px;
    width: 20px;
    height: 20px;
    background-color: var(--clr-accent);
    border-radius: 50px;
  }
`;

export default ToggleStyled;
