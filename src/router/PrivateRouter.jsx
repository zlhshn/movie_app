import React, {  useState } from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
const PrivateRouter = () => {
 const {user} = useContext(AuthContext)

  return (
    user ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  )
  ) 
};

export default PrivateRouter;
