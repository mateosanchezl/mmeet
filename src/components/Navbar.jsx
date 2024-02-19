import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import exampleProfilePic from "../assets/profilepic.JPG";

function Navbar() {
  const navigate = useNavigate();
  const handleClick = (to) => {
    navigate(to);
  };

  return (
    <div className="navbar bg-white">
      <div className="flex-1">
        <img src={logo} width="90" height="90" alt="MMeet Logo" />
      </div>
      <div className="flex-none gap-2">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                onClick={() => {
                  handleClick("/events");
                }}
              >
                EVENTS
              </a>
            </li>
            <li>
              <a>COMMUNITY</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Profile Picture" src={exampleProfilePic} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52"
          >
            <li>
              <a
                className="justify-between"
                onClick={() => {
                  handleClick("/profile");
                }}
              >
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a
                onClick={() => {
                  handleClick("/login");
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;