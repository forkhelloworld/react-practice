import React from "react";
import ReactDOM from "react-dom/client";
import Lamp from "./Lamp";
import Dialog from "./Dialog";
import Button from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Lamp />
    <Dialog name={"Ilon"} />
    <Button></Button>
  </React.StrictMode>
);
