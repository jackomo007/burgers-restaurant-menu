import styled from "styled-components";

export const MenuCarousel = styled.div`
  display: flex;
  margin-bottom: 20px;
  height: 120px;
  align-items: center;
  padding: 24px;
`;

export const CarouselItem = styled.div`
  width: 104px;
  height: 146px;
  gap: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:first-child {
    border-bottom: 2px solid ${({ theme }) => theme.darkColor};
    font-weight: bold;
  }
`;

export const CarouselImage = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  filter: brightness(110%) contrast(105%);

  ${CarouselItem}:first-child & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.lightColor},
      0 0 0 5px ${({ theme }) => theme.darkColor};
  }
`;
