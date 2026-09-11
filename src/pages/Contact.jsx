// src/pages/Contact.jsx
import { useState } from 'react'
import { siteConfig } from '../config/siteConfig'
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
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

function Contact() {
  usePageMeta(
    'Contact Us | NRI Store',
    'Get in touch with NRI Store via WhatsApp, phone, or email. Based in Minna, Niger State, delivering nationwide.'
  )

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          subject: `New message from ${form.name} — NRI Store Contact Form`,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or reach us on WhatsApp.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again or reach us on WhatsApp.')
    } finally {
      setSending(false)
    }
  }

  const contactCards = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: 'Chat with us instantly',
      href: `https://wa.me/${siteConfig.whatsappNumber}`,
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: siteConfig.whatsappNumber || 'Phone number TBD',
      href: `tel:${siteConfig.whatsappNumber}`,
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: siteConfig.businessEmail || 'Email TBD',
      href: `mailto:${siteConfig.businessEmail}`,
    },
  ]

  return (
    <div>
      {/* Hero banner */}
      <section className="hero-section py-5">
        <div className="container py-4 text-center hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-5 fw-bold mb-3">Get In Touch</h1>
          <p className="fs-5" style={{ opacity: 0.9, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            We're here to help with orders, questions, and everything in between.
          </p>
        </div>
      </section>

      {/* Contact method cards */}
      <RevealSection>
        <section className="py-5 bg-cream">
          <div className="container">
            <div className="row g-4">
              {contactCards.map(({ icon: Icon, label, value, href }, i) => (
                <div className="col-md-4" key={i}>
                  <a
                    href={href}
                    target={label === 'WhatsApp' ? '_blank' : undefined}
                    rel={label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    className="d-block text-center p-4 rounded-4 h-100 hover-lift text-decoration-none"
                    style={{ backgroundColor: '#fff', border: '1px solid #e5e0d3' }}
                  >
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{ width: '64px', height: '64px', backgroundColor: '#2f6b4f' }}
                    >
                      <Icon size={26} color="#fff" />
                    </div>
                    <h6 className="mb-1" style={{ color: '#2b2b28' }}>{label}</h6>
                    <p className="small text-muted mb-0">{value}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Form + details */}
      <RevealSection>
        <section className="py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-5">
                <h2 className="section-title mb-4">Visit / Reach Us</h2>

                <p className="d-flex align-items-center gap-2 text-muted mb-3">
                  <FaMapMarkerAlt className="text-gold" />
                  Minna, Niger State, Nigeria
                </p>

                <p className="d-flex align-items-start gap-2 text-muted mb-4">
                  <FaClock className="text-gold mt-1" />
                  <span>Available 24/7</span>
                </p>

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

              <div className="col-md-7">
                <h2 className="section-title mb-4">Send Us a Message</h2>

                {submitted ? (
                  <div className="alert alert-success">
                    Thanks for reaching out! We'll get back to you soon. For a faster response,
                    feel free to message us directly on WhatsApp.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-4 rounded-4" style={{ backgroundColor: '#f5f1e8' }}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea
                        name="message"
                        className="form-control"
                        rows="4"
                        required
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-success hover-lift" disabled={sending}>
                      {sending ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* WhatsApp CTA */}
      <RevealSection>
        <section className="py-5" style={{ backgroundColor: '#2f6b4f' }}>
          <div className="container text-center text-white">
            <h3 className="mb-3">Prefer a Quick Chat?</h3>
            <p className="mb-4" style={{ opacity: 0.9 }}>
              Message us on WhatsApp for the fastest response.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light btn-lg d-inline-flex align-items-center gap-2 hover-lift mx-auto"
              style={{ width: 'fit-content' }}
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </section>
      </RevealSection>
    </div>
  )
}

export default Contact