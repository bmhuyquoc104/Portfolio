import React from 'react'
import {imageResource} from "../../assets/imageResource"
import LogoStyled from "./Logo.styled"

function Logo() {
  return (
    <LogoStyled src = {imageResource.Logo} alt = "Logo"/>
  )
}

export default Logo