import SectionAboutStyled from "./SectionAbout.styled";
import {motion} from "framer-motion"
import Text from "../Text/Text";
import { FlexContainer } from "../Containers/Flex/FlexContainer";
import { imageResource } from "../../assets/imageResource";
import {
  heading2Animation,
  listChildrenAnimation,
} from "../../style/AnimationStyled";
import Image from "../Containers/ImageContainer/Image";
import { Link, animateScroll as scroll } from "react-scroll";

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
          challenges on {"  "}
          <span>
            <Text
              color="var(--clr_primary_color)"
              type="a"
              text="Frontend Mentor"
              link="https://www.frontendmentor.io/profile/bmhuyquoc104"
              target="_blank"
              td="underline"
            />
          </span>{" "}
          and{" "}
          <span>
            <Text
              color="var(--clr_primary_color)"
              type="a"
              text="Dev Challenges"
              target="_blank"
              link="https://devchallenges.io/portfolio/bmhuyquoc104"
              td="underline"
            />
          </span>
          .
        </Text>
        <Text type="p">
          Problem-solver, autonomous worker, eager to learn new tech and high-detail oriented.
          Enthusiasm for soccer, history, TV shows, movies, and books. A
          final year software engineering student who will graduate the
          following year.
        </Text>
        <Text type="p">
          My main focus these days is building an accessible, scalable, great
          UX/UI website. I am also interested in working with other passion
          developers on a big project to learn from them.
        </Text>
        <motion.div variants={listChildrenAnimation}>
          <Link
            smooth={true}
            offset={-50}
            duration={500}
            className="scroll-link"
            to="contact"
          >
            Let's make something special!
          </Link>
        </motion.div>
      </FlexContainer>
      <Image>
        <img src={imageResource.Logo} alt="My Photo" />
      </Image>
    </SectionAboutStyled>
  );
}

export default SectionAbout;
