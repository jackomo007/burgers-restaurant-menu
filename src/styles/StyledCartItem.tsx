import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 16px;
  width: 320px;
`;

export const ItemTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemName = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const ItemQuantity = styled.div`
  margin-top: 5px;
  display: flex;
`;

export const QuantityButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColour};
  border: none;
  color: transparent;
  font-size: 0;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 15px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.lightColor};
  }

  &::before {
    width: 13px;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
  }

  &::after {
    width: 3px;
    height: 13px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
  }

  &[data-icon="plus"]::after {
    display: block;
  }

  &[data-icon="minus"]::after {
    display: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.textDisabled};
    &::before,
    &::after {
      background-color: ${({ theme }) => theme.signDisabled};
    }
  }
`;

export const ItemPrice = styled.span`
  font-weight: bold;
`;
