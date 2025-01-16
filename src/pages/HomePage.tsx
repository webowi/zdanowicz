import ScrollToTop from "react-scroll-to-top";
import { Footer } from "../components/organisms/Footer/Footer";
import { Header } from "../components/organisms/Header/Header";
import { Contact } from "../sections/Contact/Contact";
import { colors } from "../utils/colors";

const HomePage = () => {
  return (
    <>
      <Header />
      <Contact />
      <ScrollToTop smooth color={colors.black} />
      <Footer />
    </>
  );
};

export default HomePage;
