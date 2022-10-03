import React from "react";
import AbsoluteHeaderContainer from "../../Containers/AbsoluteHeaderContainer";
import Logo from "../../Logo/Logo";
import HamburgerHeaderStyled from "./HamburgerHeader.styled";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "../../Navbar/Navbar";
import { IconStyled } from "../../../style/ConstantStyled";
import { DropDownAnimation } from "../../../style/AnimationStyled";

function HamburgerHeader({ setIsToggle }) {
  return (
    <AbsoluteHeaderContainer>
      <HamburgerHeaderStyled
        variants={DropDownAnimation}
        animate="show"
        initial="hidden"
        exit="exit"
      >
        <Logo setIsToggle={setIsToggle} />
        <Navbar setIsToggle={setIsToggle} direction="column" />
        <AiOutlineClose style={IconStyled} onClick={() => setIsToggle(false)} />
      </HamburgerHeaderStyled>
    </AbsoluteHeaderContainer>
  );
}

export default HamburgerHeader;
