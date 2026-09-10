// src/hooks/usePageMeta.js
import { useEffect } from 'react'

// Sets the browser tab title and the page's meta description for SEO/social sharing.
export function usePageMeta(title, description) {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}