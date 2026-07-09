import { motion } from "framer-motion"
import { Terminal, Globe, Database, Wrench, Sparkles } from "lucide-react"
import { PageWrapper } from "./PageWrapper"
import skillsVisual from "../assets/skills_visual.png"
import workspaceVisual from "../assets/workspace_visual.png"

export function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      icon: <Terminal className="h-6 w-6 text-indigo-400" />,
      skills: [
        { name: "Java", desc: "Core OOPs, Collections, Exception Handling, Threading", val: 85 },
        { name: "C++", desc: "Standard template libraries, pointer allocations, memory design", val: 70 },
        { name: "C", desc: "Procedural structures, pointer mappings, low-level data syntax", val: 75 }
      ]
    },
    {
      category: "Web Technologies",
      icon: <Globe className="h-6 w-6 text-rose-400" />,
      skills: [
        { name: "HTML & CSS", desc: "Semantic tags, CSS Flexbox/Grid systems, media query sizing", val: 90 },
        { name: "JavaScript", desc: "DOM interactions, asynchronous async/await, ES6 modules", val: 85 },
        { name: "JSP & Servlets", desc: "Server-side template loops, HTTP request lifecycles", val: 80 }
      ]
    },
    {
      category: "Database Systems",
      icon: <Database className="h-6 w-6 text-violet-400" />,
      skills: [
        { name: "SQL", desc: "Joins, aggregations, queries optimization, tables normalization", val: 80 }
      ]
    },
    {
      category: "Tools & Environments",
      icon: <Wrench className="h-6 w-6 text-amber-400" />,
      skills: [
        { name: "VS Code", desc: "Shortcuts mapping, terminal bindings, extension integrations", val: 90 },
        { name: "Eclipse", desc: "Java workspace configuration, compiler setups, console debugging", val: 80 },
        { name: "Microsoft Word", desc: "Documentation editing, technical report templates creation", val: 85 }
      ]
    },
    {
      category: "AI Toolchains (Development Co-pilot)",
      icon: <Sparkles className="h-6 w-6 text-cyan-400" />,
      skills: [
        { name: "Claude AI", desc: "Backend logic modeling,Servlet debugging guidance, optimization", val: 95 },
        { name: "ChatGPT", desc: "UI improvements suggestion, doc writing, script automation", val: 90 },
        { name: "Gemini / DeepSeek", desc: "Alternative query optimization templates, code explanations", val: 85 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }
    }
  }

  return (
    <PageWrapper>
      <section id="skills" className="py-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-16">
          
          {/* Title */}
          <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-rose-400 uppercase">
              <div className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              02 / Technical Skills
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Tech Stack & Tooling
            </h2>
            <p className="text-white/40 font-light text-sm">
              My technical expertise is organized by domains, highlighting core languages, frontend assets, database systems, and modern AI design environments.
            </p>
          </div>

          {/* Grid Layout: Visual on the Left + Skills Stack Cards on the Right */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Visual Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 rounded-3xl border border-white/[0.08] bg-[#08080a]/50 p-6 flex flex-col justify-between overflow-hidden relative min-h-[300px] lg:min-h-[480px] group shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/[0.03] via-transparent to-indigo-500/[0.03] pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-bold tracking-tight text-white/90">Development Toolkit</h3>
                <p className="text-xs text-white/40 leading-relaxed font-light">
                  A combination of standard engineering languages (like Java) and AI toolchains for rapid prototyping and full stack implementations.
                </p>
              </div>
              
              {/* Graphic Visual */}
              <div className="h-44 w-full rounded-2xl overflow-hidden mt-6 border border-white/[0.04] relative">
                <img 
                  src={skillsVisual} 
                  alt="Development Toolkit Visual Diagram" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/90 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Detailed Skills Categories */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="lg:col-span-8 space-y-6"
            >
              {skillsData.map((cat) => (
                <motion.div
                  key={cat.category}
                  variants={cardVariants}
                  className="p-6 rounded-3xl border border-white/[0.06] bg-[#08080a]/30 hover:bg-[#08080a]/70 hover:border-white/[0.12] transition-all relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-white/[0.01] to-transparent rounded-bl-3xl pointer-events-none group-hover:from-white/[0.03] transition-colors" />
                  
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-6 border-b border-white/[0.04] pb-4">
                    <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                    <h3 className="font-semibold text-base tracking-tight text-white/95">{cat.category}</h3>
                  </div>

                  {/* Skills lists with detail desc & bars */}
                  <div className="space-y-4">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="font-medium text-white/90">{skill.name}</span>
                          <span className="text-white/40 font-light truncate max-w-[280px] sm:max-w-xs">{skill.desc}</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-1.5 w-full rounded-full bg-white/[0.04] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.val}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Section: Work Station Graphic Collage */}
          <div className="grid md:grid-cols-12 gap-8 items-center border-t border-white/[0.06] pt-12">
            
            {/* Visual description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 space-y-4"
            >
              <h4 className="text-lg font-bold tracking-tight text-white/90">My Work Station Setup</h4>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                I believe that a clean, highly organized, and aesthetic development environment directly impacts cognitive focus and query structure. 
                My system workstation is customized with a dark terminal schema, system logs monitor interfaces, and clean shortcode mappings in VS Code and Eclipse.
              </p>
              <p className="text-xs text-white/40 font-mono">
                Environment Specs: OS Windows 11 | VS Code | Git & Bash toolchain | Integrated browser developer portals
              </p>
            </motion.div>

            {/* Collage Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 rounded-3xl border border-white/[0.08] overflow-hidden relative h-64 group shadow-2xl"
            >
              <div className="absolute inset-0 bg-rose-950/10 mix-blend-overlay z-10" />
              <img
                src={workspaceVisual}
                alt="Workspace desk setup representation"
                className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-15 pointer-events-none" />
            </motion.div>

          </div>

        </div>
      </section>
    </PageWrapper>
  )
}
