import styled from "styled-components";
import { maxDeviceSize } from "../../utils/deviceSize";
import { colors } from "../../utils/colors";
import { FaBuilding, FaIndustry, FaThermometerHalf } from "react-icons/fa";
import { GiWreckingBall } from "react-icons/gi";
import { AboutBox } from "../../components/molecules/AboutBox/AboutBox";

interface AboutUsDetailProps {
  isHighlighted: boolean;
}

export const AboutUsDetail: React.FC<AboutUsDetailProps> = ({
  isHighlighted = false,
}) => {
  return (
    <StyledAboutWrapper isHighlighted={isHighlighted}>
      <StyledContent>
        <StyledHeader>
          Nasza firma również świadczy usługi budowlane między innymi:
        </StyledHeader>
        <StyledBoxes>
          <AboutBox
            Icon={FaBuilding}
            Title="Realizacja projektów budowlanych"
            duration={0.5}
          />
          <AboutBox
            Icon={FaIndustry}
            Title="Budowa obiektów przemysłowych"
            duration={0.6}
          />
          <AboutBox
            Icon={FaThermometerHalf}
            Title="Ocieplenia i elewacje"
            duration={0.7}
          />
          <AboutBox
            Icon={GiWreckingBall}
            Title="Rozbiórki i burzenia"
            duration={0.8}
          />
        </StyledBoxes>
        <StyledFooter>i wiele innych</StyledFooter>
      </StyledContent>
    </StyledAboutWrapper>
  );
};

const StyledAboutWrapper = styled.section<AboutUsDetailProps>`
  background-color: ${({ isHighlighted }) =>
    isHighlighted ? colors.white : colors.black};
  color: ${({ isHighlighted }) =>
    isHighlighted ? colors.black : colors.white};
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10rem;
  transition: background-color 0.8s ease-in-out, color 0.8s ease-in-out;

  @media ${maxDeviceSize.tablet} {
    padding: 5rem 1rem;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  width: 100%;
`;

const StyledBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;

  @media ${maxDeviceSize.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${maxDeviceSize.mobile} {
    grid-template-columns: 1fr;
  }
`;

const StyledFooter = styled.div`
  margin-top: 2rem;
  font-size: 1.2rem;
  color: ${colors.grayLight};

  @media ${maxDeviceSize.tablet} {
    font-size: 1rem;
  }
`;

const StyledHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media ${maxDeviceSize.tablet} {
    font-size: 1.2rem;
  }
`;
