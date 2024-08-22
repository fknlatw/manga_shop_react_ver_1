import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MangaProvider from './context/MangaContext.jsx'
import CartProvider from './context/CartContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <MangaProvider>
    <CartProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </CartProvider>
  </MangaProvider>
  
)
