import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ReactLenis } from "lenis/react"
import { Link } from "react-router-dom"
import { ArrowDown, Plus, Minus } from "lucide-react"
import { PageWrapper } from "./PageWrapper"

import coffeeProjectImg from "../assets/coffee_project.png"
import sqlProjectImg from "../assets/sql_project.png"
import skillsVisualImg from "../assets/skills_visual.png"

const featuredProjects = [
  {
    id: "coffee-shop",
    title: "COFFEE SHOP",
    num: "01",
    disciplines: "Full-Stack • J2EE • SQL",
    image: coffeeProjectImg,
    year: "2026",
    desc: "A dynamic J2EE-based coffee shop web application that allows users to browse catalog items, manage a virtual cart, and complete orders."
  },
  {
    id: "sql-analyzer",
    title: "SQL ANALYZER",
    num: "02",
    disciplines: "Database Utility • Java • RegEx",
    image: sqlProjectImg,
    year: "2026",
    desc: "A database developer utility designed to parse SQL script files, format nested subqueries, and visualize schema flows."
  },
  {
    id: "portfolio-v2",
    title: "PORTFOLIO V2",
    num: "03",
    disciplines: "Frontend • React • Framer Motion",
    image: skillsVisualImg,
    year: "2026",
    desc: "A premium portfolio interface utilizing modular React components, TypeScript, Tailwind CSS, and Framer Motion transitions."
  }
]

const services = [
  {
    id: "01",
    title: "J2EE DEVELOPMENT",
    desc: "Constructing robust back-ends in Java utilizing JSP template pages, Servlets controllers, session trackers, and relational database connections. I focus on clean object-oriented design and modular backend structures."
  },
  {
    id: "02",
    title: "UI/UX REFINING",
    desc: "Crafting polished frontend layouts with responsive CSS variables, smooth animations, and clean modular React components. Blending logical backend systems with beautiful, usable interfaces."
  },
  {
    id: "03",
    title: "DATABASE OPTIMIZATION",
    desc: "Normalizing relational databases, designing key constraints, parsing script files, and structuring clean, optimized SQL join queries to ensure data integrity and rapid retrieval."
  }
]

