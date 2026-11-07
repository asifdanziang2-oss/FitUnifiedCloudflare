import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, CalendarCheck, Headset, ArrowRight } from "lucide-react";
import BookDemoModal from "@/components/BookDemoModal";

const ctaHighlights = [
  {
    icon: Zap,
    line1: "Set Up in",
    line2: "Minutes",
  },
  {
    icon: CalendarCheck,
    line1: "3-Month",
    line2: "Free Trial",
  },
  {
    icon: Headset,
    line1: "Dedicated",
    line2: "Support",
  },
];

const CTASection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="py-10 md:py-14 lg:py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-[28px] md:rounded-[34px] shadow-[0_22px_50px_-12px_rgba(242,61,51,0.28)]"
          style={{
            background:
              "linear-gradient(100deg, #FA247C 0%, #E9274D 26%, #F23D33 42%, #FB571F 54%, #FD9A11 78%, #FEA207 100%)",
          }}
        >
          {/* Subtle diagonal light facet on the lower-left to match the reference banner depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, transparent 0%, transparent 24%, rgba(255,255,255,0.06) 24.1%, transparent 48%)",
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-12 items-center">
            {/* Left Column: Heading, Subtitle, 3 Feature Highlights, Book Demo Button */}
            <div className="lg:col-span-6 xl:col-span-6 p-7 sm:p-10 lg:py-11 lg:pl-12 xl:pl-14 lg:pr-2 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-display font-extrabold text-white leading-[1.12] tracking-tight mb-4">
                <span className="block">Start Digitizing</span>
                <span className="block mt-1">
                  Your <span className="text-[#FFF212]">Gym Today</span>
                </span>
              </h2>

              <p className="text-white/95 text-[15px] sm:text-[16.5px] leading-[1.55] mb-7 max-w-[445px] font-normal">
                Join thousands of gym owners across India
                <br className="hidden sm:inline" /> who are switching to
                FitUnified. It’s free to start.
              </p>

              {/* 3 Feature Highlights with Vertical Dividers */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-5 mb-9">
                {ctaHighlights.map((item, idx) => (
                  <div key={item.line1} className="flex items-center gap-4 sm:gap-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <item.icon
                          className="w-5 h-5 text-white shrink-0"
                          strokeWidth={2}
                        />
                      </div>
                      <div className="text-white text-[13px] sm:text-[13.5px] font-medium leading-[1.25]">
                        <span className="block whitespace-nowrap">{item.line1}</span>
                        <span className="block whitespace-nowrap">{item.line2}</span>
                      </div>
                    </div>
                    {idx < ctaHighlights.length - 1 && (
                      <div className="hidden sm:block h-8 w-px bg-white/30 shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* White Pill CTA Button with Yellow Decorative Spark Lines */}
              <div className="relative inline-block sm:ml-3 mt-1">
                {/* 3 Yellow Spark Rays at Top-Left of Button */}
                <svg
                  className="absolute -top-6 -left-6 w-8 h-8 text-[#FFE600] pointer-events-none select-none"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <line
                    x1="21"
                    y1="13"
                    x2="15"
                    y2="3"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="15"
                    y1="18"
                    x2="5"
                    y2="11"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="13"
                    y1="24"
                    x2="2"
                    y2="22"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                </svg>

                <button
                  type="button"
                  onClick={() => setDemoOpen(true)}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white hover:bg-white/95 active:scale-[0.99] transition-all px-10 sm:px-12 py-3.5 sm:py-4 shadow-[0_10px_25px_-5px_rgba(160,15,60,0.35)] cursor-pointer"
                >
                  <span className="text-[#E91E63] font-display font-bold text-[17px] sm:text-[18.5px] tracking-tight">
                    Book Demo
                  </span>
                  <ArrowRight
                    className="w-5 h-5 text-[#E91E63] transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </div>

            {/* Right Column: Gym Owner, Floating Feature Cards & Equipment Visual */}
            <div className="lg:col-span-6 xl:col-span-6 w-full h-full flex items-end justify-end">
              <img
                src="/assets/product/cta-gym-owner.png"
                alt="Gym owner with Handle Subscriptions, Manage Members, Track Attendance, and Grow Your Gym cards"
                className="w-full lg:w-[106%] lg:max-w-none h-auto object-contain object-right-bottom select-none lg:-ml-6"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
};

export default CTASection;

