import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import Avatar from "./Avatar";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <div className="font-body rounded-lg w-1/5 flex flex-col absolute top-2 left-2  bg-grey-rgba shadow-standard">
      <div className="w-full flex">
        <div className="w-1/3">
          <Avatar
            src={
              user.photoURL.includes("undefined")
                ? "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png"
                : user.photoURL
            }
          />
        </div>

        <div className="cursor-pointer flex items-center w-2/3 justify-start">
          <p className="pl-2 text-2xl font-medium">
            Hey {user.displayName}
            {!toggle ? (
              <button onClick={() => setToggle(true)}>
                <i className="fa-solid fa-caret-down px-2 text-lg"></i>
              </button>
            ) : (
              <button onClick={() => setToggle(false)}>
                <i className="fa-solid fa-caret-up px-2 text-lg"></i>
              </button>
            )}
          </p>
        </div>
      </div>
      {/* conditionally show menu links */}
      {toggle && (
        <div className="w-full animate-fade-in">
          <nav className="cursor-pointer text-xs text-gray-100 list-none text-right border-t-2 p-2 w-full relative">
            <a className="animate-fade-in relative w-full text-xs h-full transform transition-all hover:text-black duration-500">
              <li className="pt-2 relative">
                {/* <NavLink exact to="/account"> */}
                Account Settings
                <i className="fa-duotone fas fa-user-gear px-2"></i>
              </li>
            </a>
            <li className="animate-fade-in pt-1 transform transition-all hover:text-black duration-500">
              <button onClick={logout}>
                Logout
                <i className="fa-light fas fa-right-from-bracket px-2"></i>
              </button>
            </li>
          </nav>
        </div>
      )}
    </div>
  );
}

//need to have a useauthcontext that stores avatar, zipcode for weather, can update password?
//It should also store the todos
