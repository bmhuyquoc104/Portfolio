import React from "react";
import GridContainerStyled from "./GridContainer.styled";

function GridContainer({ children }) {
  return <GridContainerStyled layout>{children}</GridContainerStyled>;
}

export default GridContainer;
