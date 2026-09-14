// src/components/product/ProductCard.jsx
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaHeart, FaRegHeart, FaPlus, FaMinus } from 'react-icons/fa'
import { useCart } from '../../hooks/useCart'
import { useWishlist } from '../../hooks/useWishlist'
import { formatCurrency } from '../../utils/formatCurrency'

function ProductCard({ product }) {
  const { addItem } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const [quantity, setQuantity] = useState(1)

  const inStock = product.stock > 0
  const wishlisted = isWishlisted(product.id)

  const decrease = () => setQuantity((q) => Math.max(1, q - 1))
  const increase = () => setQuantity((q) => q + 1)

  const handleAddToCart = () => {
    addItem(product, quantity)
    setQuantity(1)
  }

  return (
    <div className="card h-100 shadow-sm position-relative">
      <button
        className="btn btn-light btn-sm rounded-circle position-absolute"
        style={{ top: '10px', right: '10px', zIndex: 2 }}
        onClick={() => toggleWishlist(product)}
        aria-label="Toggle wishlist"
      >
        {wishlisted ? <FaHeart color="#c0392b" /> : <FaRegHeart />}
      </button>

      <img
        src={product.images[0]}
        alt={product.name}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted small flex-grow-1">
          {product.shortDescription}
        </p>
        <p className="fw-bold mb-1">{formatCurrency(product.price)}</p>
        <p className={`small mb-2 ${inStock ? 'text-success' : 'text-danger'}`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </p>

        {inStock && (
          <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
            <button
              className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '30px', height: '30px' }}
              onClick={decrease}
              aria-label="Decrease quantity"
            >
              <FaMinus size={10} />
            </button>
            <span className="fw-semibold">{quantity}</span>
            <button
              className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '30px', height: '30px' }}
              onClick={increase}
              aria-label="Increase quantity"
            >
              <FaPlus size={10} />
            </button>
          </div>
        )}

        <div className="d-flex gap-2 mt-auto">
          <Link to={`/products/${product.slug}`} className="btn btn-outline-secondary btn-sm flex-fill">
            View Details
          </Link>
          <button
            className="btn btn-success btn-sm flex-fill"
            disabled={!inStock}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard