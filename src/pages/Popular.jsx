import React, {  useEffect } from 'react';
import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import TvCard from '../components/TvCard';  // Import TvCard component
import Search from '../components/Search';

const Popular = () => {
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const POPULAR_URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  const { movies, loading, getMovies } = useMovieContext();

  useEffect(() => {
    getMovies(POPULAR_URL);
  }, []);

  return (
    <div>
      <Search />
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          movies.map((movie) =>
            movie.media_type === 'tv' ? (  
              <TvCard key={movie.id} {...movie} />
            ) : (
              <MovieCard key={movie.id} {...movie} />
            )
          )
        )}
      </div>
    </div>
  );
};

export default Popular;