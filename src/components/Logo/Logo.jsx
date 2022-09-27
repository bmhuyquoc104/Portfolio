import React from "react";
import { imageResource } from "../../assets/imageResource";
import LogoStyled from "./Logo.styled";
import { LogoAnimation } from "../../style/AnimationStyled";

function Logo() {
  return (
    <LogoStyled
      variants={LogoAnimation}
      animate="show"
      initial="hidden"
      src={imageResource.Logo}
      alt="Logo"
    />
  );
}

export default Logo;
