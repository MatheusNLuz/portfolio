import React from 'react';
import { useLenis } from '@/hooks/useLenis';

export interface LenisProviderProps {
  children: React.ReactNode;
}

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  useLenis();
  return <>{children}</>;
};
