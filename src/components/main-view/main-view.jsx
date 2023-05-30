import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

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

return (
      <Row className="justify-content-md-center"> 
        {!user ? (

            <Col md={5}>
            <LoginView onLoggedIn={(user) => setUser(user)} />
            or
            <SignupView />
          </Col>
        ) : selectedBook ? (
          <Col md={8}>
            <BookView
              book={selectedBook}
              onBackClick={() => setSelectedBook(null)}
            />
          </Col>
        ) : books.length === 0 ? (
          <div>The list is empty!</div>
        ) : (
          <>
            {books.map((movie) => (
              <Col className="mb-5" key={book.id} md={3}>
              <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMpvie);
                }}
              />
            </Col>
            ))}
          </>
        )}
      </Row>
  );
};
