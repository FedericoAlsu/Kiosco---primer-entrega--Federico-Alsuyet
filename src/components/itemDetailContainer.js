import ReactDOM from 'react-dom/client';
import {useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import ItemDetail from "./itemDetail.js";
import prod1 from "./img/camisa1.png";
import prod2 from "./img/pantalon1.png";
import prod3 from "./img/medias1.png";

  let item;
  const getItem = 
new Promise((resolve) => {
    setTimeout(function() {
      resolve([
          {"id":0,"title":"Camisa tigre","price":3300,"description":"Camisa tigre Tamaño L blanco/negro","pictureUrl":prod1,stock:12}
          ,{"id":1,"title":"Pantalones vaquero","price":4300,"description":"Pantalon vaquero oscuro","pictureUrl":prod2,stock:5}
          ,{"id":2,"title":"Medias ","price":1200,"description":"Medias deportivas","pictureUrl":prod3,stock:12}]);
    }, 2000);
});
const ItemDetailContainer = (prop) => {
  const { itemId } = useParams();
  const [items,setItems] = useState(0);
  useEffect(() => {
    getItem
    .then(function(response){
      setItems(response);
    });
  });
  if(items != 0){
    return (
      <>
        <ItemDetail item={items[itemId]}/>
      </> 
    );
  }

};

export default ItemDetailContainer;