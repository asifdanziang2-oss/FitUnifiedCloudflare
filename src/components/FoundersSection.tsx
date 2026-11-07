import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import sadiquePhoto from "@/assets/sadique-photo-nobg.png";
import manishPhoto from "@/assets/manish-photo.jpg";

const founders = [
  {
    name: "Sadique Barbhuiya",
    role: "Founder",
    photo: sadiquePhoto,
    linkedin: "https://www.linkedin.com/in/ahmed-sadique-barbhuiya-49105b104/",
    bio: "Sadique Barbhuiya holds a B.E. in Mechanical Engineering from VTU Belagavi and a Product Management Program from Stanford University. He has worked across R&D, regulatory affairs, and customer engagement in the life sciences and digital health sectors in India and Germany. After returning to India, he founded FitUnified with a vision to improve the fitness industry experience and empower small and medium gym owners with simple, powerful technology. Sadique is also a contributor to WHO Europe – Youth4Health, supporting initiatives that advance global digital health.",
  },
  {
    name: "Manish Singarpure",
    role: "Co-Founder",
    photo: manishPhoto,
    linkedin: "https://www.linkedin.com/in/manish-shringarpure-6414a116?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    bio: "Manish Singarpure holds a B.E. in Electronics & Communication Engineering from NIT Warangal and brings over 20 years of experience in the IT industry. Throughout his career, he has worked as a Software Engineer, Technical Architect, and Project Manager, building scalable and reliable technology solutions. At FitUnified, he leads the technology vision, ensuring the platform remains robust, secure, and easy for gym owners to use every day.",
  },
];

const FoundersSection = () => (
  <section className="section-shell bg-muted/35 border-b border-border/50">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header text-center max-w-2xl mx-auto"
      >
        <p className="text-xs font-semibold text-primary tracking-wider uppercase mb-1.5">
          About the Team
        </p>
        <h2 className="section-title">
          Meet the <span className="gradient-text">Founders</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[18px] items-stretch">
        {founders.map((founder, i) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl border border-border/80 shadow-sm hover:shadow-card transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between"
          >
            <div>
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-4 mb-4 border-b border-border/70 text-center sm:text-left">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden gradient-soft-bg border border-border shrink-0">
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-center sm:pt-1">
                  <h3 className="card-title mb-0.5">
                    {founder.name}
                  </h3>
                  <p className="text-primary font-medium text-xs sm:text-sm mb-2.5">
                    {founder.role}
                  </p>
                  <div>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View LinkedIn Profile"
                      aria-label={`${founder.name} LinkedIn`}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full gradient-soft-bg text-muted-foreground hover:text-primary transition-colors text-xs font-medium"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              <p className="card-body text-left">
                {founder.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FoundersSection;
