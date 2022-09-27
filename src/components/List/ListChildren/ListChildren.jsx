import React from "react";
import ListChildrenStyled from "./ListChildren.styled";

function ListChildren({ children }) {
  return <ListChildrenStyled>{children}</ListChildrenStyled>;
}

export default ListChildren;
