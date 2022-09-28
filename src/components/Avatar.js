import React from "react";

export default function Avatar({ src }) {
  return (
    <div>
      <img className="w-14 h-14 m-2 rounded" src={src} alt="user photo" />
    </div>
  );
}
