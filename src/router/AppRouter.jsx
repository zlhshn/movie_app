import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Movies";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import PrivateRouter from "./PrivateRouter";
import AuthProvider from "../context/AuthProvider";
import Header from "../components/Header";
import Popular from "../pages/Popular";
import TopMovie from "../pages/TopMovie";
import Tv from "../pages/Tv";
import Movies from "../pages/Movies";
import TopTv from "../pages/TopTv";

const AppRouter = () => {

  return (
    <AuthProvider>
      <Navbar />
      <Header/>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="" element={<PrivateRouter />}>
          <Route path="/:id" element={<MovieDetail />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/topmovie" element={<TopMovie/>} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/toptv" element={<TopTv/>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default AppRouter;
