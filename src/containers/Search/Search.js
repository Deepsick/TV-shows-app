import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { searchShows, setSearchQuery } from "../../store/actions/searchActions";

import SearchTable from "../../components//SearchTable/SearchTable";

class Search extends Component {
  componentDidMount() {
    const { query } = this.props.search;
    if (query) {
      this.props.searchShows(query);
    } else {
      let queryString = this.props.location.search.split("=")[1];
      if (queryString) {
        this.props.setSearchQuery(queryString);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { query } = nextProps.search;
    if (query !== this.props.search.query && query) {
      this.props.searchShows(query);
    }
  }

  onSearchInputChangeHandler = evt => {
    evt.preventDefault();
    const search = evt.target.value;
    this.props.setSearchQuery(search);
    this.props.history.push(`/search?query=${search}`);
  };

  render() {
    return (
      <React.Fragment>
        <NavLink to="/" className="back-button">
          Back
        </NavLink>
        <SearchTable
          search={this.props.search}
          onSearchInputChangeHandler={this.onSearchInputChangeHandler}
          value={this.props.search.query}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

Search.propTypes = {
  search: PropTypes.object.isRequired,
  searchShows: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { searchShows, setSearchQuery }
)(Search);
