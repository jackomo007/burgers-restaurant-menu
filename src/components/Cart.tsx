import React from "react";
import { useSelector } from "react-redux";
import CartItemComponent from "./CartItemComponent";
import { selectCartItems, selectCartTotal } from "../features/cart/cartSlice";

const CartComponent: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.map((item) => (
        <CartItemComponent key={item.id} item={item} />
      ))}
      <div>
        <strong>Total: R$ {total.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default CartComponent;
