import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { CartItem as CartItemType } from "../types/cartTypes";
import { updateItemQuantity } from "../features/cart/cartSlice";

interface CartItemProps {
  item: CartItemType;
}

const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 16px;
  width: 320px;
`;

const ItemTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemName = styled.p`
  margin: 0;
  font-weight: bold;
`;

const ItemQuantity = styled.div`
  margin-top: 5px;
  display: flex;
`;

export const QuantityButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColour};
  border: none;
  color: transparent;
  font-size: 0;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 15px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.lightColor};
  }

  &::before {
    width: 13px;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
  }

  &::after {
    width: 3px;
    height: 13px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
  }

  &[data-icon="plus"]::after {
    display: block;
  }

  &[data-icon="minus"]::after {
    display: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.textDisabled};
    &::before,
    &::after {
      background-color: ${({ theme }) => theme.signDisabled};
    }
  }
`;

const ItemPrice = styled.span`
  font-weight: bold;
`;

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
        <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
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
