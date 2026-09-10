// src/pages/Products.jsx
import { useState, useMemo } from 'react'
import ProductGrid from '../components/product/ProductGrid'
import { getAllProducts, getAllCategories } from '../services/productService'
import { usePageMeta } from '../hooks/usePageMeta'

function Products() {
  usePageMeta(
    'Shop All Products | NRI Store',
    'Browse our full range of NRI supplements, herbal teas, oils, and personal care products. Genuine, affordable, delivered nationwide.'
  )

  const allProducts = getAllProducts()
  const categories = getAllCategories()

  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [maxPrice, setMaxPrice] = useState('') 
  const [sortBy, setSortBy] = useState('default')

  const filteredProducts = useMemo(() => {
    let result = [...allProducts]

    if (search.trim()) {
      const term = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.shortDescription.toLowerCase().includes(term)
      )
    }

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (maxPrice) {
      result = result.filter((p) => p.price <= Number(maxPrice))
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name))
    }

    return result
  }, [allProducts, search, selectedCategory, maxPrice, sortBy])

  return (
    <div className="container py-5">
      <h1 className="mb-4">All Products</h1>

      <div className="row g-3 mb-4">
        <div className="col-12 col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-6 col-md-3">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-6 col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Max price (₦)"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            min="0"
          />
        </div>

        <div className="col-12 col-md-3">
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
          </select>
        </div>
      </div>

      <p className="text-muted small">{filteredProducts.length} product(s) found</p>

      <ProductGrid products={filteredProducts} />
    </div>
  )
}

export default Products