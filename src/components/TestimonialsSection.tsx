import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    gym: "Kumar Fitness, Lucknow",
    quote: "Pehle register mein sab likhta tha. Ab phone se sab hota hai. Bahut easy hai!",
    rating: 5,
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    gym: "FitZone Gym, Jaipur",
    quote: "Payment tracking ne meri life easy kar di. Ab koi payment miss nahi hota.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Amit Patel",
    gym: "Iron Paradise, Ahmedabad",
    quote: "Biometric system lagwa diya, ab members time pe aate hain. Very professional feel.",
    rating: 5,
    initials: "AP",
  },
];

const TestimonialsSection = () => (
  <section className="section-shell bg-muted/35 border-b border-border/50">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header text-center max-w-2xl mx-auto"
      >
        <h2 className="section-title">
          Trusted by <span className="gradient-text">Gym Owners</span>
        </h2>
        <p className="section-subtitle">
          Real stories from real gym owners across India.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-[18px] items-stretch">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl p-5 border border-border/80 shadow-sm hover:shadow-card transition-all duration-200 flex flex-col justify-between relative"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-primary/20" />
              </div>

              <p className="text-foreground mb-4 italic text-sm leading-[1.55]">
                "{t.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3.5 border-t border-border/60">
              <div className="w-9 h-9 rounded-full gradient-soft-bg border border-primary/15 flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-xs text-primary">
                  {t.initials}
                </span>
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.gym}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
