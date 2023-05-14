import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LogoutProvider } from './hooks/loginData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LogoutProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </LogoutProvider>
)
