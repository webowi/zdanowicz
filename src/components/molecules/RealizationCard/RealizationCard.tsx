import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { Button } from "../../atoms/Button/Button";

interface RealizationData {
  link: string;
  caseStudy: string[];
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
        <Button>case study</Button>
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
  /* border: "1px solid #f1f1f1"; */
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

const StyledContentContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;

const StyledCompanyName = styled.h3`
  letter-spacing: -0.025rem;
  line-height: 1.25rem;
`;

const StyledDescriptionContentWrapper = styled.div``;

const StyledDescriptionContainer = styled.p`
  letter-spacing: -0.025rem;
  line-height: 1.25rem;
`;
