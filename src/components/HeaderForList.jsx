import React from "react";

const HeaderForList = ({ selectedCards }) => {
  const totalPrice = selectedCards.reduce(
    (acc, el) => acc + el.price * el.quantity,
    0
  );

  console.log(totalPrice);

  return (
    <div>
      <h3 className="text-2xl font-bold mt-10">
        Total Price is : <span className="text-green-700">{totalPrice}$</span>
      </h3>
    </div>
  );
};

export default HeaderForList;
