import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export const BusinessCardMesh: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Target rotation for smooth interpolation (Lerp)
  const targetRotationY = useRef(0);
  const targetRotationX = useRef(0);

  // Font URL for a sleek sans-serif font
  const interFont = "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeMZhrib2Bg-4.ttf";

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Follow mouse position subtly
    const mouseX = (state.pointer.x * Math.PI) / 8;
    const mouseY = (state.pointer.y * Math.PI) / 8;

    targetRotationX.current = -mouseY;
    const flipAngle = isFlipped ? Math.PI : 0;
    targetRotationY.current = mouseX + flipAngle;

    // Floating animation (bobbing)
    const floatY = Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      floatY,
      delta * 2
    );

    // Smooth Lerp transitions for rotation
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRotationX.current,
      delta * 4
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotationY.current,
      delta * 4
    );
  });

  return (
    <group
      ref={meshRef}
      onClick={() => setIsFlipped(!isFlipped)}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
      scale={hovered ? 1.05 : 1}
    >
      {/* Matte Premium Paper Card Body - slightly smaller and rounded to prevent clipping */}
      <RoundedBox args={[3.2, 1.8, 0.02]} radius={0.06} smoothness={8}>
        <meshStandardMaterial
          color="#ffffff" // pure white
          roughness={1.0}
          metalness={0.0}
        />
      </RoundedBox>

      {/* Front Side Elements */}
      <group position={[0, 0, 0.015]}>
        {/* Brand Accent Bar (Cyan) */}
        <mesh position={[-1.5, 0, 0]}>
          <boxGeometry args={[0.04, 1.8, 0.01]} />
          <meshStandardMaterial color="#0ea5e9" />
        </mesh>

        {/* Logo M.L. */}
        <Text
          position={[-1.1, 0.5, 0.01]}
          fontSize={0.25}
          color="#0f172a" // navy
          font={interFont}
          anchorX="left"
          fontWeight="bold"
        >
          M.L.
        </Text>

        <Text
          position={[-1.1, 0.1, 0.01]}
          fontSize={0.28}
          color="#0f172a" // slate-900
          font={interFont}
          anchorX="left"
          letterSpacing={-0.02}
          fontWeight="bold"
        >
          MATHEUS LUZ
        </Text>

        <Text
          position={[-1.1, -0.15, 0.01]}
          fontSize={0.08}
          color="#334155" // slate-700
          font={interFont}
          anchorX="left"
          letterSpacing={0.05}
        >
          Engenheiro de Software & Fundador
        </Text>

        <Text
          position={[-1.1, -0.3, 0.01]}
          fontSize={0.08}
          color="#0ea5e9" // sky-500
          font={interFont}
          anchorX="left"
          letterSpacing={0.05}
        >
          Criador do SaaS PapinhIA
        </Text>

        <Text
          position={[1.3, -0.6, 0.01]}
          fontSize={0.05}
          color="#0ea5e9" // sky-500
          anchorX="right"
        >
          Clique para girar ↺
        </Text>
      </group>

      {/* Back Side Elements */}
      <group position={[0, 0, -0.015]} rotation={[0, Math.PI, 0]}>
        {/* Accent Bar on the back too */}
        <mesh position={[1.5, 0, 0]}>
          <boxGeometry args={[0.04, 1.8, 0.01]} />
          <meshStandardMaterial color="#0ea5e9" />
        </mesh>

        <Text
          position={[0, 0.2, 0.01]}
          fontSize={0.16}
          color="#0f172a" // slate-900
          font={interFont}
          anchorX="center"
          fontWeight="bold"
        >
          Vamos conversar sobre o seu negócio?
        </Text>



        <Text
          position={[0, -0.5, 0.01]}
          fontSize={0.06}
          color="#64748b" // slate-500
          font={interFont}
          anchorX="center"
        >
          DESENVOLVIMENTO DE SOFTWARE SOB MEDIDA
        </Text>
      </group>
    </group>
  );
};
