import React from 'react';
import './App.css';
import Movielist from './ccomponents/Movielist';
import MovieProvider from './context/MovieListContext';
import { Nav } from './ccomponents/Nav';
import { AddMovies } from './ccomponents/AddMovies';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <Movielist/>
        <AddMovies/>
      </div>
    </MovieProvider>
  );
}

export default App;
