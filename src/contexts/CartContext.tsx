import React from 'react';
import { Coffee } from '@app/utils/models';

interface CartItem {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: number;
  total: number;
}

interface CartContextData {
  items: CartItem[];
  itemsTotal: number;
  deliveryFee: number;
  cartTotal: number;
  cartQuantity: number;
  addToCart: (coffee: Coffee) => void;
  isInCart: (id: number) => boolean;
  minusItem: (id: number) => void;
  plusItem: (id: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

export const CartContext = React.createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([]);

  const itemsTotal = items.reduce((acc, cur) => acc + cur.total, 0);
  const deliveryFee = 10;
  const cartTotal = itemsTotal + deliveryFee;
  const cartQuantity = items.length;

  function createItem(coffee: Coffee): CartItem {
    return {
      id: coffee.id,
      title: coffee.title,
      image: coffee.image,
      quantity: 1,
      price: coffee.price,
      total: coffee.price,
    };
  }

  function addToCart(coffee: Coffee) {
    if (!isInCart(coffee.id)) {
      setItems((state) => [...state, createItem(coffee)]);
    }
  }

  function isInCart(id: number): boolean {
    return !!items.find((item) => item.id === id);
  }

  function minusItem(id: number) {
    if (isInCart(id)) {
      setItems((state) => {
        return state.map((item) => {
          if (item.id !== id) {
            return item;
          }
          return { ...item, quantity: item.quantity - 1 };
        });
      });
    }
  }

  function plusItem(id: number) {
    if (isInCart(id)) {
      setItems((state) => {
        return state.map((item) => {
          if (item.id !== id) {
            return item;
          }
          return { ...item, quantity: item.quantity + 1 };
        });
      });
    }
  }

  function removeItem(id: number) {
    if (isInCart(id)) {
      setItems((state) => {
        return state.filter((item) => item.id !== id);
      });
    }
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        itemsTotal,
        deliveryFee,
        cartTotal,
        cartQuantity,
        addToCart,
        isInCart,
        minusItem,
        plusItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
