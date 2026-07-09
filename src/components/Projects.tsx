import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ReactLenis } from "lenis/react"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { PageWrapper } from "./PageWrapper"
import coffeeProjectImg from "../assets/coffee_project.png"
import sqlProjectImg from "../assets/sql_project.png"
import skillsVisualImg from "../assets/skills_visual.png"

const projects = [
  {
    id: "coffee-shop",
    num: "01",
    title: "Coffee Shop Website",
    category: "Full-Stack Web App",
    year: "2024",
    disciplines: "Java / Servlets / JSP / MySQL",
    image: coffeeProjectImg,
    desc: "A dynamic J2EE-based coffee shop web application with catalog browsing, cart management, and simulated order flow backed by MySQL.",
    tech: ["Java", "Servlets", "JSP", "HTML", "CSS", "JavaScript", "SQL"],
  },
  {
    id: "sql-analyzer",
    num: "02",
    title: "SQL Query Analyzer",
    category: "Database Utility",
    year: "2024",
    disciplines: "Java / JDBC / SQL / RegEx",
    image: sqlProjectImg,
    desc: "A standalone developer utility to parse SQL scripts, visualize query execution plans, auto-format SQL strings, and outline schema constraints.",
    tech: ["Java", "JDBC", "SQL", "RegEx", "Eclipse"],
  },
  {
    id: "portfolio-v2",
    num: "03",
    title: "Developer Portfolio",
    category: "Frontend Web App",
    year: "2025",
    disciplines: "React / TypeScript / Framer Motion",
    image: skillsVisualImg,
    desc: "This very portfolio — built with modular React components, TypeScript, Framer Motion animations, Lenis smooth scroll, and Vite.",
    tech: ["React", "TypeScript", "Framer Motion", "Lenis", "Vite"],
  },
]

function ProjectRow({ project }: { project: typeof projects[0] }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <div ref={ref} className="border-t border-[#111]/10">
      <div className="group flex flex-col md:flex-row gap-0 cursor-pointer">
        {/* Left: meta */}
        <div className="md:w-1/3 py-8 md:py-12 pr-8 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#111]/30">{project.num}</span>
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none group-hover:opacity-60 transition-opacity duration-300">
              {project.title}
            </h3>
          </div>
          <div className="flex flex-col gap-1 text-xs font-bold uppercase tracking-widest text-[#111]/50">
            <span>{project.disciplines}</span>
            <span>{project.year}</span>
          </div>
        </div>

        {/* Right: image */}
        <div className="md:w-2/3 overflow-hidden relative h-[50vw] md:h-[35vw] max-h-[600px]">
          <motion.img
            style={{ y }}
            src={project.image}
            alt={project.title}
            className="w-full h-[115%] object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-[#111]/0 group-hover:bg-[#111]/10 transition-colors duration-500 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              className="w-16 h-16 rounded-full bg-[#F4F4F5] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <ArrowUpRight className="h-6 w-6 text-[#111]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expanded desc strip */}
      <div className="pb-8 md:pl-[33.333%] md:pr-0">
        <p className="text-sm md:text-base text-[#111]/50 max-w-lg leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-bold uppercase tracking-widest border border-[#111]/10 px-3 py-1 text-[#111]/50">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
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
                Selected work — Full-stack engineering projects built from 2024–2025.
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
                    SELECTED
                  </motion.div>
                </div>
                <div className="overflow-hidden text-right">
                  <motion.div
                    initial={{ y: "110%" }} animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                    className="text-[13vw]"
                  >
                    WORK.
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* PROJECTS LIST */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto mt-16 md:mt-24">
            {projects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
            <div className="border-t border-[#111]/10" />
          </section>

          {/* CTA */}
          <section className="px-4 md:px-8 max-w-[1400px] mx-auto py-24 md:py-40 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-[#111]/10 mt-16">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-tight max-w-xl">
              GOT A PROJECT IN MIND?
            </h2>
            <Link
              to="/contact"
              className="text-sm font-bold border-b-2 border-[#111] pb-0.5 hover:opacity-50 transition-opacity whitespace-nowrap"
            >
              Let's build it ↗
            </Link>
          </section>

        </div>
      </PageWrapper>
    </ReactLenis>
  )
}
