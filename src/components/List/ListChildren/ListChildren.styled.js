import styled from "styled-components";
import {motion} from "framer-motion"

const ListChildrenStyled = styled(motion.li)`
  display: flex;
  gap:0.5em;
  list-style-type: none;
  font-family: var(--font_playFair);
  font-size: 0.8125rem;
  font-weight: 300;
  color:${({theme}) => theme.header.color};
  span {
    color: var(--clr_primary_color);
    font-size: 0.8125rem;
  }
`;

export default ListChildrenStyled;
