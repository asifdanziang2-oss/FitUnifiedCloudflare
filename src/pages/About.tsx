import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", desc: "Digitize every neighborhood gym in India with simple, affordable technology." },
  { icon: Eye, title: "Vision", desc: "Build the complete infrastructure for India's fitness economy — from software to marketplace." },
  { icon: Heart, title: "Values", desc: "Community-first. We listen to gym owners, build what they need, and stand by them." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-pink-50/30 to-transparent h-[420px] -z-10" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4">
            About <span className="gradient-text">FitUnified</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're on a mission to bring technology to every gym in India — not just the premium ones.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl border border-border shadow-card p-8 md:p-10"
          >
            <h2 className="text-2xl font-display font-bold mb-4 text-foreground">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              India has millions of gyms, but most still run on paper registers. Existing gym software is built for premium chains — it's expensive, complex, and doesn't understand the needs of local gym owners.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              FitUnified was born from conversations with real gym owners in tier-2 and tier-3 cities. We saw the gap and decided to build something that's simple enough for anyone to use, affordable enough for every gym, and backed by on-ground support that makes adoption effortless.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-card text-center"
            >
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 shadow-brand">
                <v.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <CTASection />
    <Footer />
  </div>
);

export default About;
