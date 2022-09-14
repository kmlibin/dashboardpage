import React from "react";

export default function Home() {
  return (
    <main>
      {/* holds search and todos */}
      <div>
        <div>
          <form>
            <input
              type="text"
              // ref={placeholder}
              placeholder="what do you need to do today?"
              id="search"
              // onChange={(e) => setTerm(e.target.value)}
            />
          </form>
          {/* <i className="fa-light fas fa-down-to-dotted-line"></i> */}
        </div>
        {/* holds todos */}
        <div>
          <p>todo1</p>
          <p>todo1</p>
          <p>todo1</p>
        </div>
      </div>
      {/* holds quotes ... do as a component?*/}
      <div>quotes go here</div>
    </main>
  );
}
