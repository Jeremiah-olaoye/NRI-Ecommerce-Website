// src/data/mockProducts.js
import herbalTeaImg from '../assets/herbal-tea.jpg'

export const mockProducts = [
  {
    id: 'prod-1',
    name: 'Sample Herbal Tea',
    // ...
    images: [herbalTeaImg],   // ← use the imported variable, not a string path
    // ...
  },
]