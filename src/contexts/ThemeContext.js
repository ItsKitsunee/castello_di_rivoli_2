import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [isOverlookMode, setIsOverlookMode] = useState(false);

  useEffect(() => {
    if (isOverlookMode) {
      document.documentElement.classList.add('overlook-mode');
    } else {
      document.documentElement.classList.remove('overlook-mode');
    }
    // Cleanup function to remove the class when the component unmounts or mode changes
    return () => {
      document.documentElement.classList.remove('overlook-mode');
    };
  }, [isOverlookMode]);

  const toggleOverlookMode = () => {
    setIsOverlookMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isOverlookMode, toggleOverlookMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
