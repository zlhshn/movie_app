import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import İnputSearch from "../components/İnputSearch";
import { AuthContext } from "../context/AuthProvider";

const Main = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const {user,setUser} =useContext(AuthContext)

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const getMovies = async () => {
    const { data } = await axios(url);
    setMovie(data.results);
  };

  const getSearch = async () => {
    try {
      const res = await axios(URL);
      setMovie(res.data.results);
      setSearch("")
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [user]);

  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`;

  return (
    <div className="mx-auto  px-4 py-16 sm:px-6 sm:py-24  lg:px-8 bg-cover">
      <İnputSearch
        search={search}
        setSearch={setSearch}
        getSearch={getSearch}
      />
      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-10 xl:gap-x-8">
        {movie.map((item) => (
          <MovieCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Main;
