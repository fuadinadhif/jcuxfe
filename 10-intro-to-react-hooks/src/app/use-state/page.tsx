"use client";

// useState hooks berfungsi untuk membuat sebuah state di dalam aplikasi kita
// state sebuah variable spesial. dia spesial karena setiap nilai variable-nya berubah, maka komponennya akan dirender ulang

import { useState } from "react";

export default function UseState() {
  // const counterState = useState(0); // return [state_variable, set_state_function]
  // const counter = counterState[0]; // state variable
  // const setCounter = counterState[1]; // set state function

  const [counter, setCounter] = useState(0);

  return (
    <main>
      <h1>Use State Hook</h1>
      <span>{counter}</span>
      <button
        onClick={() => {
          if (counter < 15) {
            setCounter(counter + 1);
          }
        }}
      >
        Increment (+)
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement (-)
      </button>
    </main>
  );
}
