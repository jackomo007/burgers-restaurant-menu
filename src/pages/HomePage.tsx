import styled from "styled-components";
import MenuComponent from "../components/Menu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  max-width: 100%;
  background: #f7f7f7;
  margin-top: 300px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
`;

const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const Content = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0px 2px 14px 0px #00000024;
`;

const CartCard = styled.div`
  width: 320px;
  height: 120px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  self-align: start;
`;

const CartTitle = styled.div`
  background-color: #f8f9fa;
  height: 64px;
  padding-left: 20px;
  display: flex;
  align-items: center;
`;

const CartContent = styled.div`
  background-color: #ffffff;
  height: 45%;
  display: flex;
  padding-left: 20px;
  align-items: center;
`;

const MenuCarousel = styled.div`
  display: flex;
  margin-bottom: 20px;
  height: 120px;
  align-items: center;
  padding: 24px;
`;

const CarouselItem = styled.div`
  width: 104px;
  height: 146px;
  gap: 19px;
`;

const CarouselImage = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 50%;
`;

const MenuCard = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const MenuHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  border-bottom: 1px solid #ccc;
`;

const MenuItem = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
`;

const HomePage = () => {
  return (
    <Container>
      <SearchBar type="text" placeholder="Search menu items" />
      <ContainerContent>
        <Content>
          <MenuCarousel>
            <CarouselItem>
              <CarouselImage src="/assets/burger_option.png" alt="Burgers" />
              Burgers
            </CarouselItem>
            <CarouselItem>
              <CarouselImage src="/assets/drink_option.png" alt="Drinks" />
              Drinks
            </CarouselItem>
            <CarouselItem>
              <CarouselImage src="/assets/dessert_option.png" alt="Desserts" />
              Desserts
            </CarouselItem>
          </MenuCarousel>
          <MenuComponent />

          <MenuCard>
            <MenuHeader>
              <h3>Burgers</h3>
            </MenuHeader>
            <MenuItem>
              <ItemInfo>
                <h4>Hardcore</h4>
                <p>180g angus beef burger, plus ribs, gruyere cheese...</p>
                <p>R$33,00</p>
              </ItemInfo>
              <ItemImage
                src="path_to_hardcore_burger_image"
                alt="Hardcore Burger"
              />
            </MenuItem>
          </MenuCard>
          <MenuCard>
            <MenuHeader>
              <h3>Drinks</h3>
            </MenuHeader>
            <MenuItem>
              <ItemInfo>
                <h4>Caipirinha</h4>
                <p>with sugar cane liquor</p>
                <p>R$13,00</p>
              </ItemInfo>
              <ItemImage src="path_to_caipirinha_image" alt="Caipirinha" />
            </MenuItem>
            {/* More items... */}
          </MenuCard>
        </Content>
        <CartCard>
          <CartTitle>Carrinho</CartTitle>
          <CartContent>Seu carrinho esta vazio</CartContent>
        </CartCard>
      </ContainerContent>
    </Container>
  );
};

export default HomePage;
