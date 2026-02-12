import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { ButtonModal } from "../../atoms/ButtonModal/ButtonModal";
import { FaTimes } from "react-icons/fa";

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

interface RealizationCardProps {
  realization: Realization;
}

export const RealizationCard: React.FC<RealizationCardProps> = ({
  realization,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Card>
        <CardImage
          src={realization.mainImage}
          alt={realization.name}
          loading="lazy"
        />
        <CardContent>
          <CardHeading>{realization.name}</CardHeading>
          {realization.description && (
            <CardDescription>
              {realization.description.slice(0, 100)}...
            </CardDescription>
          )}

          <CardButtonContainer onClick={toggleModal}>
            <ButtonModal>Zobacz więcej</ButtonModal>
          </CardButtonContainer>
        </CardContent>
      </Card>

      {isModalOpen && (
        <ModalOverlay onClick={toggleModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseIcon onClick={toggleModal}>
              <FaTimes />
            </CloseIcon>
            <ModalImageGallery>
              {realization.images.map((image, index) => (
                <GalleryImage
                  key={index}
                  src={image.image}
                  alt={`Realization ${index + 1}`}
                />
              ))}
            </ModalImageGallery>
            <ModalHeading>{realization.name}</ModalHeading>
            <ModalDescription>{realization.description}</ModalDescription>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

const Card = styled.div`
  width: 24rem;
  height: 36rem;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  color: ${colors.white};
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  box-shadow: 0px 1px 18px 1px rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 1px 18px 1px rgba(249, 178, 0, 1);
  }
`;

const CardImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.9;
  transition: opacity 0.2s ease-out;

  ${Card}:hover & {
    opacity: 1;
    transition: opacity 0.3s ease-in;
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: -50px;
  left: 0;
  padding: 30px;
  background: rgba(0, 0, 0, 0.6);
  color: ${colors.white};
  transition:
    transform 0.3s,
    inset 0.3s ease-out;

  ${Card}:hover & {
    bottom: 0%;
  }
`;

const CardHeading = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  text-transform: uppercase;
  transition:
    transform 0.3s,
    inset 0.3s ease-out;

  ${Card}:hover & {
    transform: translateY(-10px);
  }
`;

const CardDescription = styled.p`
  margin: 10px 0;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.3s ease-out;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const CardButtonContainer = styled.div`
  margin-top: 10px;
  background: none;
  border: none;
  color: ${colors.orange};
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-out;

  .material-symbols-outlined {
    margin-left: 5px;
  }

  ${Card}:hover & {
    opacity: 1;
    transition: opacity 0.5s ease-in;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${colors.lightBlack};
  padding: 2rem;
  border-radius: 10px;
  max-width: 800px;
  width: 90%;
  text-align: center;
  color: ${colors.white};
  position: relative;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${colors.orange};

  &:hover {
    color: ${colors.white};
  }
`;

const ModalImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const GalleryImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
`;

const ModalHeading = styled.h2`
  margin-top: 1rem;
  color: ${colors.orange};
`;

const ModalDescription = styled.p`
  font-size: 1rem;
  color: ${colors.grayLight};
`;
