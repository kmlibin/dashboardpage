import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

import { useSignup } from "../../hooks/useSignup";

export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState('');
  const [thumbError, setThumbError] = useState(null);
  const [zip, setZip] = useState("");
  const { signup, isLoading, error } = useSignup();


  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    signup(email, password, displayName, zip, thumbnail);
  };

  
  
  const handleFileChange = (e) => {
    console.log(e)
    setThumbnail(null);
    let selected = e.target.files[0];

    if (!selected.type.includes("image")) {
      setThumbError("Selected file must be an image");
      return;
    }
    if (selected.size > 10000) {
      setThumbError("Image must be less than 100kb");
      return;
    }
    setThumbError(null);
    setThumbnail(selected);
  };

  //   .auth-form {
  //     max-width: 360px;
  //     margin: 60px auto;
  //     padding: 40px;
  //     border: 1px solid #ddd;
  //     box-shadow: 3px 3px 5px rgba(0,0,0,0.05);
  //     background: #fff;
  //   }

  return (
    <form
      className="flex flex-col max-w-md my-60 mx-auto"
      onSubmit={handleSubmit}
    >
      <h2>Sign Up</h2>
      <label>
        <p>email:</p>
        <input
          className="inputs"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <label>
        <p>password:</p>
        <input
          className="inputs"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </label>
      <label>
        <p>display name:</p>
        <input
          className="inputs"
          type="text"
          value={displayName}
          onChange={(e) => {
            setDisplayName(e.target.value);
          }}
          required
        />
      </label>
      <label>
        <p>weather zipcode:</p>
        <input
          className="inputs"
          value={zip}
          type="text"
          pattern="[0-9]*"
          onChange={(e) => {
            setZip(e.target.value);
          }}
          required
        />
      </label>
      <label>
        <p>profile thumbnail:</p>
        <input className="inputs" type="file" onChange={handleFileChange} />
        {thumbError && <div className="error">{thumbError}</div>}
      </label>
      {!isLoading && <button>Sign Up</button>}
      {isLoading && <button disabled>Loading...</button>}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
