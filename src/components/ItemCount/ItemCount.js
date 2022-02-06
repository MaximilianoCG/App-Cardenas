import React, {useState} from 'react'
import { FaCartPlus } from "react-icons/fa";

function ItemCount(stock, initial, onAdd) {
const [counter, setCounter] = useState(initial);

function sumar() {
  setCounter(counter + 1);
}
function restar() {
  setCounter(counter - 1);
}

  return (
    <div>
      <p>{counter}</p>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <FaCartPlus onClick={onAdd}/>Agregar al carrito
    </div>
  )
};

export default ItemCount



































/* import "./CountCSS.css";
import React from "react";

const ItemCounter = () => {

  const [counter, setCounter] = React.useState(1);

  const handlerCounterUp = () => {
    setCounter(counter + 1);
  }
  const handlerCounterDown = () => {
    setCounter(counter - 1);
  }
  const reset = () => {
    setCounter(0);
  }

  return(
    <div className="ItemCounter">
      <h1>Contador</h1>
      <p>{counter}</p>
      <button className="btn Up" onClick={handlerCounterUp}>Incrementar</button>
      <button className="btn Down" onClick={handlerCounterDown}>Decrementar</button>
      <button className="btn Reset" onClick={reset}> Reset</button>
    </div>
  );
};

export default ItemCounter; */