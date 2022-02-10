import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// react-router-dom

// components
import Root from "Root";
import App from "components/App.js";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Root>,
  document.querySelector("#root")
);
