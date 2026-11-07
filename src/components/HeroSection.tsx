import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.fitunified.fitkhata.fuapp&pcampaignid=web_share";

const HeroSection = () => {
  const [phone, setPhone] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const isAndroid =
    typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);

  const handlePlayStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAndroid) {
      e.preventDefault();
      window.location.href = PLAY_STORE_URL;
    }
  };

  const handleSubmit = () => {
    if (/^\d{10}$/.test(phone)) {
      setShowConfirm(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FDFBF7] border-b border-border/60">
      {/* =========================================================================
          DESKTOP VIEW (lg: and above >= 1024px)
          Full-sized bold typography & wide content stack with compact outer padding
          so it fills the screen without empty gaps while keeping Store Badges 100% visible
      ========================================================================= */}
      <div className="hidden lg:flex relative lg:min-h-[calc(100svh-4rem)] items-center">
        {/* Full-bleed right edge visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute inset-y-0 right-0 w-[56%] xl:w-[55%] overflow-hidden pointer-events-none z-0"
        >
          {/* Seamless left-edge gradient blend into #FDFBF7 */}
          <div className="absolute inset-y-0 left-0 w-24 xl:w-32 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent z-10" />

          {/* Right 57% slice of the banner stretched to match section height */}
          <img
            src="/assets/aistudio/Screenshot_2026-10-29_005652_ebecb6e3.png"
            alt="FitKhata Biometric Attendance Machine"
            className="w-[176%] max-w-none ml-[-76%] h-full object-cover object-right scale-[1.01] origin-right select-none"
          />
        </motion.div>

        <div className="section-container relative z-10">
          <div className="flex items-center justify-between">
            {/* Left Side: Biometric Offer Stack */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-[50%] py-5 xl:py-7 pr-6 flex flex-col justify-center text-left z-20 shrink-0"
            >
              <h1 className="text-[2.65rem] leading-[1.16] xl:text-[3.35rem] xl:leading-[1.15] font-display font-extrabold tracking-tight gradient-text pb-1 mb-3.5 xl:mb-4">
                Har Gym
                <br />
                Hoga Digital.
              </h1>

              <p className="text-[1.15rem] leading-[1.35] xl:text-[1.35rem] xl:leading-[1.35] font-display font-bold text-foreground mb-4 xl:mb-5">
                Biometric Attendance
                <br />
                Without Buying the Machine.
              </p>

              {/* 2x2 Gradient Checkmark Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 xl:gap-y-3 max-w-[500px] mb-4 xl:mb-5 text-left">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-3 h-3 text-primary-foreground stroke-[3]" />
                  </span>
                  <span className="text-sm xl:text-[15px] font-medium text-foreground">
                    We bring it.
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-3 h-3 text-primary-foreground stroke-[3]" />
                  </span>
                  <span className="text-sm xl:text-[15px] font-medium text-foreground">
                    We install it.
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-3 h-3 text-primary-foreground stroke-[3]" />
                  </span>
                  <span className="text-sm xl:text-[15px] font-medium text-foreground">
                    We maintain it.
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-3 h-3 text-primary-foreground stroke-[3]" />
                  </span>
                  <span className="text-sm xl:text-[15px] font-medium text-foreground whitespace-nowrap">
                    You try it <span className="text-primary font-bold">FREE</span> for 1 month.
                  </span>
                </div>
              </div>

              {/* Price Highlight */}
              <div className="border-t border-border/80 pt-3.5 xl:pt-4 mb-4 xl:mb-5 max-w-[490px]">
                <div className="flex items-baseline gap-2 tabular-nums">
                  <span className="text-4xl xl:text-[2.85rem] xl:leading-[1.1] font-display font-extrabold gradient-text tracking-tight pb-0.5">
                    ₹649
                  </span>
                  <span className="text-base xl:text-lg font-display font-bold text-foreground">
                    /month thereafter.
                  </span>
                </div>
              </div>

              {/* +91 Phone Input Bar */}
              <div className="w-full max-w-[490px] mb-2">
                <div className="flex items-center p-1.5 rounded-full bg-card border border-border shadow-card focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10 transition-all">
                  <div className="flex items-center flex-1 h-11 bg-transparent overflow-hidden px-2">
                    <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-muted text-xs font-bold text-foreground shrink-0 tabular-nums">
                      +91
                    </span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D/g, "").slice(0, 10);
                        setPhone(v);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSubmit();
                      }}
                      className="flex-1 h-full px-3.5 bg-transparent text-sm md:text-base text-foreground outline-none placeholder:text-muted-foreground w-full tabular-nums"
                    />
                  </div>
                  <Button
                    variant="gradient"
                    className="h-11 rounded-full px-7 shrink-0 text-sm font-semibold shadow-brand hover:shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
                    onClick={handleSubmit}
                    disabled={!/^\d{10}$/.test(phone)}
                  >
                    Get Started
                  </Button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground mb-4 xl:mb-5 max-w-[490px]">
                No machine purchase. Just use and pay monthly.
              </p>

              {/* Store Badges */}
              <div className="flex flex-wrap gap-4 items-center pt-1">
                <a
                  href={PLAY_STORE_URL}
                  target={isAndroid ? "_self" : "_blank"}
                  rel={isAndroid ? undefined : "noopener noreferrer"}
                  onClick={handlePlayStoreClick}
                  className="inline-block transition-transform hover:scale-105 hover:-translate-y-0.5"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-10 xl:h-11 drop-shadow-sm"
                  />
                </a>
                <div className="relative inline-block transition-transform hover:-translate-y-0.5">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-brand whitespace-nowrap">
                    Coming Soon
                  </span>
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-10 xl:h-11 opacity-60 pointer-events-none select-none drop-shadow-sm"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TABLET VIEW (md: to < lg: | 768px - 1023px)
          Balanced 2-Column Split fitted cleanly to viewport height
      ========================================================================= */}
      <div className="hidden md:flex lg:hidden md:min-h-[calc(100svh-4rem)] py-[clamp(1.25rem,3svh,2.25rem)] px-6 items-center">
        <div className="max-w-[860px] w-full mx-auto">
          <div className="grid grid-cols-12 gap-6 items-center">
            {/* Left 7 Columns: Content & Conversion */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-7 flex flex-col justify-center text-left"
            >
              <h1 className="text-3xl sm:text-[2.35rem] leading-[1.14] font-display font-extrabold tracking-tight gradient-text pb-1 mb-2.5">
                Har Gym
                <br />
                Hoga Digital.
              </h1>

              <p className="text-base font-display font-bold text-foreground leading-snug mb-3.5">
                Biometric Attendance
                <br />
                Without Buying the Machine.
              </p>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-left">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full gradient-bg flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-2.5 h-2.5 text-primary-foreground stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    We bring it.
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full gradient-bg flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-2.5 h-2.5 text-primary-foreground stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    We install it.
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full gradient-bg flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-2.5 h-2.5 text-primary-foreground stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    We maintain it.
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full gradient-bg flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-2.5 h-2.5 text-primary-foreground stroke-[3]" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    You try it <span className="text-primary font-bold">FREE</span> 1 mo.
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="border-t border-border/80 pt-3 mb-3.5">
                <div className="flex items-baseline gap-1.5 tabular-nums">
                  <span className="text-3xl font-display font-extrabold gradient-text tracking-tight">
                    ₹649
                  </span>
                  <span className="text-sm font-display font-bold text-foreground">
                    /month thereafter.
                  </span>
                </div>
              </div>

              {/* +91 Phone Input Bar */}
              <div className="w-full max-w-[390px] mb-2">
                <div className="flex items-center p-1 rounded-full bg-card border border-border shadow-card focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                  <div className="flex items-center flex-1 h-9 bg-transparent overflow-hidden px-2">
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-muted text-xs font-bold text-foreground shrink-0 tabular-nums">
                      +91
                    </span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D/g, "").slice(0, 10);
                        setPhone(v);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSubmit();
                      }}
                      className="flex-1 h-full px-2.5 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground w-full tabular-nums"
                    />
                  </div>
                  <Button
                    variant="gradient"
                    className="h-9 rounded-full px-5 shrink-0 text-xs font-semibold shadow-brand"
                    onClick={handleSubmit}
                    disabled={!/^\d{10}$/.test(phone)}
                  >
                    Get Started
                  </Button>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mb-4">
                No machine purchase. Just use and pay monthly.
              </p>

              {/* Store Badges */}
              <div className="flex gap-3 items-center pt-1">
                <a
                  href={PLAY_STORE_URL}
                  target={isAndroid ? "_self" : "_blank"}
                  rel={isAndroid ? undefined : "noopener noreferrer"}
                  onClick={handlePlayStoreClick}
                  className="inline-block transition-transform hover:scale-105"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-9 drop-shadow-sm"
                  />
                </a>
                <div className="relative inline-block">
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-[9px] font-bold px-2 py-0.5 rounded-full shadow-brand whitespace-nowrap">
                    Coming Soon
                  </span>
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-9 opacity-60 pointer-events-none select-none drop-shadow-sm"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right 5 Columns: Dedicated Framed Hardware Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-5 h-[clamp(340px,62svh,420px)] rounded-3xl overflow-hidden border border-border/80 shadow-card bg-white relative flex items-center"
            >
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/60 to-transparent z-10 pointer-events-none" />
              <img
                src="/assets/aistudio/Screenshot_2026-10-29_005652_ebecb6e3.png"
                alt="FitKhata Biometric Attendance Machine"
                className="w-[220%] max-w-none ml-[-115%] h-full object-cover object-center select-none"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE VIEW (< md | below 768px)
          Single-column mobile-first flow featuring a prominent hardware showcase card
      ========================================================================= */}
      <div className="block md:hidden px-4 pt-7 pb-10">
        <div className="max-w-[420px] mx-auto flex flex-col items-center text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl xs:text-4xl leading-[1.14] font-display font-extrabold tracking-tight gradient-text pb-1 mb-2"
          >
            Har Gym
            <br />
            Hoga Digital.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-base xs:text-lg font-display font-bold text-foreground leading-snug mb-4"
          >
            Biometric Attendance
            <br />
            Without Buying the Machine.
          </motion.p>

          {/* Prominent Biometric Machine Hardware Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/80 shadow-card bg-white relative mb-5"
          >
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#FDFBF7]/90 to-transparent z-10 pointer-events-none" />
            <img
              src="/assets/aistudio/Screenshot_2026-10-29_005652_ebecb6e3.png"
              alt="FitKhata Biometric Attendance Machine"
              className="w-[200%] max-w-none ml-[-100%] h-full object-cover object-center select-none"
            />
          </motion.div>

          {/* 2x2 Feature Checkmarks in compact mobile badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="grid grid-cols-2 gap-2 w-full mb-5 text-left"
          >
            <div className="flex items-center gap-2 p-2 rounded-xl bg-card border border-border/70 shadow-sm">
              <span className="w-4 h-4 rounded-full gradient-bg flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-primary-foreground stroke-[3]" />
              </span>
              <span className="text-xs font-semibold text-foreground">We bring it.</span>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-card border border-border/70 shadow-sm">
              <span className="w-4 h-4 rounded-full gradient-bg flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-primary-foreground stroke-[3]" />
              </span>
              <span className="text-xs font-semibold text-foreground">We install it.</span>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-card border border-border/70 shadow-sm">
              <span className="w-4 h-4 rounded-full gradient-bg flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-primary-foreground stroke-[3]" />
              </span>
              <span className="text-xs font-semibold text-foreground">We maintain it.</span>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-card border border-border/70 shadow-sm">
              <span className="w-4 h-4 rounded-full gradient-bg flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-primary-foreground stroke-[3]" />
              </span>
              <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                Try <span className="text-primary font-bold">FREE</span> 1 mo.
              </span>
            </div>
          </motion.div>

          {/* Price Callout */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full pt-3 pb-3 border-t border-border/80 mb-3"
          >
            <div className="flex items-baseline justify-center gap-1.5 tabular-nums">
              <span className="text-3xl xs:text-4xl font-display font-extrabold gradient-text tracking-tight">
                ₹649
              </span>
              <span className="text-sm xs:text-base font-display font-bold text-foreground">
                /month thereafter.
              </span>
            </div>
          </motion.div>

          {/* Mobile +91 Phone Input Bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="w-full mb-2"
          >
            <div className="flex items-center p-1 rounded-full bg-card border border-border shadow-card focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
              <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-muted text-xs font-bold text-foreground shrink-0 tabular-nums">
                +91
              </span>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => {
                  const v = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setPhone(v);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSubmit();
                }}
                className="flex-1 min-w-0 px-2.5 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground w-full tabular-nums"
              />
              <Button
                variant="gradient"
                className="h-10 rounded-full px-4 text-xs font-semibold shadow-brand shrink-0"
                onClick={handleSubmit}
                disabled={!/^\d{10}$/.test(phone)}
              >
                Get Started
              </Button>
            </div>
          </motion.div>

          {/* Reassurance text */}
          <p className="text-xs text-muted-foreground mb-5">
            No machine purchase. Just use and pay monthly.
          </p>

          {/* Mobile App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-center gap-3 pt-1"
          >
            <a
              href={PLAY_STORE_URL}
              target={isAndroid ? "_self" : "_blank"}
              rel={isAndroid ? undefined : "noopener noreferrer"}
              onClick={handlePlayStoreClick}
              className="inline-block transition-transform active:scale-95"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10 drop-shadow-sm"
              />
            </a>
            <div className="relative inline-block">
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-[8px] font-bold px-2 py-0.5 rounded-full shadow-brand whitespace-nowrap">
                Coming Soon
              </span>
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10 opacity-60 pointer-events-none select-none drop-shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Confirmation Dialog (Shared across Mobile, Tablet, and Desktop) */}
      <AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialogContent className="sm:max-w-sm rounded-2xl text-center">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-display">Thank You!</AlertDialogTitle>
            <AlertDialogDescription className="text-base">
              Your record has been recorded. We will call you shortly.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center">
            <AlertDialogAction
              onClick={() => {
                setShowConfirm(false);
                setPhone("");
              }}
              className="rounded-full px-8"
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default HeroSection;
