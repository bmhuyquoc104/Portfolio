import React, { Suspense } from "react";
import SectionContactStyled from "./SectionContact.styled";
import Text from "../Text/Text";
import FlexContainer from "../Containers/Flex/FlexContainer";
import { Canvas } from "@react-three/fiber";
import Text3DMesh from "../Mesh/Text3D/Text3DMesh";
import { OrbitControls } from "@react-three/drei";
import {
  heading2Animation,
  listChildrenAnimation,
} from "../../style/AnimationStyled";

function SectionContact() {
  return (
    <SectionContactStyled id="contact">
      <FlexContainer
        alignItems="flex-start"
        gap="1.5em"
        width="60ch"
        direction="column"
      >
        <Text
          variants={heading2Animation}
          color="var(--clr_primary_color)"
          type="h2"
          text="Contact me"
        />
        <Text type="p">
          I'm interested in working with other people on full-stack project. If
          you have any questions or just want to say hi, please do not hesitate
          to contact me via my email.
        </Text>
        <Text type="p">
          I'm currently looking for an{" "}
          <span>
            <Text text="intern" type="a" color="var(--clr_primary_color)" />
          </span>{" "}
          job. If you have any opportunities for me, please feel free to contact
          me, I'll get back to you ASAP!
        </Text>
        <Text
        variants={listChildrenAnimation}
          type="a"
          color="var(--clr_primary_color)"
          text="Check my resume here!"
        />
        <Text variants={listChildrenAnimation} size="1rem" text="Say Hi 👋" type="button-link" />
      </FlexContainer>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Text3DMesh />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
    </SectionContactStyled>
  );
}

export default SectionContact;
