import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hi Ankur</h1>;

const myNumber = 10;

const HeaderComponent = () => {
  return (
    <div>
      <h1>Namaste React Functional Components</h1>
      <h2>Hi All</h2>

      {/* Calling Functional components */}
      <Content />

      {/* Calling React Elelment */}
      {heading}

      {/* Calling Functional components */}
      {Content()}

      {myNumber}
    </div>
  );
};

const Content = function () {
  return (
    <div>
      <h1>Content</h1>
      <h2>Book</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);

/**
 * If we are writing return statement in a single-line, we can skip paranthesis but paranthesis is mandatory if we are writing return
 * statement in multiple lines.
 *
 * We can skip return if we want if we are using arrow function in a functional component.
 * We can write any JS inside {} in a React Component. Like {console.log("Hi")}
 *
 * Whenever we add any JS inside JSX, it sanitizes it and prevents us from malicious attacks.
 */
