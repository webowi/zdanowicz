import styled from "styled-components";
import { maxDeviceSize } from "../../utils/deviceSize";
import { colors } from "../../utils/colors";
import {
  MdOutlineFoundation,
  MdOutlineHomeWork,
  MdOutlineFormatPaint,
} from "react-icons/md";
import { GiBrickWall } from "react-icons/gi";
import { AboutBox } from "../../components/molecules/AboutBox/AboutBox";

interface AboutUsDetailProps {
  $isHighlighted: boolean;
}

export const AboutUsDetail: React.FC<AboutUsDetailProps> = ({
  $isHighlighted = false,
}) => {
  return (
    <StyledAboutWrapper $isHighlighted={$isHighlighted}>
      <StyledContent>
        <StyledHeader>Zakres realizowanych prac</StyledHeader>

        <StyledBoxes>
          <AboutBox
            Icon={MdOutlineFoundation}
            Title="Roboty żelbetowe"
            Subtitle="fundamenty • stropy • schody • elementy konstrukcyjne"
            duration={0.5}
          />

          <AboutBox
            Icon={GiBrickWall}
            Title="Roboty murarskie"
            Subtitle="ściany nośne i działowe • nadproża • prace konstrukcyjne"
            duration={0.6}
          />

          <AboutBox
            Icon={MdOutlineHomeWork}
            Title="Elewacje i ocieplenia"
            Subtitle="systemy dociepleń • tynki elewacyjne • wykończenia fasad"
            duration={0.7}
          />

          <AboutBox
            Icon={MdOutlineFormatPaint}
            Title="Wykończenia wnętrz"
            Subtitle="gładzie • zabudowy GK • podłogi • łazienki i kuchnie"
            duration={0.8}
          />
        </StyledBoxes>

        <StyledSeoNote>
          Zakres obejmuje również biały montaż, montaż drzwi i zabudów, prace
          instalacyjne oraz detale wykończeniowe.
        </StyledSeoNote>
      </StyledContent>
    </StyledAboutWrapper>
  );
};

const StyledAboutWrapper = styled.section<AboutUsDetailProps>`
  background-color: ${({ $isHighlighted }) =>
    $isHighlighted ? colors.lightBlack : colors.black};
  color: ${colors.white};
  width: 100%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 2rem;
  transition:
    background-color 0.8s ease-in-out,
    color 0.8s ease-in-out;

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

const StyledHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media ${maxDeviceSize.tablet} {
    font-size: 1.6rem;
  }
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

const StyledSeoNote = styled.p`
  margin-top: 2.5rem;
  max-width: 900px;
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
  color: ${colors.white};

  @media ${maxDeviceSize.tablet} {
    font-size: 0.95rem;
  }
`;
