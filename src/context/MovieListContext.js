import React, { useState, createContext } from 'react'

export const MovieContext = createContext()


function MovieProvider(props) {

    const  [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "$10",
            id : 23124
        },
        {
            name: "Game of Thrones",
            price: "$11",
            id : 23122
        },
        {
            name: "Avatar",
            price: "$19",
            id : 255124
        },
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieProvider
