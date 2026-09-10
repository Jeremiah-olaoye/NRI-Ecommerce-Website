// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import OrderConfirmation from '../pages/OrderConfirmation'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Faq from '../pages/Faq'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Terms from '../pages/Terms'
import ReturnsPolicy from '../pages/ReturnsPolicy'
import Disclaimer from '../pages/Disclaimer'
import Wishlist from '../pages/Wishlist'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation/:orderNumber" element={<OrderConfirmation />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/returns-policy" element={<ReturnsPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes