import React from "react";
import LinkStyled from "./Link.styled";

function Link({ children, href, target }) {
  return (
    <LinkStyled
      target={target}
      href={href}
    >
      {children}
    </LinkStyled>
  );
}

export default Link;
