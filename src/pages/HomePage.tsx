import { Footer } from "../components/organisms/Footer/Footer";
import { Header } from "../components/organisms/Header/Header";
import { Contact } from "../sections/Contact/Contact";
import { Hero } from "../sections/Hero/Hero";
import { LogoTicker } from "../sections/LogoTicker/LogoTicker";
import { ProductShowcase } from "../sections/ProductShowcase/ProductShowcase";
import { Realizations } from "../sections/Realizations/Realizations";
import { Solutions } from "../sections/Solutions/Solutions";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* <LogoTicker /> */}
      <ProductShowcase />
      <Solutions />
      <Realizations />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
