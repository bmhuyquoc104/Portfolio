import React from "react";
import { Center, Text3D, Float } from "@react-three/drei";
import { imageResource } from "../../../assets/imageResource";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Text3DMesh() {
  const meshRef = useRef(null);
  useFrame(() => {
    // meshRef.current.rotation.y -= 0.01;
  });
  return (
    <mesh position = {[0,-1 ,0]} ref={meshRef}>
      <Center top>
        <Float floatIntensity={5} speed={2}>
          <Text3D
            font={imageResource.Font}
            size={0.5}
            bevelEnabled
            bevelSize={0.05}
            letterSpacing={-0.025}
          >
            {`bmhuyquoc104\n@gmail.com`}
            <meshNormalMaterial />
          </Text3D>
        </Float>
      </Center>
    </mesh>
  );
}

export default Text3DMesh;
