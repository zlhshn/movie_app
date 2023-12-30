
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
const PrivateRouter = () => {
 const {currentUser} = useContext(AuthContext)

  return (
    currentUser ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace/>
  )
  ) 
};

export default PrivateRouter;
