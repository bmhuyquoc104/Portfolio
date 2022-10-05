import styled from "styled-components";
import { motion } from "framer-motion";

const ToggleStyled = styled(motion.div)`
  .background {
    width: 55px;
    height: 26px;
    background-color: #142d2d;
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
    background-color: #00babc;
    border-radius: 50px;
  }
  /* .checkbox {
    opacity: 0;
    position: absolute;
  }
  .checkbox:checked + .label .ball {
    transform: translateX(24px);
  }
  .label {
    width: 50px;
    height: 30px;
    position: relative;
    background-color: var(--clr_primary_color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5px;
    border-radius: 50px;
  }
  .ball {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    left: 4px;
    top: 5px;
    background-color: #000;
    transition: transform 0.2s linear;
  }
  */
`;

export default ToggleStyled;
