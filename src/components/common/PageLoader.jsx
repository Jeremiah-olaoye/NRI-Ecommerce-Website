// src/components/common/PageLoader.jsx
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/logo.jpg'

function PageLoader() {
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [location.pathname])

  if (!loading) return null

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: '#fdfbf6', zIndex: 2000 }}
    >
      <div className="text-center">
        <div className="loader-ring-wrap mb-3">
          <div className="loader-ring"></div>
          <img src={logo} alt="Loading" className="loader-logo" />
        </div>
        <p className="loader-text mb-0">NRI Store — Products</p>
      </div>
    </div>
  )
}

export default PageLoader