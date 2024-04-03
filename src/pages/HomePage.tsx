import styled from "styled-components";
import MenuComponent from "../components/Menu";
import MenuCard from "../components/MenuCard";

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

const HomePage = () => {
  return (
    <Container>
      <SearchBar type="text" placeholder="Search menu items" />
      <ContainerContent>
        <Content>
          <MenuComponent />
          <MenuCard />
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
