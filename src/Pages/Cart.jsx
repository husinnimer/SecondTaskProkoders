import { useSelector } from "react-redux";
import TableList from "../components/TableList";
import HeaderForList from "../components/HeaderForList";
import { motion } from "motion/react";

const Cart = () => {
  const selectedCards = useSelector((state) => state.courses.selectedCart);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { duration: 2 } }}
    >
      <div className="flex items-center flex-col mt-10">
        <HeaderForList selectedCards={selectedCards} />
        <TableList selectedCards={selectedCards} />
      </div>
    </motion.div>
  );
};

export default Cart;
