import { Users, IndianRupee, Clock, Fingerprint, ShieldCheck, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Membership Management",
    desc: "Add, renew, and track every member from your phone.",
    visualClass: "solution-card-visual-1",
    visualAlt: "Membership status cards showing Active, Pending, and Expired badges",
  },
  {
    icon: IndianRupee,
    title: "Payment Tracking",
    desc: "Know who paid, who's pending, and send reminders instantly.",
    visualClass: "solution-card-visual-2",
    visualAlt: "Smartphone displaying Payment Received confirmation with notification bell",
  },
  {
    icon: Clock,
    title: "Attendance Tracking",
    desc: "Daily attendance logs with check-in/check-out times.",
    visualClass: "solution-card-visual-3",
    visualAlt: "Digital attendance terminal showing green fingerprint scan",
  },
  {
    icon: Fingerprint,
    title: "Biometric Integration",
    desc: "Fingerprint-based attendance — automatic and accurate.",
    visualClass: "solution-card-visual-4",
    visualAlt: "Finger scanning on biometric attendance machine",
  },
  {
    icon: ShieldCheck,
    title: "Access Control",
    desc: "Only active members can enter. Auto-lock for expired memberships.",
    visualClass: "solution-card-visual-5",
    visualAlt: "Automated turnstile access gate with green checkmark",
  },
  {
    icon: BarChart3,
    title: "PT Management",
    desc: "Manage personal training sessions, assign trainers, and track client progress easily.",
    visualClass: "solution-card-visual-6",
    visualAlt: "Personal training clipboard with dumbbell and completed checklist",
  },
];

const SolutionSection = () => (
  <section
    id="features"
    className="section-shell bg-muted/35 border-b border-border/50 relative"
  >
    <div className="section-container">
      {/* Section Heading & Supporting Copy aligned to shared 1180px container */}
      <div className="section-header text-left max-w-3xl">
        <h2 className="section-title font-extrabold">
          Everything Your Gym Needs. <span className="gradient-text">In One App.</span>
        </h2>
        <p className="section-subtitle max-w-xl">
          From memberships to biometric attendance — manage it all from a single, simple dashboard.
        </p>
      </div>

      {/* Compact 3x2 Desktop / 2-Col Tablet / 1-Col Mobile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[18px] items-stretch">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-[#FFFEFC] rounded-2xl p-4 lg:p-[18px] border border-[#F3ECE7] shadow-sm hover:shadow-card hover:border-primary/25 transition-all duration-200 flex items-center justify-between gap-3"
          >
            {/* Left Side: Compact Icon + Title + Concise Description */}
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="w-9 h-9 rounded-full bg-[#FFEFE7] flex items-center justify-center mb-2.5 shrink-0">
                <f.icon className="h-4 w-4 text-[#EE4D2D] stroke-[2.2]" />
              </div>

              <h3 className="card-title mb-1">
                {f.title}
              </h3>

              <p className="card-body">
                {f.desc}
              </p>
            </div>

            {/* Right Side: Compact 92-104px Illustration Maintaining Aspect Ratio */}
            <div
              role="img"
              aria-label={f.visualAlt}
              className={`w-[92px] sm:w-[100px] lg:w-[104px] aspect-square shrink-0 ${f.visualClass}`}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;

