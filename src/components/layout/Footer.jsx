// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/siteConfig'

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5>{siteConfig.businessName}</h5>
            <p className="text-white-50 small">
              Independent retailer of NRI health & wellness products, delivering across Nigeria.
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/products" className="text-white-50 text-decoration-none">Products</Link></li>
              <li><Link to="/about" className="text-white-50 text-decoration-none">About</Link></li>
              <li><Link to="/faq" className="text-white-50 text-decoration-none">FAQ</Link></li>
              <li><Link to="/contact" className="text-white-50 text-decoration-none">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Legal</h6>
            <ul className="list-unstyled">
              <li><Link to="/privacy-policy" className="text-white-50 text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white-50 text-decoration-none">Terms & Conditions</Link></li>
              <li><Link to="/returns-policy" className="text-white-50 text-decoration-none">Returns Policy</Link></li>
              <li><Link to="/disclaimer" className="text-white-50 text-decoration-none">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="text-white-50 small mb-0 text-center">
          © {new Date().getFullYear()} {siteConfig.businessName}. Independent retailer, not an official NRI corporate site.
        </p>
      </div>
    </footer>
  )
}

export default Footer