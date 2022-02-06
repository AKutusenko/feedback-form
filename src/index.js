import React from "react";
import ReactDOM from "react-dom";
import "modern-normalize/modern-normalize.css";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
h6,
p 
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  display: block;
}

*{
  font-family: Apercu Arabic Pro;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
