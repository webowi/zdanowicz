import { useEffect, useState } from "react";
import styled from "styled-components";
import { Tag } from "../../components/atoms/Tag/Tag";
import { SectionTitle } from "../../components/atoms/SectionTitle/SectionTitle";
import { SectionDescription } from "../../components/atoms/SectionDescription/SectionDescription";
import { colors } from "../../utils/colors";
import { RealizationCard } from "../../components/molecules/RealizationCard/RealizationCard";
import { getRealizations } from "../../services/ResourceApiManager";

interface Realization {
  uuid: string;
  name: string;
  description?: string;
  mainImage: string;
  images: string[];
}

export const Realizations = () => {
  const [realizations, setRealizations] = useState<Realization[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchRealizations = async () => {
      try {
        setLoading(true);
        const data = await getRealizations();
        console.log(data);
        if (Array.isArray(data)) {
          setRealizations(data);
        } else {
          setRealizations([data]);
        }
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Nie udało się pobrać danych realizacji.");
      } finally {
        setLoading(false);
      }
    };

    fetchRealizations();
  }, []);

  if (loading) {
    return <StyledLoading>Ładowanie realizacji...</StyledLoading>;
  }

  if (error) {
    return <StyledError>{error}</StyledError>;
  }

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
          {realizations.map(({ uuid, name, description, mainImage }) => (
            <RealizationCard
              key={uuid}
              logoSrc={mainImage}
              companyName={name}
              shortDescription={description || "Brak opisu"}
              // realizationData={images}
            />
          ))}
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

const StyledLoading = styled.div`
  text-align: center;
  margin-top: 5rem;
  font-size: 1.5rem;
  color: ${colors.primary};
`;

const StyledError = styled.div`
  text-align: center;
  margin-top: 5rem;
  font-size: 1.2rem;
  color: ${colors.error || "red"};
`;

export default Realizations;
