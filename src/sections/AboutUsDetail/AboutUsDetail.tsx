import React from "react";
import styled from "styled-components";
import { maxDeviceSize } from "../../utils/deviceSize";
import { colors } from "../../utils/colors";

import {
  MdOutlineFoundation,
  MdOutlineHomeWork,
  MdOutlineFormatPaint,
  MdOutlineFactCheck,
  MdOutlineEnergySavingsLeaf,
} from "react-icons/md";

import { GiBrickWall } from "react-icons/gi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

import { AboutBox } from "../../components/molecules/AboutBox/AboutBox";
import { motion } from "framer-motion";

interface Props {
  $isHighlighted: boolean;
}

const viewportBase = {
  once: true,
  amount: 0.28,
  margin: "0px 0px -18% 0px",
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const grid = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

export const AboutUsDetail: React.FC<Props> = ({ $isHighlighted = false }) => {
  return (
    <Section $isHighlighted={$isHighlighted}>
      <Content>
        <HeaderBlock
          as={motion.div}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportBase}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Kicker>Zakres działalności</Kicker>
          <Header>Wykonujemy kompleksowe prace budowlane</Header>
          <Lead>
            Solidne wykonawstwo + fachowy nadzór techniczny. Bezpiecznie,
            terminowo i z dokumentacją.
          </Lead>
        </HeaderBlock>

        <GridCore
          as={motion.div}
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.22,
            margin: "0px 0px -22% 0px",
          }}
        >
          <MotionItem
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <AboutBox
              Icon={MdOutlineFoundation}
              Title="Roboty żelbetowe"
              Subtitle="fundamenty • stropy • schody • konstrukcje"
              duration={0.2}
            />
          </MotionItem>

          <MotionItem
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <AboutBox
              Icon={GiBrickWall}
              Title="Roboty murarskie"
              Subtitle="ściany nośne i działowe • nadproża"
              duration={0.3}
            />
          </MotionItem>

          <MotionItem
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <AboutBox
              Icon={MdOutlineHomeWork}
              Title="Elewacje i ocieplenia"
              Subtitle="docieplenia • tynki • wykończenia fasad"
              duration={0.4}
            />
          </MotionItem>

          <MotionItem
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <AboutBox
              Icon={MdOutlineFormatPaint}
              Title="Wykończenia wnętrz"
              Subtitle="gładzie • GK • podłogi • łazienki i kuchnie"
              duration={0.5}
            />
          </MotionItem>
        </GridCore>

        <AddonBox
          as={motion.section}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
            margin: "0px 0px -18% 0px",
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
                  kontrola jakości • odbiory etapowe • zgodność z projektem i
                  przepisami
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
            Każde zlecenie realizujemy z profesjonalnym nadzorem budowlanym.
            Możesz skorzystać z naszego kierownika budowy lub wyznaczyć
            własnego.
          </Note>
        </AddonBox>
      </Content>
    </Section>
  );
};

const Section = styled.section<Props>`
  position: relative;
  background: ${({ $isHighlighted }) =>
    $isHighlighted ? "#eef0f3" : "#f6f7f9"};
  padding: 5.5rem 2rem 6rem;
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
    padding: 3.5rem 1rem 4.5rem;

    &::before,
    &::after {
      width: calc(100% - 2rem);
    }
  }
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const HeaderBlock = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto 2.2rem;
`;

const Kicker = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 8px 12px;
  border-radius: 999px;

  background: rgba(238, 52, 56, 0.1);
  border: 1px solid rgba(238, 52, 56, 0.18);
  color: ${colors.orange};

  font-weight: 800;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-size: 0.85rem;

  margin-bottom: 14px;
`;

const Header = styled.h2`
  margin: 0 0 10px;
  font-size: 2.35rem;
  font-weight: 900;
  color: #121316;

  @media ${maxDeviceSize.tablet} {
    font-size: 1.75rem;
  }
`;

const Lead = styled.p`
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.72);
  font-size: 1.15rem;
  line-height: 1.6;

  @media ${maxDeviceSize.tablet} {
    font-size: 1.02rem;
  }
`;

const GridCore = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const MotionItem = styled(motion.div)`
  will-change: transform, opacity;

  height: 100%;
  display: flex;

  & > * {
    width: 100%;
    height: 100%;
  }
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
`;

const AddonHeader = styled.div`
  padding: 14px 16px 10px;
  font-size: 1.05rem;
  font-weight: 900;
  color: #111;
`;

const GridAddons = styled.div`
  padding: 0 16px 10px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media ${maxDeviceSize.tablet} {
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
  font-weight: 900;
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
