import styled from "styled-components";

const AbsoluteHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index:1;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.body.backgroundColor};
`;

export default AbsoluteHeaderContainer;
