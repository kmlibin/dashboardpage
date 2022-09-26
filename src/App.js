import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

//pages and components
import Navbar from "./components/Navbar";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

//styles
import "./App.css";
import { useAuthContext } from "./hooks/useAuthContext";
import { useCollection} from"./hooks/useCollection"



function App() {

  const [index, setIndex] = useState(0);
  const { user, authIsReady } = useAuthContext();
  
  // const { documents } =  useCollection(
  //   'users',
  //   ['uid', '==', user.uid]
  //   )

  // //handle next button click on background image
  // const handleRight = (e) => {
  //   e.preventDefault();
  //   if (index > images.length - 2) {
  //     setIndex(0);
  //     console.log("start over");
  //   } else {
  //     setIndex(index + 1);
  //   }
  // };
  // //handle previous button click on background image
  // const handleLeft = (e) => {
  //   e.preventDefault();
  //   if (index === 0) {
  //     setIndex(7);
  //     console.log("start over");
  //   } else {
  //     setIndex(index - 1);
  //   }
  // };

  console.log(user);
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {/* <div className="min-h-full min-w-full">
        
            <img
              className="-z-10 absolute min-w-full min-h-full"
              src={images[index]}
            /> */}
          
            {/* <Navbar /> */}
          {/* </div> */}
          <Routes>
            <Route path="/" element={user ? <Home /> : <Login />} />
            <Route
              path="/signup"
              element={user ? <Navigate to="/" /> : <Signup />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
