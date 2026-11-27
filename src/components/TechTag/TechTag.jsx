import ListChildren from "../List/ListChildren/ListChildren";

function TechTag({ variants, children }) {
  return (
    <ListChildren
      variants={variants}
      fz="0.6875rem"
      p="0.25em 1em"
      br="50px"
      bg="var(--clr-chip)"
      color="var(--clr-chip-text)"
    >
      {children}
    </ListChildren>
  );
}

export default TechTag;
