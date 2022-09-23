import React, { useState } from "react";

//still delete/mark as complete for todos
export default function Searchbar({ handleRight, handleLeft, color}) {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
console.log(color)
  const addTodo = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
      
    }
  };

  const handleDelete = (text) => {
    const newTodos = todos.filter(todo => todo !== text)
    setTodos(newTodos)
  }

  const handleComplete = (text) => {
    const newTodos = todos.filter(todo => todo !== text)
    setTodos(newTodos)
  }
  return (
    <div className="flex w-full justify-center h-full">
      <button className="text-white w-1/5 pr-5 text-3xl" onClick={handleLeft}>
        <i className="fas fa-solid fa-backward-step shadow-standard rounded-lg p-4 active:shadow-light active:translate-y-1 transition-all ease-in duration-100 hover:shadow-[inset_0_0_10px_white] active:shadow-light active:translate-y-1"></i>
      </button>
      <div className="w-2/3 flex flex-col items-center bg-grey-rgba rounded animate-fade-in">
        <h2 className="text-5xl p-5">What are your goals for today?</h2>
        <form className="p-5 w-full">
          <input
            className=" w-3/5 rounded-lg border p-2 text-grey-darkest bg-white"
            type="text"
            name="todo"
            value={todo}
            // ref={placeholder}
            placeholder="what do you need to do today?"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="bg-white ml-1 py-2 px-2 rounded-lg shadow-[inset_0_0_0_black] active:shadow-[inset_400px_0_0_0_black] transition ease-in duration-1" onClick={addTodo}>Add</button>
        </form>
        {/* <i className="fa-light fas fa-down-to-dotted-line"></i> */}
        <div className="flex w-full justify-start tracking-wider flex-wrap">
          {todos.map((todo, index) => (
            <div
              className="mx-1 mb-2 font-todo p-2 text-3xl"
              style={{
                backgroundColor: {color},
                border: "2px solid rgba(201, 198, 198, 0.3)",
              }}
              key={index}
            >
              {todo}

              <i
                onClick={() => handleDelete(todo)}
                className="cursor-pointer text-[1.15rem] fas fa-solid fa-circle-minus absolute text-red-500 -translate-x-6 -translate-y-4 transform transition-all hover:scale-150 hover:text-red-700"
              ></i>
              <i
                onClick={() => handleComplete(todo)}
                className="cursor-pointer text-[1.15rem] fas fa-solid fa-circle-check absolute  text-emerald-500 -translate-y-4 transform transition-all hover:scale-150 hover:text-emerald-700"
              ></i>
            </div>
          ))}
        </div>
      </div>
      <button className="text-white text-3xl w-1/5 pl-5 " onClick={handleRight}>
        <i className="fas fa-solid fa-forward-step shadow-standard p-4 rounded-lg transition-all ease-in duration-100 hover:shadow-[inset_0_0_10px_white] active:shadow-light active:translate-y-1"></i>
      </button>
    </div>
  );
}
