import React, { Suspense } from "react";
import SectionSkillStyled from "./SectionSkills.styled";
import Content from "../SphereCanvas/SphereCanvas";
import { Canvas } from "@react-three/fiber";
import Text from "../Text/Text";

function SectionSkills() {
  return (
    <SectionSkillStyled id="skills">
      <Text color="var(--clr_primary_color)" type="h2" text="My Skills" />
      <Canvas style={{ justifyContent: "center", alignItems: "center" }}>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Content />
        </Suspense>
      </Canvas>
    </SectionSkillStyled>
  );
}

export default SectionSkills;
