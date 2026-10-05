'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

interface CanvasContainerProps {
  children: React.ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  fov?: number;
  fallbackGradient?: string;
}

export function CanvasContainer({
  children,
  className = 'w-full h-full',
  cameraPosition = [0, 0, 6],
  fov = 45,
}: CanvasContainerProps) {
  const [mounted, setMounted] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Test basic WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!mounted) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-[#F5A623]/20 to-[#FF6B4A]/20 blur-3xl animate-pulse" />
      </div>
    );
  }

  if (!webglSupported) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#F5A623]/30 via-[#FF6B4A]/20 to-[#E8B86D]/30 blur-2xl animate-pulse-warm" />
          <div className="w-40 h-40 rounded-full border border-[#E8B86D]/40 bg-gradient-to-br from-[#2B1F16] to-[#140F0C] flex items-center justify-center shadow-2xl">
            <span className="text-3xl font-bold text-[#F5A623]">FLUX</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov }}
        style={{ pointerEvents: 'auto', touchAction: 'none' }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
