'use client';

import type { Product } from '@/Types/ProductsTypes';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextProps {
  cartItems: Product[]; // Array de produtos
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>; // Função para atualizar o estado
  updateQuantity: (id: number, quantity: number) => void; // Função para atualizar a quantidade de um item
  addItemToCart: (item: Product) => void; // Função para adicionar item ao carrinho
}

interface CartProviderProps {
  children: ReactNode; // Permite passar componentes como filhos
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]); // Inicializa com um array vazio

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Função para adicionar um item ao carrinho
  const addItemToCart = (item: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((prod) => prod.id === item.id);
      if (existingItem) {
        // Se o item já existir, atualiza a quantidade
        return prevItems.map((prod) =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod
        );
      } else {
        // Se não, adiciona o item com quantidade 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, updateQuantity, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
