import styled from "styled-components";
import { motion } from "framer-motion";

const LinkStyled = styled(motion.a)`
  display: flex;
  cursor: pointer;
  color:${({ theme }) => theme.header.color};
`;

export default LinkStyled;
