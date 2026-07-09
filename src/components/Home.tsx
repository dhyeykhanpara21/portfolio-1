import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { 
  Sparkles, Terminal, Globe, Database, Lock, Star, Laptop, 
  ChevronRight, ArrowRight, Quote, Code, Cpu, Layers 
} from "lucide-react"
import { PageWrapper } from "./PageWrapper"

// Image imports
import profileAvatar from "../assets/profile_avatar.png"
import coffeeProjectImg from "../assets/coffee_project.png"
import sqlProjectImg from "../assets/sql_project.png"
import skillsVisualImg from "../assets/skills_visual.png"

// Tool stack data
const tools = [
  { name: "Java", color: "#F89820", desc: "Core & J2EE" },
  { name: "React.js", color: "#61DAFB", desc: "Web UI" },
  { name: "JavaScript", color: "#F7DF1E", desc: "Interactive Logic" },
  { name: "TypeScript", color: "#3178C6", desc: "Typed Safety" },
  { name: "SQL", color: "#00758F", desc: "Relational DB" },
  { name: "HTML5", color: "#E34F26", desc: "Markup Structure" },
  { name: "CSS3", color: "#1572B6", desc: "Responsive Design" },
  { name: "Git", color: "#F05032", desc: "Version Control" },
  { name: "GitHub", color: "#FFFFFF", desc: "Cloud Repo" },
  { name: "VS Code", color: "#007ACC", desc: "Text Editor" },
  { name: "Eclipse IDE", color: "#2C2255", desc: "Java Compiler" },
  { name: "C++", color: "#00599C", desc: "Algorithms" },
  { name: "C", color: "#A8B9CC", desc: "Lower Systems" }
]

// Project previews
const featuredProjects = [
  {
    id: "coffee-shop",
    title: "Coffee Shop Website",
    category: "Full-Stack Web App",
    image: coffeeProjectImg,
    desc: "Developed a dynamic, J2EE-based coffee shop web application that allows users to browse catalog items, manage a virtual cart, and complete orders.",
    tech: ["Java", "Servlets", "JSP", "SQL"]
  },
  {
    id: "sql-analyzer",
    title: "SQL Query Analyzer & Formatter",
    category: "Database Utility",
    image: sqlProjectImg,
    desc: "Constructed a database developer utility designed to parse SQL script files, format nested subqueries, and visualize schema flows.",
    tech: ["Java", "JDBC", "SQL", "RegEx"]
  },
  {
    id: "portfolio-v2",
    title: "Dynamic Developer Portfolio",
    category: "Frontend Web App",
    image: skillsVisualImg,
    desc: "Built this exact premium portfolio interface utilizing modular React components, TypeScript, Tailwind CSS, and Framer Motion transitions.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"]
  }
]

// Side projects
const sideProjects = [
  {
    id: "servlet-filters",
    title: "J2EE Servlet Filters & Helpers",
    category: "Java Utility",
    desc: "Created modular Java Servlet filters to automate request authentication checks, session logging, and encoding configurations across endpoints."
  },
  {
    id: "cli-games",
    title: "Java CLI Logical Games",
    category: "Console App",
    desc: "A package of terminal puzzle engines implementing logical states, system inputs parsing, and basic threading schemas."
  },
  {
    id: "jdbc-pool-config",
    title: "Automated JDBC Connection Manager",
    category: "Database Adapter",
    desc: "Designed reusable database adapter classes to setup MySQL JDBC drivers, manage database handles, and execute secure prepared statements."
  },
  {
    id: "ui-component-lab",
    title: "Tailwind UI & Transition Sandbox",
    category: "Frontend Study",
    desc: "A sandbox collection of glassmorphic containers, custom scroll bars, CSS gradient animations, and modular React hooks."
  }
]

