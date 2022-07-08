import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/cartWidget.css";
import carrito from "./img/carrito.png";

const CartWidget = () => {
  return (
    <button type='button' className='btn btn-carrito'>
      <img src={carrito}/> 
    </button> 
  );
};

export default CartWidget;