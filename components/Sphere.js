import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Box(props) {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.z += 0.01;
  });

  return (
    <mesh {...props} ref={mesh}>
      <octahedronGeometry attach="geometry" args={[1, 0]} />
      <meshPhysicalMaterial attach="material" color="lightgray" />
    </mesh>
  );
}
