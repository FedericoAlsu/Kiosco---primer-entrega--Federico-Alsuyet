import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/input-number.css";

function onAdd(){
  let cantidad = document.querySelector(".quantity").value;
  console.log("Producto agregado: cantidad "+cantidad);
}

const ItemCount = (prop) => {
  return (
    <div className='itemCount'>
      <label className='d-block'>Camisa tiger</label>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
      <div className='number-input'>
        <button onClick={() => document.querySelector(".quantity").stepDown()} className='minus'></button>
        <input className='quantity' min="1" name="quantity" defaultValue={prop.initial} max={prop.stock} type="number"/>
        <button onClick={() => document.querySelector(".quantity").stepUp()} className='plus'></button>
      </div>
        <button className='btn btn-primary d-block mt-2 mx-auto' onClick={onAdd} >Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;