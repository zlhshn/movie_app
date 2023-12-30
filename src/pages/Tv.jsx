
import { useMovieContext } from '../context/MovieContext';
import { useEffect } from 'react';
import Search from '../components/Search';
import TvCard from '../components/TvCard';

const Tv = () => {
    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
    const POPULAR_URL = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`;
    const { movies, loading ,getMovies} = useMovieContext();

useEffect(() => {
 
getMovies(POPULAR_URL)

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
            movies.map((movie) => <TvCard key={movie.id} {...movie} />)
          )}
        </div>
      </div>
    );
}

export default Tv