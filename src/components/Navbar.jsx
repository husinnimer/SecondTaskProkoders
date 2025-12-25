import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const nav = ["Home", "Courses", "Cart"];

const Navbar = () => {
  const stateLogin = useSelector((state) => state.courses.login);
  const cartCount = useSelector((state) => state.courses.selectedCart);
  return (
    <div>
      <ul className="bg-sky-900 text-white p-5 font-bold text-center md:flex md:justify-center md:gap-20 ">
        {nav.map((el, index) => (
          <li key={index} className="hover:text-gray-400">
            <Link to={el === "Home" ? "" : el}>
              {el === "Cart" ? `${cartCount.length + " " + el}` : el}
            </Link>
          </li>
        ))}
        <li>
          <Link to="login">{stateLogin ? "Logout" : "Login"}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
