import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const App = () => {
  // tagname, props, children. Children can be an array or another React element.
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello World and React!")
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
