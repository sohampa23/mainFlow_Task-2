import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from '../src/Components/context/Appcontext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>  {/* ✅ Keep this */}
    <AppContextProvider>
      <App />
      <ToastContainer/>
    </AppContextProvider>
  </BrowserRouter>
)
