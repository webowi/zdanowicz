import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/colors";
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
  background: rgba(0, 0, 0, 0.6);
  color: ${colors.white};
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  max-width: 600px;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    color: ${colors.orange};
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
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
