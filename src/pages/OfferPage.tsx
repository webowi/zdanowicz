import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import MainLayout from "../layouts/MainLayout";
import { maxDeviceSize } from "../utils/deviceSize";
import { motion } from "motion/react";

const OfferPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, []);

  return (
    <MainLayout>
      <OfferHeader>
        <PageTitle>Nasza oferta</PageTitle>
      </OfferHeader>

      <ScopeSection ref={sectionRef}>
        <ScopeContainer>
          <ScopeTitle
            as={motion.h2}
            initial={{ y: 50, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            Zakres działalności
          </ScopeTitle>

          <ScopeLead
            as={motion.p}
            initial={{ y: 50, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.05 }}
          >
            Jesteśmy firmą budowlaną specjalizującą się w kompleksowej
            realizacji robót budowlanych dla klientów indywidualnych oraz firm.
            Łączymy solidne wykonawstwo z fachowym nadzorem technicznym,
            zapewniając bezpieczeństwo, jakość i terminowość realizowanych
            inwestycji.
          </ScopeLead>

          <ScopeGrid>
            <MotionCard
              initial={{ y: 70, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <h3>Wykonujemy m.in.:</h3>
              <ul>
                <li>
                  roboty żelbetowe (fundamenty, stropy, schody, elementy
                  konstrukcyjne)
                </li>
                <li>
                  roboty murarskie (ściany nośne, działowe, prace konstrukcyjne)
                </li>
                <li>
                  roboty elewacyjne (ocieplenia budynków, tynki elewacyjne,
                  prace wykończeniowe)
                </li>
                <li>
                  roboty wykończeniowe: wykończenie ścian i sufitów (gładzie,
                  malowanie, zabudowy GK), wykonanie podłóg (panele, parkiet,
                  płytki), kompleksowe wykończenie łazienek i kuchni (okładziny,
                  biały montaż), montaż stolarki i zabudów (drzwi, szafy, meble
                  na wymiar) oraz prace instalacyjne i dekoracyjne (oświetlenie,
                  osprzęt, detale wykończeniowe).
                </li>
              </ul>
            </MotionCard>

            <MotionCard
              initial={{ y: 70, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3>Nadzór i dokumentacja</h3>
              <p>
                Każde zlecenie realizujemy z pełnym, profesjonalnym nadzorem
                budowlanym, zapewniając najwyższy standard realizacji
                inwestycji. Klient ma możliwość skorzystania z naszego
                doświadczonego kierownika budowy lub wyznaczenia własnego
                specjalisty. Czuwamy nad zgodnością wszystkich prac z projektem
                oraz obowiązującymi przepisami prawa budowlanego, dbając
                jednocześnie o rzetelne i kompletne prowadzenie dokumentacji
                budowy.
              </p>

              <Divider />

              <h3>Dodatkowo oferujemy</h3>
              <p>
                Sporządzanie świadectw charakterystyki energetycznej dla
                budynków oraz lokali, zgodnie z obowiązującymi przepisami.
              </p>
            </MotionCard>
          </ScopeGrid>

          <ScopeFooter
            as={motion.p}
            initial={{ y: 50, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            Stawiamy na rzetelność, doświadczenie oraz indywidualne podejście do
            każdej inwestycji — od etapu przygotowania, przez realizację, aż po
            odbiór końcowy.
          </ScopeFooter>
        </ScopeContainer>
      </ScopeSection>
    </MainLayout>
  );
};

const OfferHeader = styled.div`
  width: 100%;
  text-align: center;
  background: ${colors.black};
  padding-top: 10rem;
  padding-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: ${colors.orange};

  @media ${maxDeviceSize.phone} {
    font-size: 2.2rem;
  }
`;

const ScopeSection = styled.section`
  background: ${colors.black};
  width: 100%;
  padding: 2rem 0 6rem;
`;

const ScopeContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media ${maxDeviceSize.phone} {
    padding: 0 1rem;
  }
`;

const ScopeTitle = styled.h2`
  color: ${colors.orange};
  font-size: 2.2rem;
  margin: 0 0 1rem;

  @media ${maxDeviceSize.phone} {
    font-size: 1.8rem;
  }
`;

const ScopeLead = styled.p`
  color: ${colors.grayLight};
  font-size: 1.15rem;
  line-height: 1.7;
  margin: 0 0 2rem;
`;

const ScopeGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;

  @media ${maxDeviceSize.tablet} {
    grid-template-columns: 1fr;
  }
`;

const MotionCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2rem;
  color: ${colors.white};
  text-align: left;

  h3 {
    color: ${colors.white};
    font-size: 1.2rem;
    margin: 0 0 1rem;
  }

  p {
    color: ${colors.grayLight};
    font-size: 1.05rem;
    line-height: 1.7;
    margin: 0;
  }

  ul {
    margin: 0;
    padding-left: 1.2rem;
  }

  li {
    color: ${colors.grayLight};
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 0.8rem;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 1.5rem 0;
`;

const ScopeFooter = styled.p`
  margin: 2rem 0 0;
  color: ${colors.grayLight};
  font-size: 1.05rem;
  line-height: 1.7;
  text-align: left;
  opacity: 0.9;
`;

export default OfferPage;
