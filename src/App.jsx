import { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
 
  const apiKey = import.meta.env.VITE_API_KEY;

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to get movies
  const getMovie = async(searchTerm) => {
    //Make fetch request and store the response
    //putting it a try catch 
    try {
       const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
       const data = await response.json();
      //  console.log(data); 
    setMovie(data);
    } catch (e) {
      console.error(e);
    }
  } 

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form movieSearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  )
}

export default App
