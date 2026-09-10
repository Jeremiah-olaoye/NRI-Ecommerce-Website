// src/components/product/ProductGrid.jsx
import ProductCard from './ProductCard'

function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return <p className="text-muted">No products found.</p>
  }

  return (
    <div className="row g-4">
      {products.map((product) => (
        <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductGrid