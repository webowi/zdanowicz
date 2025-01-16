import styled from "styled-components";
import { colors } from "../../utils/colors";
import { minDeviceSize } from "../../utils/deviceSize";

export const Hero = () => {
  return (
    <StyledSection>
      <div className="container">Hero</div>
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
