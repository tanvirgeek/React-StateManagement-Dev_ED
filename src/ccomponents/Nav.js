import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieListContext'

export const Nav = () => {

    const [movies,setMovies] = useContext(MovieContext)

    return (
        <div>
            <h1>This is the Nav. Number of movies {movies.length}</h1>
        </div>
    )
}
