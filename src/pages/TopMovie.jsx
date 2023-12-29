import React, { useContext } from 'react'
import { useMovieContext } from '../context/MovieContext';
import { useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import Search from '../components/Search'

const TopMovie = () => {
    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
    const TOPMOVİE_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    const { movies, loading ,getMovies} = useMovieContext();

useEffect(() => {
 
getMovies(TOPMOVİE_URL)

}, [])




    return (
      <div>
      <Search/>
        <div className="flex flex-wrap justify-center">
          {loading ? (
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
          )}
        </div>
      </div>
    );
}

export default TopMovie