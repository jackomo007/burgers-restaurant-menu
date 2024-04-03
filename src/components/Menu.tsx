// components/MenuComponent.tsx
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchMenu } from "../features/menu/menuSlice";
import { Section } from "../types/menuTypes";

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
    <div>
      AAAAA
      {menuStatus === "succeeded" && menu && (
        <ul>
          {menu.sections.map(
            (section: Section, index) => (
              <li key={index}>{section.name}</li>
            )
            // section.items.map((item, index) => <li key={index}>{item.name}</li>)
          )}
        </ul>
      )}
    </div>
  );
};

export default MenuComponent;