const ServiceAccordion = ({ service, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-[#111] overflow-hidden">
      <button 
        onClick={onClick}
        className="w-full py-6 md:py-10 flex items-center justify-between text-left group cursor-pointer"
      >
        <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase group-hover:translate-x-2 transition-transform duration-500 ease-out">
          {service.title}
        </h3>
        <div className="text-[#111]">
          {isOpen ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 max-w-2xl">
              <p className="text-lg md:text-xl font-light leading-relaxed text-[#111]/80">
                {service.desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Home() {
  const [openService, setOpenService] = useState<string | null>(null)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <ReactLenis root>
    <PageWrapper noPadding>
      <div className="bg-[#F4F4F5] text-[#111] min-h-screen font-sans selection:bg-[#111] selection:text-white">
        
        <section ref={heroRef} className="pt-32 pb-12 px-4 md:px-8 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center">
          <div className="flex justify-between items-start text-xs font-semibold uppercase tracking-widest mb-16 md:mb-32">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              className="max-w-[200px] leading-relaxed hidden sm:block"
            >
              We are a creative studio building identity and visual systems for brands that want to be seen for what they are.
            </motion.div>
            <Link to="/contact" className="border-b-2 border-[#111] pb-0.5 hover:opacity-50 transition-opacity">
              Get in touch ↗
            </Link>
          </div>

          <motion.div style={{ y: y1, opacity }} className="relative w-full flex justify-center mb-32 md:mb-48">
            <div className="flex flex-col font-black uppercase tracking-tighter text-[15vw] leading-[0.85] text-center md:text-right relative z-10 w-full md:w-auto">
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }} className="md:mr-[10%]">DHANYESH.</motion.div>
              </div>
              <div className="overflow-hidden z-20 mix-blend-difference text-[#F4F4F5]">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }} className="md:mr-[5%]">FULL-STACK.</motion.div>
              </div>
              <div className="overflow-hidden z-20 mix-blend-difference text-[#F4F4F5]">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}>DEVELOPER.</motion.div>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-[#111] pt-8 md:pt-16 mb-24 md:mb-40 flex flex-col md:flex-row gap-8 justify-between">
            <span className="text-xs font-bold uppercase tracking-widest md:w-1/4">
              01 — MEET DHANYESH
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9] md:w-3/4">
              A CLEAR POINT OF VIEW ON WHAT BACKEND SCALABILITY SHOULD BE.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-end items-start gap-8 mb-32 md:mb-48">
            <div className="w-full md:w-1/4 h-[30vh] bg-black flex items-center justify-center overflow-hidden">
              <img src={skillsVisualImg} alt="Abstract" className="w-full h-full object-cover opacity-60 grayscale" />
            </div>
            <div className="w-full md:w-1/3 flex flex-col gap-6 text-sm md:text-base font-medium leading-relaxed">
              <p>
                My engineering studies are grounded in systems logical frameworks, data structuring, and OOP compilation scopes. Over the course of my specialized full-stack trainee program, I structured relational schemas and dynamic server-side pages.
              </p>
              <p>
                I believe in craft over speed, form with intent, and building digital systems that are flexible and meant to endure.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#111] text-[#F4F4F5] py-24 md:py-40 px-4 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-40 border-b border-[#F4F4F5]/20 pb-8 gap-8">
              <div className="text-xs font-bold uppercase tracking-widest max-w-[200px]">
                A selection of brand identity, art direction, and digital design projects.
              </div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                SELECTED WORK
              </h2>
            </div>

            <div className="flex flex-col relative w-full h-[300vh]">
              {featuredProjects.map((project, idx) => (
                <div 
                  key={project.id} 
                  className="group cursor-pointer sticky flex flex-col justify-center min-h-screen bg-[#111] w-full"
                  style={{ top: 0, paddingTop: `${idx * 2}rem`, zIndex: idx }}
                >
                  <div className="flex justify-between items-start mb-8 text-[#F4F4F5]/50 group-hover:text-[#F4F4F5] transition-colors">
                    <h3 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase">{project.title}</h3>
                    <span className="text-3xl md:text-6xl font-bold tracking-tighter">{project.num}</span>
                  </div>
                  
                  <div className="w-full h-[60vh] md:h-[70vh] bg-[#222] relative overflow-hidden mb-8">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-80" 
                    />
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start text-xs font-bold uppercase tracking-widest gap-4 text-[#F4F4F5]/60 pb-16">
                    <div className="flex flex-col gap-1">
                      <span>Disciplines</span>
                      <span className="text-[#F4F4F5]">{project.disciplines}</span>
                    </div>
                    <div className="max-w-sm text-center md:text-left text-[#F4F4F5]">
                      {project.desc}
                    </div>
                    <div>
                      {project.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-40 px-4 md:px-8 max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-24">
            <div className="md:w-1/3 flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-widest">04 — SERVICES</span>
                <p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug">
                  From identity and editorial to digital systems, we build foundations meant to endure.
                </p>
              </div>
            </div>
            
            <div className="md:w-2/3 border-t border-[#111]">
              {services.map((service) => (
                <ServiceAccordion 
                  key={service.id} 
                  service={service} 
                  isOpen={openService === service.id} 
                  onClick={() => setOpenService(openService === service.id ? null : service.id)} 
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-40 px-4 md:px-8 max-w-[1400px] mx-auto border-t border-[#111]">
          <div className="flex justify-between items-end mb-24 md:mb-40">
            <h2 className="text-6xl md:text-[10vw] font-black tracking-tighter uppercase leading-[0.85]">
              FROM VISION<br/>TO REALITY
            </h2>
            <ArrowDown className="h-16 w-16 md:h-32 md:w-32 mb-4" strokeWidth={1.5} />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="w-full md:w-1/3 h-[50vh] bg-black overflow-hidden">
               <img src={coffeeProjectImg} alt="Vision" className="w-full h-full object-cover grayscale opacity-80" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-12 pt-8">
              <h3 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase leading-none max-w-lg">
                WE MAKE THINGS THAT MEAN SOMETHING.
              </h3>
              <div className="flex gap-12">
                <span className="text-xs font-bold uppercase tracking-widest hidden md:block">05 — APPROACH</span>
                <p className="text-sm md:text-base font-medium leading-relaxed max-w-sm">
                  Strategy is about clarity. We define the logic before we define the look. We prioritize deep inquiry and strict standards over rushed delivery, ensuring all visual design decisions convey utility and meaning.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageWrapper>
    </ReactLenis>
  )
}
