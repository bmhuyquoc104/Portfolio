import styled from "styled-components";
import { m, useReducedMotion } from "motion/react";

const Status = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: var(--clr-ok);
`;

const Dot = styled(m.span)`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: currentColor;
`;

// The one thing a recruiter wants to see without scrolling. The dot pulses to read as "live".
function StatusPanel() {
  const reduceMotion = useReducedMotion();

  return (
    <Status>
      <Dot
        aria-hidden="true"
        animate={reduceMotion ? undefined : { opacity: [1, 0.35, 1], scale: [1, 0.8, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      Open to new roles
    </Status>
  );
}

export default StatusPanel;
