import React from 'react';
import { CartContext } from '@app/contexts/CartContext';

export function useCart() {
  return React.useContext(CartContext);
}
