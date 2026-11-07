import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import PricingSection from "@/components/PricingSection";
import VisionSection from "@/components/VisionSection";
import FoundersSection from "@/components/FoundersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import SupportedBySection from "@/components/SupportedBySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="snap-page-container min-h-[100svh] bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CoreValuesSection />
      <DifferentiationSection />
      <PricingSection />
      <TestimonialsSection />
      <VisionSection />
      <FoundersSection />
      <FAQSection />
      <SupportedBySection />
      <Footer />
    </div>
  );
};

export default Index;
