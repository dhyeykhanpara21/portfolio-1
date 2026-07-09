import { motion } from "framer-motion"
import { Calendar, GraduationCap, ChevronRight } from "lucide-react"
import { PageWrapper } from "./PageWrapper"
import educationVisual from "../assets/education_visual.png"

export function Education() {
  const education = [
    {
      role: "Full Stack Java Developer Trainee",
      institution: "TOPS TECHNOLOGY",
      location: "Ahmedabad",
      period: "Present",
      description: "Intensive training in industry-level Java development, J2EE server architectures, database structures, and web technologies.",
      details: [
        "Core Java SE: Object-oriented foundations, JVM memory models, collections frameworks, multi-threaded task loops, exception mappings.",
        "Advanced J2EE: Servlet request/response controllers, HTTP session management, server-side template loops in JSP, database adapters.",
        "Relational Databases: SQL query normalization, table relationships mapping, database connection pools, transactions flow."
      ]
    },
    {
      role: "Diploma in Computer Engineering",
      institution: "Government Polytechnic",
      location: "Gandhinagar",
      period: "Completed",
      grade: "CGPA: 7.00",
      description: "A comprehensive academic program covering the fundamentals of computer science, relational databases, and algorithmic structures.",
      details: [
        "Core Programming: Procedural logic in C, Object-Oriented implementations using C++ and Java templates, memory allocation patterns.",
        "Relational Databases: Relational schema designs, standard normalization forms (1NF, 2NF, 3NF), basic transaction control protocols.",
        "Software Engineering: SDLC architectures, software testing methodologies, operating systems components (scheduler, registers, virtual memory)."
      ]
    },
    {
      role: "Secondary School Certificate (10th)",
      institution: "State Board School",
      location: "Junagadh",
      period: "Completed",
      grade: "Percentage: 83.43%",
      description: "Primary high school syllabus focusing on mathematical arithmetic, physics, and introductory computer basics.",
      details: [
        "Mathematics & Science: Solid foundation in algebra, geometry, computational formulas, physics, and electrical parameters.",
        "Computer Fundamentals: Introduction to hardware components, text formatting processors, spreadsheets, and file directories structures."
      ]
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

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }
    }
  }

  return (
    <PageWrapper>
      <section id="education" className="py-8 relative overflow-hidden">
        <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-rose-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-16">
          
          {/* Title */}
          <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              04 / Academic Paths
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Education & Milestones
            </h2>
            <p className="text-white/40 font-light text-sm">
              My training timeline shows a solid grounding in Computer Science, full stack engineering systems, and standard academic criteria.
            </p>
          </div>

          {/* Layout: Grid containing Visual on the Left + Timeline on the Right */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 rounded-3xl border border-white/[0.08] bg-[#08080a]/50 p-6 flex flex-col justify-between overflow-hidden relative min-h-[300px] lg:min-h-[480px] group shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-rose-500/[0.03] pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-bold tracking-tight text-white/90">Academic Growth</h3>
                <p className="text-xs text-white/40 leading-relaxed font-light">
                  Continuous education focused on software construction, application design, and modern OOP implementations.
                </p>
              </div>
              
              {/* Visual Image */}
              <div className="h-64 w-full rounded-2xl overflow-hidden mt-6 border border-white/[0.04] relative">
                <img 
                  src={educationVisual} 
                  alt="Futuristic academic pathway graphic representation" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/90 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Timeline Column */}
            <div className="lg:col-span-8">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="relative border-l border-white/[0.06] pl-6 sm:pl-8 space-y-12"
              >
                {education.map((edu) => (
                  <motion.div
                    key={edu.institution}
                    variants={timelineItemVariants}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 h-8 w-8 rounded-full bg-[#030303] border-2 border-indigo-500 flex items-center justify-center shadow-lg">
                      <GraduationCap className="h-4 w-4 text-indigo-400" />
                    </div>

                    <div className="p-6 sm:p-8 rounded-3xl border border-white/[0.06] bg-[#08080a]/30 hover:bg-[#08080a]/75 transition-all space-y-5 group">
                      
                      {/* Institution Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.04] pb-3">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">{edu.role}</h3>
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
                      
                      {/* Course syllabus items */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Core Topics Covered</h4>
                        <ul className="space-y-2 text-xs font-light text-white/60">
                          {edu.details.map((detail, idx) => (
                            <li key={idx} className="flex gap-2 items-start">
                              <ChevronRight className="h-3.5 w-3.5 text-indigo-400 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>

        </div>
      </section>
    </PageWrapper>
  )
}
