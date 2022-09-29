import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, Center } from "@react-three/drei";

function Box({ text, ...props }) {
  return (
    <mesh {...props}>
      <Center>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial transparent opacity={0} />
        <Html distanceFactor={8}>
          <div className="content">{text}</div>
        </Html>
      </Center>
    </mesh>
  );
}

function Content() {
  const ref = useRef();
  useFrame(
    () =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z +=
          0.005)
  );
  return (
    <group ref={ref}>
      <Box text="JavaScript" position={[0, 1, 1]} />
      <Box text="ReactJS" position={[0, -1, 1]} />
      <Box text="CSS" position={[0, 1, -1]} />
      <Box text="HTML" position={[0, 1, 0]} />
      <Box text="ExpressJS" position={[0, 0, 1]} />
      <Box text="MongoDB" position={[0, 2, 0]} />
      <Box text="SQL" position={[0, 2, 1]} />
      <Box text="TypeScript" position={[-2, 1, -1]} />
      <Box text="Styled Components" position={[-1, 0, -1]} />
      <Box text="Redux Toolkit" position={[-2, 2, -1]} />
      <Box text="Framer Motion" position={[-2, 0, 1]} />
      <Box text="React Query" position={[-2, 1, 1]} />
      <Box text="React Router" position={[-2, -1, 1]} />
      <Box text="Git" position={[-1, -1, -1]} />
      <Box text="AWS" position={[-1, 0, 1]} />
      <Box text="MUI" position={[-1, 1, 1]} />
      <Box text="Machine Learning" position={[-1, 1, -1]} />
      <Box text="Swift" position={[-1, 1, 0]} />
      <Box text="Android" position={[-1, -1, 0]} />
      <Box text="Firebase" position={[-1, 0, 0]} />
      <Box text="React Form" position={[-1, 2, -1]} />
    </group>
  );
}

export default Content;
