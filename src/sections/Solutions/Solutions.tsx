import styled from "styled-components";
import { SectionDescription } from "../../components/atoms/SectionDescription/SectionDescription";
import { SectionTitle } from "../../components/atoms/SectionTitle/SectionTitle";
import { colors } from "../../utils/colors";
import { SolutionCard } from "../../components/molecules/SolutionCard/SolutionCard";
import { MdScreenshotMonitor } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { minDeviceSize } from "../../utils/deviceSize";

export const Solutions = () => {
  return (
    <StyledSection name="solutions">
      <div className="container">
        <SectionTitle>Rozwiązania</SectionTitle>
        <SectionDescription>
          Tworzymy dedykowane aplikacje internetowe, które pomagają w
          zarządzaniu firmą. Zbuduj z nami stronę internetową, która pomoże Ci w
          osiągnięciu sukcesu w internecie.
        </SectionDescription>

        <div>
          <StyledCardsContainer>
            <SolutionCard
              icon={
                <MdScreenshotMonitor
                  style={{ width: "2rem", height: "2rem" }}
                />
              }
              title="Strony wizytówki"
              description="Profesjonalne strony wizytówki, które wyróżnią Twoją firmę w sieci. Oferujemy responsywny design, szybkie ładowanie. Wszystko zaprojektowane z myślą o Twoich potrzebach."
              features={[
                "Responsywny design",
                "Szybkie ładowanie",
                "Konfiguracja domeny, serwera oraz SSL",
                "Wielojęzyczność",
              ]}
            />
            <SolutionCard
              icon={<FaLaptopCode style={{ width: "2rem", height: "2rem" }} />}
              title="Dedykowane aplikacje internetowe"
              description="Dedykowane strony internetowe z intuicyjnym panelem administracyjnym, które zapewniają kontrolę nad treścią i funkcjonalnościami. Rozwiązania pod Twój biznes – od zarządzania użytkownikami, przez integracje z API, aż po zaawansowane analizy danych."
              features={[
                "Intuicyjny panel administracyjny",
                "Zarządzanie użytkownikami",
                "Integracje z API",
                "Dostosowanie do Twojego biznesu",
                "Dynamiczne treści",
              ]}
              inverse={true}
            />
            <SolutionCard
              icon={
                <FaCartShopping style={{ width: "2rem", height: "2rem" }} />
              }
              title="Sklepy internetowe"
              description="Nowoczesne sklepy internetowe, które sprzedają więcej. Oferujemy intuicyjne zarządzanie produktami, integracje z płatnościami, narzędzia marketingowe i responsywny design, by zapewnić Twoim klientom doskonałe doświadczenia zakupowe."
              features={[
                "Intuicyjne zarządzanie produktami",
                "Integracje z płatnościami",
                "Responsywny design",
                "Koszyk i proces zamówienia",
              ]}
              inProgress={true}
            />
          </StyledCardsContainer>
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section<{ name: string }>`
  padding-top: 6rem;
  padding-bottom: 6rem;
  background: linear-gradient(to top, ${colors.white}, #d2dcff);
`;

const StyledCardsContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  @media ${minDeviceSize.tablet} {
    flex-direction: row;
    justify-content: center;
  }
`;
