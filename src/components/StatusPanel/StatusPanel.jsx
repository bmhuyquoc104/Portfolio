import styled from "styled-components";

const Status = styled.p`
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: var(--clr-ok);

  &::before {
    content: "●";
    margin-right: 0.5rem;
  }
`;

// The one thing a recruiter wants to see without scrolling.
function StatusPanel() {
  return <Status>Open to new roles</Status>;
}

export default StatusPanel;
