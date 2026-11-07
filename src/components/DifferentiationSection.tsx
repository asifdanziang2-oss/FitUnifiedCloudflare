import { motion } from "framer-motion";
import { Smartphone, BadgeIndianRupee, Wrench, MapPin, Heart } from "lucide-react";

const points = [
  { icon: Smartphone, title: "App-First Platform", desc: "Built mobile-first. Your gym in your pocket, always." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", desc: "Starts at just ₹99/month. Built for every gym's budget." },
  { icon: Wrench, title: "Installation Support", desc: "We set it up for you. No tech skills needed." },
  { icon: MapPin, title: "Local Field Teams", desc: "On-ground teams in your city to help you get started." },
  { icon: Heart, title: "Community-Driven", desc: "Built with feedback from real gym owners across India." },
];

const DifferentiationSection = () => (
  <section className="section-shell bg-muted/35 border-b border-border/50">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header text-center max-w-2xl mx-auto"
      >
        <h2 className="section-title">
          Built for <span className="gradient-text">Real Gym Owners</span>
        </h2>
        <p className="section-subtitle">
          We don't build for premium chains. We build for neighborhood gyms that power India's fitness.
        </p>
      </motion.div>

      {/* 6-column Bento Grid aligned directly to 1180px container: 2 cards on top (col-span-3), 3 cards on bottom (col-span-2) */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-[18px] items-stretch">
        {points.map((p, i) => {
          const isTopRow = i < 2;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`${
                isTopRow ? "md:col-span-3" : "md:col-span-2"
              } group bg-card rounded-2xl p-4 sm:p-[18px] border border-border/80 shadow-sm hover:shadow-card hover:border-primary/25 transition-all duration-200 flex items-start gap-3.5`}
            >
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
                <p.icon className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <h3 className="card-title mb-1">
                  {p.title}
                </h3>
                <p className="card-body">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default DifferentiationSection;
