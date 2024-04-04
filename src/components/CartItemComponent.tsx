import React from "react";
import { useDispatch } from "react-redux";
import { CartItem as CartItemType } from "../types/cartTypes";
import { updateItemQuantity } from "../features/cart/cartSlice";
import {
  CartItemContainer,
  ItemDetails,
  ItemName,
  ItemPrice,
  ItemQuantity,
  ItemTopRow,
  QuantityButton,
} from "../styles/StyledCartItem";

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
    <CartItemContainer>
      <ItemTopRow>
        <ItemDetails>
          <ItemName>{item.name}</ItemName>
        </ItemDetails>
        <ItemPrice>R$ {(item.price * item.quantity).toFixed(2)}</ItemPrice>
      </ItemTopRow>
      <ItemQuantity>
        <QuantityButton onClick={handleDecreaseQuantity} data-icon="minus">
          -
        </QuantityButton>
        <span>{item.quantity}</span>
        <QuantityButton onClick={handleIncreaseQuantity} data-icon="plus">
          +
        </QuantityButton>
      </ItemQuantity>
    </CartItemContainer>
  );
};

export default CartItemComponent;
