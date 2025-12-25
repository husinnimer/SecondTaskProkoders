import { useNavigate, useParams } from "react-router-dom";
import courses from "../Data/data";
import { useDispatch, useSelector } from "react-redux";
import { addCarts } from "../Redux/addSlice";
import { motion } from "motion/react";
import { toast } from "react-toastify";

const CouresDetails = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));
  const loginState = useSelector((state) => state.courses.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!course) {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 2 } }}
      >
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-red-600">
            The Course Is Not Found
          </h2>
        </div>
      </motion.div>
    );
  }

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
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { duration: 2 } }}
    >
      <div className="mt-10 flex justify-center justify-items-center">
        <div className="text-center bg-gray700 flex flex-col items-center gap-10 font-bold p-5 ">
          <h2 className="text-4xl text-center font-bold text-sky-700 mb-5">
            {course.title}
          </h2>
          <p>{course.fullDescription}</p>
          <p>CountCourses: {course.lessonsCount}</p>
          <p>{course.level}</p>
          <p className=" text-green-600">Price: {course.price}$</p>
          <button
            onClick={() => handleAddCard(course)}
            className="w-fit bg-sky-800 p-3 text-gray-200 rounded-2xl cursor-pointer transition-all"
          >
            Add To Card
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CouresDetails;
