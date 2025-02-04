import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, Center } from "@react-three/drei";

function Box({ text, ...props }) {
  return (
    <mesh {...props}>
      <Center>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial transparent opacity={0} />
        <Html transform sprite center zIndexRange={[1, 0]}  distanceFactor={6}>
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
      <Box text="Python" position={[0, 1, 1]} />
      <Box text="ReactJS" position={[0, -1, 1]} />
      <Box text="Ruby On Rails" position={[0, 1, -1]} />
      <Box text="Redis" position={[0, 1, 0]} />
      <Box text="FastAPI" position={[0, 0, 1]} />
      <Box text="PostgreSQL" position={[0, 2, 0]} />
      <Box text="gRPC" position={[0, 2, 1]} />
      <Box text="Kafka" position={[-2, 1, -1]} />
      <Box text="AWS" position={[-1, 0, -1]} />
      <Box text="Sidekiq" position={[-2, 2, -1]} />
      <Box text="GCP" position={[-2, 0, 1]} />
      <Box text="Neovim" position={[-2, 1, 1]} />
      <Box text="Bigquery" position={[-2, -1, 1]} />
      <Box text="Git" position={[-1, -1, -1]} />
      <Box text="Docker" position={[-1, 0, 1]} />
      <Box text="Terraform" position={[-1, 1, 1]} />
      <Box text="Django" position={[-1, 1, -1]} />
    </group>
  );
}

export default Content;
