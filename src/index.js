import React from "react";
import ReactDOM from "react-dom";

// My first component
function HelloWorld() {
  return <h1>Za Wardo!!</h1>; // JSX ELEMENT --> h1
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));