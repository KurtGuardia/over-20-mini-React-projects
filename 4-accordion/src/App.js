import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers About Login</h3>
        <section>
          {data.map((question) => {
            return (
              <SingleQuestion
                key={question.id}
                title={question.title}
                info={question.info}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
