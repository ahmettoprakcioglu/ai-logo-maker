'use client'

import { createContext, useContext, useState } from 'react';

const LogoContext = createContext();

export function LogoProvider({ children }) {
  const [logoIdeas, setLogoIdeas] = useState(null);
  const [logoFormData, setLogoFormData] = useState({});

  const updateLogoIdeas = (ideas) => {
    setLogoIdeas(ideas);
  };

  const updateFormData = (field, value) => {
    setLogoFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <LogoContext.Provider value={{
      logoIdeas,
      updateLogoIdeas,
      logoFormData,
      updateFormData
    }}>
      {children}
    </LogoContext.Provider>
  );
}

export function useLogoContext() {
  const context = useContext(LogoContext);
  if (!context) {
    throw new Error('useLogoContext must be used within a LogoProvider');
  }
  return context;
} 