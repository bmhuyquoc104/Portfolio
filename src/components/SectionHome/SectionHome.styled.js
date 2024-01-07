import styled from "styled-components";
import { motion } from "framer-motion";

const SectionHomeStyled = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4em;
  padding: 3em 2em;
  width: 100%;
  min-height: 100vh;
  .home-info {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: min(42em, 100%);
  }


  .scroll-link {
    font-family: var(--font_sans);
    font-size: ${({ size, direction }) =>
      direction === "column" ? "1rem" : size};
    font-weight: 300;
    color: var(--clr_primary_color);
    border-radius: 4px;
    border: 1px solid var(--clr_primary_color);
    padding: 1em 1.25em;
    width: max-content !important;
    /* background-color:transparent; */
    cursor: pointer;
    text-decoration: none;
    :hover {
      background-color: rgba(240, 165, 0, 0.3);
    }
  }

  @media (max-width: 950px) {
    .home-info {
      & > :nth-child(4) {
        width: 70%;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 3em 0 3em 0;
  }
`;

export default SectionHomeStyled;
