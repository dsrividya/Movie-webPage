import React from "react";
import "./MovieCard.css";

const MovieCard = () => {
  return (
    <a href=" " className="movie_card">
      <img
        src="https://posterhouse.org/wp-content/uploads/2021/05/silence_of_the_lambs_0.jpg"
        alt="movie_poster"
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading"> Movie</h3>
        <div className="movie_date_rate">
          <p>10-20-2020</p>
          <p>8.0</p>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
