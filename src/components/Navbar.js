import React, { useState } from "react";
import { NavLink } from "react-router-dom";


import { useAuthContext } from "../hooks/useAuthContext";
import Avatar from "./Avatar";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { user } = useAuthContext()
  

  return (
    // <div className="font-body flex">
      <div className=" font-body flex w-full ">
        
         <Avatar src={user.photoURL != null? user.photoURL : <i class="fa-light fas fa-user"></i>} />

        <div className="px-4 cursor-pointer flex items-start flex-col">
          <p>
          Hey {user.displayName}
            {/* change icon depending on whether menu is open or closed */}
            {!toggle ? (
              <button onClick={() => setToggle(true)}>
                <i className="fa-solid fa-caret-down px-2"></i>
              </button>
            ) : (
              <button onClick={() => setToggle(false)}>
                <i className="fa-solid fa-caret-up px-2"></i>
              </button>
            )}
          </p>
        
    {/* conditionally show menu links */}
        {toggle && (
          
            <nav className = "flex flex-col items-start">
              <a>
                {/* <NavLink exact to="/account"> */}
                Account Settings
                <i className="fa-duotone fas fa-user-gear px-2"></i>
                {/* </NavLink> */}
              </a>
              <a>
                Logout
                <i className="fa-light fas fa-right-from-bracket px-2"></i>
              </a>
            </nav>
         
        )}
        </div>
      </div>
    // </div>
  );
}

//need to have a useauthcontext that stores avatar, zipcode for weather, can update password?
//It should also store the todos
