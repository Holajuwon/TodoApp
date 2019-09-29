import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Todo from "./components/Todo";
import Header from "./components/Header";
import Likes from "./components/likes";
import Error from "./components/ErrorPage";

const routes = (
  <BrowserRouter>
    <div>
      <NavLink to="/">Todo</NavLink>
      <Switch>
        <Route path="/" component={Todo} exact={true} />
        <Route path="/App" component={App} />
        <Route path="/Likes" component={Likes} />
        <Route path="/Header" component={Header} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
