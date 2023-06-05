import React, {userState, userEffect, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './profile-view.scss';
import UserInfo from './user-info';
import FavoriteMovies from './favorite-movies';
import UpdateUser from './update-user';
import { MovieCard } from '../movie-card/movie-card';

export default function ProfileView({movies, onUpdatedUserInfo}) {
    const [user, setUser] = userState();

    const favoriteMovieList = movies.filter(m => user.FavoriteMovies.includes(m._id));

    const getUser = ()=> {

    };

    const handleSubmit = (e) => {

    };

    const handleUpdate = (e) => {

    };

    const removeFav = (id) => {

    };

    useEffect (()=> {

    }, [])



  return (
    <div><UserInfo name = {user.Username} email = {user.email} />
    <FavoriteMovies favoriteMovieList={favoriteMovieList} />
    <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
    
    
    </div>
  )
}
