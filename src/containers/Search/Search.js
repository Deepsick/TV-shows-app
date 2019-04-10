import React, { Component } from "react";
import { connect } from "react-redux";

import { searchShows, setSearchQuery } from "../../store/actions/searchActions";

import Table from "../../components/Search/Table/Table";
import MainNav from '../../components/MainNav/MainNav';

class Search extends Component {
  state = {
    search: ""
  };
  componentDidMount() {
    this.props.searchShows(this.props.search.query);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.search.query !== this.props.search.query) {
      this.props.searchShows(nextProps.search.query);
    }
  }

  onSubmitSearchHandler = evt => {
    evt.preventDefault();
    const { search } = this.state;
    this.props.setSearchQuery(search);
    this.props.history.push(`/search?query=${search}`);
    this.setState({ search: "" });
  };

  onSearchInputChangeHandler = evt => {
    evt.preventDefault();
    this.setState({ search: evt.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <MainNav />
        <Table
          search={this.props.search}
          loading={this.props.loading}
          onSubmitSearchHandler={this.onSubmitSearchHandler}
          onSearchInputChangeHandler={this.onSearchInputChangeHandler}
          value={this.state.search}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
  loading: state.shows
});

export default connect(
  mapStateToProps,
  { searchShows, setSearchQuery }
)(Search);
