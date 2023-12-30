import React, { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { createUser, signUpProvider } = useContext(AuthContext);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName } = userInfo;
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, displayName);
  };

  return (
    <div className="login">
      <div className="flex justify-center">
        <div className="overflow-hidden flex-1 h-screen justify-center items-center dark:bg-gray-dark-main">
          <div className={`form-container mt-[5vh] w-[380px] h-[580px] `}>
            <form onSubmit={handleSubmit}>
              <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
                Sign Up
              </h2>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="firstName"
                  className="peer"
                  type="text"
                  required
                  placeholder=" "
                  onChange={handleChange}
                />
                <label htmlFor="floating_text">First Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="lastName"
                  className="peer"
                  type="text"
                  required
                  placeholder=" "
                  onChange={handleChange}
                />
                <label htmlFor="floating_text">Last Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="email"
                  className="peer"
                  type="email"
                  placeholder=" "
                  required
                  onChange={handleChange}
                />
                <label htmlFor="floating_email">Email</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="password"
                  className="peer"
                  type="password"
                  placeholder=" "
                  required
                  onChange={handleChange}
                />
                <label htmlFor="floating_password">Password</label>
              </div>
              <button className="btn-danger" type="submit">
                Register
              </button>
              <button
                className="flex justify-between text-center items-center btn-danger"
                type="button"
                onClick={signUpProvider}
              >
                Continue with Google
                <GoogleIcon color="currentColor" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
