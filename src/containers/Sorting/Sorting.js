import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchShows } from "../../store/actions/showsActions";
import {
  setCurrentPage,
  setCurrentLimit
} from "../../store/actions/paginationActions";
import { setSortingFilters } from "../../store/actions/sortActions";

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
    let queryStringArray = this.props.location.search.split("&");

    if (queryStringArray.length !== 1) {
      for (let param of queryStringArray) {
        let queryParameter = param.replace("?", "").split("=");

        if (queryParameter[0] === "page") {
          this.props.setCurrentPage(encodeURIComponent(queryParameter[1]));
        } else if (queryParameter[0] === "limit") {
          this.props.setCurrentLimit(encodeURIComponent(queryParameter[1]));
        } else if (queryParameter[0] === "category") {
          this.props.setSortingFilters(
            queryParameter[0],
            encodeURIComponent(queryParameter[1])
          );
        } else {
          this.props.setSortingFilters(
            queryParameter[0],
            decodeURIComponent(queryParameter[1])
          );
        }
      }
    } else {
      const { page, itemsPerPage: limit } = this.props.pagination;
      const { category: showType, ...filters } = this.props.sorting;
      this.props.fetchShows(page, limit, showType, filters);
    }
  }

  componentWillReceiveProps(nextProps) {
    let { page, itemsPerPage: limit, amountOfPages } = nextProps.pagination;
    const { category: showType, ...filters } = nextProps.sorting;
    if (
      limit !== this.props.pagination.itemsPerPage ||
      page !== this.props.pagination.page ||
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
      this.props.history.replace(
        `/?page=${amountOfPages}&limit=${limit}&category=${showType}${filtersString}`
      );
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
    this.props.setCurrentLimit(value);
  };

  onSearchInputChangeHandler = evt => {
    evt.preventDefault();
    this.setState({ search: evt.target.value });
  };

  onSubmitSearchHandler = evt => {
    const { search } = this.state;
    evt.preventDefault();
    this.props.history.push(`/search?query=${search}`);
    this.setState({ search: "" });
  };

  onPageClickHandler = page => {
    this.props.setCurrentPage(page);
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
            onClickHandler={this.onPageClickHandler}
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

    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  shows: state.shows,
  pagination: state.pagination,
  sorting: state.sorting
});

Sorting.propTypes = {
  pagination: PropTypes.object.isRequired,
  shows: PropTypes.object.isRequired,
  sorting: PropTypes.object.isRequired,
  fetchShows: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setCurrentLimit: PropTypes.func.isRequired,
  setSortingFilters: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  {
    fetchShows,
    setCurrentPage,
    setCurrentLimit,
    setSortingFilters
  }
)(Sorting);
