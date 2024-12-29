import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { maxDeviceSize } from "../../../utils/deviceSize";

interface RealizationSolutionsCardProps {
  solutions: string[];
}

export const RealizationSolutionsCard: React.FC<
  RealizationSolutionsCardProps
> = ({ solutions }) => {
  return (
    <StyledCardContainer>
      <StyledTitle>Wdrożone rozwiązania:</StyledTitle>
      <StyledSolutionsContainer>
        {solutions.map((item, index) => (
          <StyledSolutionsItem key={index}>{item}</StyledSolutionsItem>
        ))}
      </StyledSolutionsContainer>
    </StyledCardContainer>
  );
};

const StyledCardContainer = styled.div`
  min-width: 25rem;
  width: 100%;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 7px 14px #eaeaea;
  background-color: ${colors.white};
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 1px solid ${colors.lightBlue};

  @media ${maxDeviceSize.phone} {
    min-width: auto;
  }
`;

const StyledTitle = styled.h2`
  color: ${colors.black};
  font-size: 1.5rem;
`;

const StyledSolutionsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const StyledSolutionsItem = styled.li`
  color: ${colors.black};
  font-size: 1rem;
  padding: 0.5rem;
`;
