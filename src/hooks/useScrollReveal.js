// src/hooks/useScrollReveal.js
import { useEffect, useRef } from 'react'

// Adds the "visible" class to an element once it scrolls into view,
// triggering the fade-in-up CSS animation defined in index.css
export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}