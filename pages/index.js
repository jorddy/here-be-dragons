import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Content from "../components/Content";
import Stars from "../components/Stars";
import Sphere from "../components/Sphere";
import World from "../components/World";
import Dragon from "../components/Dragon";
import Lights from "../components/Lights";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Canvas camera={{ fov: 75, near: 1, far: 1000, position: [5, 5, 10] }}>
        <OrbitControls autoRotate />
        <Lights />
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
