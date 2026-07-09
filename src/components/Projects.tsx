import { motion } from "framer-motion"
import { BrainCircuit, ChevronRight } from "lucide-react"
import { PageWrapper } from "./PageWrapper"
import coffeeProjectImg from "../assets/coffee_project.png"
import sqlProjectImg from "../assets/sql_project.png"
import skillsVisualImg from "../assets/skills_visual.png"

export function Projects() {
  const projectsData = [
    {
      id: "coffee-shop",
      title: "Coffee Shop Website",
      category: "Full-Stack Web App",
      image: coffeeProjectImg,
      desc: "Developed a dynamic, J2EE-based coffee shop web application that allows users to seamlessly browse catalog items, manage a virtual cart, and complete simulated orders.",
      features: [
        "Interactive product showcase & menu items catalog",
        "Persistent cart logic using Servlet HTTPSessions",
        "Modular JSP templates for consistent header/footer rendering",
        "Configured MySQL backend for item catalogs and order records"
      ],
      aiCollab: {
        claude: "Guided back-end Servlet structures, J2EE request lifecycles, and database connection logic optimizations.",
        chatgpt: "Refined frontend stylesheet parameters, CSS layouts, and drafted technical document outlines."
      },
      tech: ["Java", "Servlets", "JSP", "HTML", "CSS", "JavaScript", "SQL"]
    },
    {
      id: "sql-analyzer",
      title: "SQL Query Analyzer & Formatter",
      category: "Database Utility",
      image: sqlProjectImg,
      desc: "Constructed a standalone database developer utility designed to parse SQL script files, analyze query execution plans, format code layout, and outline join topologies.",
      features: [
        "Parses SQL script files and isolates nested subqueries",
        "Visualizes index utilization recommendations",
        "Formats messy SQL strings into aligned indent structures",
        "Outlines relational schema constraints and primary key flows"
      ],
      aiCollab: {
        claude: "Structured JDBC connection utilities and query runtime plan mapping algorithms.",
        chatgpt: "Generated SQL syntax token regex, documentation layouts, and test schema tables."
      },
      tech: ["Java", "JDBC", "SQL", "RegEx", "Eclipse Workspace"]
    },
    {
      id: "portfolio-v2",
      title: "Dynamic Developer Portfolio",
      category: "Frontend Web App",
      image: skillsVisualImg,
      desc: "Built this exact premium portfolio interface utilizing modular React components, TypeScript contracts, Tailwind CSS v4 variables, client-side routing, and Framer Motion transitions.",
      features: [
        "Client-side routing transitions utilizing React Router context",
        "Staggered entrance animations on scroll using Framer Motion",
        "Interactive form handlers with validation and state transitions",
        "Tailwind CSS v4 setup with custom scrollbar variables"
      ],
      aiCollab: {
        claude: "Refactored code into modular section components and configured TS config mappings.",
        chatgpt: "Refined tailwind stylesheet configuration paths and animations layout curves."
      },
      tech: ["React", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vite"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <PageWrapper>
      <section id="projects" className="py-8 relative overflow-hidden">
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-16">
          
          {/* Title */}
          <div className="mb-16 space-y-4 text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-violet-400 uppercase">
              <div className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              03 / Selected Works
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-white/40 font-light text-sm">
              Explore my academic and utility implementations, built using Java, database schemas, modern web tooling, and collaborative AI design patterns.
            </p>
          </div>

          {/* Project List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl border border-white/[0.08] bg-[#08080a]/60 overflow-hidden shadow-2xl relative"
              >
                <div className="grid lg:grid-cols-12 gap-0">
                  
                  {/* Image Panel */}
                  <div className="lg:col-span-5 relative h-72 lg:h-auto overflow-hidden group min-h-[350px]">
                    <div className="absolute inset-0 bg-indigo-950/20 mix-blend-overlay z-10" />
                    <img
                      src={project.image}
                      alt={`${project.title} mockup`}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/40 to-transparent z-15 pointer-events-none" />
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-light text-indigo-300 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight text-white/95">{project.title}</h3>
                        <p className="text-sm font-light text-white/40">{project.category} System Platform</p>
                      </div>

                      <p className="text-sm text-white/70 leading-relaxed font-light">
                        {project.desc}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Core Functionalities</h4>
                        <ul className="grid sm:grid-cols-2 gap-2 text-xs font-light text-white/70">
                          {project.features.map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <ChevronRight className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* AI Co-pilot Integration */}
                      <div className="p-4 rounded-2xl border border-white/[0.04] bg-white/[0.01] space-y-3">
                        <h4 className="text-xs font-semibold tracking-wider text-indigo-300 uppercase flex items-center gap-2">
                          <BrainCircuit className="h-4 w-4" />
                          AI Collaboration & Orchestration
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4 text-xs font-light text-white/60">
                          <div>
                            <span className="font-semibold text-white/90 block mb-1">Claude AI:</span> {project.aiCollab.claude}
                          </div>
                          <div>
                            <span className="font-semibold text-white/90 block mb-1">ChatGPT:</span> {project.aiCollab.chatgpt}
                          </div>
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-light text-white/60">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
