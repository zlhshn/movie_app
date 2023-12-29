
import React, { useContext, useState,useEffect } from "react";
import MovieCard from "../components/MovieCard";

import { AuthContext } from "../context/AuthProvider";
import { useMovieContext } from "../context/MovieContext";
import Search from "../components/Search";

const Movies = () => {

const {getMovies} = useMovieContext()
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const FEATURED_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  

  const { movies, loading} = useMovieContext();

  useEffect(() => {
    getMovies(FEATURED_URL)
  
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
};

export default Movies;
