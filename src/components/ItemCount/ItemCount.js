import "./CountCSS.css";
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

export default ItemCounter;