import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { selectTotalPrice } from "../features/order/orderSlice";

const Cart: React.FC = () => {
  const totalPrice = useSelector((state: RootState) => selectTotalPrice(state));

  return <div>Total Price: ${totalPrice.toFixed(2)}</div>;
};

export default Cart;
