'use client';

import { create } from 'zustand';

interface DirectionState {
  direction: 'ltr' | 'rtl';
  toggleDirection: () => void;
}

export const useDirection = create<DirectionState>((set) => ({
  direction: 'rtl',
  toggleDirection: () => set((state) => ({ 
    direction: state.direction === 'ltr' ? 'rtl' : 'ltr' 
  })),
}));