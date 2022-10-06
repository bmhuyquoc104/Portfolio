import styled from "styled-components";
import { motion } from "framer-motion";

const LinkStyled = styled(motion.a)`
  display: flex;
  cursor: pointer;
  color: ${({ theme }) => theme.header.color};
  :hover {
    color: var(--clr_primary_color);
    transform:scaleY(1.2);
  }
`;

export default LinkStyled;
