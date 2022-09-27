import React from "react";
import NavbarStyled from "./Navbar.styled";
import Text from "../Text/Text";
import {
  listParentAnimation,
  listChildrenAnimation,
} from "../../style/AnimationStyled";
import { motion } from "framer-motion";

function Navbar({ direction }) {
  return (
    <NavbarStyled
      variants={listParentAnimation}
      animate="show"
      initial="hidden"
      direction={direction}
    >
      <motion.ol>
        <motion.li variants={listChildrenAnimation}>
          <Text direction={direction} type="a" text="About" />
        </motion.li>
        <motion.li variants={listChildrenAnimation}>
          <Text direction={direction} type="a" text="Skills" />
        </motion.li>
        <motion.li variants={listChildrenAnimation}>
          <Text direction={direction} type="a" text="Projects" />
        </motion.li>
        <motion.li variants={listChildrenAnimation}>
          <Text direction={direction} type="a" text="Contact" />
        </motion.li>
      </motion.ol>
      <motion.div variants={listChildrenAnimation}>
        <Text direction={direction} size ="0.8125rem" type="button-link" text="Resume" />
      </motion.div>
    </NavbarStyled>
  );
}

export default Navbar;
