import { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

const GlobalStyled = createGlobalStyle`
  *,*::after,*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  };

  :root{ 
    // Font family
    --font_sans: 'Open Sans', sans-serif;
    --font_playFair: 'Playfair Display', serif;
    // Neutral color for both mode
    --clr_primary_color: #08fdd8;

    // Color for light mode
    --clr_background_color_light: #ffffff;
    --clr_header_color_light:#332909
    --clr_text_color_light:#776d4f;

    // Color for dark mode
    --clr_background_color_dark: #1d1d1d;
    --clr_header_color_dark:#ccd6f6;
    --clr_text_color_dark:#8892b0;

  }

  #root{
    display: flex;
    justify-content:center;
    align-items:center;
    background-color:${({ theme }) => theme.body.backgroundColor};
    width: 100%;
    min-height: 100vh;
    padding:3em;
  }

`;
export default GlobalStyled;
