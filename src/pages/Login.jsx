import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 ">
          <form
            action=""
            className="mx-auto mb-0 mt-8 max-w-md space-y-4 border border-black p-[2rem]"
          >
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">SİGN İN</h1>
            </div>
            <div>
              <label htmlFor="email" className="">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full outline-none   p-4 text-sm  "
                 
                />
               
              </div>
            </div>
            <div>
              <label htmlFor="password" className="">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm input"
                  
                />
               
              </div>
            </div>
            <div className="flex items-center justify-between">
              <NavLink className="text-sm text-gray-500">
                Forgot Password
              </NavLink>
              <NavLink className="underline text-gray-500" href="">
                Sign up
              </NavLink>
            </div>
            <div>
              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Login
              </button>
            </div>
            <div>
              <button
                type="button"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
