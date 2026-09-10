// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import { FaLeaf, FaTruck, FaShieldAlt, FaWhatsapp } from 'react-icons/fa'
import ProductGrid from '../components/product/ProductGrid'
import ProductCard from '../components/product/ProductCard'
import { getFeaturedProducts, getPopularProducts, getAllCategories } from '../services/productService'
import { siteConfig } from '../config/siteConfig'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePageMeta } from '../hooks/usePageMeta'


function RevealSection({ children, className = '' }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`fade-in-up ${className}`}>
      {children}
    </div>
  )
}


function Home() {
  usePageMeta(
    'NRI Store — Products | Authentic NRI Health & Wellness Products',
    "Shop genuine Nature's Renaissance International (NRI) health supplements and UATD EYI personal care products. Nationwide delivery across Nigeria."
  )

  const featured = getFeaturedProducts()
  const popular = getPopularProducts()
  const categories = getAllCategories()
  return (
    <div>
      {/* Hero */}
      <section className="hero-section py-5">
        <div className="container py-5 text-center hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-5 fw-bold mb-3">NRI Wellness & Personal Care Store</h1>
          <p
            className="fs-5 mb-4"
            style={{ opacity: 0.9, maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            Genuine Nature's Renaissance International (NRI) health supplements and UATD EYI
            personal care products, made with quality herbal ingredients to support wellness and
            everyday care.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/products" className="btn btn-light btn-lg fw-semibold hover-lift">
              Shop Now
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg d-inline-flex align-items-center gap-2 hover-lift"
            >
              <FaWhatsapp /> Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why shop with us */}
      <RevealSection>
        <section className="py-5 bg-cream">
          <div className="container">
            <h2 className="section-title mb-4 text-center">Why Buy From Us?</h2>
            <div className="row g-4 text-center">
              <div className="col-6 col-md-4 col-lg">
                <FaLeaf size={32} className="text-gold mb-2" />
                <h6>Genuine Products</h6>
              </div>
              <div className="col-6 col-md-4 col-lg">
                <FaShieldAlt size={32} className="text-gold mb-2" />
                <h6>Affordable Prices</h6>
              </div>
              <div className="col-6 col-md-4 col-lg">
                <FaTruck size={32} className="text-gold mb-2" />
                <h6>Fast Delivery Nationwide</h6>
              </div>
              <div className="col-6 col-md-4 col-lg">
                <FaLeaf size={32} className="text-gold mb-2" />
                <h6>Bulk Purchase — Wholesale & Retail</h6>
              </div>
              <div className="col-6 col-md-4 col-lg">
                <FaShieldAlt size={32} className="text-gold mb-2" />
                <h6>Excellent Customer Service</h6>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Featured products */}
      {featured.length > 0 && (
        <RevealSection>
          <section className="py-5">
            <div className="container">
              <h2 className="section-title mb-4">Featured Products</h2>
              <div className="row g-4">
                {featured.map((p) => (
                  <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="hover-lift h-100">
                      <ProductCard product={p} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>
      )}

      {/* Popular products */}
      {popular.length > 0 && (
        <RevealSection>
          <section className="py-5 bg-cream">
            <div className="container">
              <h2 className="section-title mb-4">Popular Right Now</h2>
              <ProductGrid products={popular} />
            </div>
          </section>
        </RevealSection>
      )}

      {/* Categories */}
      <RevealSection>
        <section className="py-5">
          <div className="container">
            <h2 className="section-title mb-4">Shop by Category</h2>
            <div className="row g-3">
              {categories.map((cat) => (
                <div className="col-6 col-md-4 col-lg-2" key={cat.id}>
                  <Link
                    to={`/products?category=${cat.slug}`}
                    className="d-block text-center text-decoration-none border rounded p-3 h-100 hover-lift"
                    style={{ color: '#2f6b4f' }}
                  >
                    <FaLeaf className="mb-2" />
                    <div className="small fw-semibold">{cat.name}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* How ordering works */}
      <RevealSection>
        <section className="py-5 bg-cream">
          <div className="container">
            <h2 className="section-title mb-4 text-center">How Ordering Works</h2>
            <div className="row g-4 text-center">
              <div className="col-md-3">
                <div className="step-circle">1</div>
                <p className="small text-muted">Browse products and add to cart</p>
              </div>
              <div className="col-md-3">
                <div className="step-circle">2</div>
                <p className="small text-muted">Fill in your delivery details</p>
              </div>
              <div className="col-md-3">
                <div className="step-circle">3</div>
                <p className="small text-muted">Confirm your order via WhatsApp</p>
              </div>
              <div className="col-md-3">
                <div className="step-circle">4</div>
                <p className="small text-muted">Receive your delivery, nationwide</p>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* WhatsApp CTA banner */}
      <RevealSection>
        <section className="py-5" style={{ backgroundColor: '#2f6b4f' }}>
          <div className="container text-center text-white">
            <h3 className="mb-3">Prefer to Order by Chat?</h3>
            <p className="mb-4" style={{ opacity: 0.9 }}>
              Message us on WhatsApp and we'll help you place your order directly.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light btn-lg d-inline-flex align-items-center gap-2 hover-lift"
            >
              <FaWhatsapp /> Chat With Us
            </a>
          </div>
        </section>
      </RevealSection>
    </div>
  )
}

export default Home