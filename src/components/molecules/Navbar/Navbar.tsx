import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { colors } from "../../../utils/colors";
import { maxDeviceSize } from "../../../utils/deviceSize";
import { pagesPaths } from "../../../constans/pagesPaths";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsTop(currentScrollPos < 10);
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 40);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <StyledNavbarWrapper $visible={visible} $isTop={isTop}>
      <StyledNavbarContainer>
        <StyledLogoItem href={pagesPaths.homePage}>Webowi.pl</StyledLogoItem>
        <StyledNav>
          <StyledNavItem to={pagesPaths.offer}>Oferta</StyledNavItem>
          <StyledNavItem to={pagesPaths.realizations}>Realizacje</StyledNavItem>
          <StyledNavItem to={pagesPaths.machinePark}>Park maszyn</StyledNavItem>
          <StyledNavItem to={pagesPaths.concretePlant}>
            Betoniarnia
          </StyledNavItem>
          <StyledNavItem to={pagesPaths.contact}>Kontakt</StyledNavItem>
        </StyledNav>
        <StyledToggleButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars style={{ color: colors.black }} />}
        </StyledToggleButton>
      </StyledNavbarContainer>
      <StyledMobileMenu $menuOpen={menuOpen} onClick={() => setMenuOpen(false)}>
        {menuOpen && <MobileMenuHeader>MENU</MobileMenuHeader>}
        <MobileMenuItem to={pagesPaths.offer} onClick={closeMenu}>
          Rozwiązania
        </MobileMenuItem>
        <MobileMenuItem to={pagesPaths.realizations}>Realizacje</MobileMenuItem>
        <MobileMenuItem to={pagesPaths.offer}>Oferta</MobileMenuItem>
        <MobileMenuItem to={pagesPaths.realizations}>Realizacje</MobileMenuItem>
        <MobileMenuItem to={pagesPaths.machinePark}>Park maszyn</MobileMenuItem>
        <MobileMenuItem to={pagesPaths.concretePlant}>
          Betoniarnia
        </MobileMenuItem>
        <MobileMenuItem to={pagesPaths.contact}>Kontakt</MobileMenuItem>
      </StyledMobileMenu>
    </StyledNavbarWrapper>
  );
};

const StyledNavbarWrapper = styled.div<{ $visible: boolean; $isTop: boolean }>`
  top: ${({ $visible }) => ($visible ? "0" : "-150px")};
  width: 100%;
  z-index: 1010;
  background-color: transparent;
  backdrop-filter: blur(10px);
  transition: top 0.5s ease, background-color 0.3s ease;
  padding: 1.25rem;
`;

const StyledNavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.nav`
  @media ${maxDeviceSize.tablet} {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
`;

const StyledNavItem = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: 0.3s;
  letter-spacing: -0.025rem;

  &:hover {
    color: ${colors.black};
  }
`;

const StyledLogoItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.black};
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: 0.3s;

  &:hover {
    color: ${colors.black};
  }
`;

const StyledToggleButton = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  z-index: 9999;

  @media ${maxDeviceSize.tablet} {
    display: block;
    color: ${colors.white};
    transition: color 0.3s ease;
  }
`;

const StyledMobileMenu = styled.div<{ $menuOpen: boolean }>`
  position: fixed;
  top: ${({ $menuOpen }) => ($menuOpen ? "0" : "-100vh")};
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${colors.black};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: top 0.5s ease;
`;

const MobileMenuHeader = styled.div`
  position: absolute;
  top: 65px;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.white};
`;

const MobileMenuItem = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  font-size: 1.2rem;
  margin: 10px 0;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.red};
  }
`;

export default Navbar;
