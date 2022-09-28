import styled from "styled-components";
import { motion } from "framer-motion";

const ImageStyled = styled(motion.div)`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
  }
`;

export default ImageStyled;
