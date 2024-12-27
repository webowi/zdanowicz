import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { pagesPaths } from "../../../constans/pagesPaths";
import { Link } from "react-scroll";
import { minDeviceSize } from "../../../utils/deviceSize";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container"></div>
      <StyledNav>
        <StyledNavPageItem href={pagesPaths.privacyPolicy}>
          Polityka prywatności
        </StyledNavPageItem>
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
          to="solutions"
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
      <StyledCopyrights>
        &copy; 2024 Webowi.pl - wszelkie prawa zastrzeżone
      </StyledCopyrights>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${colors.black};
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  text-align: center;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  margin-top: 1rem;

  @media ${minDeviceSize.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
  }
`;

const StyledNavItem = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.grey};
  font-size: 0.875rem;
  &:hover {
    color: ${colors.white};
  }
`;

const StyledNavPageItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.grey};
  font-size: 0.875rem;

  &:hover {
    color: ${colors.white};
  }
`;

const StyledCopyrights = styled.p`
  margin-top: 1.5rem;
  color: ${colors.grey};
  font-size: 0.875rem;
  text-align: center;
`;
