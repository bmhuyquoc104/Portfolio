import LinkStyled from "./Link.styled";

// label gives icon-only links an accessible name.
function Link({ children, href, target, label }) {
  return (
    <LinkStyled
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      aria-label={label}
      href={href}
    >
      {children}
    </LinkStyled>
  );
}

export default Link;
