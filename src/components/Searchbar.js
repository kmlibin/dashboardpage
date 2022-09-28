import React, { useState } from "react";

//pages and components
import Todos from "./Todos";

export default function Searchbar({ handleRight, handleLeft }) {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const colors = [
    "rgba(7,89,133, .8)",
    "rgba(30,64,175,.8)",
    "rgba(55,48,163,.8)",
    "rgba(91,33,182,.8)",
  ];

  const addTodo = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const handleDelete = (text) => {
    const newTodos = todos.filter((todo) => todo !== text);
    setTodos(newTodos);
  };

  return (
    <div className="flex w-full justify-center h-full">
      <button className="text-white w-1/5 pr-5 text-3xl" onClick={handleLeft}>
        <i className="fas fa-solid fa-backward-step shadow-standard rounded-lg p-4 transition-all ease-in duration-100 hover:shadow-[inset_0_0_10px_white] active:shadow-light active:translate-y-1"></i>
      </button>

      <div className="w-2/3 flex flex-col items-center bg-grey-rgba rounded-lg animate-fade-in shadow-equal">
        <h2 className="text-5xl p-5">What are your goals for today?</h2>
        <form className="p-5 min-w-full" onClick={addTodo}>
          <label for="goals">
            <input
              className="focus:outline-0 w-3/5 p-2 text-grey-darkest bg-transparent border-b-2 border-b-#f9fafb "
              type="text"
              name="todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </label>
          <button className="bg-transparent border-gray-200 border-2 ml-1 py-2 px-2 rounded-lg shadow-[inset_0_0_0_rgba(14,165,233,.75)] active:shadow-[inset_400px_0_0_0_rgba(14,165,233,.75)] hover:border-sky-600 transition ease-in duration-1 ">
            Add
          </button>
        </form>

        <div className="flex w-full justify-start flex-wrap px-5 pb-4">
          {todos.map((todo, index) => (
            <Todos
              key={todo}
              todo={todo}
              color={colors[index % 4]}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      <button className="text-white text-3xl w-1/5 pl-5 " onClick={handleRight}>
        <i className="fas fa-solid fa-forward-step shadow-standard p-4 rounded-lg transition-all ease-in duration-100 hover:shadow-[inset_0_0_10px_white] active:shadow-light active:translate-y-1"></i>
      </button>
    </div>
  );
}
