import { useDispatch } from "react-redux";
import { addInfo, IsLoggedIn } from "../Redux/addSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addInfo(email, password));
    if (email && password) {
      dispatch(IsLoggedIn(true));
    }
    navigate("/courses");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-8 p-20 justify-center items-center text-white bg-sky-700 w-fit rounded-lg  ">
        <h1 className="text-3xl font-bold ">Login</h1>
        <label htmlFor="">Enter Email</label>
        <input
          type="email"
          placeholder="example@email.com"
          className="w-fit px-4 py-3 pr-10 text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-fit px-4 py-3 pr-10 text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Send"
          className="cursor-pointer bg-white text-sky-800 p-3 rounded-xl"
        />
      </div>
    </form>
  );
}

export default LoginForm;
