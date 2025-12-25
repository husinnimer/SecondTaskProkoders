import { useSelector } from "react-redux";
import { motion } from "motion/react";

import LoginForm from "../components/LoginForm";
import LogOut from "../components/LogOut";

function Login() {
  const stateLogin = useSelector((state) => state.courses.login);
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { duration: 2 } }}
    >
      <div className="flex justify-center w-[100%]  md:mt-20  ">
        {stateLogin ? <LogOut /> : <LoginForm />}
      </div>
    </motion.div>
  );
}

export default Login;
