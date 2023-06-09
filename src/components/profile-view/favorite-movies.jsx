import React from 'react';
import { Link } from 'react-router-dom';

export default function FavoriteMovies({user, token}) {


  const favoriteMovieList = movies.filter(m => user.FavoriteMovies.includes(m._id));

        const removeFav = (id) => {
            fetch(`https://myflixapp-220423.herokuapp.com/user/${user.Username}/movies/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data)
  }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(`${data.Title} has been deleted from the favorite list`);
      })
      .catch((e) => {
        alert("oops, seems something went wrong");
        console.log(e);
      });

        };
  return (
    <div>
        <h2>Favourite Movies</h2>
        {favoriteMovieList.map((movies)=> {
            return(
                <div key={movies._id}>
                    <img src={movies.ImagePath} />
                    <Link to={`/movies/${encodeURIComponent(movies._id)}`}>
                        <h4>{movies.Title}</h4>
                    </Link>
                    <button variant="secondary" onClick={()=> removeFav(movies._id)}>Remove from favorite list</button>

                </div>
            )
        })}
    </div>
  )
}