// Services
const services = [
  {
    title: "J2EE & Full-Stack Development",
    desc: "Constructing robust back-ends in Java utilizing JSP template pages, Servlets controllers, session trackers, and relational database connections.",
    gradient: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    glow: "hover:shadow-[0_0_50px_rgba(245,158,11,0.25)] hover:border-amber-500/40",
    icon: <Code className="h-8 w-8 text-amber-400" />
  },
  {
    title: "UI/UX Layout Refining",
    desc: "Crafting polished frontend layouts with responsive CSS variables, smooth animations, and clean modular React components.",
    gradient: "from-purple-500/20 via-fuchsia-500/10 to-pink-500/20",
    glow: "hover:shadow-[0_0_50px_rgba(168,85,247,0.25)] hover:border-purple-500/40",
    icon: <Cpu className="h-8 w-8 text-purple-400" />
  },
  {
    title: "Database Optimization & SQL",
    desc: "Normalizing relational databases, designing key constraints, parsing script files, and structuring clean, optimized SQL join queries.",
    gradient: "from-blue-500/20 via-indigo-500/10 to-cyan-500/20",
    glow: "hover:shadow-[0_0_50px_rgba(59,130,246,0.25)] hover:border-blue-500/40",
    icon: <Database className="h-8 w-8 text-blue-400" />
  }
]

// Testimonials
const testimonials = [
  {
    name: "Devang Vora",
    role: "Database Analyst",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face",
    text: "Dhanyesh took a look at our SQL queries and pinpointed database join bottlenecks. He resolved them instantly, speeding up execution."
  },
  {
    name: "Daxit Vora",
    role: "Java Engineer Trainee",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "A dedicated colleague who has an impressive grasp of Java OOP fundamentals and J2EE session lifecycle. He's great at database integration."
  },
  {
    name: "Vishvamay Limbasiya",
    role: "Frontend Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    text: "Dhanyesh is highly focused on detail. He helps refine CSS grid structures and configures robust animations with precision."
  },
  {
    name: "Esha Shah",
    role: "Associate Software Engineer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    text: "A quick learner who adapts to complex team structures rapidly. His transition from procedural code to React and TypeScript is seamless."
  }
]

// Framer Motion Animation Variants for Scroll Effects
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const
    }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const
    }
  }
}

