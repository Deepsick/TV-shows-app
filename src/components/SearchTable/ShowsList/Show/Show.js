import React from "react";
import PropTypes from "prop-types";

const show = props => {
  const defaultPoster =
    "https://st.kp.yandex.net/images/movies/poster_none.png";
  return (
    <tr className="Table__tr">
      <td className="Table__td">{props.number}</td>
      <td className="Table__td">
        <img
          src={props.show.poster ? props.show.poster : defaultPoster}
          alt={props.show.title}
          width="200"
          height="200"
        />
      </td>
      <td className="Table__td">{props.show.title}</td>
      <td className="Table__td">{props.show.year}</td>
    </tr>
  );
};

show.propTypes = {
  number: PropTypes.number.isRequired,
  show: PropTypes.object.isRequired
};

export default show;
