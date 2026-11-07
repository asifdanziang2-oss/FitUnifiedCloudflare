import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    originalPrice: "₹399",
    period: "",
    badge: "Limited Time",
    highlight: true,
    desc: "Perfect for small gyms getting started with digital.",
    features: ["Membership management", "Payment tracking", "Basic reports", "Member reminders", "Mobile app access"],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹699",
    originalPrice: "",
    period: "/month",
    badge: "",
    highlight: false,
    desc: "Full automation with biometric hardware and access control.",
    features: ["Everything in Starter", "Biometric attendance", "Access control", "Hardware setup included", "Full automation", "Priority support"],
    popular: true,
  },
];

const PricingSection = () => (
  <section className="section-shell bg-background border-b border-border/50" id="pricing">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header text-center max-w-2xl mx-auto"
      >
        <h2 className="section-title">
          Simple, <span className="gradient-text">Honest Pricing</span>
        </h2>
        <p className="section-subtitle">
          No hidden fees. No long contracts. Start small, grow big.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-3xl mx-auto items-stretch pt-2">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative rounded-2xl p-6 lg:p-7 flex flex-col justify-between transition-all duration-200 ${
              plan.popular
                ? "border-2 border-primary shadow-brand gradient-soft-bg bg-card"
                : plan.highlight
                ? "border border-primary/35 bg-card shadow-sm bg-gradient-to-b from-primary/5 to-transparent"
                : "border border-border bg-card shadow-sm"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-primary-foreground text-xs font-semibold px-3.5 py-0.5 rounded-full shadow-brand whitespace-nowrap">
                Most Popular
              </span>
            )}
            {plan.badge && !plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-semibold px-3.5 py-0.5 rounded-full whitespace-nowrap shadow-sm border border-border/50">
                {plan.badge}
              </span>
            )}

            <div>
              <div className="mb-3.5">
                <h3 className="card-title mb-1">
                  {plan.name}
                </h3>
                <p className="card-body">
                  {plan.desc}
                </p>
              </div>

              <div className="py-3.5 mb-4 border-y border-border/70">
                <div className="min-h-[52px] flex flex-col justify-center">
                  {plan.originalPrice && (
                    <span className="text-xs text-muted-foreground/80 line-through decoration-muted-foreground/60 mb-0.5 tabular-nums">
                      {plan.originalPrice}/month
                    </span>
                  )}
                  <div className="flex items-baseline gap-1.5 tabular-nums">
                    <span className="text-3xl lg:text-4xl font-display font-extrabold text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground text-sm font-medium">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                    <span className="w-4 h-4 rounded-full gradient-soft-bg border border-primary/20 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-primary stroke-[2.5]" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant={plan.popular ? "gradient" : "gradient-outline"}
              className="w-full h-10 text-sm font-semibold"
              size="lg"
              asChild
            >
              <a href="https://wa.me/918799721197" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
