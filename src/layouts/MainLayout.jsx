// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingWhatsAppButton from '../components/layout/FloatingWhatsAppButton'
import PageLoader from '../components/common/PageLoader'

function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <PageLoader />
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}

export default MainLayout