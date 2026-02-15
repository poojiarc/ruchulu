import React, { createContext, useContext, useState, useCallback } from "react";
import { Product } from "@/data/products";

export type QuantityOption = "1kg" | "halfkg";

export interface CartItem {
  product: Product;
  quantity: number;
  quantityOption: QuantityOption;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantityOption: QuantityOption) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const getItemPrice = (product: Product, quantityOption: QuantityOption) => {
  return quantityOption === "1kg" ? product.pricePerKg : Math.round(product.pricePerKg / 2);
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product: Product, quantityOption: QuantityOption) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.quantityOption === quantityOption
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.quantityOption === quantityOption
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, quantityOption }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.product.id !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + getItemPrice(item.product, item.quantityOption) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
