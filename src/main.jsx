import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import { LanguageProvider } from './context/LanguageContext';
import { BrowserRouter } from 'react-router'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</LanguageProvider>,
)
