import React from 'react';
import ReactDOM from 'react-dom/client';


const ItemDetail = (prop) => {
  console.log(prop.item);
  return (
    <div className="row justify-content-center text-start mb-3">
      <div className='col-md-4'>
        <img src={prop.item.pictureUrl} className="w-100" />
      </div>
      <div className='col-md-4 pt-5 border border-1 border-secondary rounded-1'>
        <h3>{prop.item.title}</h3>
        <p className='fs-5 fw-bold'>PRECIO: <span className="text-success fs-3">${prop.item.price}</span></p>
        <p><span className='text-success fw-bold'>{prop.item.Descuento}%</span> de descuento</p>
        <p><b>Descripcion del producto:</b> <br/>{prop.item.description}</p>
        <hr/>
        <p>La devolucion del producto solamente se resuelve, con ticket de compra y verificando que la prenda no tenga ningun tipo de daño. Para mas preguntes visita nuestra pagina <a href="faq">FAQ</a></p>
      </div>
    </div> 
  );
};

export default ItemDetail;