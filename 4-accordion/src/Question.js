import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive((active) => !active);
  };

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={clickHandler}>
          {!active ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      <p>{active && info}</p>
    </div>
  );
};

export default Question;
