import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Zap, BrainCircuit, Lightbulb, Heart, Target, Sparkles, Instagram, Github, Linkedin, MessageCircle } from "lucide-react"
import { PageWrapper } from "./PageWrapper"
import profileAvatar from "../assets/profile_avatar.png"
import hobbiesVisual from "../assets/hobbies_visual.png"

export function About() {
  const strengths = [
    {
      title: "Quick Learner & Adaptable",
      description: "Highly capable of picking up new technologies rapidly, adapting codebases, and delivering prompt software solutions.",
      icon: <Zap className="h-8 w-8 text-amber-400" />
    },
    {
      title: "Analytical Thinker",
      description: "Focused on parsing complex database queries and web architectures to build structured, robust systems.",
      icon: <BrainCircuit className="h-8 w-8 text-indigo-400" />
    },
    {
      title: "Problem Solver",
      description: "Equipped with strong core concepts in Java and Object-Oriented structures to debug JSP/Servlet flows systematically.",
      icon: <Lightbulb className="h-8 w-8 text-rose-400" />
    }
  ]

  const languages = [
    { name: "Gujarati", level: "Native / Mother Tongue", value: 100, color: "from-emerald-400 to-teal-500" },
    { name: "Hindi", level: "Fluent / Conversational", value: 90, color: "from-indigo-400 to-blue-500" },
    { name: "English", level: "Professional / Technical", value: 85, color: "from-rose-400 to-pink-500" }
  ]

  const hobbies = [
    { name: "Tech Exploration", desc: "Experimenting with next-gen frameworks, AI APIs, and developer tool chains to optimize workflows.", icon: <Sparkles className="h-4 w-4 text-amber-400" /> },
    { name: "Logic Building", desc: "Solving algorithmic puzzles on competitive sites to keep core analytical skills sharp.", icon: <Target className="h-4 w-4 text-rose-400" /> },
    { name: "UI/UX Refining", desc: "Refining interfaces, designing subtle micro-interactions, and configuring responsive layout components.", icon: <Heart className="h-4 w-4 text-indigo-400" /> }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }
    }
  }

  return (
    <PageWrapper>
      <section id="about" className="py-8 px-4 md:px-8 max-w-5xl mx-auto relative overflow-hidden">
        <div className="absolute top-1/3 left-[-20%] w-[350px] h-[350px] bg-rose-500/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-[-10%] w-[300px] h-[300px] bg-indigo-500/[0.03] rounded-full blur-3xl pointer-events-none" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {/* Grid: Profile Card + Summary */}
          <div className="grid md:grid-cols-5 gap-12 items-center">
            
            {/* Profile Card */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent p-6 text-center shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                {/* Visual Avatar */}
                <div className="w-40 h-40 rounded-3xl mx-auto bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-500 p-[2px] shadow-2xl mb-6 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="w-full h-full rounded-3xl bg-[#09090b] overflow-hidden relative">
                    <img 
                      src={profileAvatar} 
                      alt="Dhanyesh Hirani avatar graphic representation" 
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-1 tracking-tight">Dhanyesh Hirani</h3>
                <p className="text-sm text-indigo-300 font-light mb-6 tracking-wide font-mono">Full-Stack Java Trainee</p>
                
                <div className="space-y-4 text-left border-t border-white/[0.06] pt-6 text-sm text-white/70">
                  <div className="flex items-center gap-3 group/item">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover/item:scale-110 transition-transform">
                      <Mail className="h-4 w-4 shrink-0" />
                    </div>
                    <a href="mailto:dhanyeshpatel@gmail.com" className="hover:text-white transition-colors truncate">
                      dhanyeshpatel@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 group-hover/item:scale-110 transition-transform">
                      <Phone className="h-4 w-4 shrink-0" />
                    </div>
                    <a href="tel:+918799346359" className="hover:text-white transition-colors">
                      +91 8799346359
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 group-hover/item:scale-110 transition-transform">
                      <MapPin className="h-4 w-4 shrink-0" />
                    </div>
                    <span>Gujarat, India</span>
                  </div>
                </div>

                <div className="flex justify-center gap-3 pt-6 mt-6 border-t border-white/[0.06]">
                  <a href="https://www.instagram.com/dhanyash_ptl/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.08] hover:text-white transition-colors text-white/50" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="https://wa.me/918799346359" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.08] hover:text-white transition-colors text-white/50" aria-label="WhatsApp">
                    <MessageCircle className="h-4 w-4" />
                  </a>
                  <a href="https://github.com/dhanyeshpatel" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.08] hover:text-white transition-colors text-white/50" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/dhanyesh-hirani-125a48349/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.08] hover:text-white transition-colors text-white/50" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Biography */}
            <div className="md:col-span-3 space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-indigo-400 uppercase">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  01 / Biography
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                  Dhanyesh Hirani
                </h2>
                <p className="text-white/60 leading-relaxed font-light text-base md:text-lg">
                  I am a passionate Information Technology engineer and a trained Full-Stack Java developer based in Gujarat, India. 
                  My core competency centers around object-oriented paradigms, J2EE architectures (such as Servlets and JSP templates), relational databases, and dynamic web user interfaces.
                </p>
                <p className="text-white/60 leading-relaxed font-light text-base md:text-lg">
                  With a solid academic foundation from my Computer Engineering diploma and specialized development training, I focus on constructing systems that are reliable, logical, and user-centric. 
                  I am highly motivated to contribute to growth-oriented teams where I can deploy my technical skillsets and continuous learning habits.
                </p>
              </motion.div>
            </div>

          </div>

          {/* Grid: Strengths + Languages */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* Strengths */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-bold tracking-tight text-white/90 border-b border-white/[0.06] pb-3">Core Strengths</h4>
              <div className="space-y-4">
                {strengths.map((str) => (
                  <div
                    key={str.title}
                    className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-[#08080a] hover:border-white/[0.1] transition-all flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] shrink-0">
                      {str.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm mb-1 tracking-tight text-white/90">{str.title}</h5>
                      <p className="text-xs text-white/50 leading-relaxed font-light">{str.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages and Proficiency */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-lg font-bold tracking-tight text-white/90 border-b border-white/[0.06] pb-3">Language Proficiencies</h4>
              <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#08080a]/50 space-y-6">
                {languages.map((lang) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-white/90">{lang.name}</span>
                      <span className="text-xs text-white/40">{lang.level}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/[0.04] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${lang.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Section: Hobbies & Side Interests */}
          <div className="grid md:grid-cols-12 gap-8 items-center border-t border-white/[0.06] pt-12">
            
            {/* Visual Panel */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-5 rounded-3xl border border-white/[0.08] overflow-hidden relative h-64 md:h-80 group shadow-2xl"
            >
              <div className="absolute inset-0 bg-violet-950/20 mix-blend-overlay z-10" />
              <img
                src={hobbiesVisual}
                alt="Aesthetic coding representation"
                className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-15 pointer-events-none" />
            </motion.div>

            {/* Hobbies list */}
            <motion.div variants={itemVariants} className="md:col-span-7 space-y-6">
              <h4 className="text-lg font-bold tracking-tight text-white/90">Interests & Hobbies</h4>
              <p className="text-sm text-white/50 font-light">Beyond code syntax and classroom environments, I keep myself actively engaged in development concepts and analytical routines:</p>
              
              <div className="grid gap-4">
                {hobbies.map((hobby) => (
                  <div key={hobby.name} className="flex gap-3 items-start">
                    <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5">
                      {hobby.icon}
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-white/95">{hobby.name}</h5>
                      <p className="text-xs text-white/50 leading-relaxed font-light mt-0.5">{hobby.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </motion.div>
      </section>
    </PageWrapper>
  )
}
