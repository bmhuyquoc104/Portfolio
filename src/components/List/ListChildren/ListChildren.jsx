import React from "react";
import ListChildrenStyled from "./ListChildren.styled";

function ListChildren({ children, variants }) {
  return (
    <ListChildrenStyled variants={variants}>{children}</ListChildrenStyled>
  );
}

export default ListChildren;
