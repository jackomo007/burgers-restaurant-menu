import React, { useState, useEffect } from "react";
import { useAppSelector } from "../hooks";
import { MenuItem, Section } from "../types/menuTypes";
import styled from "styled-components";
import ProductModal from "./Modal";
import { FormattedNumber } from "react-intl";
import { currency } from "../utils";

interface ArrowProps {
  isOpen: boolean;
}

const Card = styled.div`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const MenuHeader = styled.div`
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const StyledMenuItem = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ItemInfo = styled.div`
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

const ItemImage = styled.img`
  width: 128px;
  height: 85px;
  border-radius: 8px;
`;

const Arrow = styled.i<ArrowProps>`
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

const MenuCard: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<unknown>(null);
  const { data: menu, status: menuStatus } = useAppSelector(
    (state) => state.menu
  );

  const openModalWithItem = (item: unknown) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (menu && menu.sections) {
      const allOpenSections = menu.sections.reduce((acc, _, index) => {
        acc[index] = true;
        return acc;
      }, {} as Record<number, boolean>);

      setOpenSections(allOpenSections);
    }
  }, [menu]);

  const toggleSection = (index: number) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [index]: !prevOpenSections[index],
    }));
  };

  if (menuStatus === "loading") return <div>Loading...</div>;
  if (menuStatus === "failed") return <div>Error loading the menu.</div>;

  return (
    <Card>
      {menuStatus === "succeeded" && menu && (
        <>
          {menu.sections.map((section: Section, index: number) => (
            <div key={index}>
              <MenuHeader onClick={() => toggleSection(index)}>
                <h3>{section.name}</h3>
                <Arrow isOpen={openSections[index] || false} />
              </MenuHeader>
              {openSections[index] &&
                section.items.map((item) => (
                  <StyledMenuItem
                    key={item.id}
                    onClick={() => openModalWithItem(item)}
                  >
                    <ItemInfo>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <FormattedNumber
                        value={+item.price.toFixed(2)}
                        style="currency"
                        currency={currency}
                      />
                    </ItemInfo>
                    {item.images && item.images.length > 0 && (
                      <ItemImage
                        src={item.images[0].image}
                        alt={`${item.images[0].id}`}
                      />
                    )}
                  </StyledMenuItem>
                ))}
            </div>
          ))}
          <ProductModal
            isOpen={isModalOpen}
            onClose={closeModal}
            selectedItem={selectedItem as MenuItem}
          />
        </>
      )}
    </Card>
  );
};

export default MenuCard;
