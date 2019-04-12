import React from "react";

const tableHeader = () => (
  <thead>
    <tr className="Table__tr">
      <th className="Table__th  Table__th--number">Number</th>
      <th className="Table__th  Table__th--poster">Poster</th>
      <th className="Table__th  Table__th--title">Title</th>
      <th className="Table__th  Table__th--description">Description</th>
      <th className="Table__th">episodes</th>
      <th className="Table__th">Rating</th>
      <th className="Table__th">Year</th>
      <th className="Table__th  Table__th--genres">Genres</th>
      <th className="Table__th Table__th--status">Status</th>
    </tr>
  </thead>
);

export default tableHeader;
