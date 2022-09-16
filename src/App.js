import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//pages and components
import Navbar from "./components/Navbar";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

//styles
import "./App.css";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const {user, authIsReady} = useAuthContext()

console.log(user)
  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
      
        <Navbar />
        <Routes>
          <Route path="/" element= {user? <Home /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        </Routes>
      </BrowserRouter>
    )}
    </div>
  );
}

export default App;
