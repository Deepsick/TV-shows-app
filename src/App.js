import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/store";

import asyncComponent from "./hoc/asyncComponent/asyncComponent";
import AppTitle from "./components/AppTitle/AppTitle";
import Container from "./components/Container/Container";

import "./App.css";

const asyncSorting = asyncComponent(() => {
  return import("./containers/Sorting/Sorting");
});

const asyncSearch = asyncComponent(() => {
  return import("./containers/Search/Search");
});
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Container>
              <AppTitle />
              <Route path="/" exact component={asyncSorting} />
              <Route path="/search" component={asyncSearch} />
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
