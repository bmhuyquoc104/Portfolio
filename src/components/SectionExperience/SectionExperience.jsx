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
      title: "Software Engineer",
      company_name: "Modec",
      company_link: "https://www.modec.com",
      working_period: "05/2025 - Present",
      descriptions: [
        "Architected and delivered a distributed workflow platform for engineering document synchronization, replacing scheduled batch execution with a fault-tolerant event-driven architecture that reduced processing latency from 15 minutes to under 3 minutes.",
        "Architected and delivered a GitOps platform for Kubernetes using ArgoCD, enabling declarative infrastructure, automatic reconciliation, and reducing production recovery time from hours to minutes.",
        "Established standardized service-to-service communication for a microservices platform, evaluating gRPC and private REST tradeoffs while implementing shared authentication, API contracts, and observability.",
        "Built an intelligent document mapping system using Azure Document Intelligence and custom change-detectionlogic, enabling structured extraction from large volumes of PDFs and reducing manual processing effort for users.",
        "Designed and implemented a high-performance reporting engine with asynchronous pipelines and precomputation,successfully reducing latency and cloud infrastructure costs by∼50%.",
        "Developed a proof-of-concept CDC pipeline (MySQL → Kafka → ClickHouse) to evaluate OLAP adoption;benchmarked representative analytical queries (from 6 hours to 30 seconds) and documented tradeoffs forproduction feasibility (data consistency, operational complexity, and cost)",
        "Built an internal AI-driven workflow system, owning backend development and implementing orchestration forLLM-based agents and shared interfaces, enabling AI-assisted development and reducing reliance on externalvendors.",
        "Delivered an internal workflow platform (Django + React) for a cross-team initiative, working directly with endusers to define requirements, iterate on solutions, and digitalize previously manual business processes.",
        "Migrated existing infrastructure to Infrastructure as Code (Terraform), improving consistency and deploymentreliability, and integrated automated security checks into CI/CD pipelines to catch issues before release.",
        "Modernized infrastructure observability and incident response practices, reducing response times by 80% throughcentralized monitoring and automated alerting via Azure Application Insights.",
        "Proposed and led the adoption of a feature flag system, persuading the team to embrace safer release practices. Enabled consistent weekly releases, reduced production risk, and improved deployment confidence.",
        "Proactively secured the platform by migrating all credentials to Azure Key Vault, eliminating secret leak risks and aligning with enterprise compliance standards.",
      ],
      skills: [
        "Python",
        "FastAPI",
        "Django",
        "Azure",
        "AI Engineer",
        "PostgreSQL",
        "MySQL",
        "Kubernetes",
        "DevOps",
        "ReactJS",
        "PostgreSQL",
        "ClickHouse"
      ],
    },
    {
      title: "Junior Backend Software Development Engineer",
      company_name: "Employment Hero",
      company_link: "https://employmenthero.com/",
      working_period: "04/2024 - 04/2025",
      descriptions: [
        "Developed a scalable search system using PostgreSQL (tsvector, trigram), providing a high-performance,cost-effective alternative to expensive external search infrastructure.",
        "Designed and implemented an auto-saving mechanism for user comments across multiple devices, resulting in improving user experience, encouraging more engagement and increasing user retention across platforms",
        "Designed and implemented a career progression feature leveraging polynomial regression model to forecast user salaries.",
        "Designed and integrated Braze webhook to automate WhatsApp notifications for shortlisted candidates in Malaysia and Singapore, while ensuring the security and stability of the server through robust safeguards.",
        "Migrated CI/CD Pipeline for services from CircleCI to GitHub Actions, resulting in a 5x reduction in costs.",
        "Identified and optimized multiple inefficient queries, gRPC calls and resolved unit test issues, resulting in significantly faster processing times and enhanced system performance.",
        "Identified and resolved a critical authentication vulnerability related to token misuse; collaborated with team leadsto implement safeguards and improve session handling.",
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
