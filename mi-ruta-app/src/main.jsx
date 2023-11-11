import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Miruta from './MiRuta.css'

import FormularioRegistro from './FormularioRegistro.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Header
    Titulo = "Inicia sesion"/>
    <FormularioRegistro/>
  
  </React.StrictMode>,
)
