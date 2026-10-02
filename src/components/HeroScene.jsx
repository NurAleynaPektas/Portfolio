import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef } from "react";

function AnimatedShape() {
  const shape = useRef();

  useFrame((state, delta) => {
    if (!shape.current) return;

    shape.current.rotation.x += delta * 0.08;
    shape.current.rotation.y += delta * 0.12;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    shape.current.position.x +=
      (mouseX * 0.45 - shape.current.position.x) * 0.025;

    shape.current.position.y +=
      (mouseY * 0.3 - shape.current.position.y) * 0.025;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.7}>
      <mesh ref={shape}>
        <icosahedronGeometry args={[2.15, 2]} />

        <meshStandardMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>
    </Float>
  );
}

function OrbitRing() {
  const ring = useRef();

  useFrame((_, delta) => {
    if (!ring.current) return;

    ring.current.rotation.z += delta * 0.06;
    ring.current.rotation.x += delta * 0.025;
  });

  return (
    <mesh ref={ring} rotation={[1.2, 0.2, 0]}>
      <torusGeometry args={[3.1, 0.012, 16, 180]} />

      <meshBasicMaterial color="#67e8f9" transparent opacity={0.25} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />

      <pointLight position={[4, 4, 5]} intensity={25} color="#8b5cf6" />

      <pointLight position={[-4, -2, 3]} intensity={15} color="#22d3ee" />

      <AnimatedShape />

      <OrbitRing />

      <Stars
        radius={40}
        depth={25}
        count={1300}
        factor={2.2}
        saturation={0}
        fade
        speed={0.35}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="heroScene" aria-hidden="true">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
