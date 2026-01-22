import AboutUs from "@/components/homePage/aboutus";
import ClientPortfolioSection from "@/components/homePage/ClientPortfolioSection";
import HeroCarousel from "@/components/homePage/hero";
import OurValuesSection from "@/components/homePage/OurValuesSection";
import ServicesSection from "@/components/homePage/services";
import WhyChooseUs from "@/components/homePage/whyChooseUs";
import ContactUs from "../components/homePage/contactUs";
import Footer from "../components/homePage/footer";

export default function Home() {
  return (
    <div>
      {" "}
      <HeroCarousel />
      <AboutUs />
      <ServicesSection />
      <ClientPortfolioSection />
      <OurValuesSection />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
