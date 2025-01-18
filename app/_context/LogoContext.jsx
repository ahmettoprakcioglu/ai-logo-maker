'use client'

import { createContext, useContext, useRef, useState } from 'react';
import axios from 'axios'
import Prompt from '../_data/Prompt';

const LogoContext = createContext();

export function LogoProvider({ children }) {
  const [logoIdeas, setLogoIdeas] = useState(null);
  const [logoFormData, setLogoFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const requestInProgress = useRef(false);

  const updateLogoIdeas = (ideas) => {
    setLogoIdeas(ideas);
  };

  const updateFormData = (field, value) => {
    setLogoFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const fetchLogoIdeas = async (formData = {}) => {
    if (!logoIdeas && !requestInProgress.current) {
      try {
        requestInProgress.current = true;
        setLoading(true);
        
        const PROMPT = Prompt.DESIGN_IDEA_PROMPT
          .replace('{logoType}', formData?.design?.title || '')
          .replace('{logoTitle}', formData?.title || '')
          .replace('{logoDesc}', formData?.desc || '')
          .replace('{logoPrompt}', formData?.design?.prompt || '');

        const result = await axios.post('/api/ai-design-ideas', 
          { prompt: PROMPT }
        );

        if (result?.data?.logo_ideas) {
          updateLogoIdeas(result.data.logo_ideas);
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error('Error generating logo ideas:', error);
        }
      } finally {
        setLoading(false);
        requestInProgress.current = false;
      }
    }
  };

  return (
    <LogoContext.Provider value={{
      logoIdeas,
      updateLogoIdeas,
      logoFormData,
      updateFormData,
      fetchLogoIdeas,
      loading
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