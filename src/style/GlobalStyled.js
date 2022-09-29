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
    --clr_primary_color: #f0a500;

    // Color for light mode
    --clr_background_color_light: #ffffff;
    --clr_header_color_light:#332909
    --clr_text_color_light:#776d4f;
    --clr_navbar_bg_light:#181818;

    // Color for dark mode
    --clr_background_color_dark: #1d1d1d;
    --clr_header_color_dark:#f4f4f4;
    --clr_text_color_dark:#e3f6f5;
    --clr_navbar_bg_dark:#181818;


  }
  .content {
  transform: translate3d(calc(50% + 40px), 0, 0);
  text-align: left;
  color: var(--clr_primary_color);
  font-family:var(--font_sans);
  width:8ch;
  font-size: clamp(0.8rem, 0.76rem + 0.19999999999999996vw, 1rem);

}


  #root{
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    background-color:${({ theme }) => theme.body.backgroundColor};
    width: 100%;
    min-height:100vh;
    padding:0 3em;
    scroll-behavior: smooth;
    @media (max-width:480px){
      padding: 0 1.5em;
    }
  }

`;
export default GlobalStyled;
