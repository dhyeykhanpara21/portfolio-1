import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ReactLenis } from "lenis/react"
import { Link } from "react-router-dom"
import { PageWrapper } from "./PageWrapper"
import profileAvatar from "../assets/profile_avatar.png"
import workspaceVisual from "../assets/workspace_visual.png"

/* ─── DATA ─────────────────────────────────────── */
const values = [
  {
    num: "(01)",
    title: "Craft over speed",
    desc: "Good work takes the time it takes. I move deliberately — asking the right questions before writing a single line, and holding every decision to the same standard from brief to final commit.",
  },
  {
    num: "(02)",
    title: "Form with intent",
    desc: "Nothing I build is decorative. Every architectural decision carries meaning, and I treat it that way — building systems where structure and logic are inseparable from the start.",
  },
  {
    num: "(03)",
    title: "Analytical by default",
    desc: "Before touching a keyboard I model the problem. Data flows, schema relationships, edge cases — clarity at the design level prevents chaos at the implementation level.",
  },
  {
    num: "(04)",
    title: "Built to ship",
    desc: "I don't build for demos. The systems I write are made to hold their shape as requirements grow, shift, and move into contexts that don't exist yet.",
  },
]

const stack = [
  { name: "Java", role: "Backend" },
  { name: "Spring Boot", role: "Backend" },
  { name: "React", role: "Frontend" },
  { name: "TypeScript", role: "Frontend" },
  { name: "MySQL", role: "Database" },
  { name: "PostgreSQL", role: "Database" },
  { name: "Servlet & JSP", role: "J2EE" },
  { name: "REST APIs", role: "Integration" },
  { name: "Framer Motion", role: "Animation" },
]

/* ─── HERO WORD LINES ─────────────────────────── */
const heroLines = ["BUILDING", "FULL-STACK", "SOLUTIONS IN", "A WORLD FULL", "OF NOISE."]

/* ─── FADE-UP VARIANT ─────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] },
  }),
}

/* ─── MASK LINE VARIANT ───────────────────────── */
const maskLine = {
  hidden: { y: "105%" },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 1.1, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] as [number,number,number,number] },
  }),
}

