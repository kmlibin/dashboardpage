import React, { useState } from "react";
import { Link } from "react-router-dom";

//hooks
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [thumbError, setThumbError] = useState(null);
  const [zip, setZip] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    signup(email, password, displayName, zip, thumbnail);
  };

  const handleFileChange = (e) => {
    console.log(e);
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

  return (
    <div className="rounded-lg h-full max-w-[65%] mt-[10rem] mx-auto text-gray-700 text-body bg-gradient-to-br from-blue-400 to-purple-800 ">
      <form
        className="flex flex-col w-[65%] h-full rounded m-auto bg-[rgba(156,163,175,.4)] py-14"
        onSubmit={handleSubmit}
      >
        <h2 className="my-4 text-4xl">Sign Up</h2>
        <label for="email">
          <p className="text-xl">email:</p>
          <input
            className="inputs"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>
        <label for="password">
          <p className="text-xl">password:</p>
          <input
            className="inputs"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label for="display name">
          <p className="text-xl">display name:</p>
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
        <label for="zipcode">
          <p className="text-xl">weather zipcode:</p>
          <input
            className="inputs"
            value={zip}
            type="text"
            pattern="^\d{5}$"
            onChange={(e) => {
              setZip(e.target.value);
            }}
            required
          />
        </label>
        <label for="profile picture">
          <p className="text-xl">profile thumbnail:</p>
          <input
            className="inputs bg-white"
            type="file"
            onChange={handleFileChange}
          />
          {thumbError && <div className="error">{thumbError}</div>}
        </label>
        {!isPending && (
          <button className="bg-gray-300 w-1/4 p-3 mx-auto shadow-standard rounded-lg m-4 active:shadow-light active:translate-y-1 transition-all ease-in duration-100 hover:shadow-[inset_0_0_10px_white]">
            Sign Up
          </button>
        )}
        {isPending && (
          <button
            className="bg-gray-300 w-1/4 p-3 mx-auto shadow-standard rounded-lg m-4"
            disabled
          >
            Loading...
          </button>
        )}
        {error && <div className="error">{error}</div>}
        <p className="mt-5">
          Already have an account?{" "}
          <Link to="/login">
            <span className="font-semibold border-b border-blue-300 hover:text-blue-300">
              Login here!
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
}
