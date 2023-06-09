import { useParams } from "react-router";
import { Link } from "react-router-dom";
// Here you import the PropTypes library
import PropTypes from "prop-types";
import { response } from "express";

export const MovieView = ({ movies, user }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m._id === movieId);

  const addMovieToFavorite = (movie) => {
    if(!user.FavouriteMovies.includes(movie._id))
    {fetch(`https://myflixapp-220423.herokuapp.com/user/${user.Username}/movies/${movie._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data)
  }).then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        alert("oops, seems something went wrong");
        console.log(e);
        response.status(500).send("Error" + e);
      });
    }
    else{
      console.log("movie already on Favorite list");
      alert(`${movie.Title} already on the list of favorite movies`)
    }
        };

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
        <Button className="back-button">Back</Button>
      </Link>
          <Button
          onClick={addMovieToFavorite}
          variant="secondary"
        >
          Add to your List of Favorites
        </Button>

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