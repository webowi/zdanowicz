import styled from "styled-components";
import { colors } from "../../utils/colors";
import { Tag } from "../../components/atoms/Tag/Tag";
import pyramidImage from "../../assets/pyramid.png";
import productImage from "../../assets/product-image.png";
import tubeImage from "../../assets/tube.png";
import { maxDeviceSize } from "../../utils/deviceSize";
import { SectionDescription } from "../../components/atoms/SectionDescription/SectionDescription";
import { SectionTitle } from "../../components/atoms/SectionTitle/SectionTitle";

export const ProductShowcase = () => {
  return (
    <StyledSection>
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
          <StyledPyramidImage
            src={pyramidImage}
            height={262}
            width={262}
            alt="Pyramid image"
          />
          <StyledTubeImage
            src={tubeImage}
            height={262}
            width={262}
            alt="Tub image"
          />
        </StyledImagesContainer>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
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
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const StyledPyramidImage = styled.img`
  @media ${maxDeviceSize.phone} {
    display: none;
  }
  position: absolute;
  right: -9rem;
  top: -8rem;
`;

const StyledTubeImage = styled.img`
  @media ${maxDeviceSize.phone} {
    display: none;
  }
  position: absolute;
  left: -9rem;
  bottom: -5rem;
`;
