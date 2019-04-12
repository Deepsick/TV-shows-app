import React from "react";
import PropTypes from "prop-types";

const show = props => {
  const defaultPoster =
    "https://st.kp.yandex.net/images/movies/poster_none.png";

  const description = props.show.overview
    ? props.show.overview.length >= 100
      ? props.show.overview.slice(0, 100) + "..."
      : props.show.overview
    : "There is no description for this show";
    
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
      <td className="Table__td  Table__td--description">{description}</td>
      <td className="Table__td  Table__td--episodes">
        {props.show.aired_episodes}
      </td>
      <td className="Table__td">
        {props.show.rating === 0
          ? "not rated yet"
          : props.show.rating
          ? props.show.rating.toFixed(2)
          : ""}
      </td>
      <td className="Table__td">{props.show.year}</td>
      <td className="Table__td">
        {props.show.genres ? props.show.genres.join(", ") : ""}
      </td>
      <td className="Table__td">{props.show.status}</td>
    </tr>
  );
};

show.propTypes = {
  number: PropTypes.number.isRequired,
  show: PropTypes.object.isRequired
};

export default show;
