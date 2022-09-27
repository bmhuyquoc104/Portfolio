import React from "react";
import {
  LinkStyled,
  Heading1Styled,
  ButtonLinkStyled,
  ParagraphStyled,
} from "./Text.styled";
import { motion } from "framer-motion";
import {
  listParentAnimation,
  listChildrenAnimation,
} from "../../style/AnimationStyled";

function Text({ type, text, direction, size,variants }) {
  const textArr = text.split(" ");
  if (type == "a") {
    return <LinkStyled direction={direction}>{text}</LinkStyled>;
  } else if (type == "button-link") {
    return (
      <ButtonLinkStyled variants = {variants} size={size} direction={direction}>
        {text}
      </ButtonLinkStyled>
    );
  } else if (type == "h1") {
    return (
      <Heading1Styled variants = {variants} >
        {textArr.map(function (words, index) {
          return (
            <div className="words" key={index}>
              {words.split("").map((char, index) => (
                <motion.span
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
    return <ParagraphStyled variants = {variants}>{text}</ParagraphStyled>;
  }
}

export default Text;
