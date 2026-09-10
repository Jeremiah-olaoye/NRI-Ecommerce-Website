// src/pages/About.jsx
import { FaLeaf, FaShieldAlt, FaTruck, FaBoxes, FaHeadset, FaMapMarkerAlt } from 'react-icons/fa'
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

const whyPoints = [
  { icon: FaLeaf, label: 'Genuine Products' },
  { icon: FaShieldAlt, label: 'Affordable Prices' },
  { icon: FaTruck, label: 'Fast Delivery Nationwide' },
  { icon: FaBoxes, label: 'Bulk Purchase — Wholesale & Retail' },
  { icon: FaHeadset, label: 'Excellent Customer Service' },
]

function About() {
  usePageMeta(
    'About Us | NRI Store',
    "Learn about NRI Wellness & Personal Care Store — an independent distributor of genuine Nature's Renaissance International products, based in Minna, Niger State."
  )

  return (
    <div>
      {/* Hero banner */}
      <section className="hero-section py-5">
        <div className="container py-4 text-center hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-5 fw-bold mb-3">About Us</h1>
          <p className="fs-5" style={{ opacity: 0.9, maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}>
            Welcome to NRI Wellness & Personal Care Store
          </p>
        </div>
      </section>

      {/* Business description */}
      <RevealSection>
        <section className="py-5">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 className="section-title mb-3">Who We Are</h2>
            <p className="text-muted fs-5">
              We are committed to providing genuine Nature's Renaissance International (NRI)
              health supplements and UATD EYI personal care products. Our products are
              manufactured with quality herbal ingredients to support wellness and everyday
              personal care.
            </p>
            <p className="text-muted">
              This website is operated by us as an independent distributor/seller — it is not the
              official corporate website of Nature's Renaissance International Limited.
            </p>
          </div>
        </section>
      </RevealSection>

      {/* Why buy from us - colorful cards */}
      <RevealSection>
        <section className="py-5 bg-cream">
          <div className="container">
            <h2 className="section-title mb-4 text-center">Why Buy From Us?</h2>
            <div className="row g-4">
              {whyPoints.map(({ icon: Icon, label }, i) => (
                <div className="col-6 col-md-4 col-lg" key={i}>
                  <div
                    className="text-center p-4 rounded-4 h-100 hover-lift"
                    style={{ backgroundColor: '#fff', border: '1px solid #e5e0d3' }}
                  >
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{ width: '64px', height: '64px', backgroundColor: '#2f6b4f' }}
                    >
                      <Icon size={26} color="#fff" />
                    </div>
                    <h6 className="mb-0">{label}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Video placeholder */}
      <RevealSection>
        <section className="py-5">
          <div className="container text-center" style={{ maxWidth: '800px' }}>
            <h2 className="section-title mb-4">See Us In Action</h2>
            <div
              className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm"
              style={{ border: '2px dashed #c99a3a' }}
            >
              {/* TODO: replace this placeholder with an embedded video (YouTube/Facebook) once provided */}
              <div className="d-flex align-items-center justify-content-center bg-cream">
                <p className="text-muted mb-0">🎥 Store/product video coming soon</p>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Location + map */}
      <RevealSection>
        <section className="py-5 bg-cream">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-md-5">
                <h2 className="section-title mb-3">Find Us</h2>
                <p className="d-flex align-items-center gap-2 text-muted fs-5">
                  <FaMapMarkerAlt className="text-gold" />
                  Minna, Niger State, Nigeria
                </p>
                <p className="text-muted">
                  We deliver nationwide through trusted transport companies and dispatch riders,
                  wherever you are in Nigeria.
                </p>
              </div>
              <div className="col-md-7">
                {/* TODO: replace src below with your real Google Maps embed link for the exact address */}
                <div className="ratio ratio-4x3 rounded-4 overflow-hidden shadow-sm">
                  <iframe
                    title="Store location"
                    src="https://www.google.com/maps?q=Minna,Niger%20State,Nigeria&output=embed"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Authenticity + contact CTA */}
      <RevealSection>
        <section className="py-5" style={{ backgroundColor: '#2f6b4f' }}>
          <div className="container text-center text-white" style={{ maxWidth: '700px' }}>
            <h3 className="mb-3">100% Authentic Products</h3>
            <p className="mb-4" style={{ opacity: 0.9 }}>
              We only sell genuine NRI and UATD EYI products. If you have any questions about a
              product's authenticity, reach out to us before purchasing.
            </p>
            <a href="/contact" className="btn btn-light btn-lg hover-lift">
              Contact Us
            </a>
          </div>
        </section>
      </RevealSection>
    </div>
  )
}

export default About