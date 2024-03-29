import styled from "styled-components";
import { motion } from "framer-motion";
const NavbarStyled = styled(motion.nav)`
  display: flex;
  gap: ${({ direction }) => (direction === "column" ? "3em" : "2em")};
  align-items: center;
  flex-direction: ${({ direction }) =>
    direction === "column" ? "column" : "row"};

  ol {
    display: flex;
    flex-direction: ${({ direction }) =>
      direction === "column" ? "column" : "row"};
    gap: 2em;
    list-style: none;
    align-items: center;
    counter-reset: my-counter;
  }
  ol li {
    counter-increment: my-counter;
    display: flex;
    flex-direction: ${({ direction }) =>
      direction === "column" ? "column" : "row"};
    align-items: center;
    gap: ${({ direction }) => (direction === "column" ? "0.5rem" : "0")};

    transition: all 0.25 cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  ol li::before {
    content: "0" counter(my-counter) ".";
    font-size: ${({ direction }) =>
      direction === "column" ? "1rem" : "0.8125rem"};
    color: var(--clr_primary_color);
    display: flex;
    margin-top:auto;
    align-items: flex-end;
    margin-right: ${({ direction }) =>
      direction === "column" ? "0" : "0.5rem"};
  }
  ol li a {
    font-family: var(--font_playFair);
    font-size: ${({ direction }) =>
      direction === "column" ? "1rem" : "0.8125rem"};
    font-weight: 300;
    color: ${({ theme }) => theme.header.color};
    cursor: pointer;
    text-decoration: none;
  }
  ol li:hover {
    a {
      color: var(--clr_primary_color);
    }
  }
`;
export default NavbarStyled;
