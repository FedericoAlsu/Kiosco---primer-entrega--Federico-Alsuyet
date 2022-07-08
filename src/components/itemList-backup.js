import React from 'react';
import ReactDOM from 'react-dom/client';
import "./input-number.css";

const items = {"id":1,"title":"Televisor","price":3300,"description":"TV LCD 22"};
/*const lista = new Promise((resolve,reject)=>{
  resolve(true);
})
lista.then(items => {
throw new Error("error!");
setTimeout(() => {
  console.log("Respuesta"+items);
}, "2000")
},err =>{
  console.log("Rechazado"+err);
});*/

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {productos:{
      id: "",
      title: "",
      description: "",
      price: ""
    }};
  }

componentDidMount() {
  const fetchUserEmail = async () => {
    const response = await fetch("/emails");
    const { productos } = await response.json();
    this.setState({
      productos
    });
  };
  fetchUserEmail();
}


const ItemList = (prop) => {
  return (
    {this.state.productos.map(mapping => (
        <div>id: {mapping.id}, title: {mapping.title}, description: {mapping.description}, price: {mapping.price}</div>
    ))}
  );
};

export default ItemList;