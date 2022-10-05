import {
  LinkStyled,
  Heading1Styled,
  ButtonLinkStyled,
  ParagraphStyled,
  Heading2Styled,
  Heading3Styled,
  Heading4Styled,
} from "./Text.styled";
import { motion } from "framer-motion";

function Text({
  td,
  type,
  text,
  direction,
  size,
  variants,
  color,
  link,
  target,
  children,
}) {
  if (type == "a") {
    return (
      <LinkStyled
        href={link}
        td={td}
        target={target}
        variants={variants}
        color={color}
        direction={direction}
      >
        {text}
      </LinkStyled>
    );
  } else if (type == "button-link") {
    return (
      <ButtonLinkStyled
        href={link}
        whileHover={{
          backgroundColor: "rgba(240, 165, 0, 0.3)",
          transition: {
            duration: "0.3",
            type: "tween",
          },
        }}
        variants={variants}
        target = {target}
        size={size}
        direction={direction}
      >
        {text}
      </ButtonLinkStyled>
    );
  } else if (type == "h1") {
    const textArr = text.split(" ");

    return (
      <Heading1Styled>
        {textArr.map(function (words, index) {
          return (
            <div className="words" key={index}>
              {words.split("").map((char, index) => (
                <motion.span
                  variants={variants}
                  whileHover={{ scale: 1.2, color: "var(--clr_primary_color)" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    duration: 0.3,
                  }}
                  aria-hidden="true"
                  key={index}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          );
        })}
      </Heading1Styled>
    );
  } else if (type == "p") {
    return <ParagraphStyled variants={variants}>{children}</ParagraphStyled>;
  } else if (type == "h2") {
    const textArr = text.split(" ");

    return (
      <Heading2Styled color={color}>
        {textArr.map(function (words, index) {
          return (
            <div className="words" key={index}>
              {words.split("").map((char, index) => (
                <motion.span
                  variants={variants}
                  whileHover={{ scale: 1.2, color: "var(--clr_primary_color)" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    duration: 0.3,
                  }}
                  aria-hidden="true"
                  key={index}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          );
        })}
      </Heading2Styled>
    );
  } else if (type == "h3") {
    return <Heading3Styled variants={variants}>{text}</Heading3Styled>;
  } else if (type == "h4") {
    return <Heading4Styled variants={variants}>{text}</Heading4Styled>;
  }
}

export default Text;
