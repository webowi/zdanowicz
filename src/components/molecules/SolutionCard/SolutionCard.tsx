import styled from "styled-components";
import { FaCheck } from "react-icons/fa6";
import { colors } from "../../../utils/colors";
import { ReactTyped } from "react-typed";

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  inverse?: boolean;
  inProgress?: boolean;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  description,
  features,
  inverse = false,
  inProgress = false,
}) => {
  return (
    <StyledSolutionCard inverse={inverse}>
      <StyledTitleContentWrapper>
        <StyledIconContainer>{icon}</StyledIconContainer>
        <StyledTitleContainer inverse={inverse}>{title}</StyledTitleContainer>
      </StyledTitleContentWrapper>

      {inProgress && (
        <StyledInProgress>
          <ReactTyped
            strings={["w przygotowaniu..."]}
            loop
            typeSpeed={40}
            backSpeed={50}
          />
        </StyledInProgress>
      )}
      <StyledDescriptionContentWrapper inProgress={inProgress}>
        <StyledDescriptionContainer>{description}</StyledDescriptionContainer>
        <StyledFeaturesContainer>
          {features.map((feature, index) => (
            <StyledFeatureContainer key={index}>
              <FaCheck style={{ height: "1.5rem", width: "1.5rem" }} />
              <StyledFeatureItem>{feature}</StyledFeatureItem>
            </StyledFeatureContainer>
          ))}
        </StyledFeaturesContainer>
      </StyledDescriptionContentWrapper>
    </StyledSolutionCard>
  );
};

const StyledSolutionCard = styled.div<{ inverse: boolean }>`
  max-width: 20rem;
  height: 635px;
  width: 100%;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 7px 14px #eaeaea;
  border: ${({ inverse }) =>
    inverse ? "1px solid black" : "1px solid #f1f1f1"};
  background-color: ${({ inverse }) => (inverse ? colors.black : colors.white)};
  color: ${({ inverse }) => (inverse ? colors.white : colors.black)};
`;

const StyledTitleContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledIconContainer = styled.div``;

const StyledTitleContainer = styled.h3<{ inverse: boolean }>`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ inverse }) =>
    inverse ? "rgb(255 255 255 / 0.6)" : "rgb(0 0 0 / 0.5)"};
  line-height: 1.75rem;
`;

const StyledDescriptionContentWrapper = styled.div<{ inProgress: boolean }>`
  margin-top: 1.5rem;
  filter: ${({ inProgress }) => (inProgress ? "blur(5px)" : "none")};
  pointer-events: ${({ inProgress }) => (inProgress ? "none" : "auto")};
  user-select: ${({ inProgress }) => (inProgress ? "none" : "auto")};
`;

const StyledInProgress = styled.div`
  position: absolute;
  margin-top: 10rem;
  font-size: 1.2rem;
  margin-left: 2rem;
`;

const StyledDescriptionContainer = styled.p`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  margin-top: 30px;
`;

const StyledFeaturesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 2rem;
`;

const StyledFeatureContainer = styled.li`
  display: flex;
  gap: 1rem;
`;

const StyledFeatureItem = styled.div`
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
