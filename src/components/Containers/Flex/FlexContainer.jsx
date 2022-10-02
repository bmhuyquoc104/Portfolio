import React from "react";
import {
  FlexContainerStyled,
  AbsoluteFlexContainerStyled,
  FixedFlexContainerStyled,
} from "./FlexContainer.styled";
import {
  sectionAboutAnimation,
  AbsoluteFlexContainerAnimation,
} from "../../../style/AnimationStyled";

function FlexContainer({
  direction,
  justifyContent,
  alignItems,
  children,
  gap,
  width,
  cursor,
  onClick,
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
      onClick={onClick}
      cursor={cursor}
    >
      {children}
    </FlexContainerStyled>
  );
}

function AbsoluteFlexContainer({ children }) {
  return (
    <AbsoluteFlexContainerStyled
      initial="hidden"
      exit="exit"
      animate="show"
      variants={AbsoluteFlexContainerAnimation}
    >
      {children}
    </AbsoluteFlexContainerStyled>
  );
}

function FixedFlexContainer() {
  return <FixedFlexContainerStyled></FixedFlexContainerStyled>;
}



export { AbsoluteFlexContainer, FlexContainer, FixedFlexContainer };
