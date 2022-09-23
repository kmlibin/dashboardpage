import React, { useState } from "react";
import { NavLink } from "react-router-dom";


import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import Avatar from "./Avatar";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { user } = useAuthContext()
  const {logout} = useLogout()
  // shadow-[inset_0_0_8px_rgba(31,41,55,.75)]

  return (
 
  <div className="font-body rounded-lg w-1/5 flex flex-col absolute top-2 left-2 shadow-standard active:shadow-light active:translate-y-1">
    <div className="w-full flex  ">
       <div className="w-1/3">
        <Avatar src={user.photoURL.includes('undefined')? 'https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png' : user.photoURL} />
       </div>

        <div className="cursor-pointer flex items-center text-white w-2/3 justify-center">
           
          <p className="pl-2 text-2xl">
          Hey {user.displayName}
          
            {/* change icon depending on whether menu is open or closed */}
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
          {/* ransition: transform .3s ease-in-out; */}
</div></div>
    {/* conditionally show menu links */}
        {toggle && (
      // "flex flex-col items-start left-12 ml-9 top-12 absolute bg-grey text-white px-3 pb-3"   
      <div className ="w-full animate-fade-in">
            <nav className = "cursor-pointer text-xs text-white list-none text-right border-t-2 p-2 w-full relative">
             <a className="animate-fade-in relative w-full text-xs w-full h-full transform transition-all hover:text-black duration-500">
              <li className= "pt-2 relative">
                {/* <NavLink exact to="/account"> */}
                Account Settings
                <i className="fa-duotone fas fa-user-gear px-2"></i>
                {/* </NavLink> */}
              </li></a>
              <li className="animate-fade-in pt-1 transform transition-all hover:text-black duration-500"><button onClick = {logout}>
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
