import ContactFeaturesContainer from "../components/ContactFeaturesSection";
import ContactFormSection from "../components/ContactFormSection";
import ContactHero from "../components/ContactHero";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactFeaturesContainer />
      <ContactSection />
      <ContactFormSection />
      <Footer />
    </>
  );
};

export default Contact;
