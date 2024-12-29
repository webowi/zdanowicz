import styled from "styled-components";
import { Tag } from "../../components/atoms/Tag/Tag";
import { SectionTitle } from "../../components/atoms/SectionTitle/SectionTitle";
import { SectionDescription } from "../../components/atoms/SectionDescription/SectionDescription";
import { colors } from "../../utils/colors";
import { RealizationCard } from "../../components/molecules/RealizationCard/RealizationCard";
import { realizationsData } from "../../constans/realizationsData";

// const firstColumn = realizationsData.slice(0, 3); // 0, 3
// const secondColumn = realizationsData.slice(3, 4);
// const thirdColumn = realizationsData.slice(4, 6);

export const Realizations = () => {
  return (
    <StyledSection name="realizations">
      <div className="container">
        <StyledDescriptionContainer>
          <Tag>Wdrożone rozwiązania</Tag>
        </StyledDescriptionContainer>
        <SectionTitle>Realizacje</SectionTitle>
        <SectionDescription>
          Dostarczone we współpracy z Klientem funkcjonalne i estetyczne
          narzędzia wspierające ich rozwój w sieci. Poniżej znajdziesz przykłady
          naszych realizacji i partnerów, którzy nam zaufali.
        </SectionDescription>
        <StyledRealizationsContainer>
          {realizationsData.map(
            ({ logoSrc, companyName, shortDescription, realizationData }) => (
              <RealizationCard
                key={companyName}
                logoSrc={logoSrc}
                companyName={companyName}
                shortDescription={shortDescription}
                realizationData={realizationData}
              />
            )
          )}
        </StyledRealizationsContainer>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section<{ name: string }>`
  background-color: ${colors.white};
  padding-bottom: 5rem;
`;

const StyledDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const StyledRealizationsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 5rem;
`;
