import React from "react";
import drishtiLogo from "@/assets/drishti-cps-foundation.jpg";
import gizLogo from "@/assets/gizlogo-unternehmen.jpg";
import startupIndiaLogo from "@/assets/startup-india-logo.svg";
import recognitionPDF from "@/assets/docs/startup-india-recognition.pdf";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SupportedBySection = () => {
  return (
    <section className="section-shell w-full bg-muted/25 border-b border-border/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Left Column: Backed by / Supported by */}
          <div className="lg:col-span-7 bg-card rounded-2xl border border-border/80 shadow-sm p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-display font-bold text-center lg:text-left text-foreground tracking-tight mb-5">
                Backed by / Supported by
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-border/60 shadow-sm rounded-xl p-4 h-[115px] sm:h-[125px] flex items-center justify-center">
                  <img
                    src={drishtiLogo}
                    alt="DRISHTI logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-white border border-border/60 shadow-sm rounded-xl p-4 h-[115px] sm:h-[125px] flex items-center justify-center">
                  <img
                    src={gizLogo}
                    alt="GIZ logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <p className="text-center lg:text-left text-xs sm:text-sm text-muted-foreground mt-5 pt-4 border-t border-border/50">
              Under BID Incubation Program
            </p>
          </div>

          {/* Right Column: Recognized By */}
          <div className="lg:col-span-5 bg-card rounded-2xl border border-border/80 shadow-sm p-6 flex flex-col justify-between">
            <h2 className="text-xl md:text-2xl font-display font-bold text-center lg:text-left text-foreground tracking-tight mb-5">
              Recognized By
            </h2>

            <Dialog>
              <DialogTrigger asChild>
                <div className="group relative flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4 bg-gradient-to-br from-white via-white to-emerald-50/70 border border-border/60 hover:border-emerald-600/40 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer w-full my-auto overflow-hidden">
                  {/* Tricolour top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF6B00] via-[#138808] to-[#000080]" />

                  {/* DPIIT / Startup India Logo */}
                  <div className="shrink-0 bg-white rounded-xl border border-border/60 shadow-sm px-4 py-3.5 w-[165px] flex items-center justify-center">
                    <img
                      src={startupIndiaLogo}
                      alt="DPIIT Startup India"
                      className="w-full h-auto block object-contain"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col items-center sm:items-start lg:items-center xl:items-start text-center sm:text-left lg:text-center xl:text-left flex-1">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-base" role="img" aria-label="India flag">
                        🇮🇳
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#138808]">
                        Official Recognition
                      </span>
                    </div>
                    <p className="text-lg font-bold text-foreground leading-snug">
                      DPIIT Recognized Startup
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5 font-medium">
                      Government of India
                    </p>
                  </div>

                  {/* Info icon */}
                  <div className="hidden sm:flex shrink-0 text-muted-foreground/40 group-hover:text-[#138808] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 flex flex-col gap-0 overflow-hidden bg-white">
                <DialogHeader className="p-4 border-b bg-muted/30">
                  <DialogTitle className="text-lg font-semibold flex items-center gap-2">
                    <span role="img" aria-label="India flag">
                      🇮🇳
                    </span>
                    DPIIT Recognition Certificate
                  </DialogTitle>
                </DialogHeader>
                <div className="flex-1 w-full h-full bg-muted/20">
                  <iframe
                    src={`${recognitionPDF}#toolbar=0`}
                    className="w-full h-full border-none"
                    title="DPIIT Recognition Certificate"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBySection;
