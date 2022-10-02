import ListChildrenStyled from "./ListChildren.styled";

function ListChildren({
  onClick,
  children,
  variants,
  p,
  bg,
  br,
  fz,
  isActive,
}) {
  return (
    <ListChildrenStyled
      p={p}
      bg={bg}
      br={br}
      className={isActive == "active" ? "active" : ""}
      fz={fz}
      onClick={onClick}
      variants={variants}
    >
      {children}
    </ListChildrenStyled>
  );
}

export default ListChildren;
