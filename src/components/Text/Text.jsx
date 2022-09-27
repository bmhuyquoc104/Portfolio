import React from "react";
import { LinkStyled, Heading1Styled,ButtonLinkStyled } from "./Text.styled";

function Text({ type, text,direction }) {
  if (type == "a") {
    return <LinkStyled direction = {direction}>{text}</LinkStyled>;
  } else if (type == "button-link") {
    return <ButtonLinkStyled direction = {direction}>{text}</ButtonLinkStyled>;
  } else if (type == "h1") {
    return <Heading1Styled>{text}</Heading1Styled>;
  }
}

export default Text;
