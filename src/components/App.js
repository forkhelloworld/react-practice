import React, { Component } from "react";
import Todo from "./Todo";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Calendar from "../pages/Calendar/Calendar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
        </Switch>
        <Link to="/todo">Todo Link</Link>
        <Link to="/calendar">Calendar Link</Link>
      </BrowserRouter>
    );
  }
}

export default App;
