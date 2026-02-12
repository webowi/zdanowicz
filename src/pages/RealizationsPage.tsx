import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import { colors } from "../utils/colors";
import { RealizationCard } from "../components/molecules/RealizationCard/RealizationCard";
import { maxDeviceSize } from "../utils/deviceSize";
import HeroVideoBackground from "../assets/HeroSmoke.mp4";
import HeroPosterVideoBackground from "../assets/heroSmokePoster.webp";
import HouseImage from "../assets/building.webp";
import ExcavationImage from "../assets/excavation.webp";
import { motion } from "motion/react";

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

const realizations: Realization[] = [
  {
    uuid: "1",
    name: "Budowa domu jednorodzinnego",
    description:
      "Kompleksowa realizacja budowy domu jednorodzinnego, obejmująca wszystkie etapy od projektu po wykończenie.",
    mainImage: HouseImage,
    images: [{ image: HouseImage }, { image: HouseImage }],
  },
  {
    uuid: "2",
    name: "Hala magazynowa",
    description:
      "Realizacja hali magazynowej o powierzchni 2000 m², z zastosowaniem nowoczesnych technologii budowlanych.",
    mainImage: ExcavationImage,
    images: [{ image: ExcavationImage }, { image: ExcavationImage }],
  },
];

const RealizationsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [backgroundHeight, setBackgroundHeight] = useState<string>("100vh");
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filteredRealizations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return realizations;

    return realizations.filter((r) => {
      const name = r.name.toLowerCase();
      const desc = (r.description ?? "").toLowerCase();
      return name.includes(q) || desc.includes(q);
    });
  }, [searchQuery]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateBackgroundHeight = () => {
      const { offsetHeight } = node;
      setBackgroundHeight(
        `${Math.max(offsetHeight + 100, window.innerHeight)}px`,
      );
    };

    updateBackgroundHeight();
    window.addEventListener("resize", updateBackgroundHeight);

    return () => {
      window.removeEventListener("resize", updateBackgroundHeight);
    };
  }, [filteredRealizations.length]);

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

        {filteredRealizations.length === 0 ? (
          <NoDataMessage>Brak realizacji do wyświetlenia.</NoDataMessage>
        ) : (
          <RealizationsContainer>
            {filteredRealizations.map((realization, index) => (
              <AnimatedCard
                key={realization.uuid}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: Math.min(index * 0.08, 0.4),
                }}
              >
                <RealizationCard realization={realization} />
              </AnimatedCard>
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
  z-index: 2;
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
  border: 2px solid ${colors.orange};
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

const RealizationsContainer = styled.div`
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

const AnimatedCard = styled(motion.div)`
  will-change: transform, opacity;
`;

const NoDataMessage = styled.div`
  text-align: center;
  color: ${colors.grayLight};
  font-size: 1.5rem;
  margin-top: 2rem;
`;

export default RealizationsPage;
