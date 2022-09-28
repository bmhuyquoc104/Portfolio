import { useRef } from "react";
import SectionAboutStyled from "./SectionAbout.styled";
import Text from "../Text/Text";
import FlexContainer from "../Containers/Flex/FlexContainer";
import {
  heading2Animation,
  listChildrenAnimation,
} from "../../style/AnimationStyled";

function SectionAbout() {
  return (
    <SectionAboutStyled id ="about">
      <FlexContainer direction="column" alignItems="flex-start" gap="1.5em">
        <Text
          variants={heading2Animation}
          color="var(--clr_primary_color)"
          type="h2"
          text="About Me"
        />
        <Text
          type="p"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nemo quis obcaecati porro officiis minus velit assumenda. Nobis, dolor laudantium."
        />
        <Text
          type="p"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nemo quis obcaecati porro officiis minus velit assumenda. Nobis, dolor laudantium."
        />
        <Text
          type="p"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nemo quis obcaecati porro officiis minus velit assumenda. Nobis, dolor laudantium."
        />
        <Text
          variants={listChildrenAnimation}
          color="var(--clr_primary_color)"
          type="a"
          text="Let's build something special !"
        />
      </FlexContainer>
      <FlexContainer direction="column"></FlexContainer>
    </SectionAboutStyled>
  );
}

export default SectionAbout;
