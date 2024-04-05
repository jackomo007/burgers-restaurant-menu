import MenuComponent from "../components/Menu";
import MenuCard from "../components/MenuCard";
import Cart from "../components/Cart";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchMenu } from "../features/menu/menuSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../features/cart/cartSlice";
import {
  AllergyInfo,
  CartCard,
  Container,
  ContainerContent,
  Content,
  FullScreenModal,
  SearchBarContainer,
  ShowCartButton,
  StyledSearchBar,
} from "../styles/StyledHome";
import { Menu } from "../types/menuTypes";
import { CartItem } from "../types/cartTypes";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const [isCartFullScreen, setIsCartFullScreen] = useState(false);

  const toggleFullScreenCart = () => {
    setIsCartFullScreen(!isCartFullScreen);
  };

  const cartItems = useSelector(selectCartItems);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const total = useSelector(selectCartTotal);
  const { data: menu, status: menuStatus } = useAppSelector(
    (state) => state.menu
  );

  useEffect(() => {
    if (menuStatus === "idle") {
      dispatch(fetchMenu());
    }
  }, [menuStatus, dispatch]);

  const countSectionsForCartItems = (cartItems: CartItem[], menu: Menu) => {
    const result: { id: number; quantity: number }[] = [];
    cartItems.forEach((cartItem) => {
      menu.sections.forEach((section) => {
        section.items.forEach((item) => {
          if (item.id.toString() === cartItem.id) {
            result.push({ id: section.id, quantity: cartItem.quantity });
          }
        });
      });
    });
    return result;
  };

  const sectionCounts = countSectionsForCartItems(cartItems, menu!);

  return (
    <Container>
      <SearchBarContainer>
        <StyledSearchBar type="text" placeholder="Search menu items" />
      </SearchBarContainer>
      <ContainerContent>
        <Content>
          <MenuComponent menu={menu!} status={menuStatus} />
          <MenuCard
            quantityItems={sectionCounts}
            menu={menu!}
            status={menuStatus}
          />
        </Content>
        <CartCard>
          <Cart
            cartItems={cartItems}
            total={total}
            toggleFullScreenCart={toggleFullScreenCart}
          />
        </CartCard>
      </ContainerContent>{" "}
      <AllergyInfo>View allergy information</AllergyInfo>
      <ShowCartButton onClick={toggleFullScreenCart}>
        Your basket . {totalItems} {totalItems === 1 ? "item" : "items"}
      </ShowCartButton>
      {isCartFullScreen && (
        <FullScreenModal>
          <Cart
            cartItems={cartItems}
            total={total}
            toggleFullScreenCart={toggleFullScreenCart}
          />
        </FullScreenModal>
      )}
    </Container>
  );
};

export default HomePage;
