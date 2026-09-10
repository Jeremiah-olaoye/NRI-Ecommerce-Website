// src/pages/Cart.jsx
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/formatCurrency'
import { usePageMeta } from '../hooks/usePageMeta'

function Cart() {
  usePageMeta('Your Cart | NRI Store', 'Review the items in your cart before checkout.')

  const { cart, removeItem, updateQuantity, totalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Your cart is empty</h2>
        <p className="text-muted">Looks like you haven't added anything yet.</p>
        <Link to="/products" className="btn btn-success mt-2">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">Your Cart</h1>

      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.productId}>
                <td className="d-flex align-items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    className="rounded"
                  />
                  <Link to={`/products/${item.slug}`} className="text-decoration-none">
                    {item.name}
                  </Link>
                </td>
                <td>{formatCurrency(item.unitPrice)}</td>
                <td style={{ width: '100px' }}>
                  <input
                    type="number"
                    min="1"
                    className="form-control"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.productId, Number(e.target.value))}
                  />
                </td>
                <td>{formatCurrency(item.unitPrice * item.quantity)}</td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeItem(item.productId)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <Link to="/products" className="btn btn-outline-secondary">
          Continue Shopping
        </Link>

        <div className="text-end">
          <p className="fs-4 fw-bold mb-2">Total: {formatCurrency(totalPrice)}</p>
          <Link to="/checkout" className="btn btn-success btn-lg">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart