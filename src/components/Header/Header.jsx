import React from 'react'
import HeaderStyled from './Header.styled'
import Navbar from "../Navbar/Navbar"
import Logo from "../Logo/Logo"

function Header() {
  return (
    <HeaderStyled>
      <Logo/>
      <Navbar/>
    </HeaderStyled>
  )
}

export default Header