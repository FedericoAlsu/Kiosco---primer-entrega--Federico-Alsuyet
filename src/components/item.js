import {NavLink,Link} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/item.css";


const Item = (prop) => {
  if (typeof(prop.id) !== 'undefined') {
  return (
    <div className='item col-md-4 px-0'>
      <h4>{prop.title}</h4>
      <img src={prop.pictureUrl} className="w-75 mx-auto d-block"/>
      <p>{prop.description}</p>
      <Link to={`/item/${prop.id}`} className="btn btn-primary w-100">Ver descripcion del producto</Link>
      <p className='stock'>Stock disponible: {prop.stock}</p>
    </div>
  );
  }
};

export default Item;