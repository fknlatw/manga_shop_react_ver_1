import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MangaProvider from './context/MangaContext.jsx'
import CartProvider from './context/CartContext.jsx';
import BlogProvider from './context/BlogContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <MangaProvider>
    <BlogProvider>
      <CartProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </CartProvider>
    </BlogProvider>
  </MangaProvider>
  
)
