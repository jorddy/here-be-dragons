import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Content from "../components/Content";
import Sphere from "../components/Sphere";
import World from "../components/World";
import Dragon from "../components/Dragon";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Canvas camera={{ fov: 75, near: 1, far: 1000, position: [5, 5, 10] }}>
        <OrbitControls autoRotate />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 15, 10]} angle={0.8} />
        <fog args={["aquamarine", 1, 100]} />
        <Sphere position={[-5, 4, 3]} color="crimson" />
        <Sphere position={[-5, 4, -7]} color="teal" />
        <Sphere position={[5, 4, 3]} color="darkslateblue" />
        <Sphere position={[5, 4, -7]} color="forestgreen" />
        <Suspense fallback={null}>
          <World />
        </Suspense>
        <Suspense fallback={null}>
          <Dragon />
        </Suspense>
        <Stars />
      </Canvas>
      <Content />
    </>
  );
}
