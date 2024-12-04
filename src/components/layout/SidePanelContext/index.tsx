'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SidePanelContextType {
  isOpen: boolean;
  togglePanel: () => void;
}

const SidePanelContext = createContext<SidePanelContextType | undefined>(undefined);

export function SidePanelProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  
  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <SidePanelContext.Provider value={{ isOpen, togglePanel }}>
      {children}
    </SidePanelContext.Provider>
  );
}

export function useSidePanel() {
  const context = useContext(SidePanelContext);
  if (context === undefined) {
    throw new Error('useSidePanel must be used within a SidePanelProvider');
  }
  return context;
} 