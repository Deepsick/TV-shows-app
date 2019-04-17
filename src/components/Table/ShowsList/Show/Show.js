import React from "react";
import PropTypes from "prop-types";

const show = props => {
  const { show, number } = props;
  const defaultPoster =
    "https://st.kp.yandex.net/images/movies/poster_none.png";

  const description = show.overview
    ? show.overview.length >= 100
      ? show.overview.slice(0, 100) + "..."
      : show.overview
    : "There is no description for this show";

  return (
    <tr className="Table__tr">
      <td className="Table__td">{number}</td>
      <td className="Table__td">
        <a href={show.trailer} target="_blank" rel="noopener noreferrer">
          <img
            src={show.poster ? show.poster : defaultPoster}
            alt={show.title}
            width="200"
            height="200"
          />
        </a>
      </td>
      <td className="Table__td">{show.title}</td>
      <td className="Table__td  Table__td--description">{description}</td>
      <td className="Table__td  Table__td--episodes">{show.aired_episodes}</td>
      <td className="Table__td  Table__td--rating">
        {show.rating === 0
          ? "not rated yet"
          : show.rating
          ? show.rating.toFixed(2)
          : ""}
      </td>
      <td className="Table__td">{show.year}</td>
      <td className="Table__td  Table__td--genres">
        {show.genres ? show.genres.join(", ") : ""}
      </td>
      <td className="Table__td">{show.status}</td>
    </tr>
  );
};

show.propTypes = {
  number: PropTypes.number.isRequired,
  show: PropTypes.object.isRequired
};

export default show;
