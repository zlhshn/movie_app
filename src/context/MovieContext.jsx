import { createContext, useContext, useState } from "react";
import axios from "axios";


const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};



const MovieContextProvider = ({ children }) => {

 const [movies,setMovies]   =useState([])
 const [loading,setLoading] =useState(false)
 const [search, setSearch] = useState("");



 



const getMovies = async (url) => {
setLoading(true)
    try {
        const { data } = await axios(url);
    setMovies(data.results);
    console.log(data.results);
    } catch (error) {
        console.log(error);
    } finally{
        setLoading(false)
    }
    
  };



  return <MovieContext.Provider value={{movies,loading,getMovies,search,setSearch}}>{children}</MovieContext.Provider>;
};

export default MovieContextProvider;
