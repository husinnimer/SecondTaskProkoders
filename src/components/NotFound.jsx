import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-10 text-2xl mb-10">Hello This Page Is Not Found</h1>
      <button
        onClick={handleClick}
        className="w-fit text-white bg-sky-700 p-2 rounded-xl cursor-pointer"
      >
        Back Home
      </button>
    </div>
  );
};

export default NotFound;
