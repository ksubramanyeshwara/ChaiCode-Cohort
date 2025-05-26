import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const Tea = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.cost),
  ]);
};

const App = () => {
  // tagname, props, children. Children can be an array or another React element.
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Tea Variations"),
    React.createElement(Tea, { name: "Masala Tea", cost: "2000" }),
    React.createElement(Tea, { name: "Green Tea", cost: "5000" }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
