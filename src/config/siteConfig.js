// src/config/siteConfig.js
export const siteConfig = {
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '08066879635',
  businessName: import.meta.env.VITE_BUSINESS_NAME || 'NRI Retail Store',
  businessEmail: import.meta.env.VITE_BUSINESS_EMAIL || 'giftjeremiaholaoye@gmail.com',
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY || '',
  currency: 'NGN',
  currencySymbol: '₦',
}