import styled from "styled-components";
import { motion } from "framer-motion";

const UnorderedListStyled = styled(motion.ul)`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "column" ? "column" : "row"};
  gap: ${({gap}) => gap || "2em"};
  justify-content: ${({jc}) => jc };
  flex-wrap: ${({wrap}) => wrap || "noWrap" };
  & > * {
    width: ${({ childrenWidth }) => childrenWidth || "100%"};
  }
  margin-top: ${({mt}) => mt || "0"};

  @media (max-width: 480px) {
    flex-direction: row;

    width: 100%;
    padding: ${({p}) => p || "1em" };
  }
`;

export default UnorderedListStyled;
