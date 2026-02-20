import React from "react";
import styled from "styled-components";
import GroutImage from "../../assets/grout.webp";

export const WhyUs: React.FC = () => {
  return (
    <StyledSection>
      <ContentOverlay>
        <TextBlock>
          <h2>Budujemy odpowiedzialnie</h2>
          <p>
            Każdą inwestycję realizujemy pod pełnym nadzorem budowlanym, dbając
            o zgodność z projektem, przepisami oraz najwyższy standard
            wykonania.
          </p>
          <p>
            Zapewniamy rzetelną dokumentację i kontrolę na każdym etapie — od
            pierwszych prac po odbiór końcowy.
          </p>
        </TextBlock>
      </ContentOverlay>
      <ImageContainer />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ContentOverlay = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const TextBlock = styled.div`
  background: rgba(255, 255, 255, 0.65);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border-radius: 18px;

  padding: 2rem;

  color: #111;

  border: 1px solid rgba(255, 255, 255, 0.6);

  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${GroutImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 1;
  filter: brightness(0.7);
`;
