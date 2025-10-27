import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function FallingDinos({ count = 15 }) {
  const gltf = useGLTF("/models/dino.glb");
  const group = useRef();
  const dinos = useRef([]);

  useEffect(() => {
    const dinosArray = [];

    function isTooClose(newDino, others) {
      return others.some((d) => {
        const dx = d.x - newDino.x;
        const dz = d.z - newDino.z;
        return Math.sqrt(dx * dx + dz * dz) < 1.5;
      });
    }

    for (let i = 0; i < count; i++) {
      let newDino;
      let tries = 0;

      do {
        newDino = {
        x: (Math.random() - 0.5) * 20, // 👈 wider spread on X
        y: Math.random() * 10 + 10,     // start above screen
        z: (Math.random() - 0.5) * 5, // 👈 more depth variety
        speed: Math.random() * 0.5 + 0.2,
        scale: Math.random() * 0.5 + 0.4, // size range
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        };
        tries++;
      } while (isTooClose(newDino, dinosArray) && tries < 10);

      dinosArray.push(newDino);
    }

    dinos.current = dinosArray;
  }, [count]);

  useFrame((state) => {
    dinos.current.forEach((dino) => {
      dino.y -= dino.speed * 0.08;
      if (dino.y < -15) dino.y = Math.random() * 8 + 7;
    });

    group.current.children.forEach((mesh, i) => {
      const d = dinos.current[i];
      mesh.position.set(d.x, d.y, d.z);
      mesh.scale.set(d.scale, d.scale, d.scale);
      mesh.lookAt(state.camera.position);
      mesh.rotation.x += Math.PI / 4;
    });
  });

  return (
    <group ref={group}>
      {Array.from({ length: count }).map((_, i) => (
        <primitive
          key={i}
          object={gltf.scene.clone()}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
      ))}
    </group>
  );
}

useGLTF.preload("/models/dino.glb");

export default function DinoBackground() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none hero-bg">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}  // Camera position and zoom
        dpr={[0.7, 1]}                             // Render resolution (lower = smoother)
        gl={{ antialias: true }}
        className="absolute inset-0 z-0"
      >

        {/* Basic lights for soft illumination */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 5, 5]} intensity={1.5} />

        {/* Suspense waits for model loading */}
        <Suspense fallback={null}>
          <FallingDinos count={15} /> {/* Add 10 falling dinos */}
        </Suspense>

        {/* OrbitControls lets you rotate/zoom (disabled) */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
