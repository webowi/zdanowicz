import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { pagesPaths } from "../../../constans/pagesPaths";
import { ButtonLink } from "../../atoms/ButtonLink/ButtonLink";
import { IoReturnDownBack } from "react-icons/io5";

export const BackHeader = () => (
  <StyledHeader>
    <StyledNavbarWrapper>
      <StyledNavbarContainer>
        <StyledLogoItem href={pagesPaths.homePage}>Webowi.pl</StyledLogoItem>
        <StyledNav>
          <ButtonLink href={pagesPaths.homePage}>
            <StyledButtonContent>
              <IoReturnDownBack /> Powrót
            </StyledButtonContent>
          </ButtonLink>
        </StyledNav>
      </StyledNavbarContainer>
    </StyledNavbarWrapper>
  </StyledHeader>
);

const StyledHeader = styled.header`
  top: 0;
  background: linear-gradient(to bottom, ${colors.white}, #d2dcff);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 20;
`;

const StyledNavbarWrapper = styled.div`
  top: 0;
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
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
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

const StyledButtonContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
