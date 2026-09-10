// src/context/CartContext.jsx
import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'nri_cart'

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity } = action.payload
      const existing = state.find((item) => item.productId === product.id)
      if (existing) {
        return state.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...state,
        {
          productId: product.id,
          name: product.name,
          slug: product.slug,
          image: product.images[0],
          unitPrice: product.price,
          quantity,
        },
      ]
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.productId !== action.payload.productId)

    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.productId === action.payload.productId
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      )

    case 'CLEAR_CART':
      return []

    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCartFromStorage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addItem = (product, quantity = 1) =>
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } })

  const removeItem = (productId) =>
    dispatch({ type: 'REMOVE_ITEM', payload: { productId } })

  const updateQuantity = (productId, quantity) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCartContext must be used within a CartProvider')
  return context
}