import React from "react";
import { useSelector } from "react-redux";
import CartItemComponent from "./CartItemComponent";
import { selectCartItems, selectCartTotal } from "../features/cart/cartSlice";
import { FormattedNumber, useIntl } from "react-intl";

const CartComponent: React.FC = () => {
  const intl = useIntl();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const cartTitle = intl.formatMessage({ id: "cart" });

  return (
    <div>
      <h1>{cartTitle}</h1>
      {cartItems.map((item) => (
        <CartItemComponent key={item.id} item={item} />
      ))}
      <div>
        Total:{" "}
        <FormattedNumber
          value={+total.toFixed(2)}
          style="currency"
          currency="USD"
        />
      </div>
    </div>
  );
};

export default CartComponent;
