import { useState } from "react";
import { Link } from "react-router-dom";

//hooks
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="rounded-lg h-[700px] sm:h-[500px] sm:max-w-[65%] sm:mt-[10rem] mx-auto block text-gray-700 text-body bg-gradient-to-br from-blue-400 to-purple-800 ">
      <form
        className="flex flex-col w-[90%] sm:w-[65%] h-full rounded m-auto  bg-[rgba(156,163,175,.4)] py-14"
        onSubmit={handleSubmit}
      >
        <h2 className="my-4 text-4xl">Login</h2>
        <label for="email">
          <p className="text-xl">email:</p>
          <input
            className="inputs"
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label for="password">
          <p className="text-xl">password:</p>
          <input
            className="inputs"
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {!isPending && (
          <button className="bg-gray-300 w-1/4 p-3 mx-auto shadow-standard rounded-lg m-4 active:shadow-light active:translate-y-1 transition-all ease-in duration-100 hover:shadow-[inset_0_0_10px_white]">
            Login
          </button>
        )}
        {isPending && (
          <button
            className="bg-gray-300 w-1/4 p-3 mx-auto shadow-standard rounded-lg m-4"
            disabled
          >
            Loading...
          </button>
        )}
        {error && <div className="error">{error}</div>}
        <p className="mt-5">
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="font-semibold border-b border-blue-300 hover:text-blue-300">
              Sign up!
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
}
