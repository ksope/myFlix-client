import { useParams } from "react-router";
import { Link } from "react-router-dom";
// Here you import the PropTypes library
import PropTypes from "prop-types";

export const MovieView = ({ movies}) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m._id === movieId);

  return (
    <div>
      <div>
        <img className="w-100" src={movie.ImagePath} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <Link to={'/'}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};


// Here is where we define all the props constraints for the MovieView
MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string,
    Description: PropTypes.string,
    Director: PropTypes.shape({
      Name: PropTypes.string,
      Bio: PropTypes.string,
      Birth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
      ])
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string
    })
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};