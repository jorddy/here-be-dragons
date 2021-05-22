import { useRef, useState } from "react";
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
      ref={mesh}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={clicked ? [2, 2, 2] : [1, 1, 1]}
    >
      <octahedronGeometry attach="geometry" args={[1, 0]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? props.color : "lightgrey"}
      />
    </mesh>
  );
}
