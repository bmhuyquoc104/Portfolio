import { useRef } from "react";
import SectionAboutStyled from "./SectionAbout.styled";
import Text from "../Text/Text";
import FlexContainer from "../Containers/Flex/FlexContainer";
import { imageResource } from "../../assets/imageResource";
import {
  heading2Animation,
  listChildrenAnimation,
} from "../../style/AnimationStyled";
import Image from "../Containers/ImageContainer/Image";

function SectionAbout() {
  return (
    <SectionAboutStyled id="about">
      <FlexContainer direction="column" alignItems="flex-start" gap="1.5em">
        <Text
          variants={heading2Animation}
          color="var(--clr_primary_color)"
          type="h2"
          text="About Me"
        />
        <Text type="p">
          Hi, I'm Huy Vo and I'm Software Engineer. My journey in this industry
          began in 2019 when I applied for the bachelor of Software Engineering
          in RMIT University.Since then, I have been enriching my knowledge and
          enhancing my skill by building lots of project and completing many
          challenges on
          <span>
            <Text
              color="var(--clr_primary_color)"
              type="a"
              text=" Frontend Mentor "
            />
          </span>
          and
          <span>
            <Text
              color="var(--clr_primary_color)"
              type="a"
              text=" Dev Challenges "
            />
          </span>
          .
        </Text>
        <Text type="p">
          Problem-solver, autonomous worker, and high-detail oriented.
          Enthusiasm for soccer, history, TV shows, movies, and books. A
          third-year software engineering student who will graduate the
          following year. Interested in working with other passion developers.
        </Text>
        <Text type="p">
          My main focus these days is building an accessible, scalable, great
          UX/UI website with React and its ecosystem.
        </Text>
      </FlexContainer>
      <Image>
        <img src={imageResource.Logo} alt="My Photo" />
      </Image>
    </SectionAboutStyled>
  );
}

export default SectionAbout;
