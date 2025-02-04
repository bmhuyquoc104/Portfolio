import SectionExperienceStyled from "./SectionExperience.styled";
import Text from "../Text/Text";
import UnorderedList from "../List/UnorderedList";
import ListChildren from "../List/ListChildren/ListChildren";
import {
  heading2Animation,
  listChildrenAnimation,
  sectionAboutAnimation,
} from "../../style/AnimationStyled";

function SectionExperience() {
  const experiences = [
    {
      title: "Junior Backend Software Development Engineer",
      company_name: "Employment Hero",
      company_link: "https://employmenthero.com/",
      working_period: "04/2024 - Present",
      descriptions: [
        "Designed and implemented an auto-saving mechanism for user comments across multiple devices, resulting in improving user experience, encouraging more engagement and increasing user retention across platforms",
        "Designed and implemented a career progression feature leveraging polynomial regression model to forecast user salaries.",
        "Designed and integrated Braze webhook to automate WhatsApp notifications for shortlisted candidates in Malaysia and Singapore, while ensuring the security and stability of the server through robust safeguards.",
        "Migrated CI/CD Pipeline for services from CircleCI to GitHub Actions, resulting in a 5x reduction in costs.",
        "Identified and optimized multiple inefficient queries, gRPC calls and resolved unit test issues, resulting in significantly faster processing times and enhanced system performance.",
        "Detected and fixed critical issues in the authentication flow for private APIs, contributing to the overall integrity and security of the system.",
      ],
      skills: [
        "Ruby",
        "Ruby On Rails",
        "AWS",
        "Sidekiq",
        "Kafka",
        "PostgreSQL",
        "SideKiq",
        "gRPC",
        "Sentry",
        "Datadog",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Athena Studio",
      company_link: "https://athena.studio/",
      working_period: "11/2022 - 03/2024",
      descriptions: [
        "Developed and maintain robust pipelines for both manual and automated data collection from diverse sources, employing effective ETL processes to store data in the warehouse. This facilitates seamless access and analysis for other teams.",
        "Implemented a reliable, scalable message queue system, optimizing the handling of events from various clients. Introduced event filtering mechanisms to enhance efficiency, ensuring only relevant events are subscribed to.",
        "Implemented an in-app purchase system, responsible for receiving, decrypting, storing notifications and receipts when users make payments. Allow mobile teams for tracking, and analysis, significantly contributes to the financial operations of the application.",
        "Refactored legacy code, introducing unit tests and rewriting deprecated services and APIs, enhancing code readability, maintainability, security.",
        "Collaborated closely with Data Analysts and Frontend teams to address business challenges. Provided data through an API for internal dashboard, significantly enhancing operational efficiency across various teams within the organization.",
      ],
      skills: ["Python", "FastAPI", "GCP", "Airflow", "SQL"],
    },
  ];
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
