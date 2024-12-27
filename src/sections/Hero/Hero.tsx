import styled from "styled-components";
import { colors } from "../../utils/colors";
import { Button } from "../../components/atoms/Button/Button";
import { IoIosMail } from "react-icons/io";
import { ContactButton } from "../../components/atoms/ContactButton/ContactButton";
import { FaArrowRight } from "react-icons/fa6";
import cogImage from "../../assets/cog.png";
import cylinderImage from "../../assets/cylinder.png";
import noodleImage from "../../assets/noodle.png";
import { maxDeviceSize, minDeviceSize } from "../../utils/deviceSize";

export const Hero = () => {
  return (
    <StyledSection>
      <div className="container">
        <StyledHeroContainer>
          <StyledHeroContentContainer>
            <div>
              <StyledTitle>
                Tworzymy dedykowane aplikacje internetowe.
              </StyledTitle>
              <StyledContent>
                Zbuduj z nami stronę internetową, która pomoże Ci w osiągnięciu
                sukcesu w internecie.
              </StyledContent>
            </div>
            <StyledButtonWrapper>
              <ContactButton href={`mailto:${import.meta.env.VITE_EMAIL}`}>
                <IoIosMail
                  style={{
                    marginRight: "0.5rem",
                    color: colors.white,
                    backgroundColor: colors.black,
                    width: "1rem",
                    height: "1rem",
                  }}
                />
                Skontaktuj się z nami
              </ContactButton>
              <Button type="transparent">
                <span>Zobacz nasze realizacje</span>
                <FaArrowRight
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                  }}
                />
              </Button>
            </StyledButtonWrapper>
          </StyledHeroContentContainer>
          <StyledImageWrapper>
            <StyledImageCog src={cogImage} alt="Cog image" />
            <StyledImageCylinder
              src={cylinderImage}
              width={220}
              height={220}
              alt="cylidner image"
            />
            <StyledImageNoodler
              src={noodleImage}
              width={220}
              alt="noodle image"
            />
          </StyledImageWrapper>
        </StyledHeroContainer>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2rem;
  padding-bottom: 5rem;
  background: linear-gradient(to top, ${colors.white}, #d2dcff);
  overflow-x: clip;

  @media ${minDeviceSize.tablet} {
    padding-top: 1.25rem;
    padding-bottom: 2.5rem;
  }
`;

const StyledHeroContainer = styled.div`
  @media ${minDeviceSize.tablet} {
    display: flex;
    align-items: center;
  }
`;

const StyledHeroContentContainer = styled.div`
  @media ${minDeviceSize.tablet} {
    width: 938px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: -0.05rem;
  background: linear-gradient(${colors.black}, ${colors.darkBlue});
  color: transparent;
  background-clip: text;
  margin-top: 1.5rem;

  @media ${minDeviceSize.tablet} {
    font-size: 4.5rem;
  }
`;

const StyledContent = styled.p`
  font-size: 1.25rem;
  color: ${colors.darkBlue2};
  letter-spacing: -0.025rem;
  margin-top: 1.5rem;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  margin-top: 30px;
`;

const StyledImageWrapper = styled.div`
  margin-top: 5rem;
  position: relative;

  @media ${minDeviceSize.tablet} {
    margin-top: 0;
    height: 648px;
    flex: 1;
  }
`;

const StyledImageCog = styled.img`
  width: 100%;
  max-width: 500px;

  @media ${minDeviceSize.tablet} {
    position: absolute;
    height: 100%;
    width: auto;
    max-width: none;
    left: -1.5rem;
  }

  @media ${minDeviceSize.desktop} {
    left: 0;
  }
`;

const StyledImageCylinder = styled.img`
  @media ${maxDeviceSize.phone} {
    display: none;
  }

  @media ${minDeviceSize.tablet} {
    display: block;
    position: absolute;
  }
  z-index: 2;
  top: -2rem;
  left: -8rem;
`;

const StyledImageNoodler = styled.img`
  top: 524px;
  left: 448px;
  transform: rotate(30deg);
  @media ${maxDeviceSize.tablet} {
    display: none;
  }

  position: absolute;
`;
