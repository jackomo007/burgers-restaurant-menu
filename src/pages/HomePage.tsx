import MenuComponent from "../components/Menu";
import MenuCard from "../components/MenuCard";
import Cart from "../components/Cart";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchMenu } from "../features/menu/menuSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../features/cart/cartSlice";
import {
  CartCard,
  Container,
  ContainerContent,
  Content,
  SearchBarContainer,
  StyledSearchBar,
} from "../styles/StyledHome";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const { data: menu, status: menuStatus } = useAppSelector(
    (state) => state.menu
  );

  useEffect(() => {
    if (menuStatus === "idle") {
      dispatch(fetchMenu());
    }
  }, [menuStatus, dispatch]);

  return (
    <Container>
      <SearchBarContainer>
        <StyledSearchBar type="text" placeholder="Search menu items" />
      </SearchBarContainer>
      <ContainerContent>
        <Content>
          <MenuComponent menu={menu!} status={menuStatus} />
          <MenuCard menu={menu!} status={menuStatus} />
        </Content>
        <CartCard>
          <Cart cartItems={cartItems} total={total} />
        </CartCard>
      </ContainerContent>
    </Container>
  );
};

export default HomePage;
