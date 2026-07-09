import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ReactLenis } from "lenis/react"
import { PageWrapper } from "./PageWrapper"

const heroLines = ["LET'S BUILD", "SOMETHING", "TOGETHER."]

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/dhanyash_ptl/", handle: "@dhanyash_ptl" },
  { label: "GitHub", href: "https://github.com/dhanyeshpatel", handle: "dhanyeshpatel" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dhanyesh-hirani-125a48349/", handle: "Dhanyesh Hirani" },
  { label: "WhatsApp", href: "https://wa.me/918799346359", handle: "+91 8799346359" },
]

const services = [
  { num: "01", title: "Full-Stack Development", desc: "Java servlets, JSP, REST APIs, React frontends — complete end-to-end engineering." },
  { num: "02", title: "Database Architecture", desc: "Schema design, normalization, JDBC connection pools, SQL optimization." },
  { num: "03", title: "UI/UX Refinement", desc: "Clean responsive layouts, Framer Motion animations, polished component systems." },
]

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 160])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setForm({ name: "", email: "", project: "", message: "" })
      }, 5000)
    }
  }

  return (
    <ReactLenis root>
      <PageWrapper noPadding>
        <div className="bg-[#F4F4F5] text-[#111] font-sans selection:bg-[#111] selection:text-white overflow-x-hidden">

          {/* ── HERO ── */}
          <section ref={heroRef} className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 md:px-8 max-w-[1400px] mx-auto">

            <div className="flex justify-between items-start text-xs font-bold uppercase tracking-widest">
              <motion.span
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-[#111]/40"
              >
                05 — GET IN TOUCH
              </motion.span>
              <motion.a
                href="mailto:dhanyeshpatel@gmail.com"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
                className="border-b-2 border-[#111] pb-0.5 hover:opacity-50 transition-opacity"
              >
                dhanyeshpatel@gmail.com ↗
              </motion.a>
            </div>

            <motion.div style={{ y: heroY, opacity: heroOpacity }} className="flex flex-col font-black uppercase tracking-tighter leading-[0.82] mt-12 mb-12">
              {heroLines.map((line, i) => (
                <div key={line} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] as [number,number,number,number] }}
                    className={`text-[12vw] md:text-[10vw] ${i === 1 ? "text-right" : ""}`}
                  >
                    {line}
                  </motion.div>
                </div>
              ))}
            </motion.div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-t border-[#111]/10 pt-8">
              <motion.span
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
                className="text-xs font-bold uppercase tracking-widest text-[#111]/30"
              >
                RESPONSE WITHIN 24H
              </motion.span>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.3 }}
                className="text-base md:text-xl font-medium max-w-lg leading-snug"
              >
                Whether it's a complex full-stack project or a quick database fix — I'm ready to hear about it.
              </motion.p>
            </div>
          </section>

          {/* ── SERVICES STRIP ── */}
          <section className="border-t border-[#111]/10">
            {services.map((svc) => (
              <motion.div
                key={svc.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] }}
                className="border-b border-[#111]/10 px-4 md:px-8 max-w-[1400px] mx-auto"
              >
                <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#111]/30 md:w-12 shrink-0">{svc.num}</span>
                  <h3 className="text-2xl md:text-4xl font-black tracking-tighter uppercase md:w-1/3 shrink-0">{svc.title}</h3>
                  <p className="text-sm md:text-base text-[#111]/50 leading-relaxed max-w-md">{svc.desc}</p>
                </div>
              </motion.div>
            ))}
          </section>

          {/* ── FORM + SOCIALS ── */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto py-20 md:py-32 border-t border-[#111]/10">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24">

              {/* LEFT: Form */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.9 }}
                  className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight mb-12"
                >
                  START A<br />PROJECT.
                </motion.h2>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="flex flex-col gap-4 py-16 items-start"
                    >
                      <div className="w-12 h-12 bg-[#111] flex items-center justify-center text-[#F4F4F5] text-xl font-bold">✓</div>
                      <h3 className="text-2xl font-black tracking-tighter uppercase">Message Sent.</h3>
                      <p className="text-[#111]/50 text-sm">I'll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-0"
                    >
                      {[
                        { id: "name", label: "Your Name *", type: "text", required: true },
                        { id: "email", label: "Email Address *", type: "email", required: true },
                        { id: "project", label: "Project Type", type: "text", required: false },
                      ].map(({ id, label, type, required }) => (
                        <div key={id} className={`border-b border-[#111]/10 transition-colors duration-300 ${focused === id ? "border-[#111]" : ""}`}>
                          <label className="block text-xs font-bold uppercase tracking-widest text-[#111]/30 pt-6 pb-1">{label}</label>
                          <input
                            type={type}
                            required={required}
                            value={(form as any)[id]}
                            onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                            onFocus={() => setFocused(id)}
                            onBlur={() => setFocused(null)}
                            className="w-full bg-transparent pb-4 text-lg font-medium tracking-tight outline-none placeholder:text-[#111]/20"
                            placeholder={id === "name" ? "Dhanyesh Hirani" : id === "email" ? "hello@example.com" : "Full-Stack / Database / UI"}
                          />
                        </div>
                      ))}

                      {/* Message textarea */}
                      <div className={`border-b border-[#111]/10 transition-colors duration-300 ${focused === "message" ? "border-[#111]" : ""}`}>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#111]/30 pt-6 pb-1">Message *</label>
                        <textarea
                          required
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                          className="w-full bg-transparent pb-4 text-lg font-medium tracking-tight outline-none resize-none placeholder:text-[#111]/20"
                          placeholder="Tell me about your project..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ backgroundColor: "#F4F4F5", color: "#111" }}
                        className="mt-10 w-full bg-[#111] text-[#F4F4F5] py-5 text-sm font-black uppercase tracking-widest border-2 border-[#111] transition-colors duration-300"
                      >
                        Send Message →
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* RIGHT: Info + Socials */}
              <div className="flex flex-col justify-between gap-16">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.7 }}
                    className="text-xs font-bold uppercase tracking-widest text-[#111]/30 mb-8"
                  >
                    Direct Contact
                  </motion.h3>
                  <div className="flex flex-col gap-6">
                    {[
                      { label: "Email", val: "dhanyeshpatel@gmail.com", href: "mailto:dhanyeshpatel@gmail.com" },
                      { label: "Phone", val: "+91 8799346359", href: "tel:+918799346359" },
                      { label: "Location", val: "Gujarat, India", href: null },
                    ].map(({ label, val, href }, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="border-b border-[#111]/10 pb-6"
                      >
                        <span className="text-xs font-bold uppercase tracking-widest text-[#111]/30 block mb-1">{label}</span>
                        {href ? (
                          <a href={href} className="text-xl font-bold tracking-tight hover:opacity-50 transition-opacity">{val}</a>
                        ) : (
                          <span className="text-xl font-bold tracking-tight">{val}</span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.7 }}
                    className="text-xs font-bold uppercase tracking-widest text-[#111]/30 mb-8"
                  >
                    Socials
                  </motion.h3>
                  <div className="flex flex-col">
                    {socials.map(({ label, href, handle }, i) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="flex justify-between items-center border-b border-[#111]/10 py-4 group hover:opacity-60 transition-opacity"
                      >
                        <span className="text-sm font-bold uppercase tracking-widest">{label}</span>
                        <span className="text-xs text-[#111]/40 font-medium group-hover:text-[#111] transition-colors">{handle} ↗</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── AVAILABILITY BANNER ── */}
          <section className="bg-[#111] text-[#F4F4F5] py-20 md:py-32 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F4F4F5]/30">Current Status</span>
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-bold uppercase tracking-widest text-green-400">Available for Projects</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-tight mt-4">
                  OPEN TO<br />NEW WORK.
                </h2>
              </div>
              <div className="flex flex-col gap-6 md:text-right">
                <p className="text-sm text-[#F4F4F5]/50 max-w-xs leading-relaxed">
                  Looking for internships, freelance contracts, and full-time roles in full-stack Java development.
                </p>
                <a
                  href="mailto:dhanyeshpatel@gmail.com"
                  className="text-sm font-bold border-b-2 border-[#F4F4F5] pb-0.5 w-fit md:ml-auto hover:opacity-50 transition-opacity"
                >
                  dhanyeshpatel@gmail.com ↗
                </a>
              </div>
            </div>
          </section>

        </div>
      </PageWrapper>
    </ReactLenis>
  )
}
