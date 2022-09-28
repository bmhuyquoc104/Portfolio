import styled from "styled-components";

const SectionSkillStyled = styled.section`
  height: 100vh;
  display: flex;
  align-items: flex-start;
  padding: 3em 3em 1em 3em;
  width: 85%;
  & > :first-child {
    width: 50%;
  }
  & > :last-child {
    width: 50% !important;
  }
  @media (max-width: 800px) {
    width:100%;
    flex-direction: column;
    padding: 3em 0;

    & > :first-child {
      width: 100%;
    }
    & > :last-child {
      width: 100% !important;
    }
  }
`;

export default SectionSkillStyled;
