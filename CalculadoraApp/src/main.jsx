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
      img={ miMenu[0].img   }
      precio={miMenu[0].precio}
      descripcion={miMenu[0].descripcion}
    />
    <Menu
      name={ miMenu[1].name }
      img={ miMenu[1].img   }
      precio={miMenu[1].precio}
      descripcion={miMenu[1].descripcion}
    />
  </React.StrictMode>
)
