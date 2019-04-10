import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import AppTitle from "./components/AppTitle/AppTitle";
import Search from './containers/Search/Search';
import Table from "./components/Table/Table";
import Container from "./components/Container/Container";
import MainNav from  './components/MainNav/MainNav';

import "./stylesheets/App.css";
class App extends Component {
  state = {
    img: null
  };
  getPoster(showId) {
    // config for poster url 
    const config = { 
      baseUrl: "https://image.tmdb.org/t/p/", 
      posterSize: "original",
      filePath: null
    };
    // get poster id
    const apiKeyTMDB = "292dfb087089a0d1e06fb7645766b94b";
    const posterUrl = `https://api.themoviedb.org/3/tv/${showId}/images?api_key=${apiKeyTMDB}`;
    fetch(posterUrl)
      .then(data => data.json())
      .then(res => {
        config.filePath = res.posters[0].file_path;
        //create urm for img with config and img id
        const getPosterUrl = `${config.baseUrl}${config.posterSize}/${
          config.filePath
        }`;
        this.setState({ img: getPosterUrl });
        console.log(getPosterUrl);
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    // const headers = new Headers({
    //   "Content-Type": "application/json",
    //   "trakt-api-key":
    //     "a158772b33a2b5a08074d228e73c04e1e0967525fea9db31504a8df87902623a",
    //   "trakt-api-version": "2"
    // });
    // const myInit = {
    //   method: "GET",
    //   headers
    // };
    // // Retrieve tv shows with pagination and filters. Also get show id
    // const page = 1;
    // const limit = 20;
    // const showType = "trending";
    // const paginationUrl = `https://api.trakt.tv/shows/${showType}?page=${page}&limit=${limit}`;
    // const sortUrl = `https://api.trakt.tv/shows/trending?extended=full&page=${page}&limit=${limit}&ratings=70-100`;
    // fetch(sortUrl, myInit)
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //     const showId = res[0].show.ids.tmdb;
    //     this.getPoster(showId);
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Container>
              <AppTitle />
              <Route path='/' exact component={Table} />
              <Route path= "/search" component={Search} />
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
