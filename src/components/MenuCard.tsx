import { useState, useEffect } from "react";
import { FormattedNumber } from "react-intl";
import ProductModal from "./Modal";
import {
  Arrow,
  Card,
  ItemImage,
  ItemInfo,
  MenuHeader,
  StyledMenuItem,
} from "../styles/StyledMenuCard";
import { Menu, MenuItem, Section } from "../types/menuTypes";
import { currency } from "../utils";

const MenuCard = ({ menu, status }: { menu: Menu; status: string }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<unknown>(null);

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

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error loading the menu.</div>;

  return (
    <Card>
      {status === "succeeded" && menu && (
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
