import React from "react";
import { LinkStyled, Heading1Styled,ButtonLinkStyled } from "./Text.styled";

function Text({ type, text }) {
  if (type == "a") {
    return <LinkStyled>{text}</LinkStyled>;
  } else if (type == "button-link") {
    return <ButtonLinkStyled>{text}</ButtonLinkStyled>;
  } else if (type == "h1") {
    return <Heading1Styled>{text}</Heading1Styled>;
  }
}

export default Text;
