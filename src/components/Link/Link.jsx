import React from "react";
import LinkStyled from "./Link.styled";

function Link({ children }) {
  return (
    <LinkStyled
      whileHover={{ scaleY: 1.2, color: "var(--clr_primary_color)" }}
    >
      {children}
    </LinkStyled>
  );
}

export default Link;
