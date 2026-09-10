// src/components/layout
import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '../../config/siteConfig'

function FloatingWhatsAppButton() {
  const message = encodeURIComponent('Hello, I have a question about your products.')
  const link = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`

  return (
    <a href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-success rounded-circle position-fixed d-flex align-items-center justify-content-center"
      style={{ bottom: '24px', right: '24px', width: '56px', height: '56px', zIndex: 1000 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}

export default FloatingWhatsAppButton