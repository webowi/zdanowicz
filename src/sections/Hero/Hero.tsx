import styled from "styled-components";
import { colors } from "../../utils/colors";
import { maxDeviceSize } from "../../utils/deviceSize";
import buldingPlanVideo from "../../assets/buldingPlanVideo.mp4";
import buldingPlanPoster from "../../assets/buldingPlanPoster.webp";
import { motion } from "motion/react";
import { pagesPaths } from "../../constans/pagesPaths";
import { Button } from "../../components/atoms/Button/Button";
import { BackgroundVideo } from "../../components/atoms/BackgroundVideo/BackgroundVideo";
import { MdCheckCircle } from "react-icons/md";

export const Hero = () => {
  return (
    <StyledSection>
      <BackgroundVideo
        src={buldingPlanVideo}
        poster={buldingPlanPoster}
        videoDescription="Wideo z budowy"
      />

      <StyledContentContainer>
        <TopBadge
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <MdCheckCircle size={18} />
          Darmowa wycena
        </TopBadge>

        <StyledParagraphTop
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          ZD<StyledX>A</StyledX>NOWICZ
        </StyledParagraphTop>

        <StyledHeadline
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0 }}
        >
          Usługi ogólnobudowlane
        </StyledHeadline>

        <StyledLead
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1 }}
        >
          Kompleksowa realizacja. Pełny nadzór. Spokojna głowa.
        </StyledLead>

        <StyledButtonsWrapper
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Button to={pagesPaths.offer}>Zobacz ofertę</Button>
          <Button to={pagesPaths.contact} variant="tertiary">
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
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background: radial-gradient(
      80% 70% at 50% 35%,
      rgba(0, 0, 0, 0.28),
      rgba(0, 0, 0, 0.55)
    );
  }

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;

    background: linear-gradient(
      to bottom,
      rgba(246, 247, 249, 0) 0%,
      rgba(246, 247, 249, 0) 84%,
      rgba(246, 247, 249, 0.02) 88%,
      rgba(246, 247, 249, 0.06) 90%,
      rgba(246, 247, 249, 0.12) 92%,
      rgba(246, 247, 249, 0.22) 94%,
      rgba(246, 247, 249, 0.36) 96%,
      rgba(246, 247, 249, 0.55) 97.5%,
      rgba(246, 247, 249, 0.75) 98.5%,
      rgba(246, 247, 249, 0.92) 99.3%,
      rgba(246, 247, 249, 1) 100%
    );
  }
`;

const StyledContentContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.white};
  z-index: 3;
  padding: 10rem;

  @media ${maxDeviceSize.tablet} {
    padding: 4rem;
  }

  @media ${maxDeviceSize.phone} {
    inset: auto;
    bottom: 0;
    padding: 1rem 1rem 7rem;
  }
`;

const TopBadge = styled(motion.div)`
  width: fit-content;
  margin: 0 auto 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 8px 12px;
  border-radius: 999px;

  color: ${colors.white};
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(10px);

  font-size: 1rem;
  font-weight: 700;

  svg {
    color: ${colors.orange};
  }
`;

const StyledParagraphTop = styled(motion.p)`
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
  font-weight: 200;
  font-size: 3rem;
  padding: 0.5rem;
  text-align: center;
  letter-spacing: 0.5rem;
`;

const StyledX = styled.span`
  color: ${colors.orange};
`;

const StyledHeadline = styled(motion.h1)`
  margin: 0;
  font-size: 3.2rem;
  text-align: center;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: 0.01em;

  @media ${maxDeviceSize.tablet} {
    font-size: 2.2rem;
  }
`;

const StyledLead = styled(motion.p)`
  margin: 0.9rem 0 2rem;
  font-size: 1.35rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.5;

  @media ${maxDeviceSize.tablet} {
    font-size: 1.1rem;
  }
`;

const StyledButtonsWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media ${maxDeviceSize.phone} {
    flex-direction: column;
    width: 100%;

    & > a,
    & > button {
      width: 100%;
      justify-content: center;
    }
  }
`;
