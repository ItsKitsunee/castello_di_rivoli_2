import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react'; // <--- Aggiungi "type" davanti a ReactNode

interface OverlookContextType {
  overlookState: boolean;
  setOverlookState: (state: boolean) => void;
}

const OverlookContext = createContext<OverlookContextType | undefined>(undefined);

interface OverlookProviderProps {
  children: ReactNode;
}

export const OverlookProvider: React.FC<OverlookProviderProps> = ({ children }) => {
  const [overlookState, setOverlookState] = useState<boolean>(false);

  return (
    <OverlookContext.Provider value={{ overlookState, setOverlookState }}>
      {children}
    </OverlookContext.Provider>
  );
};

export const useOverlook = () => {
  const context = useContext(OverlookContext);
  if (context === undefined) {
    throw new Error('useOverlook must be used within an OverlookProvider');
  }
  return context;
};
