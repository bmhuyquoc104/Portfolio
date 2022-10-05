import styled from "styled-components";
import { motion } from "framer-motion";

const SectionHomeStyled = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  padding: 3em 3em 1em 3em;
  width: 85%;
  min-height: 100vh;
  & > :nth-child(4) {
    width: 50%;
    margin-top: 1em;
  }
  & > :last-child {
    margin-top: 1em;
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
    :hover{
      background-color:rgba(240, 165, 0, 0.3);
    }
  }

  @media (max-width: 950px) {
    & > :nth-child(4) {
      width: 70%;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 3em 0 3em 0;
  }
`;

export default SectionHomeStyled;
