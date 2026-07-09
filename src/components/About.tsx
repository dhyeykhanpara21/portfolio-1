import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ReactLenis } from "lenis/react"
import { Plus, Minus, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { PageWrapper } from "./PageWrapper"
import profileAvatar from "../assets/profile_avatar.png"
import workspaceVisual from "../assets/workspace_visual.png"

const values = [
  {
    id: "v1",
    num: "01",
    title: "Quick Learner & Adaptable",
    desc: "Highly capable of picking up new technologies rapidly, adapting codebases, and delivering prompt software solutions in fast-moving environments.",
  },
  {
    id: "v2",
    num: "02",
    title: "Analytical Thinker",
    desc: "Focused on parsing complex database queries and web architectures to build structured, robust systems that scale reliably under real-world conditions.",
  },
  {
    id: "v3",
    num: "03",
    title: "Built to Ship",
    desc: "Driven by outcomes, not just output. Every project is approached with the goal of delivering clean, maintainable code that solves actual problems for real users.",
  },
]

const techStack = [
  { name: "Java", role: "Backend" },
  { name: "Spring Boot", role: "Backend" },
  { name: "React", role: "Frontend" },
  { name: "TypeScript", role: "Frontend" },
  { name: "MySQL", role: "Database" },
  { name: "PostgreSQL", role: "Database" },
  { name: "HTML / CSS", role: "Frontend" },
  { name: "Servlet & JSP", role: "J2EE" },
  { name: "REST APIs", role: "Integration" },
]

export function About() {
  const [openValue, setOpenValue] = useState<string | null>(null)
  const heroRef = useRef(null)
  const valuesRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(heroScroll, [0, 1], [0, 160])
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0])

  const { scrollYProgress: valScroll } = useScroll({ target: valuesRef, offset: ["start end", "end start"] })
  const valuesX = useTransform(valScroll, [0, 1], ["0%", "-20%"])

  return (
    <ReactLenis root>
      <PageWrapper noPadding>
        <div className="bg-[#F4F4F5] text-[#111] min-h-screen font-sans selection:bg-[#111] selection:text-white">

          {/* HERO */}
          <section ref={heroRef} className="pt-28 pb-0 px-4 md:px-8 max-w-[1400px] mx-auto min-h-[70vh] flex flex-col justify-end">
            <div className="flex justify-between items-start text-xs font-semibold uppercase tracking-widest mb-12">
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                className="max-w-[200px] leading-relaxed hidden sm:block text-[#111]/50"
              >
                About — Full-Stack Developer based in Gujarat, India.
              </motion.div>
              <Link to="/contact" className="border-b-2 border-[#111] pb-0.5 hover:opacity-50 transition-opacity">
                Let's talk ↗
              </Link>
            </div>

            <motion.div style={{ y: heroY, opacity: heroOpacity }}>
              <div className="flex flex-col font-black uppercase tracking-tighter text-[11vw] leading-[0.85] overflow-hidden">
                <div className="overflow-hidden">
                  <motion.div initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}>
                    BUILDING
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}>
                    FULL-STACK
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.16, ease: [0.76, 0, 0.24, 1] }}>
                    SOLUTIONS
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.24, ease: [0.76, 0, 0.24, 1] }} className="text-right">
                    FOR THE WEB.
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* INTRO STRIP */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto py-16 md:py-24 border-t border-[#111]/10 mt-12 grid md:grid-cols-2 gap-12">
            <div className="text-xs font-bold uppercase tracking-widest text-[#111]/40 flex flex-col gap-2">
              <span>Est. 2024</span>
              <span>Gujarat, India</span>
            </div>
            <div className="text-lg md:text-xl font-medium leading-relaxed text-[#111]/70">
              Dhanyesh grew out of a frustration with software that looked polished but solved nothing. A full-stack Java developer with a deep focus on building things that actually work — under the hood and in front of real users.
            </div>
          </section>

          {/* LARGE PROFILE IMAGE */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto mb-16 md:mb-24">
            <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden relative">
              <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                src={profileAvatar}
                alt="Dhanyesh Hirani"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </section>

          {/* BIG PHILOSOPHY QUOTE */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto py-16 md:py-24 border-t border-[#111]/10">
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-5xl"
            >
              Dhanyesh® was built to bridge the gap between elegant design and reliable engineering — connecting backend logic, database architecture, and dynamic front-ends into one coherent, lasting system.
            </motion.p>
          </section>

          {/* SMALL TEXT COLUMNS */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto py-8 border-t border-[#111]/10 grid md:grid-cols-3 gap-8 text-xs text-[#111]/50 font-medium uppercase tracking-widest">
            <div className="flex flex-col gap-1">
              <span className="text-[#111] font-bold">Location</span>
              <span>Gujarat, India</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#111] font-bold">Education</span>
              <span>Computer Engineering Diploma</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#111] font-bold">Specialization</span>
              <span>Full-Stack Java / J2EE</span>
            </div>
          </section>

          {/* OUR VALUES — MARQUEE + ACCORDION */}
          <section ref={valuesRef} className="mt-16 md:mt-24 overflow-hidden border-t border-[#111]/10">
            {/* Horizontal scrolling title */}
            <div className="py-4 overflow-hidden border-b border-[#111]/10">
              <motion.div style={{ x: valuesX }} className="flex gap-12 whitespace-nowrap text-[10vw] font-black uppercase tracking-tighter leading-none">
                <span>MY VALUES</span>
                <span className="text-[#111]/20">MY VALUES</span>
                <span>MY VALUES</span>
              </motion.div>
            </div>

            {/* Values Accordion */}
            <div className="px-4 md:px-8 max-w-[1400px] mx-auto">
              {values.map((v) => (
                <div key={v.id} className="border-b border-[#111]/10">
                  <button
                    onClick={() => setOpenValue(openValue === v.id ? null : v.id)}
                    className="w-full flex items-center justify-between py-6 md:py-8 text-left gap-4 group cursor-pointer"
                  >
                    <div className="flex items-center gap-6 md:gap-12">
                      <span className="text-xs font-bold text-[#111]/30 w-6 shrink-0">{v.num}</span>
                      <span className="text-xl md:text-3xl font-bold tracking-tighter group-hover:opacity-60 transition-opacity">{v.title}</span>
                    </div>
                    {openValue === v.id
                      ? <Minus className="h-5 w-5 shrink-0" />
                      : <Plus className="h-5 w-5 shrink-0" />
                    }
                  </button>
                  <AnimatePresence>
                    {openValue === v.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pl-12 md:pl-[6.5rem] text-base md:text-lg text-[#111]/60 max-w-2xl leading-relaxed">
                          {v.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* THE STACK — tech grid like "THE TEAM" */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto py-16 md:py-32 border-t border-[#111]/10 mt-16 md:mt-24">
            <div className="flex justify-between items-end mb-12 md:mb-20">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">THE STACK</h2>
              <span className="text-5xl md:text-8xl font-black tracking-tighter text-[#111]/20">({String(techStack.length).padStart(2, "0")})</span>
            </div>
            <p className="text-sm md:text-base text-[#111]/50 mb-12 max-w-sm">
              Every tool in the belt is there for a reason. Chosen for reliability, chosen for scale.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#111]/10">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="bg-[#F4F4F5] p-8 md:p-10 flex flex-col justify-between gap-6 group hover:bg-[#111] transition-colors duration-300 cursor-default"
                >
                  <div className="w-full h-20 md:h-28 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl font-black tracking-tighter uppercase group-hover:text-[#F4F4F5] transition-colors text-center">{tech.name}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#111]/30 group-hover:text-[#F4F4F5]/40 transition-colors">{tech.role}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#F4F4F5]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* WORKSPACE IMAGE + CAPTION */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto mb-16 md:mb-24 grid md:grid-cols-2 gap-8 items-center border-t border-[#111]/10 pt-16 md:pt-24">
            <div className="overflow-hidden">
              <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                src={workspaceVisual}
                alt="Workspace"
                className="w-full h-[50vh] object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-2xl md:text-3xl font-bold tracking-tight leading-snug">
                Small touches make every detail proper attention. Experience small enough to know which details matter most.
              </p>
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-[#111] pb-1 w-fit hover:opacity-50 transition-opacity">
                See the work <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

        </div>
      </PageWrapper>
    </ReactLenis>
  )
}
