import { useDispatch } from "react-redux";
import { deleteCarts } from "../Redux/addSlice";

const TableList = ({ selectedCards }) => {
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    console.log(index);
    dispatch(deleteCarts(index));
  };
  return (
    <table className="w-200 text-center border">
      <tr className="border">
        <th className="w-50 p-5">NameCours</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Remove</th>
      </tr>

      {selectedCards.map((el, index) => (
        <tr className="border h-20 font-bold" key={el.id}>
          <td>{el.title}</td>
          <td>{el.price}$</td>
          <td>{el.quantity}</td>
          <td>
            <button
              onClick={() => handleDelete(index)}
              className="text-white bg-red-700 p-2 rounded-xl cursor-pointer"
            >
              Remove
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default TableList;
