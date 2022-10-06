import { useState } from "react";
import ToggleStyled from "./Toggle.styled";
import { RiMoonFill } from "react-icons/ri";
import { RiSunFill } from "react-icons/ri";
import { MoonIconStyled, SunIconStyled } from "../../style/ConstantStyled";
import { motion } from "framer-motion";
function Toggle({ theme, themeToggler,toggleDirection }) {
  console.log(toggleDirection);
  console.log(theme);
  return (
    <ToggleStyled onTap={themeToggler}>
      <motion.div
        onTap={themeToggler}
        style={{ backgroundColor: theme === "darkTheme" ? "#000000" : "#ffffff" }}
        className="background"
      >
        <motion.div
          onTap={themeToggler}
          animate={{
            x: toggleDirection,
          }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
          style={{ backgroundColor: theme === "darkTheme" ? "#ff971d" : "#ff971d" }}
          className="circle"
        >
          {theme === "darkTheme" ? (
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
