import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageTransition from './components/PageTransition.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageTransition />
  </StrictMode>,
)
