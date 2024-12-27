import styled from "styled-components";

interface SectionDescriptionProps {
  children: React.ReactNode;
}

export const SectionDescription: React.FC<SectionDescriptionProps> = ({
  children,
}) => <StyledSectionDescription>{children}</StyledSectionDescription>;

const StyledSectionDescription = styled.p`
  text-align: center;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: -0.025rem;
  color: #010d3e;
  margin-top: 1.25rem;
`;
