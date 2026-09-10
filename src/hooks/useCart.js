// src/hooks/useCart.js
// Thin re-export so components import from `hooks/` consistently,
// even though the real logic lives in CartContext.
export { useCartContext as useCart } from '../context/cartContext'