import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './components/hello'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import WhiteBoard from './components/WhiteBoard'
import InventoryList from './qr/InventoryList'

ReactDOM.render(
  <div className="container-fluid">
    <InventoryList/>
  </div>,
  document.getElementById("root")
);