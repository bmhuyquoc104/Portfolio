import styled from "styled-components";
import { motion } from "framer-motion";

const ListChildrenStyled = styled(motion.li)`
  display: flex;
  gap: 0.5em;
  list-style-type: none;
  font-family: var(--font_playFair);
  font-size: ${({ fz }) => fz || "0.8125rem"};
  font-weight: 300;
  color: ${({ theme }) => theme.header.color};
  padding: ${({ p }) => p || "0"};
  background-color: ${({ bg }) => bg || ""};
  border-radius: ${({ br }) => br || "0"};
  text-align: center;
  cursor: pointer;
  position: relative;
  span {
    color: var(--clr_primary_color);
    font-size: 0.8125rem;
  }
  &.active {
    padding:0.1em 0;
    color: var(--clr_primary_color);
  }
  .underline {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--clr_primary_color);
  }
 
`;

export default ListChildrenStyled;
