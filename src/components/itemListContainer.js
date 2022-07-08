import ReactDOM from 'react-dom/client';
import React, {useState, useEffect} from "react";
import ItemCount from "./itemCount.js";
import ItemList from "./itemList.js";
import prod1 from "./img/camisa1.png";
import prod2 from "./img/pantalon1.png";
import prod3 from "./img/medias1.png";

const ItemListContainer = (prop) => {
  let item;
  
  const [items,setItems] = useState(0);
  useEffect(() => {
    new Promise(function(resolve) {
        setTimeout(function() {
          let item = [
          {"id":0,"title":"Camisa tigre","price":3300,"description":"Camisa tigre Tamaño L blanco/negro","pictureUrl":prod1,stock:12}
          ,{"id":1,"title":"Pantalones vaquero","price":4300,"description":"Pantalon vaquero oscuro","pictureUrl":prod2,stock:5}
          ,{"id":2,"title":"Medias ","price":1200,"description":"Medias deportivas","pictureUrl":prod3,stock:12}];
          setItems(item);
        }, 3000);
    });
  });
if (items !== 0) {
  return (
    <>
      <ItemList item={items}/>
    </>  
  );
}
};

export default ItemListContainer;