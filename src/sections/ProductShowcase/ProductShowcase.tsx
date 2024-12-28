import styled from "styled-components";
import { colors } from "../../utils/colors";
import { Tag } from "../../components/atoms/Tag/Tag";
import productImage from "../../assets/product-image.webp";
import { maxDeviceSize } from "../../utils/deviceSize";
import { SectionDescription } from "../../components/atoms/SectionDescription/SectionDescription";
import { SectionTitle } from "../../components/atoms/SectionTitle/SectionTitle";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import laptopImage from "../../assets/laptop.webp";
import peopleImage from "../../assets/people.webp";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <StyledSection ref={sectionRef}>
      <div className="container">
        <StyledContent>
          <StyledTagContainer>
            <Tag>Wyróżnij się w sieci</Tag>
          </StyledTagContainer>
          <SectionTitle>
            Profesjonalne strony wizytówki i dedykowane strony internetowe
          </SectionTitle>
          <SectionDescription>
            Tworzymy nowoczesne strony internetowe, które potrafią przyciągnąć
            uwagę. Przygotowujemy również dedykowane rozwiązania, które pomogą
            Ci w zarządzaniu firmą, takie jak panel administracyjny dopasowany
            do Twojej firmy.
          </SectionDescription>
        </StyledContent>
        <StyledImagesContainer>
          <StyledProductImage src={productImage} alt="Product image" />
          <StyledLaptopImage
            src={laptopImage}
            height={200}
            width={200}
            alt="Laptop image"
            style={{ translateY }}
          />
          <StyledPeopleImage
            src={peopleImage}
            height={200}
            width={300}
            alt="People image"
            style={{ translateY }}
          />
        </StyledImagesContainer>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section<{ ref: any }>`
  background: linear-gradient(to bottom, ${colors.white}, #d2dcff);
  padding-top: 6rem;
  overflow-x: clip;
`;

const StyledContent = styled.div`
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledTagContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImagesContainer = styled.div`
  position: relative;
`;

const StyledProductImage = styled.img`
  width: 100%;
  margin-top: 2.5rem;
`;

const StyledLaptopImage = styled(motion.img)`
  @media ${maxDeviceSize.phone} {
    display: none;
  }
  position: absolute;
  right: 30rem;
  top: 10rem;
`;

const StyledPeopleImage = styled(motion.img)`
  @media ${maxDeviceSize.phone} {
    display: none;
  }
  position: absolute;
  left: 1rem;
  bottom: 17rem;
`;
