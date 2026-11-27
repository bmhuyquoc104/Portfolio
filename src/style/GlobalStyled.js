import { createGlobalStyle } from "styled-components";
import { mediaColors } from "./Theme";

const toVars = (tokens) =>
  Object.entries(tokens)
    .map(([key, value]) => `--clr-${key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}: ${value};`)
    .join("\n    ");

const GlobalStyled = createGlobalStyle`
  *,*::after,*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    /* Font family */
    --font_sans: 'Open Sans', sans-serif;
    --font_playFair: 'Playfair Display', serif;

    /* Colours come from the active theme (see Theme.js) */
    ${({ theme }) => toVars(theme.colors)}
    ${toVars(mediaColors)}
  }

  .content {
    transform: translate3d(calc(50% + 40px), 0, 0);
    text-align: left;
    color: var(--clr-accent);
    font-family: var(--font_sans);
    width: 8ch;
    font-size: clamp(0.8rem, 0.76rem + 0.2vw, 1rem);
  }

  #root{
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    background-color: var(--clr-bg);
    width: 100%;
    min-height:100vh;
    padding:0 3em;
    scroll-behavior: smooth;
    transition: background 0.3s linear;
    @media (max-width:480px){
      padding: 0 1.5em;
    }
  }
`;
export default GlobalStyled;
