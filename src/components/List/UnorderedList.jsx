import React from "react";
import UnorderedListStyled from "./UnorderedList.styled";
import ListChildren from "./ListChildren/ListChildren";
import Link from "../Link/Link";

function UnorderedList({
  variants,
  jc,
  direction,
  children,
  childrenWidth,
  gap,
  mt,
  p,
  wrap,
}) {
  return (
    <UnorderedListStyled
      variants={variants}
      wrap={wrap}
      p={p}
      jc={jc}
      mt={mt}
      gap={gap}
      childrenWidth={childrenWidth}
      direction={direction}
    >
      {children}
    </UnorderedListStyled>
  );
}

export default UnorderedList;
