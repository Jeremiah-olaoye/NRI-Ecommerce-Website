// src/services/productService.js
// Wraps mock data now; swap internals for real API calls later without touching components.
import { mockProducts } from '../data/mockProducts'
import { categories } from '../data/mockCategories'

export function getAllProducts() {
  return mockProducts
}

export function getProductBySlug(slug) {
  return mockProducts.find((p) => p.slug === slug) || null
}

export function getFeaturedProducts() {
  return mockProducts.filter((p) => p.featured)
}

export function getPopularProducts() {
  return mockProducts.filter((p) => p.popular)
}

export function getProductsByCategory(categorySlug) {
  return mockProducts.filter((p) => p.category === categorySlug)
}

export function getAllCategories() {
  return categories
}