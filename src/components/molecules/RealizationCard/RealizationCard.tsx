import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { ButtonLink } from "../../atoms/ButtonLink/ButtonLink";
import { pagesPaths } from "../../../constans/pagesPaths";

interface RealizationData {
  name: string;
  link: string;
  description: string;
  laptopImage: string;
  solutions: string[];
}

interface RealizationCardProps {
  logoSrc: string;
  companyName: string;
  shortDescription?: string;
  realizationData: RealizationData;
}

export const RealizationCard: React.FC<RealizationCardProps> = ({
  logoSrc,
  companyName,
  shortDescription,
  realizationData,
}) => {
  return (
    <StyledCard>
      <StyledImageContainer>
        <StyledLogo src={logoSrc} alt={`${companyName} logo`} />
      </StyledImageContainer>
      <StyledContentWrapper>
        <StyledContentContainer>
          <StyledCompanyName>{companyName}</StyledCompanyName>
          <StyledDescriptionContentWrapper>
            {shortDescription && (
              <StyledDescriptionContainer>
                {shortDescription}
              </StyledDescriptionContainer>
            )}
          </StyledDescriptionContentWrapper>
        </StyledContentContainer>
        <ButtonLink href={pagesPaths.realization} state={realizationData}>
          Więcej
        </ButtonLink>
      </StyledContentWrapper>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  max-width: 22rem;
  width: 100%;
  padding: 2.5rem;
  height: 448px;
  border-radius: 1.5rem;
  box-shadow: 0 7px 14px #eaeaea;
  background-color: ${colors.white};
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledContentWrapper = styled.div`
  border-top: 1px solid #f1f1f1;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const StyledContentContainer = styled.div``;

const StyledCompanyName = styled.h3`
  letter-spacing: -0.025rem;
  line-height: 1.25rem;
`;

const StyledDescriptionContentWrapper = styled.div``;

const StyledDescriptionContainer = styled.p`
  letter-spacing: -0.025rem;
  line-height: 1.25rem;
`;
