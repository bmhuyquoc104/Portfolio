import React from "react";
import FlexContainerStyled from "./FlexContainer.styled";
import {sectionAboutAnimation} from "../../../style/AnimationStyled"

function FlexContainer({
  direction,
  justifyContent,
  alignItems,
  children,
  gap,
  width
}) {

  return (
    <FlexContainerStyled
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
      variants={sectionAboutAnimation}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      width={width}
    >
      {children}
    </FlexContainerStyled>
  );
}

export default FlexContainer;
