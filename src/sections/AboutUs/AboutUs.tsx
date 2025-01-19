import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { maxDeviceSize } from "../../utils/deviceSize";
import { colors } from "../../utils/colors";
import WarehouseImage from "../../assets/warehouse.webp";

export const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <StyledAboutWrapper ref={sectionRef}>
      <StyledContent>
        <StyledTitleContent
          initial={{ y: 100, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <StyledTitle>
            NE<StyledX>X</StyledX>TBUD
          </StyledTitle>
          to <span>hurtownia materiałów budowlanych</span> o ugruntowanej
          pozycji na rynku Północnej Wielkopolski.
          <br />
          Działamy od 2000 roku, cały czas powiększając nasz asortyment.
        </StyledTitleContent>
        <StyledDescription
          initial={{ y: 100, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        >
          Obsługujemy inwestycje kompleksowo w materiały budowlane. Zapewniamy
          fachowe doradztwo i przejrzysty system współpracy
          <br />
          <br />Z nami wybudujesz swój wymarzony dom zachowując spokój, który
          często znika podczas takich inwestycji.
        </StyledDescription>
      </StyledContent>
      <StyledImageContainer>
        <StyledImage src={WarehouseImage} alt="Magazyn" />
      </StyledImageContainer>
    </StyledAboutWrapper>
  );
};

const StyledAboutWrapper = styled.section`
  background-color: ${colors.black};
  color: ${colors.white};
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;

  @media ${maxDeviceSize.tablet} {
    flex-direction: column;
    padding: 2rem;
  }
`;

const StyledContent = styled.div``;

const StyledTitle = styled(motion.h1)`
  color: ${colors.yellow};
`;

const StyledX = styled.span`
  color: ${colors.grey} !important;
`;

const StyledTitleContent = styled(motion.h2)`
  font-size: 2.5rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  max-width: 1000px;

  @media ${maxDeviceSize.tablet} {
    font-size: 1.6rem;
  }

  span {
    color: ${colors.yellow};
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

const StyledImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 2rem;

  @media ${maxDeviceSize.tablet} {
    display: none;
  }
`;

const StyledImage = styled.img`
  width: 60%;
  height: auto;
  object-fit: cover;
  box-shadow: 0px 1px 18px 1px rgba(249, 178, 0, 1);
  border-radius: 8px;
  @media ${maxDeviceSize.tablet} {
    width: 100%;
  }
`;
