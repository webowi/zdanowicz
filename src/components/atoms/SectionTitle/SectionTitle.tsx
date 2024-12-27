import styled from "styled-components";
import { colors } from "../../../utils/colors";

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <StyledSectionTitle>{children}</StyledSectionTitle>
);

const StyledSectionTitle = styled.h2`
  text-align: center;
  font-size: 1.875rem;
  font-weight: bold;
  letter-spacing: -0.05rem;
  background: linear-gradient(${colors.black}, ${colors.darkBlue});
  color: transparent;
  background-clip: text;
  margin-top: 1.25rem;
`;
