import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, ContactShadows, Environment } from '@react-three/drei';
import { BusinessCardMesh } from './BusinessCardMesh';

export const BusinessCardScene: React.FC = () => {
  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[550px] relative flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5.0], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={1.5} color="#ffffff" />
        <directionalLight position={[5, 5, 5]} intensity={1.8} color="#ffffff" castShadow />
        <directionalLight position={[-5, -5, -2]} intensity={0.5} color="#ffffff" />
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <BusinessCardMesh />
          </Float>
          <Environment preset="studio" />
          <ContactShadows position={[0, -1.3, 0]} opacity={0.3} scale={6} blur={3} far={4} color="#0f172a" frames={1} resolution={256} />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default BusinessCardScene;
