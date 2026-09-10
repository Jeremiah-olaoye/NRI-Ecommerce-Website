// src/pages/NotFound.jsx
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '../config/siteConfig'
import { usePageMeta } from '../hooks/usePageMeta'

function NotFound() {
  usePageMeta('Page Not Found | NRI Store', 'The page you are looking for could not be found.')

  return (
    <div className="container py-5 text-center" style={{ minHeight: '60vh' }}>
      <h1 className="display-1 fw-bold" style={{ color: '#2f6b4f' }}>404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted mb-4">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>

      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <Link to="/" className="btn btn-success btn-lg hover-lift">
          Back to Home
        </Link>
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-success btn-lg d-inline-flex align-items-center gap-2 hover-lift"
        >
          <FaWhatsapp /> Need Help?
        </a>
      </div>
    </div>
  )
}

export default NotFound