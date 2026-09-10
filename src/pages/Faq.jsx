// src/pages/Faq.jsx
import { usePageMeta } from '../hooks/usePageMeta'

const faqs = [
  { q: 'How do I place an order?', a: 'Browse our products, add items to your cart, then check out. You can confirm your order directly via WhatsApp.' },
  { q: 'Do you deliver outside Lagos?', a: 'Yes, we deliver nationwide across Nigeria.' },
  { q: 'How long does delivery take?', a: 'Delivery times vary by location. We\'ll confirm an estimated delivery window when you place your order.' },
  { q: 'What payment methods do you accept?', a: 'Currently, orders are confirmed and arranged via WhatsApp. Online payment options are being added.' },
  { q: 'Are the products authentic?', a: 'Yes, we only sell genuine NRI products.' },
  { q: 'How can I verify a product?', a: 'Feel free to contact us via WhatsApp with any questions about a specific product before purchasing.' },
  { q: 'Can I order through WhatsApp?', a: 'Yes — WhatsApp ordering is our primary and easiest ordering method.' },
  { q: 'Can I return an order?', a: 'See our Returns Policy page for details.' },
  { q: 'How should the products be stored?', a: 'Storage instructions vary by product and are listed on each product\'s detail page where available.' },
]

function Faq() {
  usePageMeta('FAQ | NRI Store', 'Answers to common questions about ordering, delivery, and our products.')

  return (
    <div className="container py-5" style={{ maxWidth: '800px' }}>
      <h1 className="mb-4">Frequently Asked Questions</h1>
      <div className="accordion" id="faqAccordion">
        {faqs.map((item, i) => (
          <div className="accordion-item" key={i}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faq-${i}`}
              >
                {item.q}
              </button>
            </h2>
            <div id={`faq-${i}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body text-muted">{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq