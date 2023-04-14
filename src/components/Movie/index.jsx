import React from 'react';
import movies from '../../movie-database.js';
import { useParams } from 'react-router-dom';

const Movie = () => {

    const { id } = useParams();
    const movie = movies.find((m) => Number(m.id) === Number(id));

    return (
        <>
            <div className="movie">
                <img src={movie.poster} alt={movie.title} />

                <h2>{movie.title}</h2>
                <div>Rok: {movie.year}</div>
                <div>Zanr: {movie.genre}</div>
                <div>Hodnoceni: {movie.rating}</div>
                <div>Reziser: {movie.director}</div>
                <div>Hraji : {movie.cast.map((e) => 
                <div key={e.name} >{e.name} as {e.as} </div>)}</div>

                <p>
                    {movie.storyline}
                </p>

            </div>

        </>
    )

}

export default Movie;