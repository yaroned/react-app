import React from "react";
import ReactDOM from "react-dom";

const element = <h1> Hello Yaron </h1>; //invoking React.createElement therefore we import React
console.log(element);
//first argument is the argument you want to redner
//2nd argument => where in the real DOM you want to reder it => root is the container for the react app
ReactDOM.render(element, document.getElementById("root"));
