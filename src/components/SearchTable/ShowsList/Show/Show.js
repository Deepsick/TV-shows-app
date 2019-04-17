import React from "react";
import PropTypes from "prop-types";

const show = props => {
  const { show, number } = props;
  const defaultPoster =
    "https://st.kp.yandex.net/images/movies/poster_none.png";
  return (
    <tr className="Table__tr">
      <td className="Table__td">{number}</td>
      <td className="Table__td">
        <img
          src={show.poster ? show.poster : defaultPoster}
          alt={show.title}
          width="200"
          height="200"
        />
      </td>
      <td className="Table__td">{show.title}</td>
      <td className="Table__td">{show.year}</td>
    </tr>
  );
};

show.propTypes = {
  number: PropTypes.number.isRequired,
  show: PropTypes.object.isRequired
};

export default show;
