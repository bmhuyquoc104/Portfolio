import SectionExperienceStyled from "./SectionExperience.styled";
import { motion } from "framer-motion"
import Text from "../Text/Text";
import { FlexContainer } from "../Containers/Flex/FlexContainer";
import { imageResource } from "../../assets/imageResource";
import UnorderedList from "../List/UnorderedList";
import ListChildren from "../List/ListChildren/ListChildren";
import {
  heading2Animation,
  listChildrenAnimation,
  sectionAboutAnimation,
} from "../../style/AnimationStyled";

function SectionExperience() {
  const SKILLS = ["Python", "FastAPI", "GCP", "Airflow", "SQL"]
  return (
    <SectionExperienceStyled whileInView="show"
      initial="hidden"
      viewport={{ once: true }} variants={sectionAboutAnimation} id="experiences">
      <Text
        variants={heading2Animation}
        color="var(--clr_primary_color)"
        type="h2"
        text="Work Experiences"
      />
      <div className="experience-detail-container">
        <Text type="p">2022 &mdash; Present</Text>
        <div className="experience-info">
          <Text type="p">
            Software Engineer  &#8231;{" "}
            <span>
              <Text
                color="var(--clr_primary_color)"
                type="a"
                text="Athena Studio"
                target="_blank"
                link="https://athena.studio/"
                td="underline"
              />
            </span>
            .
          </Text>
          <div className="experience-description">
            <Text type="p">
              Developed and maintain robust pipelines for both manual and automated data collection from diverse sources, employing effective ETL processes to store data in the warehouse. This facilitates seamless access and analysis for other teams.
            </Text>
            <Text type="p">
              Implemented a reliable, scalable message queue system, optimizing the handling of events from various clients. Introduced event filtering mechanisms to enhance efficiency, ensuring only relevant events are subscribed to.
            </Text>
            <Text type="p">
              Implemented an in-app purchase system, responsible for receiving, decrypting, storing notifications and receipts when users make payments. Allow mobile teams for tracking, and analysis, significantly contributes to the financial operations of the application.
            </Text>
            <Text type="p">Refactored legacy code, introducing unit tests and rewriting deprecated services and APIs, enhancing code readability, maintainability, security.</Text>
            <Text type="p">
              Collaborated closely with Data Analysts and Frontend teams to address business challenges. Provided data through an API for internal dashboard, significantly enhancing operational efficiency across various teams within the organization.
            </Text>
          </div>
          <UnorderedList
            p="0"
            gap="0.5em"
            wrap="wrap"
            childrenWidth="fit-content"
          >
            {SKILLS.map((technology, index) => (
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


    </SectionExperienceStyled>
  );
}

export default SectionExperience;
