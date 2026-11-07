import { motion } from "framer-motion";

const values = [
  {
    num: "01",
    badgeBg: "bg-[#FFF0E6] text-[#FF7A00]",
    title: "Low Cost",
    desc: "FitKhata is designed to make digital tools affordable for every gym owner, ensuring technology is accessible without heavy costs.",
    illustration: "/assets/core-values/value-low-cost.png",
    alt: "Stack of gold coins with rupee symbol",
  },
  {
    num: "02",
    badgeBg: "bg-[#FFEAEA] text-[#FF4D4D]",
    title: "Simple",
    desc: "Built with simplicity at its core — easy to use, easy to adopt, and no complicated dashboards or training required.",
    illustration: "/assets/core-values/value-simple.png",
    alt: "Simple streamlined dashboard interface",
  },
  {
    num: "03",
    badgeBg: "bg-[#FFF4E5] text-[#FF9200]",
    title: "Hyperlocal",
    desc: "FitKhata is designed for local fitness communities, helping gyms connect with nearby customers and operate in their local language and ecosystem.",
    illustration: "/assets/core-values/value-hyperlocal.png",
    alt: "Folded map with location marker pin",
  },
];

const CoreValuesSection = () => (
  <section
    id="values"
    className="section-shell bg-background border-b border-border/50 relative overflow-hidden"
  >
    {/* Subtle atmospheric ambient glow matching reference */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FF7A00]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#FF3B5C]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

    <div className="section-container relative z-10">
      {/* Centered Heading with Top Gradient Accent Bar and Subtitle matching reference */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-12 max-w-2xl mx-auto"
      >
        {/* Top Centered Gradient Pill */}
        <div className="w-14 h-1 rounded-full bg-gradient-to-r from-[#FF4D4D] via-[#FF7A3D] to-[#FFA726] mx-auto mb-4" />

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-display font-extrabold tracking-tight text-gray-900 leading-tight">
          Our{" "}
          <span className="bg-gradient-to-r from-[#FF3B5C] via-[#FF6B35] to-[#FFA726] bg-clip-text text-transparent">
            Core Values
          </span>
        </h2>

        <p className="text-sm sm:text-base text-gray-500 mt-2.5 font-normal">
          The principles that guide everything we build at FitKhata.
        </p>
      </motion.div>

      {/* 3-Column Grid of Value Cards with Two-Part Layout & Custom Illustrations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`group bg-white rounded-[26px] p-6 sm:p-7 border border-[#F0ECE9] shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_-8px_rgba(255,90,54,0.12)] hover:border-primary/25 transition-all duration-300 flex items-center justify-between gap-4 overflow-hidden ${
              i === 2 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            {/* Left Side: Number Badge, Title, and Description */}
            <div className="flex-1 min-w-0 flex flex-col justify-start self-start">
              <span
                className={`inline-flex items-center justify-center self-start px-3 py-1 rounded-xl font-bold text-xs sm:text-sm tracking-wide ${v.badgeBg}`}
              >
                {v.num}
              </span>

              <h3 className="text-xl sm:text-[22px] font-display font-bold text-gray-900 mt-3 mb-2 leading-snug tracking-tight">
                {v.title}
              </h3>

              <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-gray-500">
                {v.desc}
              </p>
            </div>

            {/* Right Side: Custom Illustration with Pastel Glow and Spark Lines */}
            <div className="w-[110px] sm:w-[124px] lg:w-[128px] shrink-0 flex items-center justify-center self-center">
              <img
                src={v.illustration}
                alt={v.alt}
                className="w-full h-auto object-contain max-h-[145px] transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreValuesSection;
