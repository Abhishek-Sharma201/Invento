"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const CylinderMesh = () => {
  const texture = useLoader(THREE.TextureLoader, "/assets/t2.png");
  const cylinderRef = useRef();

  // Animation logic using useFrame
  useFrame(() => {
    if (cylinderRef.current) {
      cylinderRef.current.rotation.y += 0.005;
      // cylinderRef.current.rotation.x += 0.004;
    }
  });

  useEffect(() => {
    // Clean up resources when component unmounts
    return () => {
      if (cylinderRef.current) {
        cylinderRef.current.geometry.dispose();
        cylinderRef.current.material.dispose();
      }
    };
  }, []);

  return (
    <mesh
      ref={cylinderRef}
      rotation={[0.4, 0, 0]}
      position={[0, 2, 0]}
      geometry={new THREE.CylinderGeometry(10, 10, 10, 32, 1, true)} // Reduced segments
      material={
        new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          transparent: true,
        })
      }
    />
  );
};

const Cylinder = () => {
  return (
    <Canvas
      style={{ height: "100%", width: "100%", position: "absolute", zIndex: 5 }}
      camera={{ position: [0, 0, 25], fov: 60 }}
      onCreated={({ gl }) => {
        // Handle WebGL context loss
        gl.getContext().canvas.addEventListener("webglcontextlost", (event) => {
          event.preventDefault();
          console.warn("WebGL context lost.");
        });
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <EffectComposer>
        <Bloom
          intensity={1.4}
          mipmapBlur={true}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.5}
        />
      </EffectComposer>
      <OrbitControls makeDefault enableDamping />
      <CylinderMesh />
    </Canvas>
  );
};

export default Cylinder;
