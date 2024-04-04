import styled from "styled-components";

interface ArrowProps {
  isOpen: boolean;
}

export const Card = styled.div`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const MenuHeader = styled.div`
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const StyledMenuItem = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const ItemInfo = styled.div`
  flex: 1;

  h4 {
    font-weight: bold;
    color: ${({ theme }) => theme.textColorSecondary};
    margin: 0;
    font-size: 18px;
  }

  p {
    color: ${({ theme }) => theme.shadowColor};
    line-height: 1.4;
    margin: 0;

    &:first-of-type {
      font-weight: 300;
      color: ${({ theme }) => theme.textColorPrimary};
      font-size: 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 350px;
      @media (max-width: 700px) {
        max-width: 100%;
        white-space: normal;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        padding-right: 20px;
        box-sizing: border-box;
        font-size: 14px;
      }
    }

    &:last-of-type {
      font-weight: bold;
      font-size: 16px;
      color: ${({ theme }) => theme.textColorPrimary};
    }
  }
`;

export const ItemImage = styled.img`
  width: 128px;
  height: 85px;
  border-radius: 8px;
`;

export const Arrow = styled.i<ArrowProps>`
  cursor: pointer;
  width: 12px;
  height: 12px;
  display: inline-block;
  margin-left: 5px;
  border: solid black;
  border-width: 0 3px 3px 0;
  transform: ${({ isOpen }) => (isOpen ? "rotate(-135deg)" : "rotate(45deg)")};
  transition: transform 0.3s ease-in-out;
`;
