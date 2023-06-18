import React from "react";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap/InputGroup";
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";

export default function SearchMovie({ movies }) {
    const [searchMovie, setSearchmovie] = useState("");

    return (
        <div className="Search">
            <Form>
                <InputGroup className="my-3">
                    <Form.Control
                        onChange={(e) => {
                            setSearchmovie(e.target.value);
                        }}
                        placeholder="Search for a movie"
                    />
                </InputGroup>
            </Form>
            {movies
                .filter((movie) => {
                    return searchMovie.toLowerCase() === ""
                        ? movie
                        : movie.Title.toLowerCase().includes(searchMovie);
                })
                .map((movie) => {
                    return (
                        <Col
                            className="mb-4"
                            key={movie._id}
                            xl={2}
                            lg={3}
                            md={4}
                            xs={6}
                        >
                            <MovieCard movie={movie} />
                        </Col>
                    );
                })}
        </div>
    );
}
