import styled from "styled-components";

export const CartCard = styled.div`
  width: 320px;
  margin: 30px 30px 0 5px;
  height: auto;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.lightColor};
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
  @media (max-width: 701px) {
    width: 100%;
    height: 100vh;
    margin: 0;
    box-shadow: none;
    border-radius: 0;
    h1 {
      text-align: center;
      font-size: 18px;
      color: ${({ theme }) => theme.property};
    }
  }
`;

export const CardTotal = styled.div`
  margin: 30px 20px;
  padding-bottom: 30px;
  padding-top: 30px;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
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
`;

export const TotalLabel = styled.span`
  font-size: 24px;
`;

export const TotalValue = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 27px;
  font-size: 18px;
  border: none;
  background: none;
  cursor: pointer;
`;
