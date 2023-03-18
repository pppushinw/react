import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";

import App from "../src/components/app/app";
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./themes/default";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
