import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Stars() {
  let group = useRef();
  let theta = 0;
  const mesh = useRef();

  useFrame(() => {
    const r = 5 * Math.sin(THREE.Math.degToRad((theta += 0.1)));
    const s = Math.cos(THREE.Math.degToRad(theta * 2));
    group.current.rotation.set(r, r, r);
    group.current.scale.set(s, s, s);
  });

  const [geo, mat, vertices, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(1, 1, 1);
    const mat = new THREE.MeshStandardMaterial({
      color: "lightgrey",
    });

    const coords = new Array(500)
      .fill()
      .map((i) => [
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
      ]);

    return [geo, mat, vertices, coords];
  }, []);

  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh
          key={i}
          geometry={geo}
          material={mat}
          ref={mesh}
          position={[p1, p2, p3]}
        />
      ))}
    </group>
  );
}
