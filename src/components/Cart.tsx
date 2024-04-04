import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CartItemComponent from "./CartItemComponent";
import { selectCartItems, selectCartTotal } from "../features/cart/cartSlice";
import { FormattedNumber, useIntl } from "react-intl";

const CartCard = styled.div`
  width: 320px;
  margin: 30px 30px 0 5px;
  height: auto;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  h1 {
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColorPrimary};
    padding: 20px;
    background-color: ${({ theme }) => theme.containerColor};
  }

  p {
    padding: 20px;
  }
`;
const CardTotal = styled.div`
  margin: 30px 20px;
  padding-bottom: 30px;
  padding-top: 30px;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const TotalLabel = styled.span`
  font-size: 24px;
`;

const TotalValue = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

const CartComponent: React.FC = () => {
  const intl = useIntl();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const cartTitle = intl.formatMessage({ id: "cart" });
  const emptyCartMessage = intl.formatMessage({ id: "emptyCart" });

  return (
    <CartCard>
      <h1>{cartTitle}</h1>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <CartItemComponent key={item.id} item={item} />
          ))}
          <CardTotal>
            <TotalLabel>Total:</TotalLabel>
            <TotalValue>
              <FormattedNumber
                value={+total.toFixed(2)}
                style="currency"
                currency="USD"
              />
            </TotalValue>
          </CardTotal>
        </>
      ) : (
        <p>{emptyCartMessage}</p>
      )}
    </CartCard>
  );
};

export default CartComponent;
