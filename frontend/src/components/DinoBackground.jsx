import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function FallingDinos({ count = 15 }) {
  const gltf = useGLTF("/models/dino.glb");
  const group = useRef();
  const dinos = useRef([]);

// ...existing code...
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
        x: (Math.random() - 0.5) * 8,
        y: Math.random() * 10 + 6,
        z: (Math.random() - 0.5) * 6,
        speed: Math.random() * 0.1 + 0.08,
        scale: Math.random() * 0.15 + 0.07,
        // Add rotation for all 3 axes
        rotationX: Math.random() * Math.PI * 2,
        rotationY: Math.random() * Math.PI * 2,
        rotationZ: Math.random() * Math.PI * 2,
        // Rotation speeds (how fast they tilt/spin)
        rotationSpeedX: (Math.random() - 0.5) * 0.015,  // Forward/backward tilt
        rotationSpeedY: (Math.random() - 0.5) * 0.015,  // Left/right spin
        rotationSpeedZ: (Math.random() - 0.5) * 0.015,  // Barrel roll
        // Add wobble for more organic movement
        wobbleSpeed: Math.random() * 0,
        wobbleAmount: Math.random() * 0,
      };
      tries++;
    } while (isTooClose(newDino, dinosArray) && tries < 12);

    dinosArray.push(newDino);
  }

  dinos.current = dinosArray;
}, [count]);

useFrame((state) => {
  const time = state.clock.elapsedTime;

  dinos.current.forEach((dino) => {
    // Falling movement
    dino.y -= dino.speed * 0.09;
    if (dino.y < -15) {
      dino.y = Math.random() * 8 + 7;
      // Reset rotation when respawning
      dino.rotationX = Math.random() * Math.PI * 2;
      dino.rotationY = Math.random() * Math.PI * 2;
      dino.rotationZ = Math.random() * Math.PI * 2;
      
    }

    // Update rotations continuously
    dino.rotationX += dino.rotationSpeedX;
    dino.rotationY += dino.rotationSpeedY;
    dino.rotationZ += dino.rotationSpeedZ;
  });

  group.current.children.forEach((mesh, i) => {
    const d = dinos.current[i];
    
    // Add wobble effect for more organic movement
    const wobbleX = Math.sin(time * d.wobbleSpeed) * d.wobbleAmount;
    const wobbleZ = Math.cos(time * d.wobbleSpeed * 0) * d.wobbleAmount;
    
    mesh.position.set(d.x + wobbleX, d.y, d.z + wobbleZ);
    mesh.scale.set(d.scale, d.scale, d.scale);
    
    // Apply all rotations
    mesh.rotation.x = d.rotationX;
    mesh.rotation.y = d.rotationY;
    mesh.rotation.z = d.rotationZ;
  });
});
// ...existing code...

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
          <FallingDinos count={150} /> {/* Add 10 falling dinos */}
        </Suspense>

        {/* OrbitControls lets you rotate/zoom (disabled) */}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
