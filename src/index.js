import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";


ReactDOM.render(
  <HashRouter>
    <MantineProvider>
      <App />
    </MantineProvider>
  </HashRouter>,
  document.getElementById("root")
);
