import hukInvestLogo from "../../assets/logo-huk-invest.png";
import daoProjectLogo from "../../assets/logo-dao-project.png";
import miedzyNamiKobietamiLogo from "../../assets/logo-miedzy-nami-kobietami.png";
import fachDachLogo from "../../assets/logo-fach-dach.webp";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { minDeviceSize } from ".././../utils/deviceSize";

export const LogoTicker = () => {
  return (
    <LocoTickerWrapper name="solutions">
      <div className="container">
        <CompanyLogoTitle>Zaufali nam:</CompanyLogoTitle>
        <CompanyLogosWrapper>
          <CompanyLogosContainer>
            <CompanyLogoImage src={hukInvestLogo} alt="Huk invest logo" />
            <CompanyLogoImage src={daoProjectLogo} alt="Dao project logo" />
            <CompanyLogoImage
              src={miedzyNamiKobietamiLogo}
              alt="Między nami kobietami logo"
            />
            <CompanyLogoImage src={fachDachLogo} alt="Fach-dach logo" />
          </CompanyLogosContainer>
        </CompanyLogosWrapper>
      </div>
    </LocoTickerWrapper>
  );
};

const LocoTickerWrapper = styled.section<{ name: string }>`
  padding: 2rem 0;
  background-color: ${colors.white};

  @media ${minDeviceSize.tablet} {
    padding: 3rem 0;
  }
`;

const CompanyLogoImage = styled.img`
  height: 5rem;
  width: auto;
`;

const CompanyLogoTitle = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: ${colors.darkBlue2};
  letter-spacing: -0.025rem;
  padding: 1rem;
`;

const CompanyLogosContainer = styled.div`
  display: flex;
  flex: none;
  gap: 3.5rem;
`;

const CompanyLogosWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  mask-image: linear-gradient(to right, transparent, black, transparent);
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black,
    transparent
  );
`;
