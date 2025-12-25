import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCarts } from "../Redux/addSlice";
import { toast } from "react-toastify";

const CartCourse = ({ loginState, courses }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleView = (course) => {
    navigate(`/courses/${course.id}`);
  };

  const handleAddCard = (course) => {
    if (loginState) {
      dispatch(addCarts(course));
      toast.success("Added Your Course To Cart 🛒");
    } else {
      alert("You Have To Login");
      navigate("/login");
    }
  };

  return (
    <>
      {courses.map((course) => (
        <div
          key={course.id}
          className="font-sans bg-gray-200 p-10 w-100 rounded-xl shadow-2xl h-70 hover:bg-gray-400 transition-all"
        >
          <h3 className="text-xl text-center font-bold text-sky-700 mb-5">
            {course.title}
          </h3>
          <p className="text-center">{course.shortDescription}</p>
          <p className="text-center text-green-800">{course.price}$</p>
          <div className="flex justify-center gap-10 mt-5">
            <button
              onClick={() => handleView(course)}
              className="bg-sky-800 p-3 text-gray-200 rounded-2xl cursor-pointer hover:bg-white hover:text-sky-700 hover:border transition-all"
            >
              View Details
            </button>
            <button
              onClick={() => handleAddCard(course)}
              className="bg-sky-800 p-3 text-gray-200 rounded-2xl cursor-pointer hover:bg-white hover:text-sky-700 hover:border transition-all"
            >
              Add To Card
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartCourse;
