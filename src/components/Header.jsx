import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center gap-4 p-6 cursor-pointer">
      <NavLink to="/">MOVİES</NavLink>
      <NavLink to="/topmovie">TOP-MOVİES</NavLink>
      <NavLink to="/tv">TV SERİES</NavLink>
      <NavLink to="/toptv">TOP-TV</NavLink>
      <NavLink to="/popular">ALL TREND</NavLink>
    </div>
  );
};

export default Header;
