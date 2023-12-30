import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import ReactPlayer from 'react-player';

const TvDetail = () => {
  const [detail, setDetail] = useState({});
  const [video, setVideo] = useState({});
const navigate = useNavigate()
  const { id } = useParams();

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const URL = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`;

  const getDetail = async () => {
    try {
      const res = await axios(URL);
      setDetail(res.data);
      console.log(res.data);
    } catch (error) {}
  };

  const VİDEO_URL = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`;

  const getVideo = async () => {
    try {
      const { data } = await axios(VİDEO_URL);
      setVideo(data.results[0]);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    getDetail();
    getVideo();
  }, []);

  return (
    <>
    <div className="">
      <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${video?.key}`}
              className="react-player w-50 m-auto mt-10"
              controls
             
            />
    </div>
       

      <article className="flex bg-white transition hover:shadow-xl w-[60%] m-auto mt-10">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            dateTime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>number_of_seasons
</span>
            <span className="w-px flex-1 bg-gray-900/10" />
            <span>{detail.number_of_seasons
}</span>
          </time>
        </div>
        <div className="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src={`https://image.tmdb.org/t/p/w1280${detail?.poster_path}`}
            className="aspect-square h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <h3 className="font-bold uppercase text-gray-900">Overview</h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              {detail.overview}
            </p>
          
            <div className="mt-5">
               <h5 > <span className="text-red-600">Total Rate:</span> {detail?.vote_average}</h5>
            <h5> <span className="text-red-600">Total Vote: </span>{detail.vote_count}</h5>
            </div>
          </div>
         
          <div className="sm:flex sm:items-end sm:justify-end">
            <button
               onClick={() => navigate(-1)}
              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
              Go Back
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default TvDetail;