import { motion } from "framer-motion";
import { BookOpen, IndianRupee, Users, BarChart3 } from "lucide-react";

const ProblemSection = () => (
  <section className="section-shell relative bg-background border-b border-border/50 overflow-hidden">
    <div className="section-container relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header text-center max-w-2xl mx-auto"
      >
        <h2 className="section-title font-extrabold">
          Millions of Gyms Still Run on{" "}
          <span className="gradient-text relative inline-block pb-0.5">
            Registers
            {/* Coral hand-drawn sparkle burst lines */}
            <svg
              className="hidden sm:block absolute -top-3 -right-7 w-6 h-6 text-[#F48B8E]"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 16C8.5 11.5 11 7.5 13 4"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M12 20C14 18.5 15.5 17.5 17 16.5"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M15 25C19.5 23.5 24 22 28 20.5"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <p className="section-subtitle max-w-xl mx-auto">
          Most local gyms in India still manage everything manually. That means lost revenue, unhappy members, and no growth.
        </p>
      </motion.div>

      {/* Asymmetric Bento Grid aligned to 1180px container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-[18px] items-stretch">
        {/* Left Column (6 cols): Card 01 — Manual Registers */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 bg-[#FFFDFC] rounded-2xl border border-[#F3E6E0] shadow-sm p-3.5 sm:p-4 flex flex-col sm:flex-row gap-4 items-stretch"
        >
          {/* Left Photo: Open Register Notebook & Pen */}
          <div
            role="img"
            aria-label="Manual gym register notebook and pen"
            className="w-full sm:w-[53%] min-h-[210px] sm:min-h-[268px] rounded-xl shrink-0 bg-no-repeat shadow-sm problem-visual-1"
          />

          {/* Right Content of Card 01 */}
          <div className="flex-1 flex flex-col justify-between py-1 sm:py-2 pr-1">
            <div>
              <span className="block text-xs font-display font-bold text-[#F4979C] mb-2 tabular-nums">
                01
              </span>

              <div className="w-10 h-10 rounded-xl bg-[#FFEFE7] flex items-center justify-center mb-3">
                <BookOpen className="h-5 w-5 text-[#F25C45]" />
              </div>

              <h3 className="card-title mb-1.5">
                Manual Registers
              </h3>
              <p className="card-body">
                Membership records still tracked in notebooks and diaries.
              </p>
            </div>

            {/* Bottom Hand-Drawn Looping Arrow + "Still using notebooks?" Callout */}
            <div
              aria-hidden="true"
              className="w-full h-14 mt-3 bg-no-repeat problem-callout-1"
            />
          </div>
        </motion.div>

        {/* Right Column (6 cols): Top Row (Cards 02 & 03) + Bottom Row (Card 04) */}
        <div className="lg:col-span-6 flex flex-col gap-4 lg:gap-[18px] justify-between">
          {/* Top Row: Card 02 & Card 03 side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[18px] flex-1">
            {/* Card 02 — Missed Payments */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="bg-[#FFFDFC] rounded-2xl border border-[#F3E6E0] shadow-sm p-4 flex items-stretch justify-between gap-3"
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-3 mb-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FFEFE7] flex items-center justify-center shrink-0">
                      <IndianRupee className="h-4 w-4 text-[#F25C45]" />
                    </div>
                    <span className="text-xs font-display font-bold text-[#F4979C] pt-1 tabular-nums">
                      02
                    </span>
                  </div>

                  <h3 className="card-title mb-1">
                    Missed Payments
                  </h3>
                  <p className="card-body">
                    No reminders, no tracking — payments slip through the cracks.
                  </p>
                </div>
              </div>

              {/* Right Photo: Membership Due Slips */}
              <div
                role="img"
                aria-label="Membership due paper slips"
                className="w-[96px] xl:w-[106px] min-h-[124px] rounded-xl shrink-0 bg-no-repeat shadow-sm problem-visual-2"
              />
            </motion.div>

            {/* Card 03 — No Attendance Records */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="bg-[#FFFDFC] rounded-2xl border border-[#F3E6E0] shadow-sm p-4 flex items-stretch justify-between gap-3"
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-3 mb-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FFEFE7] flex items-center justify-center shrink-0">
                      <Users className="h-4 w-4 text-[#F25C45]" />
                    </div>
                    <span className="text-xs font-display font-bold text-[#F4979C] pt-1 tabular-nums">
                      03
                    </span>
                  </div>

                  <h3 className="card-title mb-1">
                    No Attendance Records
                  </h3>
                  <p className="card-body">
                    No idea who comes regularly and who's dropped off.
                  </p>
                </div>
              </div>

              {/* Right Photo: Member in gym with "Came today?" bubble */}
              <div
                role="img"
                aria-label="Gym member attendance question"
                className="w-[96px] xl:w-[106px] min-h-[124px] rounded-xl shrink-0 bg-no-repeat shadow-sm problem-visual-3"
              />
            </motion.div>
          </div>

          {/* Bottom Row: Card 04 — Zero Visibility */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="bg-[#FFFDFC] rounded-2xl border border-[#F3E6E0] shadow-sm p-4 sm:px-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 overflow-hidden"
          >
            <div className="flex items-start sm:items-center gap-3.5 flex-1">
              <div className="w-10 h-10 rounded-xl bg-[#FFEFE7] flex items-center justify-center shrink-0">
                <BarChart3 className="h-4 w-4 text-[#F25C45]" />
              </div>

              <div>
                <span className="block text-xs font-display font-bold text-[#F4979C] mb-0.5 tabular-nums">
                  04
                </span>
                <h3 className="card-title mb-0.5">
                  Zero Visibility
                </h3>
                <p className="card-body">
                  No reports, no data — gym owners fly blind every day.
                </p>
              </div>
            </div>

            {/* Right Graphic: Report Sheets + "No reports? No growth!" */}
            <div
              aria-hidden="true"
              className="w-36 sm:w-40 h-20 shrink-0 bg-no-repeat self-end sm:self-center -my-1 problem-visual-4"
            />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
