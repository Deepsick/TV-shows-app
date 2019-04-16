import React from "react";
import PropTypes from "prop-types";

import TableHeader from "./TableHeader/TableHeader";
import ShowList from "./ShowsList/ShowsList";
import Spinner from "../common/Spinner/Spinner";
import SearchField from "../common/SearchField/SearchField";
import { isNull } from "util";

const searchTable = props => {
  const { searching, searchShows, query } = props.search;
  let table = (
    <React.Fragment>
      <table className="Table">
        <TableHeader />
        <tbody>
          <ShowList shows={searchShows} />
        </tbody>
      </table>
    </React.Fragment>
  );
  if (searching || searchShows === null) {
    table = <Spinner />;
  }

  if (query === "") {
    table = (
      <React.Fragment>
        <p>Search something...</p>
      </React.Fragment>
    );
  }

  if (!isNull(searchShows) && searchShows.length === 0) {
    table =  <React.Fragment>
    <p>Sorry, no matches were found for your query...</p>
  </React.Fragment>
  }

  return (
    <div>
      <SearchField
        onChangeHandler={props.onSearchInputChangeHandler}
        onSubmitHandler={props.onSubmitSearchHandler}
        value={props.value}
      />
      {table}
    </div>
  );
};

searchTable.propTypes = {
  search: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  onSubmitSearchHandler: PropTypes.func.isRequired,
  onSearchInputChangeHandler: PropTypes.func.isRequired
};

export default searchTable;
