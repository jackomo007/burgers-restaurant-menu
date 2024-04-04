import styled, { css } from "styled-components";

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive: boolean;
}

export const Navbar = styled.nav`
  background-color: ${({ theme }) => theme.navBackgroundColour};
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
    color: ${({ theme }) => theme.hoverColour};
  }

  @media (min-width: 700px) {
    ${({ isActive, theme }) =>
      isActive &&
      css`
        border-bottom: 5px solid ${theme.hoverColour};
      `}
  }

  @media (max-width: 700px) {
    padding-left: 40px;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  z-index: 2;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 700px) {
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
    ${({ theme }) => theme.secondaryColor} 18.92%,
    rgba(54, 35, 28, 0) 50.56%,
    ${({ theme }) => theme.secondaryColor} 80.88%
  );
  z-index: 1;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  max-width: 100%;
  width: 100%;
  height: 150px;
  left: 0;
  top: 49px;
  z-index: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const LogoOverlay = styled.img`
  position: absolute;
  top: 6%;
  width: 188px;
  height: 125px;
  opacity: 85%;
  object-fit: cover;
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  @media (max-width: 700px) {
    margin-top: -30px;
    transform: scale(2.5); 
    transform-origin: center;
  }
`;
