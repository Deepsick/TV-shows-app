import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/store";

import AppTitle from "./components/AppTitle/AppTitle";
import Container from "./components/Container/Container";
import Search from "./containers/Search/Search";
import Sorting from "./containers/Sorting/Sorting";

import "./App.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Container>
              <AppTitle />
              <Route path="/" exact component={Sorting} />
              <Route path="/search" component={Search} />
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
