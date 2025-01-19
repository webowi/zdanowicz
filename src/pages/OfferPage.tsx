import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import BuildingImage from "../../assets/building.jpg";
import RoadImage from "../../assets/road.jpg";
import ExcavationImage from "../../assets/excavation.jpg";
import DemolitionImage from "../../assets/demolition.jpg";

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

export const Offer: React.FC = () => {
  return (
    <OfferSection>
      {offerData.map((item, index) => (
        <OfferItem key={index} isImageLeft={item.isImageLeft}>
          <ImageContainer>
            <Image src={item.image} alt={item.title} />
          </ImageContainer>
          <TextContainer>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </TextContainer>
        </OfferItem>
      ))}
    </OfferSection>
  );
};

const OfferSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem 0;
  background-color: ${colors.black};
`;

const OfferItem = styled.div<{ isImageLeft: boolean }>`
  display: flex;
  flex-direction: ${({ isImageLeft }) => (isImageLeft ? "row" : "row-reverse")};
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 3rem 1rem;
  width: 100%;

  &:nth-child(even) {
    background-color: ${colors.lightBlack};
  }

  @media (max-width: 768px) {
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

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
`;

const TextContainer = styled.div`
  flex: 1;
  color: ${colors.white};
  text-align: left;

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

  @media (max-width: 768px) {
    text-align: center;
  }
`;
