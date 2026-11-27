import { createGlobalStyle } from "styled-components";

const toVars = (tokens) =>
  Object.entries(tokens)
    .map(([key, value]) => `--clr-${key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}: ${value};`)
    .join("\n    ");

const GlobalStyled = createGlobalStyle`
  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --font-sans: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
    --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
    ${({ theme }) => toVars(theme.colors)}
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--clr-bg);
    color: var(--clr-muted);
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  ::selection {
    background: color-mix(in srgb, var(--clr-accent) 30%, transparent);
    color: var(--clr-text);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:focus-visible, button:focus-visible {
    outline: 2px solid var(--clr-accent);
    outline-offset: 3px;
    border-radius: 2px;
  }

  ul { list-style: none; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      transition: none !important;
      scroll-behavior: auto !important;
    }
  }
`;
export default GlobalStyled;
