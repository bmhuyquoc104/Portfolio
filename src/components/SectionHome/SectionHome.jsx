import React from "react";
import SectionHomeStyled from "./SectionHome.styled";
import {
  listChildrenAnimation,
  homeAnimation,
} from "../../style/AnimationStyled";
import Text from "../Text/Text";

function SectionHome() {
  return (
    <SectionHomeStyled
      variants={homeAnimation}
      animate="show"
      initial="hidden"
    >
      <Text variants={listChildrenAnimation} type="h1" text="Hi," />
      <Text variants={listChildrenAnimation} type="h1" text="I'm Huy." />
      <Text
        variants={listChildrenAnimation}
        type="h1"
        text="Software Engineer."
      />
      <Text
        variants={listChildrenAnimation}
        type="p"
        text="I'm a third year Software Engineering student in RMIT who have a genuine passion for creating user-friendly full-stack websites. I have experienced in Machine Learning and Mobile Application"
      />
      <Text
        variants={listChildrenAnimation}
        size="1rem"
        type="button-link"
        text="See my projects !"
      />
    </SectionHomeStyled>
  );
}

export default SectionHome;
