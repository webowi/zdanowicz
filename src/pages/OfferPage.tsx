import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import { colors } from "../utils/colors";
import { motion } from "motion/react";
import { maxDeviceSize } from "../utils/deviceSize";

import {
  MdOutlineFoundation,
  MdOutlineHomeWork,
  MdOutlineFormatPaint,
  MdOutlineFactCheck,
  MdOutlineEnergySavingsLeaf,
} from "react-icons/md";
import { GiBrickWall } from "react-icons/gi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

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
      observer.disconnect();
    };
  }, []);

  return (
    <MainLayout>
      <HeaderWrap>
        <HeaderInner>
          <Kicker>Oferta</Kicker>
          <PageTitle>Nasza oferta</PageTitle>
          <HeaderLead>
            Kompleksowa realizacja robót budowlanych, fachowy nadzór i rzetelna
            dokumentacja — dla klientów indywidualnych oraz firm.
          </HeaderLead>
        </HeaderInner>
      </HeaderWrap>

      <ScopeSection ref={sectionRef}>
        <ScopeInner>
          <TopBlock
            as={motion.div}
            initial={{ y: 18, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Zakres działalności</SectionTitle>
            <SectionLead>
              Jesteśmy firmą budowlaną specjalizującą się w kompleksowej
              realizacji robót budowlanych. Łączymy solidne wykonawstwo z
              fachowym nadzorem technicznym, zapewniając bezpieczeństwo, jakość
              i terminowość realizowanych inwestycji.
            </SectionLead>
          </TopBlock>

          <CoreGrid>
            <ServiceCard
              as={motion.div}
              initial={{ y: 22, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <IconBadge aria-hidden="true">
                <MdOutlineFoundation size={20} />
              </IconBadge>
              <CardTitle>Roboty żelbetowe</CardTitle>
              <CardText>
                fundamenty • stropy • schody • elementy konstrukcyjne
              </CardText>
            </ServiceCard>

            <ServiceCard
              as={motion.div}
              initial={{ y: 22, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.14 }}
            >
              <IconBadge aria-hidden="true">
                <GiBrickWall size={20} />
              </IconBadge>
              <CardTitle>Roboty murarskie</CardTitle>
              <CardText>
                ściany nośne i działowe • nadproża • prace konstrukcyjne
              </CardText>
            </ServiceCard>

            <ServiceCard
              as={motion.div}
              initial={{ y: 22, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <IconBadge aria-hidden="true">
                <MdOutlineHomeWork size={20} />
              </IconBadge>
              <CardTitle>Elewacje i ocieplenia</CardTitle>
              <CardText>
                ocieplenia budynków • tynki elewacyjne • wykończenia fasad
              </CardText>
            </ServiceCard>

            <ServiceCard
              as={motion.div}
              initial={{ y: 22, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.26 }}
            >
              <IconBadge aria-hidden="true">
                <MdOutlineFormatPaint size={20} />
              </IconBadge>
              <CardTitle>Roboty wykończeniowe</CardTitle>
              <CardText>
                gładzie i malowanie • GK • podłogi • łazienki i kuchnie • montaż
                stolarki
              </CardText>
            </ServiceCard>
          </CoreGrid>

          <TwoCol>
            <TextCard
              as={motion.div}
              initial={{ y: 22, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.32 }}
            >
              <TextCardTitle>Nadzór i dokumentacja</TextCardTitle>
              <TextCardText>
                Każde zlecenie realizujemy z pełnym, profesjonalnym nadzorem
                budowlanym, zapewniając najwyższy standard realizacji
                inwestycji. Klient może skorzystać z naszego kierownika budowy
                lub wyznaczyć własnego specjalistę. Czuwamy nad zgodnością prac
                z projektem oraz przepisami prawa budowlanego i dbamy o rzetelną
                dokumentację budowy.
              </TextCardText>
            </TextCard>

            <TextCard
              as={motion.div}
              initial={{ y: 22, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.38 }}
            >
              <TextCardTitle>Zakres wykończeń</TextCardTitle>
              <TextCardText>
                Wykończenie ścian i sufitów (gładzie, malowanie, zabudowy GK),
                wykonanie podłóg (panele, parkiet, płytki), kompleksowe
                wykończenie łazienek i kuchni (okładziny, biały montaż), montaż
                stolarki i zabudów oraz prace instalacyjne i detale
                wykończeniowe.
              </TextCardText>
            </TextCard>
          </TwoCol>

          <AddonBox
            as={motion.section}
            initial={{ y: 22, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.44 }}
            aria-label="Dodatkowo oferujemy"
          >
            <AddonHeader>Dodatkowo oferujemy</AddonHeader>

            <GridAddons>
              <MiniCard>
                <MiniIcon>
                  <MdOutlineFactCheck size={20} />
                </MiniIcon>
                <div>
                  <MiniTitle>Nadzór budowlany wykonawczy</MiniTitle>
                  <MiniText>
                    kontrola jakości • odbiory etapowe • zgodność z projektem
                  </MiniText>
                </div>
              </MiniCard>

              <MiniCard>
                <MiniIcon>
                  <MdOutlineEnergySavingsLeaf size={20} />
                </MiniIcon>
                <div>
                  <MiniTitle>Świadectwa charakterystyki</MiniTitle>
                  <MiniText>
                    dla budynków i lokali • zgodnie z obowiązującymi przepisami
                  </MiniText>
                </div>
              </MiniCard>

              <MiniCard>
                <MiniIcon>
                  <HiOutlineClipboardDocumentList size={20} />
                </MiniIcon>
                <div>
                  <MiniTitle>Inwentaryzacje</MiniTitle>
                  <MiniText>
                    pomiary • dokumentacja • stan istniejący przed/po pracach
                  </MiniText>
                </div>
              </MiniCard>
            </GridAddons>

            <Note>
              Stawiamy na rzetelność, doświadczenie oraz indywidualne podejście
              — od etapu przygotowania, przez realizację, aż po odbiór końcowy.
            </Note>
          </AddonBox>
        </ScopeInner>
      </ScopeSection>
    </MainLayout>
  );
};

export default OfferPage;

const HeaderWrap = styled.header`
  background: #f6f7f9;
  padding: 9rem 2rem 3.5rem;
  display: flex;
  justify-content: center;

  @media ${maxDeviceSize.tablet} {
    padding: 10rem 1rem 3rem;
  }
`;

const HeaderInner = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
`;

const Kicker = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;

  background: rgba(238, 52, 56, 0.1);
  border: 1px solid rgba(238, 52, 56, 0.18);
  color: ${colors.orange};

  font-weight: 900;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-size: 0.85rem;

  margin-bottom: 14px;
`;

const PageTitle = styled.h1`
  margin: 0 0 10px;
  font-size: 3rem;
  font-weight: 950;
  color: #121316;

  @media ${maxDeviceSize.phone} {
    font-size: 2.2rem;
  }
`;

const HeaderLead = styled.p`
  margin: 0 auto;
  max-width: 820px;
  color: rgba(0, 0, 0, 0.72);
  font-size: 1.15rem;
  line-height: 1.6;

  @media ${maxDeviceSize.phone} {
    font-size: 1.02rem;
  }
`;

const ScopeSection = styled.section`
  position: relative;
  background: #f6f7f9;
  padding: 1.5rem 2rem 6rem;
  display: flex;
  justify-content: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: min(1200px, calc(100% - 4rem));
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.14),
      rgba(0, 0, 0, 0)
    );
    opacity: 0.55;
    pointer-events: none;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  @media ${maxDeviceSize.tablet} {
    padding: 1rem 1rem 4.5rem;

    &::before,
    &::after {
      width: calc(100% - 2rem);
    }
  }
`;

const ScopeInner = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const TopBlock = styled.div`
  text-align: center;
  max-width: 920px;
  margin: 0 auto 2.2rem;
`;

const SectionTitle = styled.h2`
  margin: 0 0 10px;
  font-size: 2.35rem;
  font-weight: 900;
  color: #121316;

  @media ${maxDeviceSize.tablet} {
    font-size: 1.75rem;
  }
`;

const SectionLead = styled.p`
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.72);
  font-size: 1.15rem;
  line-height: 1.6;

  @media ${maxDeviceSize.tablet} {
    font-size: 1.02rem;
  }
`;

const CoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  position: relative;
  overflow: hidden;

  border-radius: 18px;
  padding: 18px 16px;

  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(0, 0, 0, 0.06);

  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);

  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.75);

  transition:
    transform 0.18s ease,
    background 0.18s ease,
    border-color 0.18s ease,
    box-shadow 0.18s ease;

  &:before {
    content: "";
    position: absolute;
    inset: -1px;
    pointer-events: none;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.28),
      rgba(255, 255, 255, 0.1) 35%,
      rgba(255, 255, 255, 0) 62%
    );
    opacity: 0.65;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.7);
    box-shadow:
      0 22px 46px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.85);
  }
