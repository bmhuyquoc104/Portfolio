import styled from "styled-components";

const SectionSkillStyled = styled.section`
  display: flex;
  justify-content: center;
  gap: 1.5em;
  padding: 0 1em;
  width: 85%;
  min-height:100vh;
  & > :first-child {
    order:2;
    width: 50%;
  }
  & > :last-child {
    order:1;
    align-self: center;
    width: 50% !important;
    height: 70vh !important;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 3em 0;

    & > :first-child {
      order:unset;
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
