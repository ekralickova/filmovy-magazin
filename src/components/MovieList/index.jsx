import React from 'react';
import movies from '../../movie-database.js';
import { NavLink } from 'react-router-dom';
import './style.css';

const MovieList = () => {

    return (
        <>
            <nav className="movie-list">
                {movies.map((movie) => <NavLink to={`/movies/${movie.id}`} key={movie.id}>{movie.title}</NavLink>)}
            </nav>

        </>
    )

}

export default MovieList;