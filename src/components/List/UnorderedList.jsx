import React from "react";
import UnorderedListStyled from "./UnorderedList.styled";

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
  height,
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
      height = {height}
    >
      {children}
    </UnorderedListStyled>
  );
}

export default UnorderedList;
