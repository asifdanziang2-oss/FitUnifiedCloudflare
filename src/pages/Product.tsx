import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Fingerprint, FileText, Users,
  ShoppingCart, Package, Wrench, ShieldCheck,
  Briefcase, Dumbbell, Apple, HeartPulse,
  Building2, CreditCard
} from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CompanyLogo from "@/assets/Company_Logo.svg";

const fitkhataFeatures = [
  {
    icon: Fingerprint,
    label: "Biometric Attendance",
    circleBg: "bg-[#FFEBEB]",
    iconColor: "text-[#F43F5E]",
  },
  {
    icon: FileText,
    label: "Daily Check-in Reports",
    circleBg: "bg-[#FFF1E6]",
    iconColor: "text-[#FF6B00]",
  },
  {
    icon: Users,
    label: "Member Management",
    circleBg: "bg-[#F3EBFF]",
    iconColor: "text-[#9333EA]",
  },
  {
    icon: ShieldCheck,
    label: "Documentation & Compliance",
    circleBg: "bg-[#E8F8EE]",
    iconColor: "text-[#16A34A]",
  },
  {
    icon: CreditCard,
    label: "Payroll Management",
    circleBg: "bg-[#FFF6E0]",
    iconColor: "text-[#F59E0B]",
  },
];

const fitvyapaarFeatures = [
  {
    icon: ShoppingCart,
    label: "B2B Marketplace",
    lines: ["B2B Marketplace"],
    circleBg: "bg-[#FFEBEB]",
    iconColor: "text-[#F43F5E]",
  },
  {
    icon: Package,
    label: "Equipment Procurement",
    lines: ["Equipment", "Procurement"],
    circleBg: "bg-[#FFF1E6]",
    iconColor: "text-[#FF6B00]",
  },
  {
    icon: Wrench,
    label: "Repair & Maintenance",
    lines: ["Repair &", "Maintenance"],
    circleBg: "bg-[#F3EBFF]",
    iconColor: "text-[#9333EA]",
  },
  {
    icon: ShieldCheck,
    label: "Verified Suppliers",
    lines: ["Verified", "Suppliers"],
    circleBg: "bg-[#E8F8EE]",
    iconColor: "text-[#16A34A]",
  },
];

const fitnaukriFeatures = [
  {
    icon: Briefcase,
    label: "Fitness Job Board",
    circleBg: "bg-[#FFF0E5]",
    iconColor: "text-[#EE5F1B]",
  },
  {
    icon: ShieldCheck,
    label: "Verified Profiles",
    circleBg: "bg-[#E7F8EE]",
    iconColor: "text-[#18B259]",
  },
  {
    icon: Dumbbell,
    label: "Trainer Discovery",
    circleBg: "bg-[#F3EBFF]",
    iconColor: "text-[#9B51E0]",
  },
  {
    icon: Apple,
    label: "Nutritionist Connect",
    circleBg: "bg-[#FFF3E0]",
    iconColor: "text-[#F58216]",
  },
  {
    icon: HeartPulse,
    label: "Wellness Careers",
    circleBg: "bg-[#FFEBF0]",
    iconColor: "text-[#EC3868]",
  },
];

