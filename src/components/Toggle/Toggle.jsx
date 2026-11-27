import ToggleStyled from "./Toggle.styled";
import { RiMoonFill } from "react-icons/ri";
import { RiSunFill } from "react-icons/ri";
import { MoonIconStyled, SunIconStyled } from "../../style/ConstantStyled";
import { motion } from "framer-motion";
function Toggle({ isDark, toggle }) {

  return (
    <ToggleStyled onTap={toggle}>
      <motion.div
        onTap={toggle}
        className="background"
      >
        <motion.div
          onTap={toggle}
          animate={{
            x: isDark ? 0 : 30,
          }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
          className="circle"
        >
          {isDark ? (
            <>
              <RiMoonFill style={MoonIconStyled} />
            </>
          ) : (
            <>
              <RiSunFill style={SunIconStyled} />
            </>
          )}
        </motion.div>
      </motion.div>
    </ToggleStyled>
  );
}

export default Toggle;
