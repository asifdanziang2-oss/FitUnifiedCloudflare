import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CompanyLogo from "@/assets/Company_Logo.svg";

/* Custom crisp icons matching the reference artwork */
const DumbbellIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="3.5" height="10" rx="1.5" />
    <rect x="6.5" y="8" width="4.2" height="16" rx="1.6" />
    <line x1="10.7" y1="16" x2="21.3" y2="16" />
    <rect x="21.3" y="8" width="4.2" height="16" rx="1.6" />
    <rect x="25.5" y="11" width="3.5" height="10" rx="1.5" />
  </svg>
);

const StorefrontIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 13L7.2 6.5C7.5 5.6 8.3 5 9.2 5H22.8C23.7 5 24.5 5.6 24.8 6.5L27 13" />
    <path d="M5 13C5 14.9 6.5 16.5 8.5 16.5C10.5 16.5 12 14.9 12 13C12 14.9 13.6 16.5 16 16.5C18.4 16.5 20 14.9 20 13C20 14.9 21.5 16.5 23.5 16.5C25.5 16.5 27 14.9 27 13" />
    <path d="M7 16.2V25C7 26.1 7.9 27 9 27H23C24.1 27 25 26.1 25 25V16.2" />
    <path d="M13 27V20.5C13 19.7 13.7 19 14.5 19H17.5C18.3 19 19 19.7 19 20.5V27" />
  </svg>
);

const BriefcaseIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="10" width="24" height="17" rx="3.2" />
    <path d="M11.5 10V7.5C11.5 6.1 12.6 5 14 5H18C19.4 5 20.5 6.1 20.5 7.5V10" />
    <path d="M4 16.2C9.5 18.8 22.5 18.8 28 16.2" />
    <rect x="13.5" y="14.5" width="5" height="3.2" rx="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const ecosystemProducts = [
  {
    id: "fitkhata",
    name: "FitKhata",
    lines: ["Gym management", "and automation"],
    icon: DumbbellIcon,
    iconBg: "linear-gradient(180deg, #F3246C 0%, #FA543E 100%)",
    iconShadow: "shadow-[0_6px_14px_-3px_rgba(243,36,108,0.28)]",
    cardBg: "linear-gradient(135deg, #FFFCFE 0%, #FFF7FA 58%, #FDF1F7 100%)",
    cardBorder: "border-[#F7E5EE]",
    buttonBg: "linear-gradient(180deg, #FF517B 0%, #FE2A54 100%)",
    buttonShadow: "shadow-[0_4px_10px_-2px_rgba(254,42,84,0.28)]",
    illustration: "/assets/product/vision-fitkhata-3d.png",
    illustrationAlt: "FitKhata 3D checklist clipboard and pink dumbbell",
  },
  {
    id: "fitvyapaar",
    name: "FitVyapaar",
    lines: ["Fitness business", "marketplace"],
    icon: StorefrontIcon,
    iconBg: "linear-gradient(180deg, #F27809 0%, #FB9F0D 100%)",
    iconShadow: "shadow-[0_6px_14px_-3px_rgba(245,130,13,0.26)]",
    cardBg: "linear-gradient(135deg, #FFFEFC 0%, #FFFBF4 58%, #FDF5E8 100%)",
    cardBorder: "border-[#F7ECD8]",
    buttonBg: "linear-gradient(180deg, #FDA509 0%, #F78802 100%)",
    buttonShadow: "shadow-[0_4px_10px_-2px_rgba(247,136,2,0.26)]",
    illustration: "/assets/product/vision-fitvyapaar-3d.png",
    illustrationAlt: "FitVyapaar 3D storefront display with shopping cart and boxes",
  },
  {
    id: "fitnaukri",
    name: "FitNaukri",
    lines: ["Fitness industry", "hiring platform"],
    icon: BriefcaseIcon,
    iconBg: "linear-gradient(180deg, #7C22CE 0%, #C826D3 100%)",
    iconShadow: "shadow-[0_6px_14px_-3px_rgba(147,51,234,0.26)]",
    cardBg: "linear-gradient(135deg, #FEFCFF 0%, #FBF7FE 58%, #F6EEFD 100%)",
    cardBorder: "border-[#EFE3FA]",
    buttonBg: "linear-gradient(180deg, #952FFA 0%, #8318F4 100%)",
    buttonShadow: "shadow-[0_4px_10px_-2px_rgba(131,24,244,0.28)]",
    illustration: "/assets/product/vision-fitnaukri-3d.png",
    illustrationAlt: "FitNaukri 3D candidate resume card and magnifying glass",
    comingSoon: true,
  },
];

