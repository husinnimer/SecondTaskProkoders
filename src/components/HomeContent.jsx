import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const HomeContent = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("courses");
  };

  return (
    <div className="md:max-w-[50%] md:grow-1 w-[100%] text-center md:text-start h-fit">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 2 } }}
      >
        <h1 className="m-20 text-5xl font-bold text-gray-300">
          Learn, Grow, Succeed
        </h1>
        <p className="m-20 text-base text-gray-200">
          Start your journey to success with our expert-led courses. Transform
          your skills and achieve your goals.
        </p>

        <button
          onClick={handleButton}
          className="ml-20 p-3 rounded-2xl bg-sky-900 text-white transition-all hover:bg-white hover:text-sky-700 hover:border hover:cursor-pointer"
        >
          Explore Courses
        </button>
      </motion.div>
    </div>
  );
};

export default HomeContent;
