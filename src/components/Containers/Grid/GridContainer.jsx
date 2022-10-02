import React from "react";
import GridContainerStyled from "./GridContainer.styled";
import { sectionProjectAnimation } from "../../../style/AnimationStyled";
function GridContainer({ children }) {
  return (
    <GridContainerStyled
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
      variants={sectionProjectAnimation}
      layout
    >
      {children}
    </GridContainerStyled>
  );
}

export default GridContainer;
