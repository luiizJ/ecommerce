"use client"
import React, { createContext, useContext, useState } from 'react';

// Definindo o tipo do estado
interface NavbarContextProps {
  isFalsePathTrue: boolean;
  setIsFalsePathTrue: React.Dispatch<React.SetStateAction<boolean>>;
}

// Criando o Context
const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

// Provider que vai fornecer o valor para os componentes filhos
export const NavbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFalsePathTrue, setIsFalsePathTrue] = useState(false);

  return (
    <NavbarContext.Provider value={{ isFalsePathTrue, setIsFalsePathTrue }}>
      {children}
    </NavbarContext.Provider>
  );
};

//hook para acessar o Context em outros componentes
export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
};
