// src/pages/ProductDetails.jsx
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { getProductBySlug } from '../services/productService'
import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/formatCurrency'
import { productInquiryLink } from '../utils/whatsappMessageBuilder'
import { usePageMeta } from '../hooks/usePageMeta'
import { FaWhatsapp } from 'react-icons/fa'

function ProductDetails() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  usePageMeta(
    product ? `${product.name} | NRI Store` : 'Product Not Found | NRI Store',
    product ? product.shortDescription : 'This product could not be found.'
  )

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product not found</h2>
        <p className="text-muted">This product may have been removed or the link is incorrect.</p>
        <Link to="/products" className="btn btn-success mt-2">Back to Products</Link>
      </div>
    )
  }

  const inStock = product.stock > 0

  return (
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-md-6">
          <img
            src={product.images[0]}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="fs-4 fw-bold">{formatCurrency(product.price)}</p>
          <p className={inStock ? 'text-success' : 'text-danger'}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </p>

          <div className="d-flex align-items-center gap-2 my-3">
            <label htmlFor="qty" className="me-2 mb-0">Quantity:</label>
            <input
              id="qty"
              type="number"
              min="1"
              className="form-control"
              style={{ width: '80px' }}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            />
          </div>

          <div className="d-flex flex-wrap gap-2 mb-4">
            <button
              className="btn btn-success"
              disabled={!inStock}
              onClick={() => addItem(product, quantity)}
            >
              Add to Cart
            </button>
            <button className="btn btn-dark" disabled={!inStock}>
              Buy Now
            </button>
            <a
              href={productInquiryLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success d-flex align-items-center gap-2"
            >
              <FaWhatsapp /> Ask on WhatsApp
            </a>
          </div>

          <hr />

          <h5>Description</h5>
          <p className="text-muted">{product.description}</p>

          <h5>Ingredients</h5>
          <p className="text-muted">{product.ingredients || 'Ingredient information will be added soon.'}</p>

          <h5>Directions for Use</h5>
          <p className="text-muted">{product.directions || 'Usage instructions will be added soon.'}</p>

          <h5>Storage</h5>
          <p className="text-muted">{product.storage || 'Storage information will be added soon.'}</p>

          <h5>Warnings / Precautions</h5>
          <p className="text-muted">{product.warnings || 'Warnings and precautions will be added soon.'}</p>

          <h5>Manufacturer</h5>
          <p className="text-muted">{product.manufacturer}</p>

          {product.nafdacRegistration && (
            <>
              <h5>NAFDAC Registration</h5>
              <p className="text-muted">{product.nafdacRegistration}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails