import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import BarraNav from './components/barranav/BarraNav.tsx'
import Footer from './components/footer/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BarraNav/>
      <App />
    <Footer/>
  </React.StrictMode>,
)
