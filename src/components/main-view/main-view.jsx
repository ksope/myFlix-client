import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);

   useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://myflixapp-220423.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((movies) => {
       setMovies(movies);
      });
  }, [token]);

  if (!user) {
    return (
      <>
      <LoginView
        onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }}
      />
      or
      <SignupView />
      </>
      
    );
  }

  if (selectedMovie) {
    let similarMovies = movies.filter((movie) =>
        movie.Genres.includes(selectedMovie.Genres[0]) && movie._id !== selectedMovie._id);

    return (
      <>
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
      <br />
      <h2>Similar Movies</h2>
      {similarMovies.length > 0 && (
        <div>
                {similarMovies.map((movie) => (
                    <MovieCard
                      key={movie._id}
                      movie={movie}
                      onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                      }}
                    />
                ))}
                </div>
            )}
      </>

    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
      <button onClick={() => { setUser(null); setToken(null); }}>Logout</button>
    </div>
  );
};
