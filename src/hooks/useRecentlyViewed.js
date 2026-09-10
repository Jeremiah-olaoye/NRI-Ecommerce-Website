// src/hooks/useRecentlyViewed.js
import { useEffect } from 'react'

const STORAGE_KEY = 'nri_recently_viewed'
const MAX_ITEMS = 6

// Call this on a product details page to record the view
export function recordProductView(product) {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    let items = saved ? JSON.parse(saved) : []

    items = items.filter((item) => item.id !== product.id)
    items.unshift({
      id: product.id,
      name: product.name,
      slug: product.slug,
      image: product.images[0],
      price: product.price,
    })

    localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, MAX_ITEMS)))
  } catch {
    // fail silently — recently viewed is a nice-to-have, not critical
  }
}

export function getRecentlyViewed(excludeId) {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    const items = saved ? JSON.parse(saved) : []
    return excludeId ? items.filter((item) => item.id !== excludeId) : items
  } catch {
    return []
  }
}

// React hook wrapper: records the view once when the component mounts
export function useRecordView(product) {
  useEffect(() => {
    if (product) recordProductView(product)
  }, [product])
}