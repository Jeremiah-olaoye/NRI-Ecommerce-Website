// src/pages/Checkout.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/formatCurrency'
import { cartOrderLink } from '../utils/whatsappMessageBuilder'
import { usePageMeta } from '../hooks/usePageMeta'

const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT - Abuja', 'Gombe',
  'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos',
  'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto',
  'Taraba', 'Yobe', 'Zamfara',
]

function generateOrderNumber() {
  return Math.floor(10000 + Math.random() * 90000).toString()
}

function Checkout() {
  usePageMeta('Checkout | NRI Store', 'Complete your order and confirm via WhatsApp.')

  const { cart, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    state: '',
    city: '',
    instructions: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const orderNumber = generateOrderNumber()

    const order = {
      orderNumber,
      customer: form,
      items: cart,
      total: totalPrice,
      paymentMethod: 'whatsapp',
      createdAt: new Date().toISOString(),
    }

    localStorage.setItem(`order_${orderNumber}`, JSON.stringify(order))

    window.open(cartOrderLink(cart, totalPrice), '_blank')

    clearCart()
    navigate(`/order-confirmation/${orderNumber}`)
  }

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Your cart is empty</h2>
        <p className="text-muted">Add some products before checking out.</p>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">Checkout</h1>

      <div className="row g-5">
        <div className="col-md-7">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-control"
                required
                value={form.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                required
                placeholder="080XXXXXXXX"
                value={form.phone}
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
              <label className="form-label">Delivery Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                required
                value={form.address}
                onChange={handleChange}
              />
            </div>

            <div className="row">
              <div className="col-6 mb-3">
                <label className="form-label">State</label>
                <select
                  name="state"
                  className="form-select"
                  required
                  value={form.state}
                  onChange={handleChange}
                >
                  <option value="">Select state</option>
                  {NIGERIAN_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="col-6 mb-3">
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  required
                  value={form.city}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Delivery Instructions (optional)</label>
              <textarea
                name="instructions"
                className="form-control"
                rows="2"
                value={form.instructions}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-success btn-lg w-100">
              Confirm Order via WhatsApp
            </button>
            <p className="text-muted small mt-2">
              You'll be redirected to WhatsApp to confirm your order with us directly.
            </p>
          </form>
        </div>

        <div className="col-md-5">
          <div className="border rounded p-4">
            <h5 className="mb-3">Order Summary</h5>
            {cart.map((item) => (
              <div key={item.productId} className="d-flex justify-content-between small mb-2">
                <span>{item.name} × {item.quantity}</span>
                <span>{formatCurrency(item.unitPrice * item.quantity)}</span>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout