import { StrictMode } from "react";
import ReactDOM from "react-dom";
import KgGraph from "./KgGraph";
const rootElement = document.getElementById("root");


ReactDOM.render(
  <StrictMode>
    <KgGraph />
  </StrictMode>,
  rootElement
);
