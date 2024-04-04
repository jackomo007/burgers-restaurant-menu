import styled from "styled-components";

export const CartCard = styled.div`
  width: 320px;
  margin: 30px 30px 0 5px;
  height: auto;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
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

export const TotalLabel = styled.span`
  font-size: 24px;
`;

export const TotalValue = styled.span`
  font-size: 24px;
  font-weight: 500;
`;
