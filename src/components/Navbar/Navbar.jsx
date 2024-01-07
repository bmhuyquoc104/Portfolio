import { Link, animateScroll as scroll } from "react-scroll";
import NavbarStyled from "./Navbar.styled";
import Text from "../Text/Text";
import {
  listParentAnimation,
  listChildrenAnimation,
} from "../../style/AnimationStyled";
import { imageResource } from "../../assets/imageResource"
import { motion } from "framer-motion";

function Navbar({ direction, setIsToggle }) {
  const NAVBAR_OPTIONS = ["About", "Skills", "Experiences", "Projects", "Contact"]
  return (
    <NavbarStyled
      variants={listParentAnimation}
      animate="show"
      initial="hidden"
      direction={direction}
    >
      <motion.ol>
        {NAVBAR_OPTIONS.map((option, index) =>
          <motion.li key={index} variants={listChildrenAnimation}>
            <Link
              onClick={
                direction == "column" ? () => setIsToggle(false) : () => { }
              }
              to={option.toLowerCase()}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {option}
            </Link>
          </motion.li>)}

      </motion.ol>
      <motion.div variants={listChildrenAnimation}>
        <Text
          direction={direction}
          size="0.8125rem"
          type="button-link"
          text="Resume"
          link={imageResource.Resume}
          target="_blank"
        />
      </motion.div>
    </NavbarStyled>
  );
}

export default Navbar;
