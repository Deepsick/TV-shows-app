import React from "react";


import TableHeader from "./TableHeader/TableHeader";
import ShowsList from "./ShowsList/ShowsList";

const table = (props) => {
  return (
    <table className="Table">
    <TableHeader />
    <tbody>
      <ShowsList shows={props.shows} />
    </tbody>
  </table>
  );
}
 
export default table;
