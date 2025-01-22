import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { getRealizations } from "../services/ResourceApiManager";
import MainLayout from "../layouts/MainLayout";
import { colors } from "../utils/colors";
import { RealizationCard } from "../components/molecules/RealizationCard/RealizationCard";
import { maxDeviceSize } from "../utils/deviceSize";
import HeroVideoBackground from "../assets/HeroSmoke.mp4";
import HeroPosterVideoBackground from "../assets/heroSmokePoster.webp";
import { Loading } from "../components/atoms/Loading/Loading";

interface RealizationImage {
  image: string;
}

interface Realization {
  uuid: string;
  name: string;
  description?: string;
  mainImage: string;
  images: RealizationImage[];
}

const RealizationsPage: React.FC = () => {
  const [realizations, setRealizations] = useState<Realization[]>([]);
  const [filteredRealizations, setFilteredRealizations] = useState<
    Realization[]
  >([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [backgroundHeight, setBackgroundHeight] = useState<string>("100vh");
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchRealizations = async () => {
      try {
        const data = await getRealizations();
        setRealizations(data as Realization[]);
        setFilteredRealizations(data as Realization[]);
      } catch (error) {
        console.error("Error fetching realizations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRealizations();
  }, []);

  useEffect(() => {
    const filtered = realizations.filter(
      (realization) =>
        realization.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        realization.description
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase())
    );
    setFilteredRealizations(filtered);
  }, [searchQuery, realizations]);

  useEffect(() => {
    const updateBackgroundHeight = () => {
      if (containerRef.current) {
        const { offsetHeight } = containerRef.current;
        setBackgroundHeight(
          `${Math.max(offsetHeight + 100, window.innerHeight)}px`
        );
      }
    };

    updateBackgroundHeight();
    window.addEventListener("resize", updateBackgroundHeight);

    return () => {
      window.removeEventListener("resize", updateBackgroundHeight);
    };
  }, [filteredRealizations]);

  return (
    <MainLayout>
      <BackgroundVideoContainer style={{ height: backgroundHeight }}>
        <video autoPlay loop muted playsInline>
          <source src={HeroVideoBackground} type="video/mp4" />
          <img
            src={HeroPosterVideoBackground}
            alt="Tło wideo nie jest obsługiwane"
          />
        </video>
      </BackgroundVideoContainer>
      <PageContainer ref={containerRef}>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Wyszukaj realizację..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>

        {isLoading ? (
          <Loading top="300%" />
        ) : filteredRealizations.length === 0 ? (
          <NoDataMessage>Brak realizacji do wyświetlenia.</NoDataMessage>
        ) : (
          <RealizationsContainer>
            {filteredRealizations.map((realization) => (
              <RealizationCard
                key={realization.uuid}
                realization={realization}
              />
            ))}
          </RealizationsContainer>
        )}
      </PageContainer>
    </MainLayout>
  );
};

const BackgroundVideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PageContainer = styled.div`
  position: relative;
  z-index: 2; /* Zawartość powyżej tła */
  padding-top: 10rem;
  color: ${colors.white};
  width: 100%;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 0.8rem;
  font-size: 1.2rem;
  border: 2px solid ${colors.yellow};
  border-radius: 5px;
  background: ${colors.lightBlack};
  color: ${colors.white};
  outline: none;

  &::placeholder {
    color: ${colors.grayLight};
  }

  @media ${maxDeviceSize.phone} {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    width: 80%;
  }
`;

export const RealizationsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 5rem;
  justify-content: center;

  @media ${maxDeviceSize.smallScreen} {
    grid-template-columns: repeat(3, 1fr);
    padding: 3rem;
    gap: 1.5rem;
  }

  @media ${maxDeviceSize.tablet} {
    grid-template-columns: repeat(2, 1fr);
    padding: 3rem;
    gap: 1.5rem;
  }

  @media ${maxDeviceSize.phone} {
    grid-template-columns: repeat(1, 1fr);
    padding: 2rem;
    gap: 1rem;
  }
`;

const NoDataMessage = styled.div`
  text-align: center;
  color: ${colors.grayLight};
  font-size: 1.5rem;
  margin-top: 2rem;
`;

export default RealizationsPage;