export function About() {
  const [openValue, setOpenValue] = useState<string | null>(null)

  /* parallax refs */
  const heroRef = useRef(null)
  const imgRef = useRef(null)
  const valuesRef = useRef(null)

  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(heroScroll, [0, 1], [0, 160])
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0])

  const { scrollYProgress: imgScroll } = useScroll({ target: imgRef, offset: ["start end", "end start"] })
  const imgParallax = useTransform(imgScroll, [0, 1], ["-10%", "10%"])

  const { scrollYProgress: valScroll } = useScroll({ target: valuesRef, offset: ["start end", "end start"] })
  const valuesX = useTransform(valScroll, [0, 1], ["0%", "-18%"])

  return (
    <ReactLenis root>
      <PageWrapper noPadding>
        <div className="bg-[#F4F4F5] text-[#111] font-sans selection:bg-[#111] selection:text-white overflow-x-hidden">

          {/* ═══════════════════════════════════════
              1. HERO — "ABOUT THE DEVELOPER"
          ═══════════════════════════════════════ */}
          <section ref={heroRef} className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 md:px-8 max-w-[1400px] mx-auto">

            {/* top caption */}
            <div className="flex justify-between items-start text-xs font-bold uppercase tracking-widest">
              <motion.span
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-[#111]/40"
              >
                ABOUT THE DEVELOPER
              </motion.span>
              <Link to="/contact" className="border-b-2 border-[#111] pb-0.5 hover:opacity-50 transition-opacity">
                Let's talk ↗
              </Link>
            </div>

            {/* massive staggered title */}
            <motion.div style={{ y: heroY, opacity: heroOpacity }} className="flex flex-col font-black uppercase tracking-tighter leading-[0.82] mt-12 mb-12">
              {heroLines.map((line, i) => (
                <div key={line} className="overflow-hidden">
                  <motion.div
                    custom={i}
                    variants={maskLine}
                    initial="hidden"
                    animate="visible"
                    className={`text-[10vw] md:text-[9vw] ${i % 2 === 1 ? "text-right" : ""}`}
                  >
                    {line}
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* bottom strip */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-t border-[#111]/10 pt-8">
              <motion.span
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
                className="text-xs font-bold uppercase tracking-widest text-[#111]/30"
              >
                SCROLL TO EXPLORE
              </motion.span>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.3 }}
                className="text-base md:text-xl font-medium max-w-lg leading-snug"
              >
                Dhanyesh® grew out of a frustration with software that looked polished but solved nothing.
              </motion.p>
            </div>
          </section>

          {/* ═══════════════════════════════════════
              2. FULL-WIDTH PARALLAX IMAGE
          ═══════════════════════════════════════ */}
          <div ref={imgRef} className="w-full overflow-hidden" style={{ height: "70vh" }}>
            <motion.img
              style={{ y: imgParallax, scale: 1.15 }}
              src={profileAvatar}
              alt="Dhanyesh Hirani"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* ═══════════════════════════════════════
              3. INTRO QUOTE
          ═══════════════════════════════════════ */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto py-20 md:py-32 border-t border-[#111]/10">
            {/* Large quote */}
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-20"
            >
              Dhanyesh® was created to give products the logical foundation they rarely get —&nbsp;
              connecting backend architecture, database design, and refined interfaces into one coherent, lasting system.
            </motion.h2>

            {/* 3-column meta strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#111]/10 pt-10">
              {[
                { label: "01 — the developer", val: "" },
                { label: "Est.", val: "2024" },
                { label: "Location", val: "Gujarat, India" },
                { label: "Specialisation", val: "Full-Stack Java / J2EE" },
              ].map(({ label, val }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="flex flex-col gap-1 text-xs font-bold uppercase tracking-widest"
                >
                  <span className="text-[#111]/30">{label}</span>
                  {val && <span>{val}</span>}
                </motion.div>
              ))}
            </div>

            {/* Bio paragraphs + CTA */}
            <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-16 border-t border-[#111]/10 pt-10">
              <div className="flex flex-col gap-5 text-base text-[#111]/60 leading-relaxed">
                <p>
                  Built from years of focused study across computer engineering, J2EE architecture, and database design. The pattern was always the same — the software that endured wasn't the flashiest. It was the most considered.
                </p>
                <p>
                  Today I build for teams that understand that technical structure is never accidental — systems that hold their shape across every context and every scale.
                </p>
              </div>
              <div className="flex items-end">
                <Link
                  to="/contact"
                  className="inline-block text-sm font-bold border-b-2 border-[#111] pb-0.5 hover:opacity-50 transition-opacity"
                >
                  Get in touch →
                </Link>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════
              4. VALUES (dark section)
          ═══════════════════════════════════════ */}
          <section className="bg-[#111] text-[#F4F4F5] py-20 md:py-32">

            {/* caption + heading */}
            <div className="px-4 md:px-8 max-w-[1400px] mx-auto mb-16 md:mb-24">
              <motion.span
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-xs font-bold uppercase tracking-widest text-[#F4F4F5]/30 block mb-8"
              >
                02 — what I believe
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-2xl md:text-4xl font-bold tracking-tight leading-snug max-w-3xl"
              >
                I believe form is never decorative — it's the most direct expression of what software actually stands for.
              </motion.h2>
            </div>

            {/* scrolling marquee */}
            <div ref={valuesRef} className="overflow-hidden border-t border-b border-[#F4F4F5]/10 py-4 mb-0">
              <motion.div style={{ x: valuesX }} className="flex gap-12 whitespace-nowrap text-[10vw] font-black uppercase tracking-tighter leading-none text-[#F4F4F5]">
                <span>OUR VALUES</span>
                <span className="text-[#F4F4F5]/20">OUR VALUES</span>
                <span>OUR VALUES</span>
                <span className="text-[#F4F4F5]/20">OUR VALUES</span>
              </motion.div>
            </div>

            {/* accordion values */}
            <div className="px-4 md:px-8 max-w-[1400px] mx-auto">
              {values.map((v) => (
                <div key={v.num} className="border-b border-[#F4F4F5]/10">
                  <button
                    onClick={() => setOpenValue(openValue === v.num ? null : v.num)}
                    className="w-full flex items-center justify-between py-8 md:py-10 text-left gap-8 group cursor-pointer"
                  >
                    <div className="flex items-center gap-6 md:gap-16">
                      <span className="text-sm md:text-xl font-bold text-[#F4F4F5]/30 shrink-0">{v.num}</span>
                      <span className="text-2xl md:text-5xl font-black tracking-tighter uppercase group-hover:opacity-60 transition-opacity duration-300">
                        {v.title}
                      </span>
                    </div>
                    {/* animated +/× */}
                    <div className="relative w-7 h-7 shrink-0">
                      <span className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          animate={{ rotate: openValue === v.num ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="block w-full h-full"
                        >
                          <svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
                            <rect x="11" width="6" height="28" fill="currentColor" />
                            <rect x="28" y="11" width="6" height="28" transform="rotate(90 28 11)" fill="currentColor" />
                          </svg>
                        </motion.span>
                      </span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openValue === v.num && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-10 pl-0 md:pl-[10rem] text-base md:text-lg text-[#F4F4F5]/60 max-w-2xl leading-relaxed">
                          {v.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════
              5. THE STACK  (like "THE TEAM")
          ═══════════════════════════════════════ */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto py-20 md:py-32 border-t border-[#111]/10">

            {/* heading row */}
            <div className="flex justify-between items-end mb-12 md:mb-20">
              <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase leading-none">THE STACK</h2>
              <span className="text-5xl md:text-9xl font-black tracking-tighter text-[#111]/15">({String(stack.length).padStart(2,"0")})</span>
            </div>

            <p className="text-sm text-[#111]/40 mb-12 max-w-xs font-bold uppercase tracking-widest">
              Every tool is there for a reason. Chosen for reliability, chosen for scale.
            </p>

            {/* grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#111]/10">
              {stack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-[#F4F4F5] p-8 md:p-12 flex flex-col justify-between gap-8 group hover:bg-[#111] transition-colors duration-300 cursor-default"
                >
                  <div className="flex items-center justify-center h-24 md:h-32">
                    <span className="text-2xl md:text-4xl font-black tracking-tighter uppercase group-hover:text-[#F4F4F5] transition-colors text-center">
                      {tech.name}
                    </span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#111]/30 group-hover:text-[#F4F4F5]/30 transition-colors">
                    {tech.role}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════
              6. WORKSPACE IMAGE + QUOTE
          ═══════════════════════════════════════ */}
          <section className="border-t border-[#111]/10">
            <div className="grid md:grid-cols-2 gap-0">
              {/* image */}
              <div className="overflow-hidden">
                <motion.img
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  src={workspaceVisual}
                  alt="Workspace"
                  className="w-full h-[50vh] md:h-[70vh] object-cover"
                />
              </div>
              {/* text */}
              <div className="flex flex-col justify-between p-8 md:p-16 bg-[#F4F4F5]">
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className="text-2xl md:text-3xl font-bold tracking-tight leading-snug mt-auto"
                >
                  Small touches make every detail proper. Experienced enough to know which details matter most.
                </motion.p>
                <div className="mt-12">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-[#111] pb-0.5 hover:opacity-50 transition-opacity"
                  >
                    See the work ↗
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════
              7. STATS STRIP
          ═══════════════════════════════════════ */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto py-16 md:py-24 border-t border-[#111]/10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { v: "2+", l: "Years Training" },
              { v: "03", l: "Institutions" },
              { v: "7.0", l: "CGPA" },
              { v: "83%", l: "SSC Score" },
            ].map(({ v, l }, i) => (
              <motion.div
                key={l}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-2"
              >
                <span className="text-5xl md:text-7xl font-black tracking-tighter">{v}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#111]/40">{l}</span>
              </motion.div>
            ))}
          </section>

        </div>
      </PageWrapper>
    </ReactLenis>
  )
}
