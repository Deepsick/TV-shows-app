import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchShows, sortShows } from "../../store/actions/showsActions";
import {
  setCurrentPage,
  setCurrentLimit
} from "../../store/actions/paginationActions";
import { setSortingFilters } from "../../store/actions/sortActions";
import { setSearchQuery } from "../../store/actions/searchActions";

import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";
import Table from "../../components/Table/Table";
import SearchField from "../../components/common/SearchField/SearchField";
import Spinner from "../../components/common/Spinner/Spinner";

class Sorting extends Component {
  state = {
    search: ""
  };
  componentDidMount() {
    let { page, itemsPerPage: limit } = this.props.pagination;
    let { category: showType, ...filters } = this.props.sorting;
    let queryString = this.props.location.search.split("&");

    console.log(queryString);
    if (queryString.length !== 1) {
      for (let param of queryString) {
        let queryParameter = param.replace("?", "").split("=");
        if (queryParameter[0] === "page") {
          this.props.setCurrentPage(queryParameter[1]);
          page = encodeURIComponent(queryParameter[1]);
        } else if (queryParameter[0] === "limit") {
          this.props.setCurrentLimit(queryParameter[1]);
          limit = encodeURIComponent(queryParameter[1]);
        } else if (queryParameter[0] === "category") {
          showType = encodeURIComponent(queryParameter[1]);
          this.props.setSortingFilters(
            queryParameter[0],
            showType);
        } else {
          this.props.setSortingFilters(
            queryParameter[0],
            decodeURIComponent(queryParameter[1])
          );
          filters[queryParameter[0]] = decodeURIComponent(queryParameter[1]);
        }
      }
    }
    this.props.fetchShows(page, limit, showType, filters);
  }

  componentWillReceiveProps(nextProps) {
    let { page, itemsPerPage: limit, amountOfPages } = nextProps.pagination;
    const { category: showType, ...filters } = nextProps.sorting;
    if (page !== this.props.pagination.page) {
      let filtersString = "";
      for (let filter of Object.keys(filters)) {
        filtersString += `&${filter}=${filters[filter]}`;
      }
      this.props.history.replace(
        `/?page=${page}&limit=${limit}&category=${showType}${filtersString}`
      );
      this.props.fetchShows(page, limit, showType, filters);
    }
    if (
      limit !== this.props.pagination.itemsPerPage ||
      showType !== this.props.sorting.category ||
      filters.years !== this.props.sorting.years ||
      filters.ratings !== this.props.sorting.ratings ||
      filters.status !== this.props.sorting.status
    ) {
      let filtersString = "";
      for (let filter of Object.keys(filters)) {
        filtersString += `&${filter}=${filters[filter]}`;
      }
      this.props.history.replace(
        `/?page=${page}&limit=${limit}&category=${showType}${filtersString}`
      );
      this.props.fetchShows(page, limit, showType, filters);
    }
    if (amountOfPages && amountOfPages < page) {
      this.props.setCurrentPage(amountOfPages);
      let filtersString = "";
      for (let filter of Object.keys(filters)) {
        filtersString += `&${filter}=${filters[filter]}`;
      }
      this.props.history.replace(`/?page=${amountOfPages}&limit=${limit}&category=${showType}${filtersString}`);
    }
  }

  onFilterChangeHandler = evt => {
    evt.preventDefault();
    const { name, value } = evt.target;
    this.props.setCurrentPage(1);
    this.props.setSortingFilters(name, encodeURIComponent(value));
  };

  onPaginationSelectChangeHandler = evt => {
    evt.preventDefault();
    const { value } = evt.target;
    this.setState({isUpdated: true});
    this.props.setCurrentLimit(value);
  };

  onSearchInputChangeHandler = evt => {
    evt.preventDefault();
    this.setState({ search: evt.target.value });
  };

  onSubmitSearchHandler = evt => {
    const { search } = this.state;
    evt.preventDefault();
    this.props.setSearchQuery(search);
    this.props.history.push(`/search?query=${search}`);
    this.setState({ search: "" });
  };

  onClickHandler = page => {
    this.props.setCurrentPage(page);
    this.setState({isUpdated: true});
  };

  render() {
    const { shows, loading } = this.props.shows;
    let content = (
      <React.Fragment>
        <Filters
          onFilterChangeHadnler={this.onFilterChangeHandler}
          values={this.props.sorting}
        />
        <div className="flex-wrapper">
          <SearchField
            onChangeHandler={this.onSearchInputChangeHandler}
            onSubmitHandler={this.onSubmitSearchHandler}
            value={this.state.search}
          />
          <Pagination
            pagination={this.props.pagination}
            onClickHandler={this.onClickHandler}
            onChangeNadler={this.onPaginationSelectChangeHandler}
            value={this.props.pagination.itemsPerPage}
          />
        </div>
        <Table shows={shows} />
      </React.Fragment>
    );
    if (loading || shows === null) {
      content = <Spinner />;
    }
    // if (Array.isArray(shows) && shows.length === 0) {
    //   console.log('hey');
    //   content = <p>No mathing shows found</p>
    // }
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  shows: state.shows,
  pagination: state.pagination,
  sorting: state.sorting
});

export default connect(
  mapStateToProps,
  {
    fetchShows,
    sortShows,
    setCurrentPage,
    setCurrentLimit,
    setSearchQuery,
    setSortingFilters
  }
)(withRouter(Sorting));
