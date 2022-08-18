import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import miMenu from './data/Platillos.js';
import Menu from './components/Menu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Menu
      name={ miMenu[0].name }
    />
  </React.StrictMode>
)
