import React, { useState, useContext } from 'react'
import Movie from './Movie';
import { MovieContext } from '../context/MovieListContext';

function Movielist() {

    const [movies, setMovies]= useContext(MovieContext);
    return (
        <div>
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price}  key={movie.id}/>
            ))}
        </div>
    )
}

export default Movielist
