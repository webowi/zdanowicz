import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { ButtonModal } from "../../atoms/ButtonModal/ButtonModal";
import { FaTimes } from "react-icons/fa";
import { maxDeviceSize } from "../../../utils/deviceSize";

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
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
      if (e.key === "ArrowLeft")
        setActiveIndex(
          (i) =>
            (i - 1 + realization.images.length) % realization.images.length,
        );
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i + 1) % realization.images.length);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen, realization.images.length]);

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
        <ModalOverlay
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) toggleModal();
          }}
        >
          <ModalDialog
            role="dialog"
            aria-modal="true"
            aria-labelledby={`realization-title-${realization.uuid}`}
            aria-describedby={`realization-desc-${realization.uuid}`}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <ModalTopBar>
              <ModalMeta>
                <ModalTitle id={`realization-title-${realization.uuid}`}>
                  {realization.name}
                </ModalTitle>
                {realization.description ? (
                  <ModalSub
                    id={`realization-desc-${realization.uuid}`}
                    title={realization.description}
                  >
                    {realization.description}
                  </ModalSub>
                ) : null}
              </ModalMeta>

              <CloseButton
                type="button"
                onClick={toggleModal}
                aria-label="Zamknij"
              >
                <FaTimes />
              </CloseButton>
            </ModalTopBar>

            <Lightbox>
              <NavBtn
                type="button"
                onClick={() =>
                  setActiveIndex(
                    (i) =>
                      (i - 1 + realization.images.length) %
                      realization.images.length,
                  )
                }
                aria-label="Poprzednie zdjęcie"
                $pos="left"
              >
                ‹
              </NavBtn>

              <MainShotWrap>
                <MainShot
                  src={
                    realization.images[activeIndex]?.image ??
                    realization.mainImage
                  }
                  alt={`${realization.name} — zdjęcie ${activeIndex + 1}`}
                />
              </MainShotWrap>

              <NavBtn
                type="button"
                onClick={() =>
                  setActiveIndex((i) => (i + 1) % realization.images.length)
                }
                aria-label="Następne zdjęcie"
                $pos="right"
              >
                ›
              </NavBtn>
            </Lightbox>

            <ThumbStrip aria-label="Miniatury">
              {realization.images.map((img, idx) => (
                <ThumbButton
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Wybierz zdjęcie ${idx + 1}`}
                  aria-current={idx === activeIndex}
                  $active={idx === activeIndex}
                >
                  <ThumbImage src={img.image} alt="" loading="lazy" />
                </ThumbButton>
              ))}
            </ThumbStrip>
          </ModalDialog>
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
    box-shadow: 0px 1px 18px 1px ${colors.orange};
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
  inset: 0;
  z-index: 3000;

  display: grid;
  place-items: center;

  padding: 18px;

  background: rgba(0, 0, 0, 0.62);
  backdrop-filter: blur(10px) saturate(120%);
  -webkit-backdrop-filter: blur(10px) saturate(120%);

  @media ${maxDeviceSize.phone} {
    padding: 0;
    place-items: end center;
  }
`;

const ModalDialog = styled.div`
  width: min(980px, 100%);
  max-height: min(86vh, 860px);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  border-radius: 22px;

  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(0, 0, 0, 0.08);

  box-shadow:
    0 34px 80px rgba(0, 0, 0, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.72);

  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);

  @media ${maxDeviceSize.phone} {
    width: 100%;
    max-height: 92vh;
    border-radius: 22px 22px 0 0;
  }
`;

const ModalTopBar = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 16px 10px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const ModalMeta = styled.div`
  min-width: 0;
  flex: 1;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-weight: 950;
  color: #111;
  letter-spacing: 0.01em;
`;

const ModalSub = styled.p`
  margin: 6px 0 0;
  color: rgba(0, 0, 0, 0.62);
  line-height: 1.5;
  font-weight: 650;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CloseButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 14px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.75);
  color: #111;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition:
    transform 0.16s ease,
    background 0.16s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.92);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Lightbox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 56px 1fr 56px;
  align-items: center;
  gap: 12px;

  padding: 14px;

  @media ${maxDeviceSize.phone} {
    grid-template-columns: 1fr;
    padding: 12px;
  }
`;

const MainShotWrap = styled.div`
  border-radius: 18px;
  overflow: hidden;

  background: rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.06);
`;

const MainShot = styled.img`
  width: 100%;
  height: min(52vh, 520px);
  object-fit: cover;
  display: block;

  @media ${maxDeviceSize.phone} {
    height: min(46vh, 420px);
  }
`;

const NavBtn = styled.button<{ $pos: "left" | "right" }>`
  width: 56px;
  height: 56px;
  border-radius: 18px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.78);
  color: #111;

  font-size: 34px;
  line-height: 1;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: transform 0.16s ease;

  &:hover {
    transform: translateY(-1px);
  }

  @media ${maxDeviceSize.phone} {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;

    ${({ $pos }) => ($pos === "left" ? "left: 14px;" : "right: 14px;")}

    &:hover {
      transform: translateY(-50%);
    }
  }
`;

const ThumbStrip = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;

  padding: 10px 14px 14px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);

  -webkit-overflow-scrolling: touch;
`;

const ThumbButton = styled.button<{ $active: boolean }>`
  flex: 0 0 auto;
  padding: 0;
  border-radius: 14px;

  border: 2px solid
    ${({ $active }) => ($active ? colors.orange : "transparent")};
  background: transparent;
  cursor: pointer;
`;

const ThumbImage = styled.img`
  width: 72px;
  height: 54px;
  border-radius: 12px;
  object-fit: cover;
  display: block;
`;
