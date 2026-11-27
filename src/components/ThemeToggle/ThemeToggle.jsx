import styled from "styled-components";
import { FiSun, FiMoon } from "react-icons/fi";

const Button = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.125rem;
  color: var(--clr-muted);
  background: transparent;
  border: 1px solid var(--clr-line);
  border-radius: 50%;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: var(--clr-text);
    border-color: var(--clr-muted);
  }
`;

function ThemeToggle({ isDark, toggle }) {
  return (
    <Button type="button" onClick={toggle} aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}>
      {isDark ? <FiSun /> : <FiMoon />}
    </Button>
  );
}

export default ThemeToggle;
