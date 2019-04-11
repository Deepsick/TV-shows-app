import React from "react";
import { withRouter } from "react-router-dom";

import TableHeader from "./TableHeader/TableHeader";
import ShowList from "./ShowsList/ShowsList";
import Spinner from "../common/Spinner/Spinner";
import SearchField from "../common/SearchField/SearchField";

const searchTable = props => {
  const { searching, searchShows } = props.search;
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

  if (props.search.query === "") {
    table = (
      <React.Fragment>
        <p>'Search something...'</p>
      </React.Fragment>
    );
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

export default withRouter(searchTable);
