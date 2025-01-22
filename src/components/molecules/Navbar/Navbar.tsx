import { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { colors } from "../../../utils/colors";
import { maxDeviceSize } from "../../../utils/deviceSize";
import LogoImage from "../../../assets/logo.webp";
import { pagesPaths } from "../../../constans/pagesPaths";

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

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
        <StyledLogo>
          <NavLink to={pagesPaths.homePage}>
            <img src={LogoImage} alt="Logo NextBud" />
          </NavLink>
        </StyledLogo>
        <StyledNavSection>
          <StyledLink to={pagesPaths.offer}>Oferta</StyledLink>
          <StyledLink to={pagesPaths.realizations}>Realizacje</StyledLink>
          <StyledLink to={pagesPaths.machinePark}>Park maszynowy</StyledLink>
          <StyledLink to={pagesPaths.concretePlant}>Betoniarnia</StyledLink>
          <StyledSignificantLink to={pagesPaths.contact}>
            Kontakt
          </StyledSignificantLink>
        </StyledNavSection>
        <StyledToggleButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars style={{ color: colors.white }} />}
        </StyledToggleButton>
      </StyledNavbarContainer>
      <StyledMobileMenu $menuOpen={menuOpen} onClick={() => setMenuOpen(false)}>
        {menuOpen && <MobileMenuHeader>MENU</MobileMenuHeader>}
        <MobileMenuItem to={pagesPaths.offer}>Oferta</MobileMenuItem>
        <MobileMenuItem to={pagesPaths.realizations}>Realizacje</MobileMenuItem>
        <MobileMenuItem to={pagesPaths.machinePark}>
          Park maszynowy
        </MobileMenuItem>
        <MobileMenuItem to={pagesPaths.concretePlant}>
          Betoniarnia
        </MobileMenuItem>
        <MobileMenuItem to={pagesPaths.contact}>Kontakt</MobileMenuItem>
      </StyledMobileMenu>
    </StyledNavbarWrapper>
  );
};

const StyledNavbarWrapper = styled.div<{ $visible: boolean; $isTop: boolean }>`
  position: fixed;
  top: ${({ $visible }) => ($visible ? "0" : "-150px")};
  width: 100%;
  z-index: 1010;
  background-color: ${({ $isTop }) => ($isTop ? "transparent" : colors.black)};
  transition: top 0.5s ease, background-color 0.3s ease;
`;

const StyledNavbarContainer = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;

  @media ${maxDeviceSize.tablet} {
    padding: 10px;
  }
`;

const StyledNavSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media ${maxDeviceSize.tablet} {
    display: none;
  }
`;

const StyledLogo = styled.div`
  flex-grow: 1;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;

  img {
    width: 50%;

    @media ${maxDeviceSize.phone} {
      width: 75%;
    }
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.grey};
  transition: color 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    color: ${colors.white};
  }

  &.active {
    color: ${colors.white};
  }
`;

const StyledSignificantLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.grey};
  transition: color 0.3s ease;
  font-size: 1.1rem;
  border: 1px solid ${colors.grey};
  padding: 1rem;
  border-radius: 5px;

  &:hover {
    color: ${colors.white};
    border: 1px solid ${colors.yellow};
  }

  &.active {
    color: ${colors.white};
    border: 1px solid ${colors.whit};
  }
`;

const StyledToggleButton = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  z-index: 9999;

  @media ${maxDeviceSize.tablet} {
    display: flex;
    align-items: center;
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

const MobileMenuItem = styled(NavLink)`
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
