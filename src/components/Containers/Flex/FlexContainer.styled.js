import styled from "styled-components";
import { motion } from "framer-motion";

const FlexContainerStyled = styled(motion.div)`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  gap: ${({ gap }) => gap || "1em"};
  width: ${({ width }) => width || "100%"};
  cursor: ${({ cursor }) => cursor || ""};
`;

const AbsoluteFlexContainerStyled = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  justify-content: flex-end;
  padding: 1.5em;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-image: linear-gradient(
    180deg,
    color-mix(in srgb, var(--clr-media-scrim) 20%, transparent),
    var(--clr-media-scrim)
  );
  &.mobile {
    background-image: linear-gradient(
      180deg,
      color-mix(in srgb, var(--clr-media-scrim) 20%, transparent),
      var(--clr-media-scrim)
    );
    gap:1.25em;
    padding:0 2em;
    justify-content:center;
      align-items:center;
    background-color:${({ theme }) => theme.colors.bgAlt};
  }
`;

const FixedFlexContainerStyled = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: color-mix(in srgb, var(--clr-media-scrim) 20%, transparent);
`;

export {
  FlexContainerStyled,
  AbsoluteFlexContainerStyled,
  FixedFlexContainerStyled,
};