const VisionSection = () => (
  <section className="relative overflow-hidden bg-[#FFFDFD] py-12 sm:py-14 lg:py-16">
    {/* Subtle pastel ambient radial tint */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 14% 20%, rgba(252, 228, 242, 0.32) 0%, transparent 45%), radial-gradient(circle at 86% 20%, rgba(245, 232, 255, 0.28) 0%, transparent 45%), radial-gradient(circle at 50% 55%, rgba(255, 242, 228, 0.24) 0%, transparent 50%)",
      }}
    />

    <div className="section-container relative z-10 max-w-[1260px] mx-auto px-4 sm:px-6">
      {/* Top Pill Badge + Heading + Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-7 sm:mb-8 lg:mb-9"
      >
        {/* Top "FitUnified Ecosystem" Pill Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#F5D0E2] bg-gradient-to-b from-[#FFF8FB] to-[#FDECF5] px-4 sm:px-5 py-1.5 sm:py-2 shadow-[0_3px_10px_-2px_rgba(236,38,106,0.08)] mb-4 sm:mb-5">
          <img
            src={CompanyLogo}
            alt="FitUnified Emblem"
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain shrink-0 select-none"
          />
          <span className="font-display font-bold text-[#0B132B] text-[15px] sm:text-[16.5px] tracking-tight leading-none">
            FitUnified Ecosystem
          </span>
        </div>

        {/* Main Heading (~10% smaller, keeping typography and pink-to-orange gradient) */}
        <h2 className="font-display font-extrabold tracking-tight text-[#0B132B] text-[27px] sm:text-[34px] md:text-[40px] lg:text-[45px] xl:text-[48px] leading-[1.15] lg:whitespace-nowrap">
          <span>One Ecosystem. </span>
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#EA1E69] via-[#F45235] to-[#FA9612] bg-clip-text text-transparent">
              Endless Possibilities.
            </span>
            {/* 3 Golden-Orange Spark Rays at Top-Right */}
            <svg
              className="hidden sm:block absolute -top-4 -right-8 w-8 h-8 text-[#F48C25] pointer-events-none select-none"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <line
                x1="8"
                y1="22"
                x2="12"
                y2="5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="16"
                y1="25"
                x2="28"
                y2="11"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="21"
                y1="32"
                x2="36"
                y2="24"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        {/* Two-line Subtitle */}
        <p className="text-[#475569] text-[15px] sm:text-[17px] leading-[1.55] max-w-[660px] mx-auto mt-3 font-normal">
          From gym operations and vendor sourcing to consumer wellness discovery —{" "}
          <br className="hidden sm:inline" />
          FitUnified connects the entire fitness ecosystem.
        </p>
      </motion.div>

      {/* 3 Ecosystem Cards Grid (1 col mobile, 2 col tablet, 3 col desktop; 24–26px gap) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[26px] relative z-20">
        {ecosystemProducts.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="h-full"
          >
            <Link
              to={`/product#${p.id}`}
              aria-label={`${p.name} - ${p.lines.join(" ")}`}
              style={{ background: p.cardBg }}
              className={`group relative flex items-stretch justify-between h-[252px] sm:h-[255px] lg:h-[255px] rounded-[24px] border ${p.cardBorder} p-6 shadow-[0_6px_20px_-6px_rgba(15,23,42,0.06),0_2px_6px_-1px_rgba(15,23,42,0.03)] hover:-translate-y-1 hover:shadow-[0_12px_26px_-8px_rgba(15,23,42,0.09)] transition-all duration-300 overflow-hidden cursor-pointer`}
            >
              {/* Left Zone (55%): Product Icon, Product Title & Description */}
              <div className="w-[55%] shrink-0 flex flex-col justify-between items-start text-left pr-2 z-10">
                <div
                  style={{ background: p.iconBg }}
                  className={`w-[52px] h-[52px] sm:w-[54px] sm:h-[54px] rounded-[15px] flex items-center justify-center text-white ${p.iconShadow} group-hover:scale-[1.03] transition-transform duration-300 shrink-0`}
                >
                  <p.icon className="w-7 h-7" />
                </div>

                <div className="mt-auto pt-3">
                  <h3 className="font-display font-bold text-[#0B132B] text-[27px] xl:text-[28px] leading-[1.15] tracking-tight mb-1.5 whitespace-nowrap">
                    {p.name}
                  </h3>
                  <p className="text-[#475569] text-[15px] xl:text-[15.5px] leading-[1.42] font-normal">
                    {p.lines.map((line, idx) => (
                      <span key={idx} className="block whitespace-nowrap">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Right Zone (45%): Reserved Artwork Area, Top-Right Badge & Bottom-Right CTA */}
              <div className="w-[45%] shrink-0 relative flex items-center justify-center h-full">
                {/* Compact Top-Right "COMING SOON" Badge on FitNaukri */}
                {p.comingSoon && (
                  <span className="absolute top-0 right-0 z-20 rounded-full border border-[#E5D0FA] bg-[#F5ECFF] px-2.5 py-0.5 text-[10px] font-display font-semibold uppercase tracking-[0.05em] text-[#7E22CE] leading-tight whitespace-nowrap">
                    COMING SOON
                  </span>
                )}

                {/* Vertically Centered Product Illustration inside Reserved Right Zone */}
                <img
                  src={p.illustration}
                  alt={p.illustrationAlt}
                  className="w-[138px] sm:w-[142px] h-[112px] sm:h-[115px] object-contain pointer-events-none select-none -translate-y-2 group-hover:scale-[1.03] transition-transform duration-300"
                />

                {/* Bottom-Right 40px Circular Arrow Button */}
                <span
                  style={{ background: p.buttonBg }}
                  className={`
                    absolute bottom-0 right-0 z-20
                    w-10 h-10 rounded-full
                    flex items-center justify-center text-white
                    ${p.buttonShadow}
                    group-hover:translate-x-0.5 group-hover:scale-105 transition-all duration-200
                  `}
                >
                  <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2.3} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionSection;


