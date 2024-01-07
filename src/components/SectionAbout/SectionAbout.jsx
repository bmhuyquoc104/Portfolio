import SectionAboutStyled from "./SectionAbout.styled";
import { motion } from "framer-motion"
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
      <FlexContainer direction="column" alignItems="flex-start" gap="1em">
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
          From October 2022 to the present, my experience with {" "}
          <Text
            td="underline"
            type="a"
            color="var(--clr_primary_color)"
            text="Athena Studio"
            link="https://athena.studio/"
            target="_blank"
          /> 
          {" "}
          has been invaluable, expanding my knowledge and igniting a newfound passion for designing and addressing business challenges. This journey has provided extensive exposure to the mobile game industry, enhancing my understanding of its processes. Additionally, I've broadened my skill set in backend development, cloud development, and data engineering, gaining valuable insights and expertise.
        </Text>
        <Text type="p">
          Outside of working hours, I am deeply passionate about staying current with the latest trends in the software engineering industry through reading of tech news. I find joy in updating and enriching my programming skills by delving into technical books, particularly those that broaden my knowledge. Additionally, I enjoy tutoring others as it not only reinforces my understanding but also allows me to share my knowledge with fellow learners.
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
