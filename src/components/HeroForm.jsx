import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import exampleProfilePic from "../assets/profilepic.JPG";

function HeroForm() {
  const navigate = useNavigate();

  const handleClick = (to) => {
    navigate(to);
  };
  return (
    <div className="hero min-h-screen bg-gray-200">
      <img src={logo} alt="MMeet Logo" />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left bg-white bg-opacity-75 p-6 rounded-3xl">
          <h1 className="text-5xl font-bold">Welcome!</h1>
          <p className="py-6">
            Welcome to MMeet, a social networking platform to bring students and
            professors together.
            <br /> <br /> Please log in with your university credentials.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-gray-200"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-gray-200"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={() => {
                  handleClick("/home");
                }}
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeroForm;
