import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Box(props) {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
  });

  return (
    <mesh {...props} ref={mesh}>
      <sphereBufferGeometry attach="geometry" args={[100, 75, 75]} />
      <meshBasicMaterial attach="material" color="#181818" wireframe={true} />
    </mesh>
  );
}
