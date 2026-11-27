import { Link } from "react-scroll";
import NavbarStyled from "./Navbar.styled";
import Text from "../Text/Text";
import {
  listParentAnimation,
  listChildrenAnimation,
} from "../../style/AnimationStyled";
import { imageResource } from "../../assets/imageResource";
import { NAV_SECTIONS } from "../../data/site";
import { motion } from "framer-motion";

function Navbar({ direction, setIsToggle }) {
  return (
    <NavbarStyled
      variants={listParentAnimation}
      animate="show"
      initial="hidden"
      direction={direction}
    >
      <motion.ol>
        {NAV_SECTIONS.map((option) =>
          <motion.li key={option} variants={listChildrenAnimation}>
            <Link
              onClick={
                direction === "column" ? () => setIsToggle(false) : undefined
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
