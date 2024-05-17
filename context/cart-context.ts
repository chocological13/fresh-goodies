import { ReactNode, createContext, useContext } from "react";
import { CartItem, ShoppingCart } from "@/types/cart";

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext<ShoppingCart | undefined>(undefined);

export const useCart = (): ShoppingCart => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
