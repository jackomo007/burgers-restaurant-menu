import React from "react";
import { useDispatch } from "react-redux";
import { CartItem as CartItemType } from "../types/cartTypes";
import { updateItemQuantity } from "../features/cart/cartSlice";

interface CartItemProps {
  item: CartItemType;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(updateItemQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(
        updateItemQuantity({ id: item.id, quantity: item.quantity - 1 })
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <div>
        <p>{item.name}</p>
        <p>{item.additionalInfo}</p>
      </div>
      <div>
        <button onClick={handleDecreaseQuantity}>-</button>
        <span> {item.quantity} </span>
        <button onClick={handleIncreaseQuantity}>+</button>
        <span>R$ {item.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartItemComponent;
