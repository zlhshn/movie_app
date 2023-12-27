import React from "react";
import { useNavigate, useParams } from "react-router-dom";


const MovieCard = ({ title, vote_average, overview, poster_path,id }) => {


const navigate = useNavigate()

  return (
    <>
      <div onClick={()=>navigate(`/${id}`)} >

        <a href="#" className="h-[400px] group relative block bg-black">
          <img
            alt="Developer"
            src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500"></p>
            <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                {overview}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default MovieCard;
