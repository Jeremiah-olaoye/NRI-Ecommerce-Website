// src/utils/formatCurrency.js
export function formatCurrency(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) return '₦0'
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount)
  }