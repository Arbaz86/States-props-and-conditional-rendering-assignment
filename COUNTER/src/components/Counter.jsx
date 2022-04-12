import { useState } from "react";

import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleChange = (value) => {
    console.log(counter);

    setCounter(counter + value);
  };

  const handledouble = (value) => {
    console.log(counter);
    setCounter(counter * value);
  };

  const condition = counter % 2 === 0;

  return (
    <>
      <h1 className="counter">
        Counter :{" "}
        <b style={{ color: condition ? "green" : "red" }}>{counter}</b>
      </h1>
      <button
        className="increment"
        onClick={() => {
          handleChange(1);
        }}
      >
        Add one
      </button>
      <button
        className="decrement"
        onClick={() => {
          handleChange(-1);
        }}
      >
        Sub one
      </button>
      <button
        className="double"
        onClick={() => {
          handledouble(2);
        }}
      >
        Double
      </button>
      <button
        className="clean"
        onClick={() => {
          handledouble("");
        }}
      >
        Clean
      </button>
      <div className="EvenOdd">
        Number is: {counter % 2 === 0 ? "Even" : "Odd"}{" "}
      </div>
    </>
  );
}

export default Counter;