export function Home() {
  const [currentDay, setCurrentDay] = useState("")
  const [hoveredSideProject, setHoveredSideProject] = useState<string | null>(null)

  useEffect(() => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const today = new Date()
    setCurrentDay(days[today.getDay()])
  }, [])

  return (
    <PageWrapper noPadding>
      {/* 1. Hero Section (Instant On Load Animation) */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Soft background glows */}
        <div className="absolute top-1/4 left-[-10%] w-[400px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-[-10%] w-[350px] h-[350px] bg-rose-500/[0.04] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
          {/* Circular avatar image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-500 to-rose-500 p-[3px] mb-8 shadow-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-500 group cursor-pointer"
          >
            <div className="w-full h-full rounded-full bg-[#030303] overflow-hidden">
              <img 
                src={profileAvatar} 
                alt="Dhanyesh Hirani" 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Hey, I'm
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-white to-rose-400">
              Dhanyesh Hirani
            </span>
          </motion.h1>

          {/* Day greeting subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm font-mono text-indigo-300/80 mb-6 uppercase tracking-widest flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
            How's your {currentDay}?
          </motion.p>

          {/* Bio text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-white/50 leading-relaxed font-light max-w-2xl mb-8 px-4"
          >
            I’m a tech enthusiast with a strong foundation in computer engineering and hands-on training in full-stack Java developer workflows. With a problem-solver’s mindset and a builder’s approach, I enjoy turning logical concepts into clean, scalable, and secure applications. From writing Servlet filters to configuring database adapters, I focus on building software that works reliably.
          </motion.p>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 shadow-xl hover:shadow-white/10 hover:scale-[1.02] transition-all cursor-pointer"
            >
              Let's Talk
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Features Grid Section (Scroll Effect) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="py-20 px-4 md:px-8 max-w-5xl mx-auto border-t border-white/[0.03]"
      >
        <motion.div variants={sectionVariants} className="mb-12 space-y-2">
          <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase font-mono">01 / Capabilities</span>
          <h2 className="text-3xl font-bold tracking-tight text-white/90">Core Focus & Features</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1: Build things the right way */}
          <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.12] transition-all duration-300 space-y-4">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white/95">Build things the right way</h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">I focus on clean code syntax, object-oriented parameters, and clean relational mappings across web and database queries.</p>
          </motion.div>

          {/* Card 2: Full-Stack Developer */}
          <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.12] transition-all duration-300 space-y-4">
            <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400 w-fit">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white/95">Full-Stack Trainee</h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">Equipped with Java structures, JSP templates, Servlets controllers, relational database pools, and modern React interfaces.</p>
          </motion.div>

          {/* Card 3: Secure & Reliable */}
          <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.12] transition-all duration-300 space-y-4">
            <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 w-fit">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white/95">Secure & Reliable</h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">From J2EE session HTTPSessions state configurations to SQL parameterized queries, I follow secure design procedures.</p>
          </motion.div>

          {/* Card 4: Real Projects */}
          <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.12] transition-all duration-300 space-y-4 md:col-span-2 lg:col-span-1">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 w-fit">
              <Star className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white/95">Powered by Real Projects</h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">Constructed functional Coffee Shop sites, custom SQL token scanners, and modern portfolio configurations—no simple copy-paste.</p>
          </motion.div>

          {/* Card 5: Continuous Learning */}
          <motion.div variants={itemVariants} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.12] transition-all duration-300 space-y-4 md:col-span-2 lg:col-span-2">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
              <Laptop className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white/95">Always Learning, Always Building</h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">IT graduate pursuing deeper integration setups with cloud architectures, backend design frameworks, and automated assistant tools.</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 3. Work (Featured Projects) Section (Scroll Effect) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="py-20 px-4 md:px-8 max-w-5xl mx-auto border-t border-white/[0.03]"
      >
        <motion.div variants={sectionVariants} className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase font-mono">02 / Portfolio</span>
            <h2 className="text-3xl font-bold tracking-tight text-white/90">Featured Work</h2>
          </div>
          <Link 
            to="/projects" 
            className="text-xs font-semibold text-white/50 hover:text-white transition-colors flex items-center gap-1 cursor-pointer hover:translate-x-1 duration-300"
          >
            View All Projects
            <ArrowRight className="h-3 w-3" />
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featuredProjects.map((project) => (
            <motion.div variants={itemVariants} key={project.id} className="h-full">
              <Link 
                to="/projects"
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.01] overflow-hidden hover:border-white/[0.15] hover:bg-[#08080a] transition-all duration-300 flex flex-col h-full shadow-lg"
              >
                <div className="h-48 overflow-hidden relative border-b border-white/[0.04]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-[1.04] transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/[0.08] text-[10px] font-medium text-indigo-300 tracking-wide">
                    {project.category}
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-base text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed font-light line-clamp-3">{project.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.05] text-[10px] text-white/40 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 4. Side Projects Section (Scroll Effect) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="py-20 px-4 md:px-8 max-w-5xl mx-auto border-t border-white/[0.03]"
      >
        <motion.div variants={sectionVariants} className="mb-12 space-y-2">
          <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase font-mono">03 / Laboratory</span>
          <h2 className="text-3xl font-bold tracking-tight text-white/90">Side Projects & Utilities</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid gap-4"
        >
          {sideProjects.map((p) => {
            const isHovered = hoveredSideProject === p.id;
            return (
              <motion.div
                variants={itemVariants}
                key={p.id}
                onMouseEnter={() => setHoveredSideProject(p.id)}
                onMouseLeave={() => setHoveredSideProject(null)}
                className="p-5 rounded-xl border border-white/[0.06] bg-[#070708]/30 hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="flex justify-between items-center relative z-10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-[9px] font-mono text-indigo-300 uppercase tracking-wide">
                        {p.category}
                      </span>
                      <h3 className="text-sm font-semibold text-white/90">{p.title}</h3>
                    </div>
                    
                    <motion.div
                      initial={false}
                      animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs text-white/50 font-light mt-3 leading-relaxed max-w-3xl">
                        {p.desc}
                      </p>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isHovered ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-white/40 shrink-0"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* 5. Spotlight Section (Scroll Effect) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
        className="py-20 px-4 md:px-8 max-w-5xl mx-auto border-t border-white/[0.03]"
      >
        <div className="mb-12 space-y-2">
          <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase font-mono">04 / Highlight</span>
          <h2 className="text-3xl font-bold tracking-tight text-white/90">Academic Spotlight</h2>
        </div>

        <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-indigo-950/20 via-black to-rose-950/10 p-8 md:p-10 relative overflow-hidden group shadow-xl">
          {/* Subtle decorative circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors duration-500" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-rose-500/5 rounded-full blur-2xl group-hover:bg-rose-500/10 transition-colors duration-500" />

          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
                <Sparkles className="h-3 w-3 text-amber-400 fill-amber-400" />
                <span className="text-[10px] font-semibold text-white/60 tracking-wider uppercase font-mono">Full-Stack Trainee Focus</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Diploma in Computer Engineering & Advanced J2EE Training
              </h3>
              
              <p className="text-sm text-white/60 font-light leading-relaxed">
                My engineering studies are grounded in systems logical frameworks, data structuring, and OOP compilation scopes. Over the course of my specialized full-stack trainee program, I structured relational schemas (MySQL constraints, key indexes, subquery plans) and dynamic server-side pages (Servlet requests handling, sessions caches validation).
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 font-mono">
                  Relational DB Normalization
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 font-mono">
                  Servlet Redirection Filters
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300 font-mono">
                  Modular JSP Layout Loops
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <div className="w-36 h-36 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center p-6 shadow-2xl relative group-hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-rose-500/10 rounded-2xl" />
                <Layers className="h-16 w-16 text-indigo-400 relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. Tool Stack Section (Scroll Effect) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="py-20 px-4 md:px-8 max-w-5xl mx-auto border-t border-white/[0.03]"
      >
        <motion.div variants={sectionVariants} className="mb-12 space-y-2">
          <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase font-mono">05 / Environment</span>
          <h2 className="text-3xl font-bold tracking-tight text-white/90">Tool Stack</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {tools.map((t) => (
            <motion.div 
              variants={itemVariants}
              key={t.name}
              className="p-4 rounded-xl border border-white/[0.06] bg-[#070708]/30 hover:border-white/[0.12] hover:bg-white/[0.02] hover:scale-[1.02] transition-all duration-300 flex items-center gap-3.5 group shadow-md"
            >
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold border border-white/[0.06] shrink-0"
                style={{ backgroundColor: `${t.color}0a`, borderColor: `${t.color}22`, color: t.color }}
              >
                {t.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="space-y-0.5 truncate">
                <h4 className="text-xs font-semibold text-white/90 truncate">{t.name}</h4>
                <p className="text-[10px] text-white/40 font-mono truncate">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 7. My Services Section (Scroll Effect) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="py-20 px-4 md:px-8 max-w-5xl mx-auto border-t border-white/[0.03]"
      >
        <motion.div variants={sectionVariants} className="mb-12 space-y-2">
          <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase font-mono">06 / Services</span>
          <h2 className="text-3xl font-bold tracking-tight text-white/90">My Services</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              variants={itemVariants}
              key={s.title}
              className={`p-6 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent flex flex-col justify-between min-h-[250px] transition-all duration-500 relative group overflow-hidden ${s.glow}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-tr ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="space-y-4 relative z-10">
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] w-fit shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-base text-white/95">{s.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed font-light">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 8. Testimonials Section (Scroll Triggered slider entry) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
        className="py-20 border-t border-white/[0.03] bg-gradient-to-b from-[#030303] to-[#070709] overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 mb-12 text-center space-y-2">
          <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase font-mono">07 / Validation</span>
          <h2 className="text-3xl font-bold tracking-tight text-white/90">Trusted by Developers</h2>
          <p className="text-xs text-white/40 font-light max-w-md mx-auto">Feedback and peer evaluations from engineering cohorts and code collaborators.</p>
        </div>

        {/* Marquee Wrapper with fading edges */}
        <div className="relative w-full flex items-center justify-center py-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#070709] to-transparent z-10 pointer-events-none" />

          {/* Testimonial slider track */}
          <div className="flex w-max gap-6">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                repeat: Infinity, 
                duration: 25, 
                ease: "linear" 
              }}
              className="flex gap-6 pr-6 w-max py-2"
            >
              {/* Render testimonials list twice for loop */}
              {[...testimonials, ...testimonials].map((item, idx) => (
                <div 
                  key={idx}
                  className="w-[280px] sm:w-[320px] p-6 rounded-2xl border border-white/[0.06] bg-[#09090b]/80 backdrop-blur-md flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group hover:border-white/[0.12] transition-colors shrink-0"
                >
                  <Quote className="absolute top-4 right-4 h-12 w-12 text-white/[0.02] shrink-0" />
                  <p className="text-xs text-white/60 leading-relaxed font-light font-mono relative z-10">
                    "{item.text}"
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04] relative z-10">
                    <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-white/[0.08]">
                      <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white/90">{item.name}</h4>
                      <p className="text-[10px] text-white/40 font-mono">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </PageWrapper>
  )
}
