import "uikit/dist/css/uikit.min.css";
import uikit from "uikit/dist/js/uikit.min";

window.UIkit = uikit;
import "./scss/style.scss";
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

ReactDOM.render(<Layout />, document.getElementById("root"));
