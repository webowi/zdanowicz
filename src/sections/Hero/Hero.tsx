import styled from "styled-components";
import { colors } from "../../utils/colors";
import { maxDeviceSize } from "../../utils/deviceSize";
import HeroVideoBackground from "../../assets/HeroSmoke.mp4";
import HeroPosterVideoBackground from "../../assets/heroSmokePoster.webp";
import { motion } from "motion/react";
import { pagesPaths } from "../../constans/pagesPaths";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../../components/atoms/Button/Button";
import { BackgroundVideo } from "../../components/atoms/BackgroundVideo/BackgroundVideo";

export const Hero = () => {
  return (
    <StyledSection>
      <BackgroundVideo
        src={HeroVideoBackground}
        poster={HeroPosterVideoBackground}
        videoDescription="Wideo przedstawiające czarne tło z tesktrurą kropek."
      />
      <StyledContentContainer>
        <StyledParagraphTop
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          ZD<StyledX>A</StyledX>NOWICZ
        </StyledParagraphTop>
        <StyledText
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Usługi ogólnobudowlane
        </StyledText>
        <StyledText
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Kompleksowa realizacja. Pełny nadzór. Spokojna głowa.
        </StyledText>

        <StyledSubTextContainer
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <StyledTyped
            preRenderFirstString={true}
            sequence={[
              "Wykonujemy m.in: roboty żelbetowe",
              "Wykonujemy m.in: roboty murarskie",
              "Wykonujemy m.in: roboty elewacyjne",
              "Wykonujemy m.in: roboty wykończeniowe",
              "Wykonujemy m.in: świadectwo charakterystyki energetycznej",
            ]}
            speed={20}
            repeat={Infinity}
          />
        </StyledSubTextContainer>
        <StyledButtonsWrapper
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          <Button to={pagesPaths.offer}>Zobacz ofertę</Button>
          <Button to={pagesPaths.contact} secondary={true}>
            Skontaktuj się z nami
          </Button>
        </StyledButtonsWrapper>
      </StyledContentContainer>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.black};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 1)
    );
    z-index: 1;
  }
`;

const StyledContentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.white};
  font-size: 1.8rem;
  z-index: 1000;
  padding: 10rem;

  @media ${maxDeviceSize.tablet} {
    padding: 4rem;
  }

  @media ${maxDeviceSize.phone} {
    width: auto;
    height: auto;
    bottom: 0;
    padding: 1rem 1rem 7rem;
  }
`;

const StyledParagraphTop = styled(motion.p)`
  text-transform: uppercase;
  color: ${colors.grey};
  font-weight: 200;
  font-size: 3rem;
  padding: 0.5rem;
  text-align: center;
  letter-spacing: 0.5rem;
`;

const StyledX = styled.span`
  color: ${colors.orange};
`;

const StyledText = styled(motion.p)`
  margin: 0;
  font-size: 3rem;
  text-align: center;

  @media ${maxDeviceSize.smallScreen} {
    font-size: 2.5rem;
  }

  @media ${maxDeviceSize.verySmallScreen} {
    font-size: 2.2rem;
  }

  @media ${maxDeviceSize.tablet} {
    font-size: 2rem;
  }
`;

const StyledTyped = styled(TypeAnimation)`
  font-size: 1.5rem;
  text-align: center;

  @media ${maxDeviceSize.smallScreen} {
    font-size: 1.2rem;
  }

  @media ${maxDeviceSize.verySmallScreen} {
    font-size: 1.1rem;
  }

  @media ${maxDeviceSize.tablet} {
    font-size: 1rem;
  }
`;

const StyledSubTextContainer = styled(motion.p)`
  margin: 0.5rem 0 2rem;
  font-size: 1.5rem;
  text-align: center;

  @media ${maxDeviceSize.smallScreen} {
    font-size: 1.2rem;
  }

  @media ${maxDeviceSize.verySmallScreen} {
    font-size: 1.1rem;
  }

  @media ${maxDeviceSize.tablet} {
    font-size: 1rem;
  }
`;

const StyledButtonsWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${maxDeviceSize.phone} {
    flex-direction: column;
  }
`;
