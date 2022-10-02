import styled from "styled-components";

const SectionSkillStyled = styled.section`
  display: flex;
  justify-content: center;
  gap: 1em;
  padding: 3em 3em 1em 3em;
  width: 85%;
  min-height:100vh;
  & > :first-child {
    width: 50%;
  }
  & > :last-child {
    align-self: center;
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

export default SectionSkillStyled;
