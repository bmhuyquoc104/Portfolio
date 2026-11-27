import styled from "styled-components";
import { motion } from "framer-motion";

const LinkStyled = styled(motion.a)`
  display: flex;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  :hover {
    color: var(--clr-accent);
    transform:scaleY(1.2);
  }
`;

export default LinkStyled;
