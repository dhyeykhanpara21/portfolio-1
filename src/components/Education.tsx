import { useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ReactLenis } from "lenis/react"
import { Plus, Minus } from "lucide-react"
import { Link } from "react-router-dom"
import { PageWrapper } from "./PageWrapper"
import educationVisual from "../assets/education_visual.png"

const education = [
  {
    id: "tops",
    num: "01",
    role: "Full-Stack Java Developer Trainee",
    institution: "TOPS TECHNOLOGY",
    location: "Ahmedabad",
    period: "Present",
    grade: null,
    desc: "Intensive industry-level training in Java, J2EE server architecture, relational databases, and modern web technologies.",
    topics: [
      "Core Java SE — OOP, JVM memory models, collections, multi-threading, exception handling",
      "Advanced J2EE — Servlet controllers, HTTP session management, JSP templating, DB adapters",
      "Relational Databases — SQL normalization, table relationships, connection pools, transactions",
    ],
  },
  {
    id: "polytechnic",
    num: "02",
    role: "Diploma in Computer Engineering",
    institution: "Government Polytechnic",
    location: "Gandhinagar",
    period: "Completed",
    grade: "CGPA: 7.00",
    desc: "Comprehensive academic program covering computer science fundamentals, relational databases, and algorithmic structures.",
    topics: [
      "Core Programming — Procedural logic in C, OOP in C++ and Java, memory allocation patterns",
      "Relational Databases — Schema design, normalization (1NF–3NF), transaction control protocols",
      "Software Engineering — SDLC models, testing methodologies, OS components",
    ],
  },
  {
    id: "secondary",
    num: "03",
    role: "Secondary School Certificate (10th)",
    institution: "State Board School",
    location: "Junagadh",
    period: "Completed",
    grade: "83.43%",
    desc: "Primary high school curriculum focused on mathematics, physics, and introductory computer basics.",
    topics: [
      "Mathematics & Science — Algebra, geometry, physics, and electrical parameters",
      "Computer Fundamentals — Hardware components, text processors, spreadsheets, file directories",
    ],
  },
]

export function Education() {
  const [openItem, setOpenItem] = useState<string | null>("tops")
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <ReactLenis root>
      <PageWrapper noPadding>
        <div className="bg-[#F4F4F5] text-[#111] min-h-screen font-sans selection:bg-[#111] selection:text-white">

          {/* HERO */}
          <section ref={heroRef} className="pt-28 pb-0 px-4 md:px-8 max-w-[1400px] mx-auto min-h-[65vh] flex flex-col justify-end">
            <div className="flex justify-between items-start text-xs font-semibold uppercase tracking-widest mb-12">
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                className="max-w-[200px] leading-relaxed hidden sm:block text-[#111]/50"
              >
                Academic paths — Engineering, training & formal education milestones.
              </motion.div>
              <Link to="/contact" className="border-b-2 border-[#111] pb-0.5 hover:opacity-50 transition-opacity">
                Let's talk ↗
              </Link>
            </div>

            <motion.div style={{ y: heroY, opacity: heroOpacity }}>
              <div className="flex flex-col font-black uppercase tracking-tighter leading-[0.85] overflow-hidden">
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }} animate={{ y: 0 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="text-[13vw]"
                  >
                    ACADEMIC
                  </motion.div>
                </div>
                <div className="overflow-hidden text-right">
                  <motion.div
                    initial={{ y: "110%" }} animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                    className="text-[13vw]"
                  >
                    PATHS.
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* INTRO STRIP */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto py-16 md:py-20 border-t border-[#111]/10 mt-12 grid md:grid-cols-2 gap-12">
            <div className="text-xs font-bold uppercase tracking-widest text-[#111]/40 flex flex-col gap-2">
              <span>Est. 2021</span>
              <span>Gujarat, India</span>
            </div>
            <p className="text-lg md:text-xl font-medium leading-relaxed text-[#111]/70">
              Three distinct chapters of learning — from foundational engineering theory to hands-on industry training — each one building toward full-stack mastery.
            </p>
          </section>

          {/* EDUCATION IMAGE */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto mb-16 md:mb-24">
            <div className="w-full h-[45vh] md:h-[60vh] overflow-hidden relative">
              <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                src={educationVisual}
                alt="Education journey"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </section>

          {/* THE TIMELINE HEADING */}
          <section className="overflow-hidden border-t border-[#111]/10">
            <div className="py-4 overflow-hidden border-b border-[#111]/10">
              <div className="flex gap-12 whitespace-nowrap text-[10vw] font-black uppercase tracking-tighter leading-none">
                <span>THE TIMELINE</span>
                <span className="text-[#111]/20">THE TIMELINE</span>
                <span>THE TIMELINE</span>
              </div>
            </div>

            {/* Accordion */}
            <div className="px-4 md:px-8 max-w-[1400px] mx-auto">
              {education.map((edu) => (
                <div key={edu.id} className="border-b border-[#111]/10">
                  <button
                    onClick={() => setOpenItem(openItem === edu.id ? null : edu.id)}
                    className="w-full flex items-center justify-between py-6 md:py-10 text-left gap-4 group cursor-pointer"
                  >
                    <div className="flex items-start md:items-center gap-6 md:gap-12 flex-col md:flex-row">
                      <span className="text-xs font-bold text-[#111]/30 w-6 shrink-0">{edu.num}</span>
                      <div className="flex flex-col gap-1">
                        <span className="text-xl md:text-3xl font-bold tracking-tighter group-hover:opacity-60 transition-opacity">{edu.role}</span>
                        <span className="text-sm text-[#111]/40 font-medium">{edu.institution} — {edu.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      {edu.grade && (
                        <span className="hidden md:block text-xs font-bold uppercase tracking-widest text-[#111]/40 border border-[#111]/10 px-3 py-1">
                          {edu.grade}
                        </span>
                      )}
                      <span className="text-xs font-bold uppercase tracking-widest text-[#111]/30">{edu.period}</span>
                      {openItem === edu.id ? <Minus className="h-5 w-5 shrink-0" /> : <Plus className="h-5 w-5 shrink-0" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openItem === edu.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pl-0 md:pl-[7rem] flex flex-col md:flex-row gap-8">
                          <p className="text-base text-[#111]/60 leading-relaxed max-w-sm">{edu.desc}</p>
                          <ul className="flex flex-col gap-3">
                            {edu.topics.map((t, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-[#111]/60">
                                <span className="text-[#111]/20 font-bold shrink-0">—</span>
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS COUNT STRIP */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto py-16 md:py-24 border-t border-[#111]/10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Training", value: "2+" },
              { label: "Institutions", value: "03" },
              { label: "CGPA", value: "7.0" },
              { label: "SSC Score", value: "83%" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-2"
              >
                <span className="text-5xl md:text-7xl font-black tracking-tighter">{stat.value}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#111]/40">{stat.label}</span>
              </motion.div>
            ))}
          </section>

          {/* CTA */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto py-16 md:py-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-[#111]/10">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-tight max-w-xl">
              SEE THE<br />WORK →
            </h2>
            <Link
              to="/projects"
              className="text-sm font-bold border-b-2 border-[#111] pb-0.5 hover:opacity-50 transition-opacity whitespace-nowrap"
            >
              View projects ↗
            </Link>
          </section>

        </div>
      </PageWrapper>
    </ReactLenis>
  )
}
