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
      <Canvas camera={{ position: [-10, 5, 10] }}>
        <OrbitControls autoRotate />
        <ambientLight />
        <spotLight position={[10, 15, 25]} penumbra={1} intensity={2} />
        <fog attach="fog" args={["#373737", 10, 50]} />
        <Sphere position={[-5, 4, 3]} color="crimson" />
        <Sphere position={[-5, 4, -7]} color="teal" />
        <Sphere position={[5, 4, 3]} color="darkslateblue" />
        <Sphere position={[5, 4, -7]} color="forestgreen" />
        <Suspense fallback={null}>
          <World scale={[0.02, 0.02, 0.02]} position={[5, 8, 0]} />
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
