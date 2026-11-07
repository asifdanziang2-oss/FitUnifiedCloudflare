import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronDown, ArrowRight } from "lucide-react";
import CompanyLogo from "@/assets/Company_Logo.svg";
import BookDemoModal from "@/components/BookDemoModal";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageModal } from "@/components/LanguageModal";

const CalendarCheckIcon = ({ className = "w-[17px] h-[17px]" }: { className?: string }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect
      x="2.5"
      y="4"
      width="15"
      height="13.5"
      rx="3.2"
      stroke="currentColor"
      strokeWidth="1.75"
    />
    <path
      d="M6.5 2.4V5.2M13.5 2.4V5.2M2.5 8.2H17.5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    <circle cx="10" cy="12.7" r="1.25" fill="currentColor" />
  </svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const location = useLocation();
  const { language, t } = useLanguage();
  const [langModalOpen, setLangModalOpen] = useState(false);

  const navLinks = [
    { label: t("nav.home"), path: "/", hasChevron: false },
    { label: t("nav.product"), path: "/product", hasChevron: true },
    { label: t("nav.pricing"), path: "/pricing", hasChevron: false },
    { label: t("nav.about"), path: "/about", hasChevron: false },
    { label: t("nav.contact"), path: "/contact", hasChevron: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#F8E2EE] shadow-[0_8px_30px_-6px_rgba(236,28,104,0.10)]">
      <nav
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-[60px] flex items-center justify-between gap-3"
      >
          {/* Left: Brand + Vertical Divider */}
          <div className="flex items-center gap-3.5 xl:gap-5 shrink-0">
            <Link to="/" className="flex items-center gap-2 shrink-0 group">
              <img
                src={CompanyLogo}
                alt="FitUnified"
                className="h-7 w-7 sm:h-8 sm:w-8 object-contain transition-transform duration-200 group-hover:scale-[1.03]"
              />
              <span className="text-[18px] sm:text-[19px] font-display font-semibold text-[#0B132B] tracking-[-0.015em] whitespace-nowrap">
                FitUnified
              </span>
            </Link>

            <div
              className="hidden lg:block w-[1.5px] h-5 bg-[#E2E8F0]"
              aria-hidden="true"
            />
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`inline-flex items-center gap-1 text-[14px] transition-all duration-200 whitespace-nowrap rounded-full ${
                    isActive
                      ? "bg-[#FDEBF2] text-[#EC1663] font-display font-semibold px-4 py-1.5"
                      : "text-[#0F172A] hover:text-[#EC1663] font-medium px-3 py-1.5"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasChevron && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 stroke-[2.1] transition-transform duration-200 ${
                        isActive ? "text-[#EC1663]" : "text-[#0F172A]"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right: Vertical Divider + Actions */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
            <div
              className="w-[1.5px] h-5 bg-[#E2E8F0] mr-1 xl:mr-1.5"
              aria-hidden="true"
            />

            {/* Language Selector Pill */}
            <button
              type="button"
              onClick={() => setLangModalOpen(true)}
              className="inline-flex items-center gap-1.5 bg-[#F4F5F8] hover:bg-[#EAECEF] text-[#0F172A] rounded-full px-3.5 py-1.5 text-[13px] font-display font-semibold transition-colors cursor-pointer"
              aria-label="Change Language"
            >
              <Globe className="w-[15px] h-[15px] text-[#0F172A] stroke-[1.9]" />
              <span className="uppercase tracking-wide">{language}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#0F172A] stroke-[2.2]" />
            </button>

            {/* Book Demo Outlined Pill Button */}
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-[#F21C69] bg-white hover:bg-[#FFF5F9] text-[#F21C69] font-display font-semibold text-[13.5px] px-4 py-1.5 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <CalendarCheckIcon className="w-[15px] h-[15px]" />
              <span>Book Demo</span>
            </button>

            {/* Start Free Gradient Pill Button */}
            <a
              href="https://api.whatsapp.com/send?phone=918796260440"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background:
                  "linear-gradient(90deg, #F31668 0%, #FB6620 55%, #FCA611 100%)",
              }}
              className="inline-flex items-center gap-1.5 rounded-full text-white font-display font-semibold text-[13.5px] px-4 py-[7px] shadow-[0_6px_16px_-4px_rgba(243,22,104,0.35)] hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 whitespace-nowrap"
            >
              <span>Start Free</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </a>
          </div>

          {/* Mobile / Tablet Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLangModalOpen(true)}
              className="inline-flex items-center gap-1.5 bg-[#F4F5F8] hover:bg-[#EAECEF] text-[#0F172A] rounded-full px-2.5 py-1 text-[12.5px] font-display font-semibold transition-colors"
              aria-label="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#0F172A] stroke-[1.9]" />
              <span className="uppercase">{language}</span>
              <ChevronDown className="w-3 h-3 text-[#0F172A] stroke-[2.2]" />
            </button>

            <button
              type="button"
              className="p-1.5 rounded-full text-[#0B132B] hover:bg-[#FDEBF2] hover:text-[#EC1663] transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="lg:hidden border-t border-[#F8E2EE] bg-white/98 backdrop-blur-md px-4 sm:px-6 py-4 shadow-[0_18px_40px_-10px_rgba(236,28,104,0.14)] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between text-[15px] px-4 py-2.5 rounded-2xl transition-colors ${
                    isActive
                      ? "bg-[#FDEBF2] text-[#EC1663] font-display font-bold"
                      : "text-[#0F172A] hover:bg-[#FFF5F9] font-medium"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasChevron && (
                    <ChevronDown className="w-4 h-4 stroke-[2.2]" />
                  )}
                </Link>
              );
            })}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 mt-1 border-t border-[#F3E8EE]">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setDemoOpen(true);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-[1.6px] border-[#F21C69] bg-white hover:bg-[#FFF5F9] text-[#F21C69] font-display font-bold text-[14.5px] px-5 py-2.5 transition-all"
              >
                <CalendarCheckIcon className="w-[17px] h-[17px]" />
                <span>Book Demo</span>
              </button>

              <a
                href="https://api.whatsapp.com/send?phone=918796260440"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background:
                    "linear-gradient(90deg, #F31668 0%, #FB6620 55%, #FCA611 100%)",
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full text-white font-display font-bold text-[14.5px] px-5 py-2.5 shadow-[0_8px_20px_-5px_rgba(243,22,104,0.38)] hover:opacity-95 transition-all"
              >
                <span>Start Free</span>
                <ArrowRight className="w-4 h-4 stroke-[2.3]" />
              </a>
            </div>
          </div>
        </div>
      )}

      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
      <LanguageModal open={langModalOpen} onOpenChange={setLangModalOpen} />
    </header>
  );
};

export default Navbar;

