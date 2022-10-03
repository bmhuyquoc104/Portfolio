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
  return (
    <SectionSkillStyled id="skills">
      <FlexContainer direction="column" alignItems="flex-start" gap="1.5em">
        <Text
          variants={heading2Animation}
          color="var(--clr_primary_color)"
          type="h2"
          text="My Skills"
        />
        <Text type="p">
          My main area is full-stack development. I have been building several
          small, medium web projects. My criteria for coding style are clean,
          easy to understand and reusable for future improvements and
          maintenance. Most of my websites are written in {" "}
          <span>
            <Text color="var(--clr_primary_color)" type="a" text="ReactJS" />
          </span>{" "}
          and its ecosystem.
        </Text>
        <Text type="p">
          My favorite React Stack is TypeScript, React Query, Redux Toolkit,
          React Hook Form, React Router and Styled Components. For the backend,
          I interested in using ExpressJS + MongoDB/SQL or Firebase.
        </Text>
        <Text type="p">
          I also have experiences in mobile development and machine learning.
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
            <ListChildren variants={listChildrenAnimation}>
              <span>&#8226;</span> Express
            </ListChildren>
            <ListChildren variants={listChildrenAnimation}>
              <span>&#8226;</span> React (+ecosystem)
            </ListChildren>
            <ListChildren variants={listChildrenAnimation}>
              <span>&#8226;</span> JavaScript (ES6+)
            </ListChildren>
            <ListChildren variants={listChildrenAnimation}>
              <span>&#8226;</span> TypeScript
            </ListChildren>
            <ListChildren variants={listChildrenAnimation}>
              <span>&#8226;</span> MongoDB
            </ListChildren>
            <ListChildren variants={listChildrenAnimation}>
              <span>&#8226;</span> Firebase
            </ListChildren>
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
