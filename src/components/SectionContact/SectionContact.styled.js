import styled from "styled-components";

const SectionContactStyled = styled.section`
  min-height: 100vh;
  display: flex;
  width: 85%;
  align-items: center;
  justify-content: flex-end;
  padding: 3em 3em 1em 3em;

  & > :first-child {
    width: 50%;
  }
  & > :last-child {
    width: 50% !important;
    height: 70vh !important;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 3em 0;

    & > :first-child {
      width: 100%;
      & > * {
        width: 70%;
      }
      & > :last-child {
        width: 100%;
      }
    }
    & > :last-child {
      width: 100% !important;
      height: 65vh !important;
    }
  }
`;

export default SectionContactStyled;
