import React, { useState } from "react";
import { NavLink } from "react-router-dom";


import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import Avatar from "./Avatar";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { user } = useAuthContext()
  const {logout} = useLogout()
  

  return (
 
  <div className="font-body  bg-black opacity-75 border-gray-300 border-2 rounded w-1/5 flex flex-col absolute top-2 left-2">
    <div className="w-full flex">
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
          
</div></div>
    {/* conditionally show menu links */}
        {toggle && (
      // "flex flex-col items-start left-12 ml-9 top-12 absolute bg-grey text-white px-3 pb-3"   
      <div className ="w-full">
            <nav className = "text-xs text-white list-none text-right border-t-2 p-2">
             
              <li className= "pt-2"><a>
                {/* <NavLink exact to="/account"> */}
                Account Settings
                <i className="fa-duotone fas fa-user-gear px-2"></i>
                {/* </NavLink> */}
              </a></li>
              <li className="pt-1"><button onClick = {logout}>
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
