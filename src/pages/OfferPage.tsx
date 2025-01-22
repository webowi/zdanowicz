import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import BuildingImage from "../assets/building.webp";
import RoadImage from "../assets/road.webp";
import ExcavationImage from "../assets/excavation.webp";
import DemolitionImage from "../assets/demolation.webp";
import MainLayout from "../layouts/MainLayout";
import { Image } from "../components/atoms/Image/Image";
import { maxDeviceSize } from "../utils/deviceSize";

const offerData = [
  {
    title: "Usługi budowlane",
    description:
      "Kompleksowe usługi budowlane, w tym budowa domów, obiektów przemysłowych i infrastruktury. Z nami każda inwestycja jest realizowana solidnie i terminowo.",
    image: BuildingImage,
    isImageLeft: true,
  },
  {
    title: "Usługi drogowe",
    description:
      "Budowa i modernizacja dróg, chodników oraz innych elementów infrastruktury drogowej. Gwarantujemy trwałość i jakość wykonania.",
    image: RoadImage,
    isImageLeft: false,
  },
  {
    title: "Roboty ziemne",
    description:
      "Profesjonalne roboty ziemne, w tym wykopy, niwelacja terenu i przygotowanie pod inwestycje. Pracujemy z najwyższej jakości sprzętem.",
    image: ExcavationImage,
    isImageLeft: true,
  },
  {
    title: "Wyburzenia",
    description:
      "Bezpieczne i szybkie wyburzenia budynków oraz innych obiektów. Dbamy o minimalizację wpływu na środowisko i precyzję wykonania.",
    image: DemolitionImage,
    isImageLeft: false,
  },
];

const OfferPage: React.FC = () => {
  return (
    <MainLayout>
      <OfferHeader>
        <PageTitle>Nasza oferta</PageTitle>
      </OfferHeader>
      <OfferSection>
        {offerData.map((item, index) => (
          <OfferItem key={index} isImageLeft={item.isImageLeft}>
            <ImageContainer>
              <Image loading="eager" src={item.image} alt={item.title} />
            </ImageContainer>
            <TextContainer>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </TextContainer>
          </OfferItem>
        ))}
      </OfferSection>
    </MainLayout>
  );
};

const OfferHeader = styled.div`
  width: 100%;
  text-align: center;
  background: ${colors.black};
  padding-top: 10rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: ${colors.yellow};
`;

const OfferSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem 0;
  background: ${colors.black};
`;

const OfferItem = styled.div<{ isImageLeft: boolean }>`
  display: flex;
  flex-direction: ${({ isImageLeft }) => (isImageLeft ? "row" : "row-reverse")};
  align-items: center;
  justify-content: center;
  padding: 5rem;
  width: 100%;
  background: ${({ isImageLeft }) =>
    !isImageLeft
      ? `linear-gradient(to bottom, ${colors.black}, ${colors.lightBlack} 10%, ${colors.lightBlack} 90%, ${colors.black})`
      : "none"};

  @media ${maxDeviceSize.phone} {
    padding: 3rem 1rem;
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  flex: 1;
  color: ${colors.white};
  text-align: left;
  max-width: 800px;
  margin-left: 2rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${colors.yellow};
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${colors.grayLight};
  }

  @media ${maxDeviceSize.tablet} {
    text-align: center;
    padding: 2rem;
    margin-left: 0;
  }

  @media ${maxDeviceSize.phone} {
    text-align: center;
    padding-top: 2rem;
    margin-left: 0;
  }
`;

export default OfferPage;
