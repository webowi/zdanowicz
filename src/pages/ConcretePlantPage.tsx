import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getConcretePlants } from "../services/ResourceApiManager";
import { colors } from "../utils/colors";
import MainLayout from "../layouts/MainLayout";
import { Loading } from "../components/atoms/Loading/Loading";
import { MachineCard } from "../components/molecules/MachineCard/MachineCard";
import { maxDeviceSize } from "../utils/deviceSize";

interface ConcretePlant {
  uuid: string;
  name: string;
  description?: string;
  mainImage: string;
}

const ConcretePlantPage: React.FC = () => {
  const [concretePlants, setConcretePlants] = useState<ConcretePlant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConcretePlants = async () => {
      try {
        const data = await getConcretePlants();
        setConcretePlants(data);
      } catch (err) {
        console.error("Error fetching concrete plants:", err);
        setError("Nie udało się pobrać danych. Spróbuj ponownie później.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchConcretePlants();
  }, []);

  return (
    <MainLayout>
      <PageContainer>
        <Header>Nasze węzły betoniarskie</Header>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Message>{error}</Message>
        ) : concretePlants.length === 0 ? (
          <Message>Brak węzłów betoniarskich do wyświetlenia.</Message>
        ) : (
          <CardGrid>
            {concretePlants.map((plant) => (
              <MachineCard key={plant.uuid} machine={plant} />
            ))}
          </CardGrid>
        )}
      </PageContainer>
    </MainLayout>
  );
};

const PageContainer = styled.div`
  padding-top: 10rem;
  background-color: ${colors.black};
  color: ${colors.white};
  min-height: 100vh;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${colors.yellow};
`;

const Message = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${colors.yellow};
  margin-top: 2rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 0 1rem;

  @media ${maxDeviceSize.smallScreen} {
    grid-template-columns: repeat(1, 1fr);
    padding: 3rem;
    gap: 1.5rem;
  }
  }
`;

export default ConcretePlantPage;
