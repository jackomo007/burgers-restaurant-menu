import React from "react";
import { useAppSelector } from "../hooks";
import { Section } from "../types/menuTypes";
import styled from "styled-components";

const Card = styled.div`
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

const MenuCard: React.FC = () => {
  const { data: menu, status: menuStatus } = useAppSelector(
    (state) => state.menu
  );

  if (menuStatus === "loading") return <div>Loading...</div>;
  if (menuStatus === "failed") return <div>Error loading the menu.</div>;

  return (
    <Card>
      {menuStatus === "succeeded" && menu && (
        <>
          {menu.sections.map((section: Section, index) => (
            <div key={index}>
              <MenuHeader>
                <h3>{section.name}</h3>
              </MenuHeader>
              {section.items.map((item) => (
                <MenuItem key={item.id}>
                  <ItemInfo>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>R${item.price}</p>
                  </ItemInfo>
                  {item.images && item.images.length > 0 && (
                    <ItemImage
                      src={item.images[0].image}
                      alt={`${item.images[0].id}`}
                    />
                  )}
                </MenuItem>
              ))}
            </div>
          ))}
        </>
      )}
    </Card>
  );
};

export default MenuCard;
