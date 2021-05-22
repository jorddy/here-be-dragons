import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Box(props) {
  const mesh = useRef();
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.z += 0.01;
  });

  return (
    <mesh
      {...props}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={clicked ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      ref={mesh}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhysicalMaterial
        attach="material"
        color={hovered ? "lightcoral" : "lightgrey"}
      />
    </mesh>
  );
}
