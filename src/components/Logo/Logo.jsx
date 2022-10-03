import React from "react";
import { imageResource } from "../../assets/imageResource";
import LogoStyled from "./Logo.styled";
import { Link, animateScroll as scroll } from "react-scroll";

import { LogoAnimation } from "../../style/AnimationStyled";

function Logo({ setIsToggle }) {
  console.log(setIsToggle);
  return (
    <LogoStyled
      variants={LogoAnimation}
      animate="show"
      initial="hidden"
      src={imageResource.Logo}
      alt="Logo"
      onClick={
        setIsToggle != undefined
          ? () => {
              setIsToggle(false);
              scroll.scrollToTop();
            }
          : () => {
              scroll.scrollToTop();
            }
      }
    />
  );
}

export default Logo;
