import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import İnputSearch  from   "../components/İnputSearch"

const Main = () => {
  const [movie, setMovie] = useState([]);

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const getMovies = async () => {
    const { data } = await axios(url);
    setMovie(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (

    
    <div className="mx-auto  px-4 py-16 sm:px-6 sm:py-24  lg:px-8 bg-cover">

      <İnputSearch/>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-10 xl:gap-x-8">
        {movie.map((item) => (
          <MovieCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Main;
