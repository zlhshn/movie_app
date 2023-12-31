import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center sm:flex-row gap-4 p-6 cursor-pointer bg-[ rgba(34, 54, 71, 0.997)] text-[#080808] dark:text-[#acaaaa]">
      <NavLink className="p-1.5" to="/">MOVİES</NavLink>
      <NavLink className="p-1.5" to="/topmovie">TOP-MOVİES</NavLink>
      <NavLink className="p-1.5" to="/tv">TV SERİES</NavLink>
      <NavLink className="p-1.5" to="/toptv">TOP-TV SERİES</NavLink>
      <NavLink className="p-1.5" to="/popular">ALL TREND</NavLink>
    </div>
  );
};

export default Header;
