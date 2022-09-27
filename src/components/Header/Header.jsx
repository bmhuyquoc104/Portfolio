import { useState } from "react";
import HeaderStyled from "./Header.styled";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import { AiOutlineMenu } from "react-icons/ai";
import { IconStyled } from "../../style/ConstantStyled";
import HamburgerHeader from "./HamburgerHeader/HamburgerHeader";
import { AnimatePresence } from "framer-motion";

function Header({variants}) {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <HeaderStyled variants = {variants}>
      <Logo />
      <Navbar />
      <AiOutlineMenu style={IconStyled} onClick={() => setIsToggle(true)} />
      <AnimatePresence mode="wait">
        {isToggle && (
          <HamburgerHeader setIsToggle={setIsToggle}></HamburgerHeader>
        )}
      </AnimatePresence>
    </HeaderStyled>
  );
}

export default Header;
