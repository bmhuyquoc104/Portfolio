import SectionExperienceStyled from "./SectionExperience.styled";
import Text from "../Text/Text";
import experiences from "../../data/experience";
import UnorderedList from "../List/UnorderedList";
import ListChildren from "../List/ListChildren/ListChildren";
import {
  heading2Animation,
  listChildrenAnimation,
  sectionAboutAnimation,
} from "../../style/AnimationStyled";

function SectionExperience() {
  return (
    <SectionExperienceStyled
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
      variants={sectionAboutAnimation}
      id="experiences"
    >
      <Text
        variants={heading2Animation}
        color="var(--clr_primary_color)"
        type="h2"
        text="Work Experiences"
      />
      {experiences.map((experience, index) => (
        <div key={index} className="experience-detail-container">
          <Text type="p">{experience.working_period}</Text>
          <div className="experience-info">
            <Text type="p">
              {experience.title} &#8231;{" "}
              <span>
                <Text
                  color="var(--clr_primary_color)"
                  type="a"
                  text={experience.company_name}
                  target="_blank"
                  link={experience.company_link}
                  td="underline"
                />
              </span>
              .
            </Text>
            {experience.descriptions.map((description, index) => (
              <div key={index} className="experience-description">
                <Text type="p">{description}</Text>
              </div>
            ))}
            <UnorderedList
              p="0"
              gap="0.5em"
              wrap="wrap"
              childrenWidth="fit-content"
            >
              {experience.skills.map((technology, index) => (
                <ListChildren
                  key={index}
                  variants={listChildrenAnimation}
                  fz="0.6875rem"
                  p="0.25em 1em"
                  br="50px"
                  bg="rgb(105,104,105)"
                  color="var(--clr_header_color_dark)"
                >
                  {technology}
                </ListChildren>
              ))}
            </UnorderedList>
          </div>
        </div>
      ))}
    </SectionExperienceStyled>
  );
}

export default SectionExperience;
