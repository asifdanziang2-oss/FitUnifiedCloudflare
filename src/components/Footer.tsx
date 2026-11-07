import { Link } from "react-router-dom";
import {
  Layers,
  Tag,
  Download,
  Users,
  Mail,
  Shield,
  FileText,
  MapPin,
  CreditCard,
  Phone,
  Instagram,
} from "lucide-react";
import CompanyLogo from "@/assets/Company_Logo.svg";

const Footer = () => (
  <footer
    className="relative overflow-hidden pt-14 md:pt-16 lg:pt-20"
    style={{
      background:
        "linear-gradient(180deg, #FDF0F5 0%, #FEF7FA 38%, #FFFFFF 75%, #FFFFFF 100%)",
    }}
  >
    <div className="section-container relative z-10">
      {/* Top 5-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-0 pb-10">
        {/* Column 1: Brand, Tagline & Store Badges */}
        <div className="lg:col-span-4 lg:pr-8 flex flex-col items-start text-left">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={CompanyLogo}
              alt="FitUnified Logo"
              className="h-12 w-12 object-contain shrink-0"
            />
            <span className="font-display font-extrabold text-[26px] tracking-tight text-[#0F172A]">
              FitUnified
            </span>
          </Link>

          <p className="mt-4 mb-6 text-[15px] leading-[1.6] text-[#334155] max-w-[275px] font-normal">
            Gym management made simple and affordable for every gym in India.
          </p>

          {/* App Store Badges */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Google Play Badge */}
            <a
              href="#"
              aria-label="Get it on Google Play"
              className="inline-flex items-center gap-2.5 bg-black hover:bg-neutral-900 text-white rounded-[8px] px-3.5 py-2 border border-neutral-800 shadow-sm transition-all"
            >
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3.609 1.814L13.792 12 3.61 22.186a1.75 1.75 0 0 1-.61-1.34V3.154c0-.517.224-.998.609-1.34Z"
                  fill="#00D2FF"
                />
                <path
                  d="M17.208 8.584L13.792 12l3.416 3.416 3.858-2.204c.89-.508.89-1.916 0-2.424l-3.858-2.204Z"
                  fill="#FFCC00"
                />
                <path
                  d="M3.609 22.186C4.02 22.55 4.627 22.63 5.21 22.297l11.998-6.881L13.792 12 3.609 22.186Z"
                  fill="#FF3A44"
                />
                <path
                  d="M17.208 8.584L5.21 1.703c-.583-.333-1.19-.253-1.601.111L13.792 12l3.416-3.416Z"
                  fill="#00F076"
                />
              </svg>
              <div className="flex flex-col items-start text-left leading-none">
                <span className="text-[8px] uppercase tracking-wider text-white/85 font-medium">
                  GET IT ON
                </span>
                <span className="text-[13px] font-semibold tracking-tight text-white mt-0.5">
                  Google Play
                </span>
              </div>
            </a>

            {/* Apple App Store Badge */}
            <a
              href="#"
              aria-label="Download on the App Store"
              className="inline-flex items-center gap-2.5 bg-black hover:bg-neutral-900 text-white rounded-[8px] px-3.5 py-2 border border-neutral-800 shadow-sm transition-all"
            >
              <svg
                className="w-5 h-5 shrink-0 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.79-.96 2.84 1.04.08 2.08-.52 2.72-1.3Z" />
              </svg>
              <div className="flex flex-col items-start text-left leading-none">
                <span className="text-[8px] text-white/85 font-normal">
                  Download on the
                </span>
                <span className="text-[13px] font-semibold tracking-tight text-white mt-0.5">
                  App Store
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Column 2: Product */}
        <div className="lg:col-span-2 lg:border-l lg:border-[#F0DCE4] lg:pl-6 flex flex-col items-start text-left">
          <h4 className="font-display font-bold mb-5 text-[17px] text-[#0F172A]">
            Product
          </h4>
          <ul className="space-y-3.5 text-[14px] text-[#1E293B]">
            <li>
              <Link
                to="/product"
                className="group flex items-center gap-3 hover:text-primary transition-colors"
              >
                <span className="w-8 h-8 rounded-[9px] bg-[#FFF0F5] flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4 text-[#EC266A]" strokeWidth={2.1} />
                </span>
                <span>Features</span>
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="group flex items-center gap-3 hover:text-primary transition-colors"
              >
                <span className="w-8 h-8 rounded-[9px] bg-[#FFF4E8] flex items-center justify-center shrink-0">
                  <Tag className="w-4 h-4 text-[#F97316]" strokeWidth={2.1} />
                </span>
                <span>Pricing</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center gap-3 hover:text-primary transition-colors"
              >
                <span className="w-8 h-8 rounded-[9px] bg-[#F5EEFF] flex items-center justify-center shrink-0">
                  <Download className="w-4 h-4 text-[#9333EA]" strokeWidth={2.1} />
                </span>
                <span>Download App</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="lg:col-span-2 lg:border-l lg:border-[#F6E8EE] lg:pl-6 flex flex-col items-start text-left">
          <h4 className="font-display font-bold mb-5 text-[17px] text-[#0F172A]">
            Company
          </h4>
          <ul className="space-y-3.5 text-[14px] text-[#1E293B]">
            <li>
              <Link
                to="/about"
                className="group flex items-center gap-3 hover:text-primary transition-colors"
              >
                <span className="w-8 h-8 rounded-[9px] bg-[#FFF0F5] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#EC266A]" strokeWidth={2.1} />
                </span>
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="group flex items-center gap-3 hover:text-primary transition-colors"
              >
                <span className="w-8 h-8 rounded-[9px] bg-[#FFF4E8] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#F97316]" strokeWidth={2.1} />
                </span>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div className="lg:col-span-2 lg:border-l lg:border-[#F6E8EE] lg:pl-6 flex flex-col items-start text-left">
          <h4 className="font-display font-bold mb-5 text-[17px] text-[#0F172A]">
            Legal
          </h4>
          <ul className="space-y-3.5 text-[14px] text-[#1E293B]">
            <li>
              <a
                href="/privacy-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 hover:text-primary transition-colors"
              >
                <span className="w-8 h-8 rounded-[9px] bg-[#F5EEFF] flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-[#9333EA]" strokeWidth={2.1} />
                </span>
                <span>Privacy Policy</span>
              </a>
            </li>
            <li>
              <a
                href="/terms-of-service.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 hover:text-primary transition-colors"
              >
                <span className="w-8 h-8 rounded-[9px] bg-[#FFF0F5] flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-[#EC266A]" strokeWidth={2.1} />
                </span>
                <span>Terms of Service</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Registered Office */}
        <div className="lg:col-span-2 lg:border-l lg:border-[#F0DCE4] lg:pl-6 flex flex-col items-start text-left">
          <h4 className="font-display font-bold mb-5 text-[17px] text-[#0F172A]">
            Registered Office
          </h4>
          <div className="space-y-4 text-[13px] text-[#1E293B]">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-[9px] bg-[#FFF4E8] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-[#F97316]" strokeWidth={2.1} />
              </span>
              <address className="not-italic leading-[1.6] text-[#1E293B] font-normal">
                Tower 11, Prestige Song Of The South
                <br />
                Begur Hobli Road, Yelenahalli
                <br />
                Bengaluru, Karnataka, 560068
              </address>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-[9px] bg-[#F5EEFF] flex items-center justify-center shrink-0">
                <CreditCard className="w-4 h-4 text-[#9333EA]" strokeWidth={2.1} />
              </span>
              <span className="text-[13px] text-[#1E293B] font-normal tabular-nums whitespace-nowrap">
                GSTIN: 29AAGCF7482G1Z7
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Divider + Contact & Social Bar */}
      <div className="border-t border-[#F2DEE6] pt-7 pb-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left: Phone & Email */}
        <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-[14.5px]">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-[11px] bg-[#FFF0F5] flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-[#EC266A]" strokeWidth={2.1} />
            </span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#0F172A]">Phone:</span>
              <a
                href="tel:+918796260440"
                className="text-[#1E293B] hover:text-primary transition-colors tabular-nums"
              >
                +91-8796260440
              </a>
            </div>
          </div>

          <div className="hidden sm:block h-6 w-px bg-[#E5D6DD]" />

          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-[11px] bg-[#FFF7E6] flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-[#F59E0B]" strokeWidth={2.1} />
            </span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#0F172A]">Email:</span>
              <a
                href="mailto:connect@fitunified.com"
                className="text-[#1E293B] hover:text-primary transition-colors"
              >
                connect@fitunified.com
              </a>
            </div>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-3.5">
          <div className="hidden md:block h-6 w-px bg-[#E5D6DD] mr-2" />
          <a
            href="https://www.linkedin.com/company/fitunified/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bat7pmSvsSNqvm%2F5WiQ39Tg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-white border border-[#E2D8DF] flex items-center justify-center text-[#0F172A] hover:border-primary/50 hover:text-primary shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all"
          >
            <span className="font-display font-bold text-[15px] leading-none tracking-tight">
              in
            </span>
          </a>
          <a
            href="https://www.instagram.com/indiangymreport?igsh=MXIwN3h1YWl2c3M1cQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-white border border-[#E2D8DF] flex items-center justify-center text-[#0F172A] hover:border-primary/50 hover:text-primary shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all"
          >
            <Instagram className="w-[18px] h-[18px]" strokeWidth={2} />
          </a>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="pt-2 pb-2">
        <p className="text-[13.5px] text-[#1E293B] font-normal text-left">
          © 2026 FitUnified (FitKhata). All rights reserved.
        </p>
      </div>
    </div>

    {/* Bottom Multi-Layered Decorative Gradient Wave */}
    <div
      className="w-full overflow-hidden leading-none select-none pointer-events-none -mt-3 sm:-mt-6 md:-mt-8"
      aria-hidden="true"
    >
      <svg
        className="w-full h-[76px] sm:h-[96px] md:h-[118px] lg:h-[135px] block"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Soft translucent upper-left pink wave */}
          <linearGradient id="footerWaveBackLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F9A8D4" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#FBCFE8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.15" />
          </linearGradient>

          {/* Soft translucent upper-right blush/peach wave */}
          <linearGradient id="footerWaveBackRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FCE7F3" stopOpacity="0.2" />
            <stop offset="58%" stopColor="#FBCFE8" stopOpacity="0.65" />
            <stop offset="82%" stopColor="#FED7AA" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#FEF08A" stopOpacity="0.45" />
          </linearGradient>

          {/* Primary vibrant pink -> coral -> orange -> warm gold gradient */}
          <linearGradient id="footerWaveMain" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="22%" stopColor="#EC4899" />
            <stop offset="48%" stopColor="#F43F5E" />
            <stop offset="70%" stopColor="#FB923C" />
            <stop offset="86%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#FDE047" />
          </linearGradient>

          {/* Subtle front-bottom silk fold highlight */}
          <linearGradient id="footerWaveFrontFold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F9A8D4" stopOpacity="0.55" />
            <stop offset="35%" stopColor="#FB7185" stopOpacity="0.45" />
            <stop offset="72%" stopColor="#F97316" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#FACC15" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* Back Wave 1 (Left crest) */}
        <path
          d="M0,66 C160,64 290,46 450,78 C610,110 760,132 960,110 L1440,95 L1440,150 L0,150 Z"
          fill="url(#footerWaveBackLeft)"
        />

        {/* Back Wave 2 (Right-center arch) */}
        <path
          d="M380,150 C560,138 710,92 860,46 C1010,0 1160,12 1310,48 C1365,61 1408,68 1440,70 L1440,150 Z"
          fill="url(#footerWaveBackRight)"
        />

        {/* Main Vibrant Wave */}
        <path
          d="M0,58 C190,62 360,104 560,122 C760,140 930,82 1100,44 C1235,14 1350,28 1440,54 L1440,150 L0,150 Z"
          fill="url(#footerWaveMain)"
        />

        {/* Silky Foreground Ribbon Fold */}
        <path
          d="M0,150 C140,112 330,96 540,118 C750,140 960,108 1190,74 C1300,58 1385,56 1440,62 L1440,150 Z"
          fill="url(#footerWaveFrontFold)"
        />
      </svg>
    </div>
  </footer>
);

export default Footer;
