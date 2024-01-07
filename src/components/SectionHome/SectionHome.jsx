import React from "react";
import SectionHomeStyled from "./SectionHome.styled";
import {
  listChildrenAnimation,
  heading2Animation,
  homeAnimation,
} from "../../style/AnimationStyled";
import { Link, animateScroll as scroll } from "react-scroll";

import Text from "../Text/Text";

function SectionHome() {
  return (
    <SectionHomeStyled variants={homeAnimation} animate="show" initial="hidden">
      <div className="home-info">
        <Text variants={heading2Animation} type="h1" text="Hi," />
        <Text variants={heading2Animation} type="h1" text="I'm Huy." />
        <Text variants={heading2Animation} type="h1" text="Software Engineer." />
        <Text variants={listChildrenAnimation} type="p">
          I'm a software engineer specializing in backend and frontend development, cloud architecture, and data engineering. My approach involves crafting clean, high-performance code using diverse programming paradigms. Passionate about continuous learning, I stay updated with industry trends and enjoy tutoring to share my knowledge with others.
        </Text>
      </div>


      <Link
        smooth={true}
        offset={-50}
        duration={500}
        className="scroll-link"
        to="experiences"
      >
        See my work experiences !
      </Link>
    </SectionHomeStyled>
  );
}

export default SectionHome;
