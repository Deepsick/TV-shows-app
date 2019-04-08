import React from "react";

const tableHeader = () => {
  return (
    <thead>
      <tr className="Table__tr">
        <th className="Table__th  ">Number</th>
        <th className="Table__th">Poster</th>
        <th className="Table__th">Title</th>
        <th className="Table__th  Table__th--description">Description</th>
        <th className="Table__th ">episodes</th>
        <th className="Table__th  Table__th--active">Rating</th>
        <th className="Table__th">Year</th>
        <th className="Table__th  Table__th--genres">Genres</th>
        <th className="Table__th ">Status</th>
      </tr>
    </thead>
  );
};

export default tableHeader;
