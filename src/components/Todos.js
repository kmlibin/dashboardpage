import React, { useState } from "react";

//libraries
import Confetti from "react-dom-confetti";

export default function Todos({ todo, color, handleDelete }) {
  const [complete, setComplete] = useState(false);
  const [finished, setFinished] = useState(false);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 20,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 4000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return finished ? (
    <div
      className="mx-1 mb-2 mt-1 font-todo p-3 text-3xl font-medium tracking-widest rounded-lg animate-fade-in"
      style={{
        backgroundColor: "rgba(156,163,175,.5)",
        border: "2px solid rgba(201, 198, 198, 0.3)",
      }}
    >
      {todo}
      <i
        onClick={() => handleDelete(todo)}
        className="opacity-80 cursor-pointer text-[1rem] fas fa-solid fa-circle-minus absolute text-[rgba(156,163,175)] -translate-x-5 -translate-y-5 transform transition-all hover:scale-150 hover:text-red-500 hover:opacity-80"
      ></i>
      <i
        onClick={() => {
          setComplete(false);
          setFinished(false);
        }}
        className="opacity-80 cursor-pointer text-[1rem] fas fa-solid fa-rotate-right absolute text-[rgba(156,163,175)] -translate-y-5 transform transition-all hover:scale-150 hover:text-emerald-500 hover:opacity-80"
      ></i>
      <div>
        <Confetti active={complete} config={config} />
      </div>
    </div>
  ) : (
    <div
      className="mx-1 mb-2 mt-1 font-todo p-3 text-3xl font-medium tracking-widest rounded-lg animate-fade-in"
      style={{
        backgroundColor: color,
        border: "2px solid rgba(201, 198, 198, 0.3)",
      }}
    >
      {todo}
      <i
        onClick={() => handleDelete(todo)}
        className="opacity-80 cursor-pointer text-[1rem] fas fa-solid fa-circle-minus absolute text-red-500 -translate-x-5 -translate-y-5 transform transition-all hover:scale-150 hover:text-red-700"
      ></i>
      <i
        onClick={() => {
          setComplete(true);
          setFinished(true);
        }}
        className="opacity-80 cursor-pointer text-[1rem] fas  fa-solid fa-circle-check absolute text-emerald-500  -translate-y-5 transform transition-all hover:scale-150 hover:text-emerald-700"
      ></i>
      <div>
        <Confetti active={complete} config={config} />
      </div>
    </div>
  );
}
