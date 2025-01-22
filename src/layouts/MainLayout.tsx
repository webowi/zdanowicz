import { Footer } from "../components/organisms/Footer/Footer";
import { ScrollToTopButton } from "../components/atoms/ScrollToTopButton/ScrollToTopButton";
import { Header } from "../components/organisms/Header/Header";
import CookiesBanner from "../components/organisms/CookieBanner/CookieBanner";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ScrollToTopButton />
      <CookiesBanner />
      <Footer />
    </>
  );
};

export default MainLayout;
