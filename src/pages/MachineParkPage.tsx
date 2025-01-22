import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMachines } from "../services/ResourceApiManager";
import { colors } from "../utils/colors";
import MainLayout from "../layouts/MainLayout";
import { Loading } from "../components/atoms/Loading/Loading";
import { MachineCard } from "../components/molecules/MachineCard/MachineCard";
import { maxDeviceSize } from "../utils/deviceSize";

interface Machine {
  uuid: string;
  name: string;
  description?: string;
  mainImage: string;
}

const MachineParkPage: React.FC = () => {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const data = await getMachines();
        setMachines(data);
      } catch (err) {
        console.error("Error fetching machines:", err);
        setError("Nie udało się pobrać danych. Spróbuj ponownie później.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMachines();
  }, []);

  return (
    <MainLayout>
      <PageContainer>
        <Header>Park maszyn</Header>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Message>{error}</Message>
        ) : machines.length === 0 ? (
          <Message>Brak maszyn do wyświetlenia.</Message>
        ) : (
          <CardGrid>
            {machines.map((machine) => (
              <MachineCard key={machine.uuid} machine={machine} />
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
`;

export default MachineParkPage;
