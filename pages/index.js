import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import Box from "../components/Box";
import Content from "../components/Content";
import Stars from "../components/Stars";
import Sphere from "../components/Sphere";
import Outer from "../components/Outer";

function Rocket() {
  const gltf = useGLTF("/scene.gltf");

  return <primitive object={gltf.scene} dispose={null} />;
}

export default function Home() {
  return (
    <>
      <Canvas>
        <OrbitControls autoRotate />
        <ambientLight />
        <spotLight position={[0, 5, 10]} />
        <fog />
        <Outer />
        <Box position={[-2.5, -1.5, 1]} />
        <Box position={[2.5, 1.5, 1]} />
        <Sphere position={[1, -2.5, 1]} />
        <Sphere position={[-1, 2.5, 1]} />
        {/* <Rocket /> */}
        <Stars />
      </Canvas>
      <Content />
    </>
  );
}
