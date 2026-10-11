'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

const GLB_PATH = '/models/rocket.glb';

function Rocket(props: { mousePos: THREE.Vector2; reducedMotion: boolean }) {
  const { mousePos, reducedMotion } = props;
  const { scene } = useGLTF(GLB_PATH);
  const meshRef = useRef<THREE.Group>(null);

  useFrame((_state, _delta) => {
    if (!meshRef.current || reducedMotion) return;
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mousePos.x * Math.PI * 0.3,
      0.04
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -mousePos.y * Math.PI * 0.15,
      0.04
    );
  });

  return (
    <group ref={meshRef} scale={[2.5, 2.5, 2.5]}>
      <primitive object={scene} />
    </group>
  );
}

function Scene() {
  const [mousePos, setMousePos] = useState<THREE.Vector2>(new THREE.Vector2(0, 0));
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 2 - 1;
    const y = -(e.clientY - rect.top) / rect.height * 2 + 1;
    setMousePos(new THREE.Vector2(x, y));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos(new THREE.Vector2(0, 0));
  }, []);

  return (
    <div
      className="w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 60 }}
        style={{ background: '#0d0f13' }}
      >
        <color attach="background" args={['#0d0f13']} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 3, 5]} intensity={0.8} />
        <pointLight position={[-3, 2, 2]} intensity={0.5} color="#06c3d6" />
        <pointLight position={[3, -1, 3]} intensity={0.3} color="#7c5cbf" />
        <Environment preset="city" />
        <Rocket mousePos={mousePos} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}

export default function CanvasScene() {
  return (
    <div className="relative w-full h-full">
      <Scene />
    </div>
  );
}
