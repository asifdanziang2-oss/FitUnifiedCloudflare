import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PricingSection />
    <FAQSection />
    <CTASection />
    <Footer />
  </div>
);

export default Pricing;
