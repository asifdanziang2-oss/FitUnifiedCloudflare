import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Kya mujhe koi technical knowledge chahiye?", a: "Bilkul nahi! FitUnified bahut simple hai. Hamari team aapko setup mein madad karegi aur training bhi degi." },
  { q: "Kya yeh free hai?", a: "Haan! Starter plan sirf ₹99/month se shuru hota hai. Aap free trial bhi le sakte hain." },
  { q: "Biometric device kaun lagayega?", a: "Hamari local field team aapke gym mein aake device install karegi aur training degi." },
  { q: "Kya mera data safe hai?", a: "Haan, aapka saara data encrypted hai aur secure cloud servers pe stored hai." },
  { q: "Kya main phone se sab manage kar sakta hun?", a: "Haan! FitUnified completely mobile-first hai. Sab kuch aapke phone se hota hai." },
  { q: "Cancel kaise karun?", a: "Koi lock-in nahi hai. Kabhi bhi cancel kar sakte hain, koi questions nahi puchhe jayenge." },
];

const FAQSection = () => (
  <section className="section-shell bg-background border-b border-border/50">
    <div className="section-container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header text-center"
      >
        <h2 className="section-title">
          Aksar Puchhe Jaane Wale <span className="gradient-text">Sawal</span>
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card rounded-2xl border border-border/80 px-5 py-0.5 shadow-sm data-[state=open]:border-primary/40 data-[state=open]:shadow-card transition-all"
          >
            <AccordionTrigger className="font-display font-semibold text-left text-sm sm:text-base text-foreground hover:no-underline py-4">
              <span className="flex items-center gap-3">
                <span className="text-xs font-display font-bold text-primary gradient-soft-bg px-2.5 py-0.5 rounded-md tabular-nums shrink-0">
                  0{i + 1}
                </span>
                <span>{faq.q}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="card-body pl-10 pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
