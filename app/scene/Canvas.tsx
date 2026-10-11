'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

const GLB_PATH = '/models/rocket.glb';

/* ---------- Particle field ---------- */
function ParticleField({ count, mousePos }: { count: number; mousePos: THREE.Vector2 }) {
  const pointsRef = useRef<THREE.Points | null>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    let seed = 42;
    const seededRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (seededRandom() - 0.5) * 12;
      arr[i * 3 + 1] = (seededRandom() - 0.5) * 12;
      arr[i * 3 + 2] = (seededRandom() - 0.5) * 12;
    }
    return arr;
  }, [count]);

  useFrame(() => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += 0.0008;
    pointsRef.current.rotation.x += 0.0003;

    // Subtle mouse influence
    pointsRef.current.rotation.y += mousePos.x * 0.0003;
    pointsRef.current.rotation.x += mousePos.y * 0.0003;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attribute-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#06c3d6"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ---------- Glow ring ---------- */
function GlowRing({ radius, opacity, color, speed }: {
  radius: number;
  opacity: number;
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = clock.getElapsedTime() * speed;
    ref.current.rotation.x = Math.PI / 2 + Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
  });

  return (
    <mesh ref={ref}>
      <ringGeometry args={[radius - 0.02, radius + 0.02, 64]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ---------- Ambient light shifter ---------- */
function LightShifter({ mousePos }: { mousePos: THREE.Vector2 }) {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(() => {
    if (!lightRef.current) return;
    // Shift light position and color based on mouse
    lightRef.current.position.x = Math.sin(mousePos.x * Math.PI) * 4;
    lightRef.current.position.z = Math.cos(mousePos.y * Math.PI * 0.5) * 4;
    lightRef.current.intensity = 0.4 + Math.abs(mousePos.x) * 0.4;

    // Color interpolation between cyan and violet
    const t = (mousePos.x + 1) / 2;
    const cyan = new THREE.Color('#06c3d6');
    const violet = new THREE.Color('#7c5cbf');
    lightRef.current.color = cyan.lerp(violet, t);
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 0, 0]}
      intensity={0.4}
      color="#06c3d6"
      distance={8}
    />
  );
}

/* ---------- Floating animation helper ---------- */
function FloatingWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.15;
  });

  return <group ref={ref}>{children}</group>;
}

/* ---------- Main rocket ---------- */
function Rocket({ mousePos, reducedMotion }: {
  mousePos: THREE.Vector2;
  reducedMotion: boolean;
}) {
  const { scene } = useGLTF(GLB_PATH);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current || reducedMotion) return;

    // Base rotation from mouse with lerp
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mousePos.x * Math.PI * 0.5,
      0.03
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -mousePos.y * Math.PI * 0.25,
      0.03
    );

    // Subtle idle wobble
    if (!reducedMotion) {
      groupRef.current.rotation.y += Math.sin(clock.getElapsedTime() * 0.8) * 0.003;
      groupRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.6) * 0.01;
    }
  });

  return (
    <group ref={groupRef} scale={[3, 3, 3]}>
      <primitive object={scene} />
    </group>
  );
}

/* ---------- Scene composer ---------- */
function Scene({ onError }: { onError?: () => void }) {
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
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePos(new THREE.Vector2(x, y));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos(new THREE.Vector2(0, 0));
  }, []);

  const particleCount = reducedMotion ? 500 : 1500;

  return (
    <div
      className="w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Canvas
        camera={{ position: [0, 0.5, 4.5], fov: 50 }}
        style={{ background: 'transparent' }}
        onError={onError}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#0d0f13']} />
        <fog attach="fog" args={['#0d0f13', 4, 18]} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 4, 5]} intensity={0.8} color="#e2e8f0" />
        <pointLight position={[-3, 2, 2]} intensity={0.5} color="#06c3d6" />
        <pointLight position={[3, -1, 3]} intensity={0.3} color="#7c5cbf" />
        <LightShifter mousePos={mousePos} />

        {/* Environment */}
        <Environment preset="city" />

        {/* Rocket with floating + orbiting rings + particles */}
        <FloatingWrapper>
          <Rocket mousePos={mousePos} reducedMotion={reducedMotion} />

          {!reducedMotion && (
            <>
              {/* Orbit rings */}
              <GlowRing radius={2.8} opacity={0.15} color="#06c3d6" speed={0.3} />
              <GlowRing radius={3.4} opacity={0.08} color="#7c5cbf" speed={-0.2} />

              {/* Particles */}
              <ParticleField count={particleCount} mousePos={mousePos} />

              {/* Stars for depth */}
              <Stars radius={20} depth={40} count={800} factor={4} />
            </>
          )}
        </FloatingWrapper>

        {/* Vignette glow */}
        <mesh scale={[6, 6, 1]}>
          <meshBasicMaterial
            attach="material"
            color="#0d0f13"
            transparent
            opacity={0.4}
            depthWrite={false}
          />
        </mesh>
      </Canvas>
    </div>
  );
}

export default function CanvasScene() {
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {error ? (
        <div className="w-full h-full flex items-center justify-center bg-graphite-800 rounded-2xl">
          <p className="text-gray-400 text-sm">3D-сцена недоступна</p>
        </div>
      ) : (
        <Scene onError={() => { console.error('R3F error'); setError(true); }} />
      )}
    </div>
  );
}
