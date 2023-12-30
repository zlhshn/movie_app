
import { useMovieContext } from '../context/MovieContext';
import { useEffect } from 'react';
import Search from '../components/Search';
import TvCard from '../components/TvCard';

const TopTv = () => {
    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
    const TOP_URL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&page=2`;
    const { movies, loading ,getMovies} = useMovieContext();

useEffect(() => {
 
getMovies(TOP_URL)

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

export default TopTv