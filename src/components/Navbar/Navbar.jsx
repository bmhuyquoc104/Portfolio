import React from "react";
import NavbarStyled from "./Navbar.styled";
import Text from "../Text/Text";

function Navbar() {
  return (
    <NavbarStyled>
      <ol>
        <li>
          <Text type="a" text="About" />
        </li>
        <li>
          <Text type="a" text="Skills" />
        </li>
        <li>
          <Text type="a" text="Projects" />
        </li>
        <li>
          <Text type="a" text="Contact" />
        </li>
      </ol>
          <Text type="button-link" text="Resume"/>
    </NavbarStyled>
  );
}

export default Navbar;
