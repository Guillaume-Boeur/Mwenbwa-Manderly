/* eslint-disable no-unused-vars */
/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ReactDOM from "react-dom";

import FormComponent from "./components/login";

import HelloWorld from "./components/hello";

ReactDOM.render(<FormComponent />, document.querySelector("#app"));
// ReactDOM.render(<HelloWorld />, document.getElementById("#app"));
