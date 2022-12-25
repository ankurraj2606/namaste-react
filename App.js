/**
      const element = document.createElement("h1");
      element.innerHTML = "Hi ! We are starting";
      document.getElementById("root").appendChild(element);
      **/

//const element = React.createElement("h1", {}, "Hi Guys");

const heading1 = React.createElement("h1", { class: "heading1" }, "Hi Guys");
const heading2 = React.createElement("h2", { class: "heading2" }, "Hello");

const container = React.createElement("div", { class: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
