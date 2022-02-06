import * as React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export default function MediaCard() {

  function onAdd(){
    console.log("Se agrego un producto al carrito")
  }
  return (
      <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
  );
}

