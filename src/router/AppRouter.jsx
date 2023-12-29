import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import PrivateRouter from "./PrivateRouter";
import AuthProvider from "../context/AuthProvider";

const AppRouter = () => {

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="" element={<PrivateRouter />}>
          <Route path="/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default AppRouter;
