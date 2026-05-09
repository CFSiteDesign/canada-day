import HeroSection from "@/components/HeroSection";
import DamageSection from "@/components/DamageSection";
import PropertySelector from "@/components/PropertySelector";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <DamageSection />
      <PropertySelector />
      <FaqSection />
      <FooterSection />
    </div>
  );
};

export default Index;
