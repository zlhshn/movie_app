import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const FEATURED_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;


const MovieContextProvider = ({ children }) => {

 const [movies,setMovies]   =useState([])
 const [loading,setLoading] =useState(false)

 useEffect(() => {
  getMovies(FEATURED_URL)

 }, [])
 



const getMovies = async (url) => {
setLoading(true)
    try {
        const { data } = await axios(url);
    setMovies(data.results);
    } catch (error) {
        console.log(error);
    } finally{
        setLoading(false)
    }
    
  };



  return <MovieContext.Provider value={{movies,loading,getMovies}}>{children}</MovieContext.Provider>;
};

export default MovieContextProvider;
