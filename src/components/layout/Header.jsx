// src/components/layout/Header.jsx
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaHeart } from 'react-icons/fa'
import { useCart } from '../../hooks/useCart'
import { siteConfig } from '../../config/siteConfig'
import logo from '../../assets/logo.jpg'

function Header() {
  const { totalItems } = useCart()

  // Closes the collapsed mobile menu whenever a nav link is clicked
  const closeMenu = () => {
    const menu = document.getElementById('mainNav')
    if (menu && menu.classList.contains('show')) {
      const bsCollapse = window.bootstrap.Collapse.getInstance(menu) || new window.bootstrap.Collapse(menu)
      bsCollapse.hide()
    }
  }

  return (
    <header className="border-bottom bg-white sticky-top">
      <nav className="navbar navbar-expand-lg container py-3">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2" onClick={closeMenu}>
          <img
            src={logo}
            alt={siteConfig.businessName}
            style={{ height: '40px', width: 'auto' }}
          />
          <span className="fw-bold" style={{ color: '#2f6b4f' }}>
            {siteConfig.businessName}
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-4 align-items-lg-center ms-lg-auto mt-3 mt-lg-0">
            <Link to="/" className="text-decoration-none text-dark" onClick={closeMenu}>Home</Link>
            <Link to="/products" className="text-decoration-none text-dark" onClick={closeMenu}>Products</Link>
            <Link to="/about" className="text-decoration-none text-dark" onClick={closeMenu}>About</Link>
            <Link to="/contact" className="text-decoration-none text-dark" onClick={closeMenu}>Contact</Link>
            <Link to="/wishlist" className="text-dark" onClick={closeMenu}>
              <FaHeart size={18} />
            </Link>
            <Link to="/cart" className="position-relative text-dark" onClick={closeMenu}>
              <FaShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header