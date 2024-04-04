import React from "react";
import {
  Navbar,
  NavItem,
  Menu,
  MobileMenu,
  GradientOverlay,
  ImageContainer,
  LogoOverlay,
  Image,
} from "../styles/StyledNavbar";
import { useIntl } from "react-intl";

const NavigationBar: React.FC = () => {
  const activeItem: string = "MENU";

  const intl = useIntl();
  const login = intl.formatMessage({ id: "login" });
  const contact = intl.formatMessage({ id: "contact" });

  return (
    <Navbar>
      <Menu>
        <NavItem href="#" isActive={activeItem === "MENU"}>
          MENU
        </NavItem>
        <NavItem href="#" isActive={activeItem === "ENTRAR"}>
          {login.toUpperCase()}
        </NavItem>
        <NavItem href="#" isActive={activeItem === "CONTATO"}>
          {contact.toUpperCase()}
        </NavItem>
      </Menu>

      <MobileMenu>
        <NavItem href="#" isActive={activeItem === "MENU"}>
          MENU
        </NavItem>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: "pointer" }}
        >
          <g clip-path="url(#clip0_4327_360)">
            <rect width="16" height="2" rx="1" fill="white" />
            <rect y="7" width="16" height="2" rx="1" fill="white" />
            <rect y="14" width="16" height="2" rx="1" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_4327_360">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </MobileMenu>

      <ImageContainer>
        <Image src="/assets/burger.jpg" alt="Background" />
        <LogoOverlay src="/assets/logo.png" alt="Overlay" />
        <GradientOverlay />
      </ImageContainer>
    </Navbar>
  );
};

export default NavigationBar;
