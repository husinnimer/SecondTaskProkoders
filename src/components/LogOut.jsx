import { useDispatch } from "react-redux";
import { logOut } from "../Redux/addSlice";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    const isConfirmed = confirm("Are You Sure ??");
    if (isConfirmed) {
      dispatch(logOut(false));
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-sky-800 text-4xl">
        If You Want LogOut Press The Button{" "}
      </h1>
      <button
        onClick={handleLogOut}
        className="w-fit text-white bg-sky-700 p-2 rounded-xl cursor-pointer"
      >
        LogOut
      </button>
    </div>
  );
};

export default LogOut;
