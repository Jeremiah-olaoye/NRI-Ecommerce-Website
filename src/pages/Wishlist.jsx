// src/pages/Wishlist.jsx
import { Link } from 'react-router-dom'
import { useWishlist } from '../hooks/useWishlist'
import { formatCurrency } from '../utils/formatCurrency'
import { usePageMeta } from '../hooks/usePageMeta'
import { FaHeart } from 'react-icons/fa'

function Wishlist() {
  usePageMeta('Your Wishlist | NRI Store', 'Products you have saved for later.')

  const { wishlist, toggleWishlist } = useWishlist()

  if (wishlist.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Your wishlist is empty</h2>
        <p className="text-muted">Save products you love by tapping the heart icon.</p>
        <Link to="/products" className="btn btn-success mt-2">Browse Products</Link>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">Your Wishlist</h1>
      <div className="row g-4">
        {wishlist.map((item) => (
          <div key={item.id} className="col-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h6>{item.name}</h6>
                <p className="fw-bold small">{formatCurrency(item.price)}</p>
                <div className="d-flex gap-2 mt-auto">
                  <Link to={`/products/${item.slug}`} className="btn btn-outline-secondary btn-sm flex-fill">
                    View
                  </Link>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => toggleWishlist(item)}
                    aria-label="Remove from wishlist"
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist