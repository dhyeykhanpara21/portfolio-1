import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Globe, 
  Database, 
  Sparkles, 
  Wrench, 
  GraduationCap, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Menu, 
  X, 
  Lightbulb, 
  Zap, 
  BrainCircuit, 
  Terminal,
  Server,
  Heart,
  ChevronRight
} from "lucide-react"
import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import coffeeProjectImg from "./assets/coffee_project.png"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ]

  const handleScroll = (id: string) => {
    setActiveSection(id)
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formState.name && formState.email && formState.message) {
      setFormSubmitted(true)
      setTimeout(() => {
        setFormSubmitted(false)
        setFormState({ name: "", email: "", message: "" })
      }, 5000)
    }
  }

  const skillsData = [
    {
      category: "Programming Languages",
      icon: <Terminal className="h-6 w-6 text-indigo-400" />,
      skills: ["Java", "C++", "C"]
    },
    {
      category: "Web Technologies",
      icon: <Globe className="h-6 w-6 text-rose-400" />,
      skills: ["HTML", "CSS", "JavaScript", "JSP", "Servlets"]
    },
    {
      category: "Database Systems",
      icon: <Database className="h-6 w-6 text-violet-400" />,
      skills: ["SQL"]
    },
    {
      category: "Tools & Environments",
      icon: <Wrench className="h-6 w-6 text-amber-400" />,
      skills: ["VS Code", "Eclipse", "Microsoft Word"]
    },
    {
      category: "AI Tools (Development Co-pilot)",
      icon: <Sparkles className="h-6 w-6 text-cyan-400" />,
      skills: ["Claude", "ChatGPT", "Gemini", "DeepSeek", "Perplexity AI"]
    }
  ]

  const strengths = [
    {
      title: "Quick Learner & Adaptable",
      description: "Highly capable of picking up new technologies, frameworks, and tools rapidly to deliver prompt solutions.",
      icon: <Zap className="h-8 w-8 text-amber-400" />
    },
    {
      title: "Analytical Thinker",
      description: "Focused on parsing complex technical requirements and translating them into structured, robust logic.",
      icon: <BrainCircuit className="h-8 w-8 text-indigo-400" />
    },
    {
      title: "Problem Solver",
      description: "Equipped with strong core concepts in OOPs and data manipulation to debug issues systematically.",
      icon: <Lightbulb className="h-8 w-8 text-rose-400" />
    }
  ]

  const education = [
    {
      role: "Full Stack Java Developer Trainee",
      institution: "TOPS TECHNOLOGY",
      location: "Ahmedabad",
      period: "Present",
      description: "Intensive training in Java, advanced J2EE components (JSP, Servlets), database configuration, and responsive frontends."
    },
    {
      role: "Diploma in Computer Engineering",
      institution: "Government Polytechnic",
      location: "Gandhinagar",
      period: "Completed",
      grade: "CGPA: 7.00",
      description: "Core academic curriculum covering Object Oriented Programming, Database Management Systems, Data Structures, and Software Engineering."
    },
    {
      role: "Secondary School Certificate (10th)",
      institution: "State Board School",
      location: "Junagadh",
      period: "Completed",
      grade: "Percentage: 83.43%",
      description: "Strong academic foundation with major focus on mathematics, science, and computer basics."
    }
  ]

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Floating Navbar */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <nav className="mx-auto max-w-5xl rounded-full border border-white/[0.08] bg-[#030303]/40 backdrop-blur-md px-6 py-3 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScroll("home")}>
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-rose-500 flex items-center justify-center font-bold text-sm tracking-tight text-white shadow-lg">
              DH
            </div>
            <span className="font-semibold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 hidden sm:inline-block">
              Dhanyesh Hirani
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`text-sm tracking-wide transition-colors relative py-1 px-2 cursor-pointer ${
                  activeSection === item.id ? "text-white font-medium" : "text-white/50 hover:text-white/80"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-400 to-rose-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden md:flex">
            <button
              onClick={() => handleScroll("contact")}
              className="px-4 py-1.5 text-xs font-semibold rounded-full border border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.08] transition-all cursor-pointer"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-4 right-4 mt-2 p-6 rounded-3xl border border-white/[0.08] bg-[#09090b]/95 backdrop-blur-lg flex flex-col gap-4 shadow-2xl"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`text-left text-lg py-2 border-b border-white/[0.03] transition-colors cursor-pointer ${
                    activeSection === item.id ? "text-indigo-400 font-semibold" : "text-white/60"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleScroll("contact")}
                className="mt-2 w-full py-3 text-center rounded-xl bg-gradient-to-r from-indigo-500 to-rose-500 font-semibold text-sm shadow-md cursor-pointer"
              >
                Hire Me
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative">
        <HeroGeometric 
          badge="IT Student & Software Developer"
          title1="Dhanyesh Hirani"
          title2="Building Web Solutions"
        />
        {/* Animated scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors">
          <span className="text-xs tracking-widest font-light">SCROLL DOWN</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-6 rounded-full bg-white/20 relative"
          >
            <div className="w-1.5 h-2 rounded-full bg-indigo-400 absolute top-1" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 md:px-8 max-w-5xl mx-auto relative">
        <div className="absolute top-1/3 left-[-20%] w-[350px] h-[350px] bg-rose-500/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-[-10%] w-[300px] h-[300px] bg-indigo-500/[0.03] rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Summary / Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent p-6 text-center shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05]" />
            <div className="relative z-10">
              {/* Profile Avatar Graphic */}
              <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-500 p-[3px] shadow-2xl mb-6">
                <div className="w-full h-full rounded-full bg-[#09090b] flex items-center justify-center">
                  <Code2 className="h-10 w-10 text-white/80" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1 tracking-tight">Dhanyesh Hirani</h3>
              <p className="text-sm text-indigo-300 font-light mb-6 tracking-wide">Ahmedabad / Junagadh, India</p>
              
              <div className="space-y-3 text-left border-t border-white/[0.06] pt-6 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-indigo-400 shrink-0" />
                  <a href="mailto:dhanyeshpatel@gmail.com" className="hover:text-white transition-colors truncate">
                    dhanyeshpatel@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-rose-400 shrink-0" />
                  <a href="tel:+918799346359" className="hover:text-white transition-colors">
                    +91 8799346359
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-violet-400 shrink-0" />
                  <span>Gujarat, India</span>
                </div>
              </div>

              {/* Languages */}
              <div className="border-t border-white/[0.06] mt-6 pt-6 text-left">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["English", "Hindi", "Gujarati"].map((lang) => (
                    <span key={lang} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-light text-white/80">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description & Strengths */}
          <div className="md:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-indigo-400 uppercase">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                01 / About Me
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                Professional Overview
              </h2>
              <p className="text-white/60 leading-relaxed font-light text-base md:text-lg">
                I am a motivated Information Technology student with a strong foundation in programming and web systems development. 
                I specialize in Object-Oriented Programming constructs, core languages like Java, C, C++, and frontend structures.
              </p>
              <p className="text-white/60 leading-relaxed font-light text-base md:text-lg">
                Passionate about designing efficient, logical, and user-centric web applications, I enjoy continuous self-development. 
                I actively collaborate with artificial intelligence tools to implement backend logic, optimize features, and ensure high-quality application outcomes.
              </p>
            </motion.div>

            {/* Strengths Cards */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Core Strengths</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                {strengths.map((str, idx) => (
                  <motion.div
                    key={str.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] transition-all hover:border-white/[0.1] hover:-translate-y-1 duration-300"
                  >
                    <div className="mb-3">{str.icon}</div>
                    <h5 className="font-semibold text-sm mb-1.5 tracking-tight">{str.title}</h5>
                    <p className="text-xs text-white/50 leading-relaxed font-light">{str.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 border-t border-white/[0.03] bg-[#050507]/40 relative">
        <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-rose-400 uppercase">
              <div className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              02 / Technical Skills
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Tech Stack & Tooling
            </h2>
            <p className="text-white/40 font-light text-sm">
              My technical expertise is organized by domains, highlighting core languages, frontend assets, database systems, and modern AI design environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="p-6 rounded-3xl border border-white/[0.06] bg-[#08080a]/50 hover:border-white/[0.12] transition-colors relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-3xl pointer-events-none group-hover:from-white/[0.05] transition-colors" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-base tracking-tight text-white/95">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-light text-white/80 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.15] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-white/[0.03] relative">
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-violet-400 uppercase">
              <div className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              03 / Selected Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Featured Project
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/[0.08] bg-[#08080a]/60 overflow-hidden shadow-2xl relative"
          >
            <div className="grid lg:grid-cols-12 gap-0">
              
              {/* Project Image Panel */}
              <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden group min-h-[300px]">
                <div className="absolute inset-0 bg-indigo-950/20 mix-blend-overlay z-10" />
                <img
                  src={coffeeProjectImg}
                  alt="Coffee Shop Project Screen Mockup"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/40 to-transparent z-15 pointer-events-none" />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-light text-indigo-300 backdrop-blur-sm">
                    Web Application
                  </span>
                </div>
              </div>

              {/* Project Content Panel */}
              <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">Coffee Shop Website</h3>
                    <p className="text-sm font-light text-white/50">Dynamic and responsive web platform for order management</p>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed font-light">
                    Developed a robust coffee shop application allowing clients to easily search and browse catalog items, 
                    add chosen beverages and treats to their virtual cart, and complete purchase orders dynamically.
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Core Functionalities</h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-xs font-light text-white/70">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-indigo-400 shrink-0" />
                        Interactive product showcase & menu
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-indigo-400 shrink-0" />
                        Persistent shopping cart mechanics
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-indigo-400 shrink-0" />
                        Responsive layouts for mobile/desktop
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-indigo-400 shrink-0" />
                        Order fulfillment simulation
                      </li>
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
                        <span className="font-semibold text-white/90">Claude AI:</span> Guided back-end servlet architecture, debugging JSP flows, structural fixes, and Java logic optimization.
                      </div>
                      <div>
                        <span className="font-semibold text-white/90">ChatGPT:</span> Provided frontend enhancement guidance, drafted project docs, and refined copywriting.
                      </div>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Java", "JSP", "Servlets", "HTML", "CSS", "JavaScript", "SQL"].map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-light text-white/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 border-t border-white/[0.03] bg-[#050507]/40 relative">
        <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-rose-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              04 / Academic Paths
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Education & Certifications
            </h2>
            <p className="text-white/40 font-light text-sm">
              My training timeline shows a solid grounding in Computer Science, full stack engineering systems, and standard academic criteria.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-white/[0.06] max-w-3xl mx-auto pl-6 sm:pl-8 space-y-12">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 h-6 w-6 rounded-full bg-[#030303] border-2 border-indigo-500 flex items-center justify-center shadow-lg">
                  <div className="h-2 w-2 rounded-full bg-indigo-400" />
                </div>

                <div className="p-6 sm:p-8 rounded-3xl border border-white/[0.06] bg-[#08080a]/50 hover:bg-[#08080a]/80 transition-colors space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">{edu.role}</h3>
                      <p className="text-sm font-light text-white/50">{edu.institution} — {edu.location}</p>
                    </div>
                    <div className="flex items-center gap-2.5 self-start sm:self-center">
                      {edu.grade && (
                        <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300">
                          {edu.grade}
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs font-light text-white/40 flex items-center gap-1.5">
                        <Calendar className="h-3 w-3 shrink-0" />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed font-light">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-white/[0.03] relative">
        <div className="absolute top-[10%] left-[-15%] w-[400px] h-[400px] bg-rose-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
              <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              05 / Collaboration
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Get in Touch
            </h2>
            <p className="text-white/40 font-light text-sm">
              Feel free to reach out for project opportunities, job offers, or system design collaborations. I'll get back to you shortly.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 space-y-6"
            >
              <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#08080a]/50 flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Email Address</h4>
                  <a href="mailto:dhanyeshpatel@gmail.com" className="text-sm font-light text-white/60 hover:text-white transition-colors break-all">
                    dhanyeshpatel@gmail.com
                  </a>
                  <p className="text-xs text-white/30 font-light mt-1">Send a direct message anytime.</p>
                </div>
              </div>

              <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#08080a]/50 flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Phone Contact</h4>
                  <a href="tel:+918799346359" className="text-sm font-light text-white/60 hover:text-white transition-colors">
                    +91 8799346359
                  </a>
                  <p className="text-xs text-white/30 font-light mt-1">Mon - Sat, 9:00 AM to 6:00 PM IST.</p>
                </div>
              </div>

              <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#08080a]/50 flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Current Location</h4>
                  <span className="text-sm font-light text-white/60">
                    Ahmedabad / Gandhinagar, Gujarat, India
                  </span>
                  <p className="text-xs text-white/30 font-light mt-1">Open for local or remote opportunities.</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-3 p-8 rounded-3xl border border-white/[0.06] bg-[#08080a]/30 backdrop-blur-sm relative"
            >
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full flex flex-col items-center justify-center text-center py-10 space-y-4"
                  >
                    <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Message Transmitted!</h4>
                      <p className="text-xs font-light text-white/50 mt-1 max-w-xs mx-auto">
                        Thank you for reaching out, Dhanyesh. Your message has been sent successfully.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-white/40">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-sm text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-white/40">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-sm text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-white/40">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Let's build something great..."
                        className="w-full px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-sm text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-rose-500 text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/10 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/[0.03] text-center text-xs text-white/30 font-light">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Dhanyesh Hirani. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> & AI Orchestration
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App
