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
  overflow: hidden;
  background: #f6f7f9;
  color: #111;

  padding: 5rem 2rem;
  display: flex;
  align-items: center;
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

  opacity: 0.14;
  filter: saturate(0.9) contrast(1.05);

  mask-image: radial-gradient(
    70% 70% at 85% 20%,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.65) 45%,
    rgba(0, 0, 0, 0) 75%
  );

  @supports not (mask-image: radial-gradient(black, transparent)) {
    opacity: 0.12;
  }

  @media ${maxDeviceSize.tablet} {
    background-position: top center;
    background-size: min(700px, 95vw) auto;
    opacity: 0.1;
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
  color: rgba(0, 0, 0, 0.75);
`;
