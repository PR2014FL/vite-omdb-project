import React from 'react'

function MovieDisplay({movie}) {
 //function to retrun loaded JSX
 const loaded = () => {
    return (
    <>
    <h1>{movie.Title}</h1>
    <h2>{movie.Genre}</h2>
    <img src={movie.Poster} alt={movie.Title} />
    <h2>{movie.Year}</h2>
    <h2>Starring: {movie.Actors}</h2>
    <h2>Plot Summary</h2>
    <h3>{movie.Plot}</h3>
    </>
  );
 }
 //function to return loading JSX
 const loading = () => {
    return <h1>No movie to display</h1>
 }
  //ternary operator to determine which situation to return
 return movie ? loaded() : loading();
}

export default MovieDisplay