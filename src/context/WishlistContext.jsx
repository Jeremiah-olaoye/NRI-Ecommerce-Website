// src/context/WishlistContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'

const WishlistContext = createContext(null)
const STORAGE_KEY = 'nri_wishlist'

function loadWishlist() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(loadWishlist)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist))
  }, [wishlist])

  const isWishlisted = (productId) => wishlist.some((item) => item.id === productId)

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, { id: product.id, name: product.name, slug: product.slug, image: product.images[0], price: product.price }]
    )
  }

  return (
    <WishlistContext.Provider value={{ wishlist, isWishlisted, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlistContext() {
  const context = useContext(WishlistContext)
  if (!context) throw new Error('useWishlistContext must be used within a WishlistProvider')
  return context
}