/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: 3DHaupt (https://sketchfab.com/dennish2010)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/models/fb0053a2e59b43868e934c239bf4eb36
title: Black Dragon with Idle Animation
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/dragon/scene.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group name="RootNode">
            <group
              position={[4018.55, 4666.06, 3759.08]}
              rotation={[-2.59, 0.26, 0.39]}
              scale={[0.2, 0.2, 0.2]}
            >
              <group rotation={[Math.PI / 2, 0, 0]} />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.6, 0.6, 0.6]}>
              <mesh
                geometry={nodes.Plane_Material_0.geometry}
                material={materials.Material}
              />
            </group>
            <group rotation={[Math.PI, 0, 0]} scale={[0.2, 0.2, 0.2]}>
              <primitive object={nodes._rootJoint} />
              <skinnedMesh
                geometry={nodes.Dragon_EYES_0.geometry}
                material={materials.EYES}
                skeleton={nodes.Dragon_EYES_0.skeleton}
              />
              <skinnedMesh
                geometry={nodes.Dragon_Game_dragon_0.geometry}
                material={materials.Game_dragon}
                skeleton={nodes.Dragon_Game_dragon_0.skeleton}
              />
              <skinnedMesh
                geometry={nodes.Dragon_Game_dragon001_0.geometry}
                material={materials["Game_dragon.001"]}
                skeleton={nodes.Dragon_Game_dragon001_0.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/dragon/scene.gltf");
