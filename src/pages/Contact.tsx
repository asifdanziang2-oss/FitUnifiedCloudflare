import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  contactSchema,
  ContactValues,
  CONTACT_INFO_ITEMS,
  buildWhatsAppContactUrl,
} from "@/lib/contactData";

/* Solid white icons for the left contact info cards */
const SolidPhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
  </svg>
);

const SolidMailIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2Zm0 4.75-7.47 4.67a1 1 0 0 1-1.06 0L4 8.75V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.75Z" />
  </svg>
);

const SolidLocationIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
      clipRule="evenodd"
    />
  </svg>
);

/* Crisp outline icons for form inputs matching the reference screenshot */
const OutlineUserIcon = ({ className = "w-[18px] h-[18px]" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M5 20c0-3.5 3.13-6 7-6s7 2.5 7 6" />
  </svg>
);

const OutlinePhoneIcon = ({ className = "w-[18px] h-[18px]" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const OutlineDumbbellIcon = ({ className = "w-[19px] h-[19px]" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="9" width="2.5" height="6" rx="0.8" />
    <rect x="4.5" y="7" width="3" height="10" rx="1" />
    <line x1="7.5" y1="12" x2="16.5" y2="12" />
    <rect x="16.5" y="7" width="3" height="10" rx="1" />
    <rect x="19.5" y="9" width="2.5" height="6" rx="0.8" />
  </svg>
);

const OutlinePinIcon = ({ className = "w-[18px] h-[18px]" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z" />
    <circle cx="12" cy="11" r="2.2" />
  </svg>
);

const OutlineMessageIcon = ({ className = "w-[18px] h-[18px]" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <line x1="8" y1="9" x2="16" y2="9" />
    <line x1="8" y1="13" x2="13" y2="13" />
  </svg>
);

const PaperPlaneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.426 2.574a1.25 1.25 0 0 0-1.31-.286L2.866 9.188a1.25 1.25 0 0 0-.06 2.297l6.79 3.09 3.09 6.79a1.25 1.25 0 0 0 2.297-.06l6.9-17.25a1.25 1.25 0 0 0-.457-1.481ZM9.97 13.318l-4.53-2.062 12.14-4.856-7.61 6.918Zm2.774 4.53-2.062-4.53 6.918-7.61-4.856 12.14Z" />
  </svg>
);

const Contact = () => {
  const [submittedData, setSubmittedData] = useState<ContactValues | null>(null);

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", gymName: "", city: "", message: "" },
    mode: "onTouched",
  });

  const onSubmit = (data: ContactValues) => {
    setSubmittedData(data);
    form.reset();
  };

  const renderCardIcon = (id: "phone" | "email" | "office") => {
    switch (id) {
      case "phone":
        return <SolidPhoneIcon className="w-[22px] h-[22px] text-white" />;
      case "email":
        return <SolidMailIcon className="w-[22px] h-[22px] text-white" />;
      case "office":
        return <SolidLocationIcon className="w-[22px] h-[22px] text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDFD]">
      <Navbar />

      {/* Main Contact Section matching Modern Fitness Contact Section reference */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        {/* Soft pastel pink & warm ambient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 35%, rgba(253, 232, 244, 0.55) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 238, 245, 0.45) 0%, transparent 52%), linear-gradient(180deg, #FFF9FC 0%, #FFFDFD 100%)",
          }}
        />

        {/* Decorative Top-Right Soft Pink Circle */}
        <div
          className="hidden sm:block absolute -top-24 -right-20 w-[260px] h-[260px] lg:w-[310px] lg:h-[310px] rounded-full pointer-events-none select-none"
          style={{
            background:
              "linear-gradient(145deg, rgba(251, 212, 229, 0.52) 0%, rgba(254, 235, 244, 0.22) 100%)",
          }}
        />

        {/* Decorative Bottom-Left Soft Lilac-Pink Circle */}
        <div
          className="hidden sm:block absolute -bottom-24 -left-24 w-[250px] h-[250px] lg:w-[290px] lg:h-[290px] rounded-full pointer-events-none select-none"
          style={{
            background:
              "linear-gradient(45deg, rgba(240, 188, 238, 0.55) 0%, rgba(251, 222, 248, 0.22) 100%)",
          }}
        />

        <div className="container relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6">
          {/* Header: CONTACT US Pill + Get in Touch + Spark Lines + Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
          >
            {/* CONTACT US Pill Badge */}
            <div className="inline-flex items-center justify-center rounded-full bg-[#FCE6F0] border border-[#F9D2E4] px-5 py-1.5 mb-3.5 shadow-[0_2px_8px_-2px_rgba(236,28,104,0.1)]">
              <span className="font-display font-bold text-[#EB1765] text-[13px] sm:text-[14px] tracking-[0.04em] uppercase leading-none">
                CONTACT US
              </span>
            </div>

            {/* Heading: Get in Touch with 3 Orange Spark Lines */}
            <h1 className="font-display font-extrabold tracking-tight text-[#0B132B] text-[36px] sm:text-[46px] md:text-[52px] leading-[1.12]">
              <span>Get in </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#F01767] via-[#F95C2B] to-[#FCB017] bg-clip-text text-transparent">
                  Touch
                </span>
                {/* 3 Orange Spark Rays at Top-Right of "Touch" */}
                <svg
                  className="hidden sm:block absolute -top-3.5 -right-8 w-8 h-8 text-[#F48320] pointer-events-none select-none"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <line
                    x1="8"
                    y1="22"
                    x2="11"
                    y2="5"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="15"
                    y1="25"
                    x2="27"
                    y2="11"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="20"
                    y1="31"
                    x2="35"
                    y2="24"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#475569] text-[16px] sm:text-[18px] leading-[1.55] mt-3 font-normal">
              Have questions? Want a demo? We’d love to hear from you.
            </p>
          </motion.div>

          {/* Two-Column Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: 3 Contact Info Cards + 3D Fitness Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 }}
              className="lg:col-span-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {CONTACT_INFO_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-[20px] bg-white/90 backdrop-blur-sm px-5 py-4 border border-[#F5E0EC] shadow-[0_8px_24px_-6px_rgba(236,38,106,0.07),0_2px_6px_-1px_rgba(15,23,42,0.03)]"
                  >
                    {/* Gradient Rounded Square Icon Box */}
                    <div
                      style={{
                        background:
                          "linear-gradient(180deg, #F2186A 0%, #FB7C18 100%)",
                      }}
                      className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center shrink-0 shadow-[0_6px_14px_-3px_rgba(242,24,106,0.3)]"
                    >
                      {renderCardIcon(item.id)}
                    </div>

                    {/* Vertical Divider Line */}
                    <div
                      className="w-[1.5px] h-10 bg-[#F4D5E4] shrink-0"
                      aria-hidden="true"
                    />

                    {/* Label & Value */}
                    <div className="min-w-0">
                      <h2 className="font-display font-bold text-[#0B132B] text-[17px] leading-tight mb-0.5">
                        {item.label}
                      </h2>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[#475569] text-[14.5px] sm:text-[15px] hover:text-[#F01767] transition-colors tabular-nums block truncate"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#475569] text-[14.5px] sm:text-[15px]">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* 3D Fitness Illustration (Dumbbell, Protein Shaker with FitUnified Emblem & Spark Lines, Rolled Towel) */}
              <div className="mt-5 sm:mt-6 flex justify-center">
                <img
                  src="/assets/product/contact-fitness-3d.png"
                  alt="3D fitness dumbbell, FitUnified shaker bottle, and rolled gym towel"
                  className="w-[290px] sm:w-[330px] h-auto object-contain select-none pointer-events-none"
                />
              </div>
            </motion.div>

            {/* Right Column: Rounded White Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.14 }}
              className="lg:col-span-7 bg-white/95 backdrop-blur-sm rounded-[26px] sm:rounded-[28px] p-6 sm:p-8 md:p-9 border border-[#F5E0EC] shadow-[0_14px_38px_-10px_rgba(236,38,106,0.08),0_4px_12px_-2px_rgba(15,23,42,0.03)]"
            >
              {submittedData && (
                <div
                  role="status"
                  className="mb-5 rounded-[16px] border border-emerald-200 bg-emerald-50/90 px-4 py-3.5 text-sm text-emerald-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>
                      Thanks, <strong>{submittedData.name}</strong>! Your message for{" "}
                      <strong>{submittedData.gymName}</strong> has been received.
                    </span>
                  </div>
                  <a
                    href={buildWhatsAppContactUrl(submittedData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-display font-semibold text-emerald-700 underline hover:text-emerald-900 whitespace-nowrap shrink-0"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              )}

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                  noValidate
                >
                  {/* Row 1: Your Name + Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none">
                                <OutlineUserIcon />
                              </span>
                              <Input
                                aria-label="Your Name"
                                placeholder="Your Name"
                                className="h-[50px] rounded-[14px] border-[#E2E8F0] bg-white pl-11 pr-4 text-[15px] text-[#0B132B] placeholder:text-[#64748B] focus-visible:ring-[#F2186A]/25 focus-visible:border-[#F2186A]"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none">
                                <OutlinePhoneIcon />
                              </span>
                              <Input
                                aria-label="Phone Number"
                                placeholder="Phone Number"
                                type="tel"
                                className="h-[50px] rounded-[14px] border-[#E2E8F0] bg-white pl-11 pr-4 text-[15px] text-[#0B132B] placeholder:text-[#64748B] focus-visible:ring-[#F2186A]/25 focus-visible:border-[#F2186A]"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Row 2: Gym Name */}
                  <FormField
                    control={form.control}
                    name="gymName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none">
                              <OutlineDumbbellIcon />
                            </span>
                            <Input
                              aria-label="Gym Name"
                              placeholder="Gym Name"
                              className="h-[50px] rounded-[14px] border-[#E2E8F0] bg-white pl-11 pr-4 text-[15px] text-[#0B132B] placeholder:text-[#64748B] focus-visible:ring-[#F2186A]/25 focus-visible:border-[#F2186A]"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Row 3: City */}
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none">
                              <OutlinePinIcon />
                            </span>
                            <Input
                              aria-label="City"
                              placeholder="City"
                              className="h-[50px] rounded-[14px] border-[#E2E8F0] bg-white pl-11 pr-4 text-[15px] text-[#0B132B] placeholder:text-[#64748B] focus-visible:ring-[#F2186A]/25 focus-visible:border-[#F2186A]"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Row 4: Your message... */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute left-4 top-4 text-[#64748B] pointer-events-none">
                              <OutlineMessageIcon />
                            </span>
                            <Textarea
                              aria-label="Your message"
                              placeholder="Your message..."
                              className="min-h-[126px] rounded-[16px] border-[#E2E8F0] bg-white pl-11 pr-4 py-3.5 text-[15px] text-[#0B132B] placeholder:text-[#64748B] focus-visible:ring-[#F2186A]/25 focus-visible:border-[#F2186A] resize-y"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    style={{
                      background:
                        "linear-gradient(90deg, #F31668 0%, #FB6222 52%, #FDC212 100%)",
                    }}
                    className="w-full h-[52px] sm:h-[54px] rounded-[15px] font-display font-bold text-white text-[16px] sm:text-[17px] flex items-center justify-center gap-2.5 shadow-[0_10px_24px_-6px_rgba(243,22,104,0.38)] hover:opacity-95 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    <PaperPlaneIcon className="w-5 h-5 text-white shrink-0" />
                    <span>Send Message</span>
                  </button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