const Product = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — Our Products */}
      <section className="relative pt-10 pb-8 md:pt-14 md:pb-12 border-b border-border/50 overflow-hidden bg-[#FFFDFC]">
        {/* Ambient soft pastel background gradients & decorative waves matching reference */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 8% 12%, rgba(235, 240, 255, 0.55) 0%, transparent 38%), radial-gradient(circle at 92% 38%, rgba(255, 228, 230, 0.45) 0%, transparent 45%)",
          }}
        />
        {/* Left subtle cool-white curve */}
        <svg
          className="absolute top-0 left-0 w-[260px] sm:w-[360px] h-auto pointer-events-none select-none opacity-65"
          viewBox="0 0 360 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 0H360C300 90 260 155 180 165C95 175 45 240 0 340V0Z"
            fill="#F6F7FD"
          />
        </svg>
        {/* Bottom-right soft peach wave */}
        <svg
          className="absolute bottom-0 right-0 w-[260px] sm:w-[380px] lg:w-[460px] h-auto pointer-events-none select-none opacity-85"
          viewBox="0 0 460 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M460 220V0C370 15 315 65 265 125C220 178 145 205 0 220H460Z"
            fill="#FDEEE7"
          />
        </svg>

        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* OUR PRODUCTS Pill Badge with Isometric Cube Icon */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[#FDEEE9] px-5 py-2 mb-5 shadow-[0_1px_4px_rgba(239,75,42,0.06)]">
              <svg
                className="w-4 h-4 text-[#EF4B2A] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
                <line x1="7.5" y1="9.5" x2="7.5" y2="14.5" />
                <line x1="16.5" y1="9.5" x2="16.5" y2="14.5" />
              </svg>
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#EF4B2A]">
                Our Products
              </span>
            </div>

            {/* Two-Line Main Heading with Decorative Spark Lines */}
            <h1 className="font-display font-extrabold tracking-tight leading-[1.14] text-[#0D1526] text-3xl sm:text-5xl lg:text-[56px]">
              <span className="block">One Ecosystem.</span>
              <span className="relative inline-flex items-center justify-center mt-1">
                {/* Left Spark Lines */}
                <svg
                  className="hidden sm:block w-7 h-7 lg:w-8 lg:h-8 mr-2.5 -mt-4 text-[#FF7A1A] shrink-0"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <line
                    x1="8"
                    y1="6"
                    x2="22"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <line
                    x1="5"
                    y1="20"
                    x2="19"
                    y2="22"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                </svg>

                <span className="bg-gradient-to-r from-[#F42E56] via-[#FF6B2B] to-[#FFB300] bg-clip-text text-transparent">
                  Endless Possibilities.
                </span>

                {/* Right Spark Lines */}
                <svg
                  className="hidden sm:block w-7 h-7 lg:w-8 lg:h-8 ml-2.5 -mt-3 text-[#FF881A] shrink-0"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <line
                    x1="23"
                    y1="7"
                    x2="10"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <line
                    x1="27"
                    y1="20"
                    x2="13"
                    y2="22"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#5A6578] text-base sm:text-[17.5px] leading-[1.65] max-w-[615px] mx-auto mt-4 sm:mt-5 font-normal">
              FitUnified brings together facility management, vendor sourcing, and{" "}
              <br className="hidden sm:inline" />
              wellness discovery into one connected platform for the fitness industry.
            </p>

            {/* Central Ecosystem Illustration */}
            <div className="relative w-full max-w-[680px] lg:max-w-[740px] mx-auto mt-3 sm:mt-4 flex items-center justify-center">
              <img
                src="/assets/product/ecosystem-illustration.png"
                alt="FitUnified connected platform ecosystem showing facility management, vendor sourcing, and wellness discovery"
                className="w-full h-auto block object-contain mx-auto select-none"
                referrerPolicy="no-referrer"
              />
              <img
                src={CompanyLogo}
                alt="FitUnified Logo"
                className="absolute left-[50.25%] top-[57.3%] -translate-x-1/2 -translate-y-1/2 w-[9.8%] h-auto object-contain select-none pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FitKhata — Facility Management: text left, biometric device visual right */}
      <section
        id="fitkhata"
        className="relative py-14 md:py-20 border-b border-border/50 overflow-hidden bg-[#FFFDFC]"
      >
        {/* Subtle warm ambient glow on the right behind the biometric device */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 78% 50%, rgba(255, 226, 212, 0.42) 0%, transparent 52%)",
          }}
        />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Column: Badge, Heading, Description, and 5 Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-6 xl:col-span-6"
            >
              {/* FACILITY MANAGEMENT Pill Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[#FDEEE9] px-4 py-2 mb-5 shadow-[0_1px_4px_rgba(239,75,42,0.06)]">
                <Building2 className="w-4 h-4 text-[#EF4B2A] shrink-0" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#EF4B2A]">
                  Facility Management
                </span>
              </div>

              {/* 2-Line Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[45px] font-display font-extrabold text-[#0D1526] leading-[1.15] tracking-tight mb-4">
                <span className="block">Smart Facility</span>
                <span className="block mt-1 sm:whitespace-nowrap">
                  Management,{" "}
                  <span className="bg-gradient-to-r from-[#F43F5E] via-[#FF5A36] to-[#FF7A00] bg-clip-text text-transparent">
                    Simplified
                  </span>
                </span>
              </h2>

              {/* 3-Line Subtitle */}
              <p className="text-[#5A6578] text-base sm:text-[16.5px] leading-[1.62] mb-7 max-w-[540px] font-normal">
                Your WhatsApp-first assistant for fitness facility management.
                <br className="hidden sm:inline" /> No apps to download, no
                complex dashboards — just simple,
                <br className="hidden sm:inline" /> conversational management.
              </p>

              {/* 2-Column Grid of 5 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-[590px]">
                {fitkhataFeatures.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 bg-white border border-[#F2ECE9] shadow-[0_6px_22px_-6px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_26px_-6px_rgba(255,90,54,0.12)] hover:border-primary/25 transition-all rounded-[18px] px-3.5 py-3 min-h-[68px]"
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${f.circleBg} flex items-center justify-center shrink-0`}
                    >
                      <f.icon className={`h-5 w-5 ${f.iconColor} shrink-0`} />
                    </div>
                    <span className="text-[14.5px] font-display font-bold text-[#0D1526] leading-snug">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: FitKhata Biometric Check-In Device Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-6 xl:col-span-6 w-full flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[540px] lg:max-w-[590px]">
                <img
                  src="/assets/product/fitkhata-device.png"
                  alt="Modern FitKhata biometric check-in and check-out device with fingerprint scanner"
                  className="w-full h-auto object-contain select-none"
                  referrerPolicy="no-referrer"
                />
                <img
                  src={CompanyLogo}
                  alt="FitUnified Logo"
                  className="absolute left-[33.77%] top-[29.6%] -translate-x-1/2 -translate-y-1/2 w-[4.4%] h-auto object-contain select-none pointer-events-none bg-white rounded-full p-[0.2%]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FitVyapaar — B2B Marketplace: text left, laptop & gym equipment visual right */}
      <section
        id="fitvyapaar"
        className="relative py-14 md:py-20 border-b border-border/50 overflow-hidden bg-[#FFFDFC]"
      >
        {/* Subtle warm ambient glow on the right behind the FitVyapaar laptop */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 78% 52%, rgba(255, 226, 212, 0.42) 0%, transparent 54%)",
          }}
        />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Column: Badge, Heading, Description, and 4 Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-6 xl:col-span-6"
            >
              {/* B2B MARKETPLACE Pill Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[#FDEEE9] px-4 py-2 mb-5 shadow-[0_1px_4px_rgba(239,107,42,0.06)]">
                <ShoppingCart className="w-4 h-4 text-[#EF6B2A] shrink-0" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#EF6B2A]">
                  B2B Marketplace
                </span>
              </div>

              {/* 2-Line Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[45px] font-display font-extrabold text-[#0D1526] leading-[1.15] tracking-tight mb-4">
                <span className="block sm:whitespace-nowrap">
                  One Marketplace for
                </span>
                <span className="block mt-1 sm:whitespace-nowrap bg-gradient-to-r from-[#F42E56] via-[#FF6B2B] to-[#FF9E00] bg-clip-text text-transparent">
                  Fitness Businesses
                </span>
              </h2>

              {/* 3-Line Subtitle */}
              <p className="text-[#5A6578] text-base sm:text-[16.5px] leading-[1.62] mb-7 max-w-[540px] font-normal">
                Your trusted partner for all fitness business procurement
                <br className="hidden sm:inline" /> needs. From equipment to
                maintenance services —
                <br className="hidden sm:inline" /> all from verified suppliers.
              </p>

              {/* 2x2 Grid of 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-[560px]">
                {fitvyapaarFeatures.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3.5 bg-white border border-[#F2ECE9] shadow-[0_6px_22px_-6px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_26px_-6px_rgba(255,90,54,0.12)] hover:border-primary/25 transition-all rounded-[20px] px-4 py-3.5 min-h-[76px]"
                  >
                    <div
                      className={`w-11 h-11 rounded-full ${f.circleBg} flex items-center justify-center shrink-0`}
                    >
                      <f.icon className={`h-5 w-5 ${f.iconColor} shrink-0`} />
                    </div>
                    <span className="text-[15px] font-display font-bold text-[#0D1526] leading-[1.28]">
                      {f.lines.map((line, idx) => (
                        <span key={idx} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: FitVyapaar Laptop & Gym Equipment Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-6 xl:col-span-6 w-full flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[560px] lg:max-w-[610px]">
                <img
                  src="/assets/product/fitvyapaar-marketplace.png"
                  alt="FitVyapaar B2B fitness equipment and services marketplace on laptop with kettlebell and dumbbell"
                  className="w-full h-auto object-contain select-none"
                  referrerPolicy="no-referrer"
                />
                <img
                  src={CompanyLogo}
                  alt="FitUnified Logo"
                  className="absolute left-[32.79%] top-[30.62%] -translate-x-1/2 -translate-y-1/2 w-[3.6%] h-auto object-contain select-none pointer-events-none"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FitNaukri — Hiring Platform: text left, FitNaukri laptop & verified profiles visual right */}
      <section
        id="fitnaukri"
        className="relative py-14 md:py-20 overflow-hidden bg-[#FFFDFC]"
      >
        {/* Subtle warm pink-peach ambient glow on the right behind the FitNaukri illustration */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 78% 52%, rgba(255, 224, 230, 0.45) 0%, transparent 55%)",
          }}
        />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Column: Badges, Heading, Description, and 5 Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-6 xl:col-span-6"
            >
              {/* HIRING PLATFORM + COMING SOON Pill Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#FFE46B] px-4 py-2 shadow-[0_2px_6px_rgba(234,179,8,0.18)]">
                  <Users className="w-4 h-4 text-[#C86400] shrink-0" strokeWidth={2.2} />
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.12em] text-[#111827]">
                    Hiring Platform
                  </span>
                </div>
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#E62E69] to-[#F14973] px-4 py-2 shadow-[0_2px_8px_rgba(230,46,105,0.22)]">
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.12em] text-white">
                    Coming Soon
                  </span>
                </div>
              </div>

              {/* 2-Line Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[45px] font-display font-extrabold text-[#0D1526] leading-[1.15] tracking-tight mb-4">
                <span className="block sm:whitespace-nowrap">
                  A Hiring Platform for
                </span>
                <span className="block mt-1 sm:whitespace-nowrap">
                  the{" "}
                  <span className="bg-gradient-to-r from-[#EF3E6B] via-[#F46036] to-[#F98404] bg-clip-text text-transparent">
                    Fitness Industry
                  </span>
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-[#5A6578] text-base sm:text-[16.5px] leading-[1.62] mb-7 max-w-[555px] font-normal">
                FitNaukri is an upcoming hiring platform designed specifically
                <br className="hidden sm:inline" /> for the fitness industry. It
                will connect gym owners, personal
                <br className="hidden sm:inline" /> trainers, fitness coaches,
                nutritionists, and wellness professionals
                <br className="hidden sm:inline" /> — helping gyms discover
                qualified talent while giving professionals
                <br className="hidden sm:inline" /> better career opportunities.
              </p>

              {/* 2-Column Grid of 5 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-[580px]">
                {fitnaukriFeatures.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3.5 bg-white border border-[#F2ECE9] shadow-[0_6px_22px_-6px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_26px_-6px_rgba(255,90,54,0.12)] hover:border-primary/25 transition-all rounded-[20px] px-4 py-3 min-h-[68px]"
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${f.circleBg} flex items-center justify-center shrink-0`}
                    >
                      <f.icon
                        className={`h-5 w-5 ${f.iconColor} shrink-0 ${
                          f.label === "Trainer Discovery" ? "-rotate-45" : ""
                        }`}
                      />
                    </div>
                    <span className="text-[14.5px] sm:text-[15px] font-display font-bold text-[#0D1526] leading-snug">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: FitNaukri Laptop, Verified Profiles, Shaker & Dumbbell Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-6 xl:col-span-6 w-full flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[580px] lg:max-w-none lg:w-[110%] lg:-mr-4 lg:-mt-2">
                <img
                  src="/assets/product/fitnaukri-hiring-platform.png"
                  alt="FitNaukri fitness hiring platform on laptop with verified Gym Trainer and Nutritionist profiles"
                  className="w-full h-auto object-contain select-none"
                  referrerPolicy="no-referrer"
                />
                <img
                  src={CompanyLogo}
                  alt="FitUnified Logo"
                  className="absolute left-[32.84%] top-[33.64%] -translate-x-1/2 -translate-y-1/2 w-[3.6%] h-auto object-contain select-none pointer-events-none"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Product;
