import { useState, useEffect, useRef } from "react";
import HeaderStyled from "./Header.styled";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import { AiOutlineMenu } from "react-icons/ai";
import { IconStyled } from "../../style/ConstantStyled";
import HamburgerHeader from "./HamburgerHeader/HamburgerHeader";
import { AnimatePresence } from "framer-motion";

function Header({ variants }) {
  const headerRef = useRef(null);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      headerRef.current.classList.add("active");
    } else {
      headerRef.current.classList.remove("active");
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  const [isToggle, setIsToggle] = useState(false);
  return (
    <HeaderStyled ref={headerRef} variants={variants}>
      <Logo />
      <Navbar/>
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
