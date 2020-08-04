import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#8855bb").all(10));
  const [percentage, setPercentage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const perc = parseInt(percentage);
    try {
      let colors = new Values(color).all(perc);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#8855bb"
            className={`${error ? "error" : null}`}
          />
          <p>Tint and shade scale by:</p>
          <input
            type="number"
            value={percentage}
            placeholder="10"
            className={`${error ? "error" : null} perc`}
            onChange={(e) => setPercentage(e.target.value)}
          />
          <p>%</p>
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              length={list.length}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
