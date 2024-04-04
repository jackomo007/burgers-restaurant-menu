import {
  CarouselImage,
  CarouselItem,
  MenuCarousel,
} from "../styles/MenuStyled";
import { Menu, Section } from "../types/menuTypes";

const MenuComponent = ({
  menu,
  status,
}: {
  menu: Menu | null;
  status: string;
}) => {
  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error loading the menu.</div>;

  return (
    <MenuCarousel>
      {status === "succeeded" && menu && (
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
