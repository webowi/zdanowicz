import { useState, useEffect } from "react";
import { Footer } from "../components/organisms/Footer/Footer";
import { Contact } from "../sections/Contact/Contact";
import { Hero } from "../sections/Hero/Hero";
import { AboutUs } from "../sections/AboutUs/AboutUs";
import { AboutUsDetail } from "../sections/AboutUsDetail/AboutUsDetail";
import { ScrollToTopButton } from "../components/atoms/ScrollToTopButton/ScrollToTopButton";
import { WhyUs } from "../sections/WhyUs/WhyUs";

const HomePage = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsContactVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Hero />
      <AboutUs />
      <WhyUs />
      <AboutUsDetail isHighlighted={isContactVisible} />
      <Contact isHighlighted={isContactVisible} />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default HomePage;
