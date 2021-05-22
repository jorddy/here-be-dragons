import * as THREE from "three";
import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Box = (props) => {
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
      <meshBasicMaterial
        attach="material"
        color={hovered ? "lightcoral" : "lightgrey"}
      />
    </mesh>
  );
};

const Stars = () => {
  let group = useRef();
  let theta = 0;
  useFrame(() => {
    // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
    const r = 5 * Math.sin(THREE.Math.degToRad((theta += 0.1)));
    const s = Math.cos(THREE.Math.degToRad(theta * 2));
    group.current.rotation.set(r, r, r);
    group.current.scale.set(s, s, s);
  });
  const [geo, mat, vertices, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(1, 20, 20);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("lightblue"),
    });
    const coords = new Array(2000)
      .fill()
      .map((i) => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
      ]);
    return [geo, mat, vertices, coords];
  }, []);
  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  );
};

const Content = () => (
  <div className="container">
    <main className="flow">
      <h1>Hello Space</h1>
      <p>
        I'm baby gluten-free knausgaard narwhal, flannel readymade mumblecore
        sustainable YOLO shaman street art heirloom DIY. Chia church-key
        vaporware shoreditch helvetica disrupt tumeric. Roof party polaroid
        synth helvetica, neutra chartreuse tofu. Offal portland chia synth fam,
        hashtag keffiyeh aesthetic blog literally tumblr skateboard kickstarter
        distillery shabby chic. YOLO vegan wayfarers asymmetrical.
      </p>
    </main>
  </div>
);

export default function Home() {
  return (
    <>
      <Canvas>
        <ambientLight color="blue" />
        <pointLight position={[10, 10, 10]} intensity={1} color="white" />
        <Box position={[-2.5, -1.5, 1]} />
        <Box position={[2.5, 1.2, 1]} />
        <Stars />
      </Canvas>
      <Content />
    </>
  );
}
