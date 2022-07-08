
import ReactDOM from 'react-dom/client';
import promise from 'promise';
import Item from "./item.js";

const ItemList = (prop) => {
  return (
    <div className='row justify-content-center py-3'>
      {prop.item.map(a => <Item id={a.id} title={a.title} pictureUrl={a.pictureUrl} stock={a.stock} price={a.price} description={a.description}/>)}
    </div>
  );
};

export default ItemList;