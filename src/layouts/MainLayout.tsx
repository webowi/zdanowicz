import styled from "styled-components";
import { Footer } from "../components/organisms/Footer/Footer";
import { ScrollToTopButton } from "../components/atoms/ScrollToTopButton/ScrollToTopButton";
import { Header } from "../components/organisms/Header/Header";
import { CookieBanner } from "../components/organisms/CookieBanner/CookieBanner";
import { BottomBar } from "../components/molecules/BottomBar/BottomBar";
import { maxDeviceSize } from "../utils/deviceSize";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />

      <Main>
        {children}
        <Footer />
      </Main>

      <ScrollToTopButton />
      <CookieBanner />
      <BottomBar />
    </>
  );
};

export default MainLayout;

const Main = styled.main`
  padding-bottom: 80px;

  @media ${maxDeviceSize.tablet} {
    padding-bottom: 130px;
    padding-bottom: 200px;
  }
`;
