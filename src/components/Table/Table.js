import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

import { fetchShows, sortShows } from "../../store/actions/showsActions";
import { setCurrentPage } from "../../store/actions/paginationActions";
import { setSortingOrder } from "../../store/actions/sortActions";
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

    const { page, itemsPerPage: limit } = this.props.pagination;
    const { category: showType } = this.props.sorting;
    this.props.fetchShows(page, limit, showType);
  }



  componentWillReceiveProps(nextProps) {
    const { page, itemsPerPage: limit } = nextProps.pagination;
    const { category: showType } = nextProps.sorting;
    if (page !== this.props.pagination.page) {
      this.props.fetchShows(page, limit, showType);
    }
  }
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
    let table = (
      <React.Fragment>
        <Pagination
          pagination={this.props.pagination}
          onClickHandler={this.onClickHandler}
        />
        <SearchField
          onChangeHandler={this.onSearchInputChangeHandler}
          onSubmitHandler={this.onSubmitSearchHandler}
          value={this.state.search}
        />
        <Filters />
        <table className="Table">
          <TableHeader onClickHandler={this.onSortHandler} />
          <tbody>
            <ShowsList shows={shows} />
          </tbody>
        </table>
      </React.Fragment>
    );
    if (loading || shows === null) {
      table = <Spinner />;
    }
    if (shows === {}) {
      table = <Redirect to={"/?page=" + (this.props.pagination.page - 1)} />;
    }
    return <div>{table}</div>;
  }
}

const mapStateToProps = state => ({
  shows: state.shows,
  pagination: state.pagination,
  sorting: state.sorting
});

export default connect(
  mapStateToProps,
  { fetchShows, sortShows, setCurrentPage, setSortingOrder, setSearchQuery }
)(withRouter(Table));
