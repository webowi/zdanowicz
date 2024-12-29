import { useLocation } from "react-router-dom";
import { Footer } from "../components/organisms/Footer/Footer";
import styled from "styled-components";
import { RealizationDetailCard } from "../components/molecules/RealizationDetailCard/RealizationDetailCard";
import { RealizationSolutionsCard } from "../components/molecules/RealizationSolutionsCard/RealizationSolutionsCard";
import { maxDeviceSize } from "../utils/deviceSize";
import { colors } from "../utils/colors";
import { BackHeader } from "../components/organisms/BackHeader/BackHeader";

interface RealizationData {
  name: string;
  link: string;
  description: string;
  laptopImage: string;
  solutions: string[];
}

const RealizationDetail: React.FC = () => {
  const location = useLocation();
  const { name, link, description, laptopImage, solutions } =
    location.state as RealizationData;

  return (
    <>
      <BackHeader />
      <StyledSection>
        <div className="container">
          <StyledContentWrapper>
            <StyledImageContainer>
              <StyledImage src={laptopImage} alt="Prezentacja" loading="lazy" />
            </StyledImageContainer>
            <StyledContentContainer>
              <RealizationDetailCard
                name={name}
                link={link}
                description={description}
              />
              <RealizationSolutionsCard solutions={solutions} />
            </StyledContentContainer>
          </StyledContentWrapper>
        </div>
      </StyledSection>
      <Footer />
    </>
  );
};

const StyledSection = styled.section`
  background: linear-gradient(to top, ${colors.white}, #d2dcff);
  height: 100vh;
`;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  @media ${maxDeviceSize.tablet} {
    flex-direction: column;
  }
`;

const StyledContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2rem;

  @media ${maxDeviceSize.phone} {
    align-items: center;
    margin: auto;
  }
`;

export default RealizationDetail;
