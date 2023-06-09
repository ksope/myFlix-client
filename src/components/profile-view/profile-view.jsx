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
import DeleteUser from './delete-user';

export default function ProfileView({movies, user, token, onLoggedOut}) {
    const [user, setUser] = userState();

    

    const refreshUser = user => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    } 



    useEffect (()=> {
        refreshUser(user);

    }, [user])



  return (
    <div><UserInfo name = {user.Username} email = {user.Email} />
    <FavoriteMovies favoriteMovieList={user} />
    <UpdateUser user={user} token={token} />
    <DeleteUser user={user} token={token} />
    
    
    </div>
  )
}
