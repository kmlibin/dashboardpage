import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div>
        <p> image here</p>
        {/* <Avatar src={user.photoURL} /> */}
        {/* <p>Hey {user.displayName}</p>   */}
        <p>Hey Kelli</p>
      </div>

      <nav>
        <ul>
          <li>
            {/* <NavLink exact to="/account"> */}
            <i></i>
            <span>Account Settings</span>
            <i className="fa-duotone fas fa-user-gear"></i>
            {/* </NavLink> */}
          </li>
          <li>
            <span>Logout</span>
            <i className="fa-light fas fa-right-from-bracket"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
}

//need to have a useauthcontext that stores avatar, zipcode for weather, can update password?
//It should also store the todos
