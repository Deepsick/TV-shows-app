import React from "react";
import { Redirect, withRouter } from "react-router-dom";

import TableHeader from "./TableHeader/TableHeader";
import ShowList from "./ShowsList/ShowsList";
import Spinner from "../../Spinner/Spinner";
import SearchField from "../../Table/SearchField/SearchField";

const table = props => {
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

export default withRouter(table);
