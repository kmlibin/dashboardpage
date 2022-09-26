import React, {useState} from 'react'
import Confetti from 'react-dom-confetti'

export default function Todos({todo,  color, handleDelete}) {
const [complete, setComplete] = useState(false)

const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 4000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  }

console.log(complete)
  return (
    <div
          className="mx-1 mb-2 font-todo p-2 text-3xl font-extrabold tracking-widest rounded-lg"
          style={{
            backgroundColor: color,
            border: "2px solid rgba(201, 198, 198, 0.3)",
          }}
        >
          {todo}

          <i
            onClick={() => handleDelete(todo)}
            className="cursor-pointer text-[1.15rem] bg-red-700 border-red-700 align-center text-center h-[21px] w-[21px] border-[1px] rounded-2xl fas fa-solid fa-circle-minus absolute text-red-500 -translate-x-6 -translate-y-5 transform transition-all hover:scale-150 hover:text-red-700 hover:bg-transparent hover:border-none"
          ></i>
          <i
            onClick={() => setComplete(!complete)}
            className="cursor-pointer text-[1.15rem] bg-emerald-700 border-emerald-700 align-center text-center h-[21px] w-[21px] border-[1px] rounded-2xl fas  fa-solid fa-circle-check absolute  text-emerald-500 -translate-y-5 transform transition-all hover:scale-150 hover:text-emerald-700 hover:bg-transparent hover:border-none"
          ></i>
          <Confetti active={complete}  config={config}/>
        </div>

  )
}

