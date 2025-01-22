import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { pagesPaths } from "../../../constans/pagesPaths";
import { minDeviceSize } from "../../../utils/deviceSize";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container"></div>
      <StyledNav>
        <StyledNavItem to={pagesPaths.privacyPolicy}>
          Polityka prywatności
        </StyledNavItem>
        <StyledNavItem to={pagesPaths.offer}>Oferta</StyledNavItem>
        <StyledNavItem to={pagesPaths.realizations}>Realizacje</StyledNavItem>
        <StyledNavItem to={pagesPaths.machinePark}>Park maszyn</StyledNavItem>
        <StyledNavItem to={pagesPaths.concretePlant}>Betoniarnia</StyledNavItem>
        <StyledNavItem to={pagesPaths.contact}>Kontakt</StyledNavItem>
      </StyledNav>
      <StyledCopyrights>
        &copy; 2025 Webowi.pl - wszelkie prawa zastrzeżone
      </StyledCopyrights>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${colors.black};
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  text-align: center;
  border-top: 1px solid ${colors.grey};
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

const StyledCopyrights = styled.p`
  margin-top: 1.5rem;
  color: ${colors.grey};
  font-size: 0.875rem;
  text-align: center;
`;
