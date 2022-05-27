import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
import Loader from "../Loader/Loader";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  }
  const menu = (
    <>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/portfolio">Portfolio</CustomLink>
      <CustomLink to="/blogs">Blogs</CustomLink>
      {user ? (
        <>
          <CustomLink to="/dashboard">Dashboard</CustomLink>

          <div class="dropdown dropdown-end mr-1">
            <label tabindex="0">
              {user?.photoURL ? (
                <img
                  className="rounded-full w-12 h-12 object-cover border-2 border-primary cursor-pointer"
                  src={user?.photoURL}
                  alt="avatar"
                />
              ) : (
                <img
                  className="rounded-full w-12 h-12 object-cover border-2 border-primary cursor-pointer"
                  src="https://i.ibb.co/D4NDdRH/585e4bf3cb11b227491c339a.png"
                  alt="avatar"
                />
              )}
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 w-52"
            >
              {user?.photoURL ? (
                <img
                  className="w-28 h-28 object-cover cursor-pointer rounded-full mx-auto border-8 border-primary my-2"
                  src={user?.photoURL}
                  alt="avatar"
                />
              ) : (
                <img
                  className="w-28 h-28 object-cover cursor-pointer rounded-full mx-auto border-8 border-primary my-2"
                  src="https://i.ibb.co/D4NDdRH/585e4bf3cb11b227491c339a.png"
                  alt="avatar"
                />
              )}
              <h4 className="justify-center w-full text-lg font-bold ">
                {user?.displayName ? user.displayName : "Not Found"}
              </h4>
              <h4 className="justify-center w-full mb-2 text-md">
                {user?.email ? user.email : "Not Found"}
              </h4>
              <li>
                <button
                  className="btn btn-primary text-white w-full"
                  onClick={() => {
                    signOut(auth);
                    localStorage.removeItem("accessToken");
                  }}
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
          <button
            className="btn btn-ghost"
            onClick={() => {
              signOut(auth);
              localStorage.removeItem("accessToken");
            }}
          >
            Log Out
          </button>
        </>
      ) : (
        <CustomLink to="/login">Login</CustomLink>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto lg:px-20 justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          TOPTOOL
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
    </div>
  );
};

export default Header;
