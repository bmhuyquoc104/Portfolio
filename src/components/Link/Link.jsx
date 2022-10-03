import React from "react";
import LinkStyled from "./Link.styled";

function Link({ children, href, target }) {
  return (
    <LinkStyled
      target={target}
      href={href}
      whileHover={{ scaleY: 1.2, color: "var(--clr_primary_color)" }}
    >
      {children}
    </LinkStyled>
  );
}

export default Link;
