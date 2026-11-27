import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { EMAIL } from "../../data/site";

const FooterStyled = styled.footer`
  padding-bottom: 4rem;
  font-size: 0.875rem;

  a {
    font-weight: 500;
    color: var(--clr-text);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  a:hover {
    color: var(--clr-accent);
  }
  .mail {
    white-space: nowrap;
  }
  button {
    margin-left: 0.75rem;
    font: inherit;
    color: var(--clr-muted);
    background: none;
    border: none;
    cursor: pointer;
  }
  button:hover {
    color: var(--clr-accent);
  }
`;

function Footer() {
  const [status, setStatus] = useState("idle"); // idle | copied | failed
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = async () => {
    let next = "copied";
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Clipboard needs HTTPS or a user gesture; the address stays selectable on the page.
      next = "failed";
    }
    setStatus(next);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <FooterStyled>
      <p>
        Open to new roles. Say hello at{" "}
        <span className="mail">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <button type="button" onClick={copyEmail}>
            {status === "copied" ? "Copied!" : status === "failed" ? "Copy failed" : "Copy"}
          </button>
        </span>
      </p>
    </FooterStyled>
  );
}

export default Footer;
