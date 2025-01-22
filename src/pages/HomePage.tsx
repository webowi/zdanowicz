import { useState, useEffect } from "react";
import { Contact } from "../sections/Contact/Contact";
import { Hero } from "../sections/Hero/Hero";
import { AboutUs } from "../sections/AboutUs/AboutUs";
import { AboutUsDetail } from "../sections/AboutUsDetail/AboutUsDetail";
import { WhyUs } from "../sections/WhyUs/WhyUs";
import MainLayout from "../layouts/MainLayout";

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
    <MainLayout>
      <Hero />
      <AboutUs />
      <WhyUs />
      <AboutUsDetail isHighlighted={isContactVisible} />
      <Contact isHighlighted={isContactVisible} />
    </MainLayout>
  );
};

export default HomePage;
