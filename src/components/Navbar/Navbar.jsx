import { Link, animateScroll as scroll } from "react-scroll";
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
          <Link to="about" smooth={true} offset={-70} duration={500}>
            About
          </Link>
        </motion.li>
        <motion.li variants={listChildrenAnimation}>
          <Link to="skills" smooth={true} offset={-70} duration={500}>
            Skills
          </Link>
        </motion.li>
        <motion.li variants={listChildrenAnimation}>
          <Link to="projects" smooth={true} offset={-70} duration={500}>
            Projects
          </Link>
        </motion.li>
        <motion.li variants={listChildrenAnimation}>
          <Link to="contact" smooth={true} offset={-70} duration={500}>
            Contact
          </Link>
        </motion.li>
      </motion.ol>
      <motion.div variants={listChildrenAnimation}>
        <Text
          direction={direction}
          size="0.8125rem"
          type="button-link"
          text="Resume"
        />
      </motion.div>
    </NavbarStyled>
  );
}

export default Navbar;
