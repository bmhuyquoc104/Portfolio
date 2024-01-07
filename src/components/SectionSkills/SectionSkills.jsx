import React, { Suspense } from "react";
import SectionSkillStyled from "./SectionSkills.styled";
import Content from "../Mesh/BoxMesh/BoxMesh";
import { Canvas } from "@react-three/fiber";
import Text from "../Text/Text";
import { FlexContainer } from "../Containers/Flex/FlexContainer";
import {
  heading2Animation,
  listChildrenAnimation,
} from "../../style/AnimationStyled";
import UnorderedList from "../List/UnorderedList";
import ListChildren from "../List/ListChildren/ListChildren";
import { OrbitControls } from "@react-three/drei";

function SectionSkills() {
  const SKILLS = ["Python", "FastAPI", "GCP", "PostgreSQL", "Redis", "Airflow"]
  return (
    <SectionSkillStyled id="skills">
      <FlexContainer direction="column" alignItems="flex-start" gap="1em">
        <Text
          variants={heading2Animation}
          color="var(--clr_primary_color)"
          type="h2"
          text="My Skills"
        />
        <Text type="p">
          I am capable of designing and proposing thoughtful solutions to handle business problems. I have understanding of database modeling, writing clean, high-performance, and maintainable code with a reliable suite of test cases. I adhere to best practices in creating robust APIs. I have a solid understanding of cloud computing, specially, Google Cloud Platform(GCP). I experienced in deploying code to production using Docker and Terraform.
        </Text>
        <Text type="p">
          I have experience creating data pipeline systems using Airflow. I understand fundamental data engineer concepts, experienced in crafting numerous queries to address complex data challenges, and my work in the mobile game industry has provided me with insights into effectively analyzing data in this specific domain.
        </Text>
        <Text type="p">
          I also have a skill for front-end development with a solid grasp of building responsive website using React and TypeScript.
        </Text>
        <FlexContainer direction="column" alignItems="flex-start">
          <Text type="p">
            I've recently worked with the following technologies:
          </Text>
          <UnorderedList
            wrap="wrap"
            p="0em"
            jc="space-between"
            gap="0.5em"
            childrenWidth="45%"
          >
            {SKILLS.map((skill, index) =>
              <ListChildren key={index} variants={listChildrenAnimation}>
                <span>&#8226;</span> {skill}
              </ListChildren>)}
          </UnorderedList>
        </FlexContainer>
      </FlexContainer>
      <Canvas styled={{ zIndex: 0 }} camera>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Content />
          <OrbitControls
            enablePan={true}
            enableZoom={false}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
    </SectionSkillStyled>
  );
}

export default SectionSkills;
