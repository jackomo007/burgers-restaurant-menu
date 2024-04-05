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

export const FullScreenModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ShowCartButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColour};
  color: #fff;
  padding: 10px 20px;
  margin: 0 20px 20px;
  border: none;
  border-radius: 40px;
  font-size: 1rem;
  cursor: pointer;
  width: calc(100% - 40px);
  font-size: 18px;
  font-weight: 500;
  @media (min-width: 701px) {
    display: none;
  }
`;

export const AllergyInfo = styled.div`
  color: ${({ theme }) => theme.primaryColour};
  font-size: 16px;
  font-weight: 500;
  margin: 40px 0;
  text-align: center;
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.primaryColour};
  padding-bottom: 0px;
  display: inline-block;
  @media (min-width: 701px) {
    display: none;
  }
`;
