import React from "react";
import ImageStyled from "./Image.styled";
import { ImageAnimation } from "../../../style/AnimationStyled";

function Image({ children }) {
  return (
    <ImageStyled
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
      variants={ImageAnimation}
    >
      {children}
    </ImageStyled>
  );
}

export default Image;
