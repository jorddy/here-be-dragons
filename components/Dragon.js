import { useGLTF } from "@react-three/drei";

export default function Dragon() {
  const gltf = useGLTF("/scene.gltf", true);

  return <primitive object={gltf.scene} />;
}
