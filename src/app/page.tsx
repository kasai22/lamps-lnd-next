import AboutUs from "@/components/homePage/aboutus";
import ClientPortfolioSection from "@/components/homePage/ClientPortfolioSection";
import HeroCarousel from "@/components/homePage/hero";
import OurValuesSection from "@/components/homePage/OurValuesSection";
import ServicesSection from "@/components/homePage/services";

export default function Home() {
  return (
    <div>
      {" "}
      <HeroCarousel />
      <AboutUs />
      <ServicesSection />
      <ClientPortfolioSection />
      <OurValuesSection />
    </div>
  );
}
