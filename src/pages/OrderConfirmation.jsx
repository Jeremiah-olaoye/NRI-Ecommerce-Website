// src/pages/OrderConfirmation.jsx
import { useParams, Link } from 'react-router-dom'
import { formatCurrency } from '../utils/formatCurrency'
import { orderConfirmationLink } from '../utils/whatsappMessageBuilder'
import { FaWhatsapp } from 'react-icons/fa'

function OrderConfirmation() {
  const { orderNumber } = useParams()
  const saved = localStorage.getItem(`order_${orderNumber}`)
  const order = saved ? JSON.parse(saved) : null

  if (!order) {
    return (
      <div className="container py-5 text-center">
        <h2>Order not found</h2>
        <Link to="/products" className="btn btn-success mt-2">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <div className="container py-5 text-center">
      <h1 className="text-success mb-3">Order Confirmed 🎉</h1>
      <p className="text-muted">Order #{order.orderNumber}</p>

      <div className="border rounded p-4 mx-auto text-start" style={{ maxWidth: '500px' }}>
        <p><strong>Name:</strong> {order.customer.fullName}</p>
        <p><strong>Delivery Address:</strong> {order.customer.address}, {order.customer.city}, {order.customer.state}</p>
        <p><strong>Payment Status:</strong> Pending confirmation via WhatsApp</p>

        <hr />
        {order.items.map((item) => (
          <div key={item.productId} className="d-flex justify-content-between small mb-1">
            <span>{item.name} × {item.quantity}</span>
            <span>{formatCurrency(item.unitPrice * item.quantity)}</span>
          </div>
        ))}
        <hr />
        <div className="d-flex justify-content-between fw-bold">
          <span>Total</span>
          <span>{formatCurrency(order.total)}</span>
        </div>
      </div>

      <a
        href={orderConfirmationLink(order.orderNumber)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success btn-lg mt-4 d-inline-flex align-items-center gap-2"
      >
        <FaWhatsapp /> Contact Us on WhatsApp
      </a>

      <div className="mt-3">
        <Link to="/products" className="text-decoration-none">Continue Shopping</Link>
      </div>
    </div>
  )
}

export default OrderConfirmation