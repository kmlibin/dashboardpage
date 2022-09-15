import React, {useState} from "react";


export default function Searchbar() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    console.log(todos)
    
    const addTodo = (e) => {
        if (todo !== "") {
          setTodos([...todos, todo]);
          setTodo("")  ;
          e.preventDefault()
        }
    };

  return (
    
    <div className="w-full flex flex-col items-center">
      <h2 className="text-5xl p-5">What are your goals for today?</h2>
      <form 
        className="p-5 w-full">
        <input className="w-1/2 border py-2 px-3 text-grey-darkest"
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
      <div className="flex w-full justify-start w-1/2 tracking-wider text-3xl">
        {todos.map((todo, index) => (
            <p className="font-todo p-2" key = {index}>{todo}</p>
        ))}
      </div>
    </div>
  );
}
