// components/MenuComponent.tsx
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchMenu } from "../features/menu/menuSlice";
import { Section } from "../types/menuTypes";
import styled from "styled-components";

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

const MenuComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: menu, status: menuStatus } = useAppSelector(
    (state) => state.menu
  );

  useEffect(() => {
    if (menuStatus === "idle") {
      dispatch(fetchMenu());
    }
  }, [menuStatus, dispatch]);

  if (menuStatus === "loading") return <div>Loading...</div>;
  if (menuStatus === "failed") return <div>Error loading the menu.</div>;

  return (
    <MenuCarousel>
      {menuStatus === "succeeded" && menu && (
        <>
          {menu.sections.map((section: Section, index) => (
            <CarouselItem key={index}>
              <CarouselImage
                src={section.images[0].image}
                alt={`${section.images[0].id}`}
              />
              {section.name}
            </CarouselItem>
          ))}
        </>
      )}
    </MenuCarousel>
  );
};

export default MenuComponent;
