import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { maxDeviceSize } from "../../utils/deviceSize";
import { colors } from "../../utils/colors";
import roofImage from "../../assets/roof.webp";

export const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 },
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, []);

  return (
    <StyledAboutWrapper ref={sectionRef}>
      <RoofBg aria-hidden="true" />
      <StyledContent>
        <StyledTitleContent
          initial={{ y: 100, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <StyledTitle>
            ZD<StyledX>A</StyledX>NOWICZ
          </StyledTitle>
          Jesteśmy <span>firmą budowlaną</span> specjalizującą się w
          kompleksowej realizacji robót budowlanych dla klientów indywidualnych
          oraz firm.
        </StyledTitleContent>
        <StyledDescription
          initial={{ y: 100, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        >
          Łączymy solidne wykonawstwo z fachowym nadzorem technicznym,
          zapewniając bezpieczeństwo, jakość i terminowość realizowanych
          inwestycji.
          <br />
          <br />
          Każde zlecenie realizujemy z pełnym, profesjonalnym nadzorem
          budowlanym, zapewniając najwyższy standard realizacji inwestycji.
        </StyledDescription>
      </StyledContent>
    </StyledAboutWrapper>
  );
};

const StyledAboutWrapper = styled.section`
  position: relative;
  background-color: ${colors.black};
  color: ${colors.white};
  width: 100%;
  min-height: 50vh;
  padding: 5rem;

  display: flex;
  align-items: center;

  overflow: hidden;
`;

const RoofBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background-image: url(${roofImage});
  background-repeat: no-repeat;

  background-position: top right;

  background-size: min(900px, 70vw) auto;

  opacity: 0.22;
  filter: saturate(0.8) contrast(1.05);

  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.85) 35%,
    rgba(0, 0, 0, 0) 75%
  );

  @supports not (mask-image: linear-gradient(black, transparent)) {
    background-image:
      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
      url(${roofImage});
  }

  @media ${maxDeviceSize.tablet} {
    background-position: top center;
    background-size: min(700px, 95vw) auto;
    opacity: 0.18;
  }

  @media ${maxDeviceSize.tablet} {
    display: none;
  }
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 1;
`;

const StyledTitle = styled(motion.h2)`
  color: ${colors.orange};
`;

const StyledX = styled.span`
  color: ${colors.grey} !important;
`;

const StyledTitleContent = styled(motion.div)`
  font-size: 2.5rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  max-width: 1000px;

  @media ${maxDeviceSize.tablet} {
    font-size: 1.6rem;
  }

  span {
    color: ${colors.orange};
    font-weight: bold;
  }

  @media ${maxDeviceSize.tablet} {
    font-size: 1.6rem;
    text-align: left;
  }
`;

const StyledDescription = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  text-align: left;

  @media ${maxDeviceSize.tablet} {
    font-size: 1rem;
  }
`;
