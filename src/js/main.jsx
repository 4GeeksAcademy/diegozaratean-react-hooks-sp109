import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Player from './components/Player';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Player/>
  </React.StrictMode>,
)
