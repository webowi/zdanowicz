import ScrollToTop from "react-scroll-to-top";
import { Footer } from "../components/organisms/Footer/Footer";
import { Header } from "../components/organisms/Header/Header";
import { Contact } from "../sections/Contact/Contact";
import { Hero } from "../sections/Hero/Hero";
import { ProductShowcase } from "../sections/ProductShowcase/ProductShowcase";
import { Realizations } from "../sections/Realizations/Realizations";
import { Solutions } from "../sections/Solutions/Solutions";
import { colors } from "../utils/colors";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <ProductShowcase />
      <Solutions />
      <Realizations />
      <Contact />
      <ScrollToTop smooth color={colors.lightBlue} />
      <Footer />
    </>
  );
};

export default HomePage;
