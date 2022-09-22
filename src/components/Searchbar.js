import React, { useState } from "react";

//still delete/mark as complete for todos
export default function Searchbar({ handleRight, handleLeft }) {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
      e.preventDefault();
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
        <i className="fas fa-solid fa-backward-step"></i>
      </button>
      <div className="w-2/3 flex flex-col items-center bg-gray-300 opacity-60 rounded">
        <h2 className="text-5xl p-5">What are your goals for today?</h2>
        <form className="p-5 w-full">
          <input
            className="w-1/2 border py-2 px-3 text-grey-darkest"
            type="text"
            name="todo"
            value={todo}
            // ref={placeholder}
            placeholder="what do you need to do today?"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </form>
        {/* <i className="fa-light fas fa-down-to-dotted-line"></i> */}
        <div className="flex w-full justify-start tracking-wider flex-wrap">
          {todos.map((todo, index) => (
            <div
              className="mx-1 mb-2 font-todo p-2 text-3xl bg-red-300 "
              key={index}
            >
              {todo}

              <i
                onClick={() => handleDelete(todo)}
                className="cursor-pointer text-sm fas fa-solid fa-circle-minus absolute text-red-500 -translate-x-5 -translate-y-3"
              ></i>
              <i
                onClick={() => handleComplete(todo)}
                className="cursor-pointer text-sm fas fa-solid fa-circle-check absolute  text-emerald-500 -translate-y-3"
              ></i>
            </div>
          ))}
        </div>
      </div>
      <button className="text-white text-3xl w-1/5 pl-5" onClick={handleRight}>
        <i className="fas fa-solid fa-forward-step"></i>
      </button>
    </div>
  );
}
