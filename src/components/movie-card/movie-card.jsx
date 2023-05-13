// Here you import the PropTypes library
import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.Title}
    </div>
  );
};

// Here is where we define all the props constraints for the BookCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string
    genre: PropTypes.shape({
      name: ...
      ...
    })
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};