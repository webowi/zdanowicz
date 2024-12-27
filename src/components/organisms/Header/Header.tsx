import styled from "styled-components";
import { Link } from "react-scroll";
import MenuIcon from "../../../assets/menu.svg";
import { maxDeviceSize, minDeviceSize } from "../../../utils/deviceSize";
import { pagesPaths } from "../../../constans/pagesPaths";
import { colors } from "../../../utils/colors";

export const Header = () => (
  <StyledHeader>
    <StyledNavWrapper>
      <StyledNavContainer>
        <StyledLogoItem href={pagesPaths.homePage}>Webowi.pl</StyledLogoItem>
        <StyledMenuIcon src={MenuIcon} alt="Menu" />
        <StyledNav>
          <StyledNavItem
            href="#"
            to="solutions"
            spy
            smooth
            offset={50}
            duration={500}
          >
            Rozwiązania
          </StyledNavItem>
          <StyledNavItem
            href="#"
            to="realizations"
            spy
            smooth
            offset={50}
            duration={500}
          >
            Realizacje
          </StyledNavItem>
          <StyledNavItem
            href="#"
            to="contact"
            spy
            smooth
            offset={50}
            duration={500}
          >
            Kontakt
          </StyledNavItem>
        </StyledNav>
      </StyledNavContainer>
    </StyledNavWrapper>
  </StyledHeader>
);

const StyledHeader = styled.header`
  /* position: sticky; */
  top: 0;
  background: linear-gradient(to bottom, ${colors.white}, #d2dcff);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 20;
`;

const StyledNavWrapper = styled.div`
  padding: 1.25rem;
`;

const StyledNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledMenuIcon = styled.img`
  height: 1.25rem;
  width: 1.25rem;

  @media ${minDeviceSize.tablet} {
    display: none;
  }
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
