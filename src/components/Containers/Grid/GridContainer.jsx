import React from "react";
import GridContainerStyled from "./GridContainer.styled";
import { sectionProjectAnimation } from "../../../style/AnimationStyled";
function GridContainer({ children,className }) {
  return (
    <GridContainerStyled
      className={className}
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
      variants={sectionProjectAnimation}
    >
      {children}
    </GridContainerStyled>
  );
}

export default GridContainer;
