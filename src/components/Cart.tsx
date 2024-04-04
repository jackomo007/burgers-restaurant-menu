import CartItemComponent from "./CartItemComponent";
import { FormattedNumber, useIntl } from "react-intl";
import { CartItem } from "../types/cartTypes";
import {
  CardTotal,
  CartCard,
  TotalLabel,
  TotalValue,
} from "../styles/StyledCart";

const CartComponent = ({
  cartItems,
  total,
}: {
  cartItems: CartItem[];
  total: number;
}) => {
  const intl = useIntl();

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