`;

const IconBadge = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 14px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: rgba(238, 52, 56, 0.1);
  border: 1px solid rgba(238, 52, 56, 0.18);
  color: ${colors.orange};

  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
`;

const CardTitle = styled.h3`
  margin: 10px 0 4px;
  font-size: 1.05rem;
  font-weight: 900;
  color: #111;
`;

const CardText = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.68);
  font-size: 0.98rem;
  line-height: 1.45;
`;

const TwoCol = styled.div`
  margin-top: 1.25rem;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const TextCard = styled.div`
  border-radius: 18px;
  padding: 18px 16px;

  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(0, 0, 0, 0.06);

  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);

  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.75);
`;

const TextCardTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1.05rem;
  font-weight: 950;
  color: #111;
`;

const TextCardText = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.72);
  font-size: 1.02rem;
  line-height: 1.65;
`;

const AddonBox = styled.section`
  margin-top: 1.25rem;
  border-radius: 18px;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.06);

  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);

  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 16px;
    right: 16px;
    top: 48px;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.12),
      rgba(0, 0, 0, 0)
    );
    opacity: 0.55;
    pointer-events: none;
  }
`;

const AddonHeader = styled.div`
  padding: 14px 16px 12px;
  font-size: 1.05rem;
  font-weight: 950;
  color: #111;
`;

const GridAddons = styled.div`
  padding: 0 16px 10px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const MiniCard = styled.div`
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 12px;

  padding: 12px 12px;
  border-radius: 14px;

  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.06);
`;

const MiniIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(238, 52, 56, 0.1);
  border: 1px solid rgba(238, 52, 56, 0.18);
  color: ${colors.orange};
`;

const MiniTitle = styled.div`
  font-weight: 950;
  color: #111;
  margin-bottom: 2px;
`;

const MiniText = styled.div`
  color: rgba(0, 0, 0, 0.68);
  font-size: 0.98rem;
  line-height: 1.45;
`;

const Note = styled.p`
  margin: 0;
  padding: 0 16px 16px;
  color: rgba(0, 0, 0, 0.68);
  line-height: 1.55;
  font-size: 0.98rem;
`;
