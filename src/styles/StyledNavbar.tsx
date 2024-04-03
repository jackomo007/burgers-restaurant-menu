import styled, { css } from "styled-components";

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive: boolean;
}

export const Navbar = styled.nav`
  background-color: #4f372f;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 10px;
  height: 52px;
  max-width: 100%;
`;

export const NavItem = styled.a<NavItemProps>`
  width: 232px;
  height: 40px;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    color: #ddd;
  }

  @media (min-width: 400px) {
    ${({ isActive }) =>
      isActive &&
      css`
        border-bottom: 5px solid #ddd;
      `}
  }

  @media (max-width: 393px) {
    padding-left: 40px;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  z-index: 2;

  @media (max-width: 393px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 393px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
`;

export const GradientOverlay = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    #36231c 18.92%,
    rgba(54, 35, 28, 0) 50.56%,
    #36231c 80.88%
  );
  z-index: 1;
`;

export const ImageContainer = styled.div`
  position: absolute;
  max-width: 1440px;
  width: 100%;
  height: 150px;
  left: 0;
  top: 49px;
  z-index: 0;
`;

export const LogoOverlay = styled.img`
  position: absolute;
  top: 5%;
  left: 43%;
  width: 188px;
  height: 125px;
  opacity: 85%;
  object-fit: cover;
  z-index: 2;

  @media (max-width: 393px) {
    left: 25%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
`;
