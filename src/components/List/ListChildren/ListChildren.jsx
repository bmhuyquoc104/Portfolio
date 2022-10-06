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
  color,
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
      color={color}
    >
      {children}
    </ListChildrenStyled>
  );
}

export default ListChildren;
