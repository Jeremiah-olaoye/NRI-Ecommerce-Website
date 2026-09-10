// src/utils/whatsappMessageBuilder.js
import { siteConfig } from '../config/siteConfig'
import { formatCurrency } from './formatCurrency'

// Builds a wa.me link with a pre-filled, URL-encoded message
function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`
}

export function productInquiryLink(product) {
  const message = `Hello, I'm interested in ${product.name} (${formatCurrency(product.price)}). Is it available?`
  return buildWhatsAppLink(message)
}

export function cartOrderLink(cartItems, total) {
  const lines = cartItems.map(
    (item) => `- ${item.name} x${item.quantity} (${formatCurrency(item.unitPrice * item.quantity)})`
  )
  const message = [
    'Hello, I would like to place an order:',
    ...lines,
    `Total: ${formatCurrency(total)}`,
  ].join('\n')
  return buildWhatsAppLink(message)
}

export function orderConfirmationLink(orderNumber) {
  const message = `Hello, I just placed order #${orderNumber} on your website. I would like to confirm my order.`
  return buildWhatsAppLink(message)
}