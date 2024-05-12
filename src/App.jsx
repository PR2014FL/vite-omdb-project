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
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
    
  }

  return (
    <div className="App">
      <Form/>
      <MovieDisplay/>
    </div>
  )
}

export default App
