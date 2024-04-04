import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  padding-top: 160px;
  margin: 0 auto;
  @media (max-width: 700px) {
    background-color: ${({ theme }) => theme.containerColor};
  }
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledSearchBar = styled.input`
  width: calc(100% - 50px);
  padding: 10px;
  padding-left: 40px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-image: url("/assets/lens.png");
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 15px;
  @media (max-width: 1000px) {
    margin: 0 30px 20px 30px;
    width: calc(100% - 100px);
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.containerColor};
`;

export const Content = styled.div`
  width: 600px;
  margin: 30px 5px 30px 30px;
  background-color: ${({ theme }) => theme.lightColor};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  padding: 40px;
  @media (max-width: 700px) {
    box-shadow: none;
    background-color: ${({ theme }) => theme.containerColor};
    margin: 0 auto;
    padding: 15px;
  }
`;

export const CartCard = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;
