import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { maxDeviceSize } from "../../../utils/deviceSize";

interface RealizationDetailCardProps {
  name: string;
  link: string;
  description: string;
}

export const RealizationDetailCard: React.FC<RealizationDetailCardProps> = ({
  name,
  link,
  description,
}) => {
  return (
    <StyledCardContainer>
      <StyledTitle>{name}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledLink href={link} target="_blank">
        {link}
      </StyledLink>
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

  @media ${maxDeviceSize.phone} {
    min-width: auto;
  }
`;

const StyledTitle = styled.h2`
  font-size: 1.8rem;
`;

const StyledDescription = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
`;

const StyledLink = styled.a`
  margin-top: 1rem;
  font-size: 1rem;
`;
