'use client';

import React, { createContext, useState, useContext } from 'react';

interface AppContextType {
  showAboutCeo: boolean;
  setShowAboutCeo: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [showAboutCeo, setShowAboutCeo] = useState(false);

  return (
    <AppContext.Provider value={{ showAboutCeo, setShowAboutCeo }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};