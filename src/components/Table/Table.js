import React from "react";
import PropTypes from "prop-types";

import TableHeader from "./TableHeader/TableHeader";
import ShowsList from "./ShowsList/ShowsList";

const table = props => (
  <table className="Table">
    <TableHeader />
    <tbody>
      <ShowsList shows={props.shows} />
    </tbody>
  </table>
);

table.propTypes = {
  shows: PropTypes.array
};

export default table;
