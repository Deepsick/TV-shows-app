import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { searchShows, setSearchQuery } from "../../store/actions/searchActions";

import SearchTable from "../../components//SearchTable/SearchTable";

class Search extends Component {
  state = {
    search: ""
  };

  componentDidMount() {
    let query = this.props.location.search.split("=")[1];
    if (!query) {
      query = this.props.search.query;
    }
    this.props.setSearchQuery(query);
    this.props.searchShows(query);
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
        <NavLink to="/" className="back-button">
          Back
        </NavLink>
        <SearchTable
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
