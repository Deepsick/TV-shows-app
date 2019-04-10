import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

import { fetchShows, sortShows } from "../../store/actions/showsActions";
import {
  setCurrentPage,
  setCurrentLimit
} from "../../store/actions/paginationActions";
import {
  setSortingOrder,
  setSortingFilters
} from "../../store/actions/sortActions";
import { setSearchQuery } from "../../store/actions/searchActions";

import TableHeader from "./TableHeader/TableHeader";
import ShowsList from "./ShowsList/ShowsList";
import Pagination from "./Pagination/Pagination";
import Filters from "./Filters/Filters";
import SearchField from "./SearchField/SearchField";
import Spinner from "../Spinner/Spinner";

class Table extends Component {
  state = {
    search: ""
  };
  componentDidMount() {
    // const currentPage = this.props.location.search.split("=")[1];
    // this.props.setCurrentPage(currentPage);
    let { page, itemsPerPage: limit } = this.props.pagination;
    const { category: showType, ...filters } = this.props.sorting;
    let queryPage = this.props.location.search.split("=")[1];
    if (queryPage) {
      this.props.setCurrentPage(queryPage);
      page = queryPage;
    }
    this.props.fetchShows(page, limit, showType, filters);
  }

  componentWillReceiveProps(nextProps) {
    let { page, itemsPerPage: limit, amountOfPages } = nextProps.pagination;
    const { category: showType, ...filters } = nextProps.sorting;
    if (
      page !== this.props.pagination.page ||
      limit !== this.props.pagination.itemsPerPage ||
      showType !== this.props.sorting.category ||
      filters.years !== this.props.sorting.years ||
      filters.ratings !== this.props.sorting.ratings ||
      filters.status !== this.props.sorting.status
    ) {
      this.props.fetchShows(page, limit, showType, filters);
    }
    if (amountOfPages && amountOfPages < page) {
      this.props.setCurrentPage(amountOfPages);
      this.props.history.replace(`/?page=${amountOfPages}`);
    }
  }

  onFilterChangeHandler = evt => {
    evt.preventDefault();
    const { name, value } = evt.target;
    this.props.setSortingFilters(name, value);
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
    this.props.setSearchQuery(search);
    this.props.history.push(`/search?query=${search}`);
    this.setState({ search: "" });
  };

  onClickHandler = page => {
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
            onClickHandler={this.onClickHandler}
            onChangeNadler={this.onPaginationSelectChangeHandler}
            value={this.props.pagination.itemsPerPage}
          />
        </div>
        <table className="Table">
          <TableHeader onClickHandler={this.onSortHandler} />
          <tbody>
            <ShowsList shows={shows} />
          </tbody>
        </table>
      </React.Fragment>
    );
    if (loading || shows === null) {
      content = <Spinner />;
    }
    if (shows === {}) {
      content = <Redirect to={"/?page=" + (this.props.pagination.page - 1)} />;
    }
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
    setSortingOrder,
    setSearchQuery,
    setSortingFilters
  }
)(withRouter(Table));
