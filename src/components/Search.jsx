import { useContext } from "react";
import { useMovieContext } from "../context/MovieContext";
import { AuthContext } from "../context/AuthProvider";
import { toastWarn } from "../helper/ToastNotify";

const Search = () => {
  const { search, setSearch, getMovies } = useMovieContext();
const {currentUser} =useContext(AuthContext)

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search && currentUser) {
      getMovies(SEARCH_API);
    }else if (!currentUser) {
        toastWarn("Please log in to search a movie");
      } else {
        toastWarn("Please enter a text");
      }
  };

  return (
    <>
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search a movie..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn-danger-bordered" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
