"use client";
import React, { useState } from "react";

const Post = () => {
  const [counter, setCounter] = useState(0);

  const add = (event) => {
    event.preventDefault();
    setCounter(counter + 1);
  };

  const deduct = (event) => {
    event.preventDefault();
    setCounter(counter - 1);
  };

  return (
    <main>
      <h1>Counter</h1>
      <form>
        <center>
          <button onClick={deduct}>-</button>
          <span
            style={{
              color: "lime",
              fontSize: "64px",
              marginRight: "25px",
              marginLeft: "25px",
            }}
          >
            {counter}
          </span>
          <button onClick={add}>+</button>
        </center>
      </form>
    </main>
  );
};

export default Post;
