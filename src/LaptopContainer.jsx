import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const LaptopContainer = () => {
  const model = useGLTF("./mac.glb");
  const tex = useTexture("./red.jpg");
  const screenRef = useRef();
  const groupRef = useRef();

  // Track the time to control opening and closing
  const timeRef = useRef(0);
  const isOpeningRef = useRef(true); // To toggle between opening and closing

  model.scene.traverse((e) => {
    if (e.name === "screen") {
      screenRef.current = e;
    }
    if (e.name === "matte") {
      e.material.map = tex;
      e.material.emissiveIntensity = 0;
      e.material.metalness = 0;
      e.material.roughness = 1;
    }
  });

  useFrame((state, delta) => {
    timeRef.current += delta;

    // Toggle opening and closing every 10 seconds
    if (timeRef.current >= 10) {
      timeRef.current = 0;
      isOpeningRef.current = !isOpeningRef.current;
    }

    // Adjust screen rotation based on toggle
    if (screenRef.current) {
      const targetAngle = isOpeningRef.current ? 90 : 180; // Adjust 120 to control how much the screen opens
      screenRef.current.rotation.x = THREE.MathUtils.lerp(
        screenRef.current.rotation.x,
        THREE.MathUtils.degToRad(targetAngle),
        delta * 2
      );
    }

    // Rotate the laptop continuously
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1; // Adjust rotation speed if necessary
    }
  });

  return (
    <group ref={groupRef} position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default LaptopContainer;
