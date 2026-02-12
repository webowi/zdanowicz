import styled from "styled-components";
import { Link } from "react-router-dom";
import { pagesPaths } from "../../../constans/pagesPaths";
import { colors } from "../../../utils/colors";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <SiteMap>
          <Section>
            <SectionTitle>Mapa strony</SectionTitle>
            <StyledNavItem to={pagesPaths.homePage}>
              Strona główna
            </StyledNavItem>
            <StyledNavItem to={pagesPaths.offer}>Oferta</StyledNavItem>
            <StyledNavItem to={pagesPaths.realizations}>
              Realizacje
            </StyledNavItem>
            <StyledNavItem to={pagesPaths.contact}>Kontakt</StyledNavItem>
          </Section>
        </SiteMap>
        <LegalInfo>
          <Section>
            <SectionTitle>Informacje prawne</SectionTitle>
            <StyledNavItem to={pagesPaths.privacyPolicy}>
              Polityka prywatności
            </StyledNavItem>
          </Section>
        </LegalInfo>
      </FooterContent>
      <FooterBottom>
        <Copyright>© 2026 Zdanowicz. Wszelkie prawa zastrzeżone.</Copyright>
        <FooterNote>
          Wykonanie:{" "}
          <a href="https://webowi.pl" target="_blank" rel="noopener noreferrer">
            webowi.pl
          </a>
        </FooterNote>
      </FooterBottom>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  background-color: ${colors.black};
  padding: 2rem 1rem;
  color: ${colors.white};
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 2rem;
  border-bottom: 1px solid #444;
`;

const SiteMap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LegalInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${colors.white};
  font-weight: bold;
`;

const StyledNavItem = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.white};
  font-size: 0.875rem;
  &:hover {
    color: ${colors.orange};
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 1rem;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${colors.white};
`;

const FooterNote = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: ${colors.white};

  a {
    color: ${colors.white};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
