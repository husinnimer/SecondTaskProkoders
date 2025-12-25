import { useState } from "react";
import CartCourse from "../components/CartCourse";
import Paganation from "../components/Paganation";
import { useSelector } from "react-redux";
import { motion } from "motion/react";

const Courses = () => {
  const courses = useSelector((state) => state.courses.coursesList);
  const loginState = useSelector((state) => state.courses.login);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = courses.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 2 } }}
      >
        <div className="flex flex-wrap gap-10 justify-center mt-10  ">
          <CartCourse loginState={loginState} courses={currentCourses} />
        </div>

        <Paganation
          itemsPerPage={itemsPerPage}
          totalItems={courses.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </motion.div>
    </>
  );
};

export default Courses;
