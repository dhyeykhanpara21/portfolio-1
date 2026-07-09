import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe, Cpu, Database, Instagram, Github, Linkedin, MessageCircle } from "lucide-react"
import { PageWrapper } from "./PageWrapper"
import mapVisual from "../assets/map_visual.png"

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [formSubmitted, setFormSubmitted] = useState(false)

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

  const collaborations = [
    {
      title: "Full-Stack Development",
      desc: "Creating modular servlet backends, setting up database parameters, and aligning responsive HTML layout flows.",
      icon: <Cpu className="h-5 w-5 text-indigo-400" />
    },
    {
      title: "Database Architecture",
      desc: "Designing tables schemas, normalization models, indexing, and configuring JDBC query pools.",
      icon: <Database className="h-5 w-5 text-rose-400" />
    },
    {
      title: "UI/UX Enhancements",
      desc: "Upgrading layout typography, writing clean CSS rules, and integrating fluid Framer Motion route animations.",
      icon: <Globe className="h-5 w-5 text-violet-400" />
    }
  ]

  return (
    <PageWrapper>
      <section id="contact" className="py-8 relative overflow-hidden">
        <div className="absolute top-[10%] left-[-15%] w-[400px] h-[400px] bg-rose-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-16">
          
          {/* Title */}
          <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
              <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              05 / Collaboration
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Get in Touch
            </h2>
            <p className="text-white/40 font-light text-sm">
              Feel free to reach out for project opportunities, job offers, or system design collaborations. I'll get back to you shortly.
            </p>
          </div>

          {/* Grid Layout: Visual Map Panel + Details + Form */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Map Visual + Contact cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Abstract Map Locator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl border border-white/[0.08] overflow-hidden relative h-52 group shadow-xl"
              >
                <div className="absolute inset-0 bg-indigo-950/20 mix-blend-overlay z-10" />
                <img
                  src={mapVisual}
                  alt="Gujarat coordinate pinpoint map visual graphic representation"
                  className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-15 pointer-events-none" />
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-rose-500 animate-ping" />
                  <span className="text-xs font-semibold text-white/80 font-mono">Gujarat, India (IST)</span>
                </div>
              </motion.div>

              {/* Direct Details */}
              <div className="space-y-4">
                <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#08080a]/50 flex items-start gap-4 hover:border-white/[0.12] transition-colors group shadow-md">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0 group-hover:scale-110 transition-transform">
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

                <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#08080a]/50 flex items-start gap-4 hover:border-white/[0.12] transition-colors group shadow-md">
                  <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 shrink-0 group-hover:scale-110 transition-transform">
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

                <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#08080a]/50 flex items-start gap-4 hover:border-white/[0.12] transition-colors group shadow-md">
                  <div className="p-3 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0 group-hover:scale-110 transition-transform">
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

                 <div className="flex justify-center gap-3 pt-6 mt-6 border-t border-white/[0.06]">
                  <a href="https://www.instagram.com/dhanyash_ptl/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.08] hover:text-white transition-colors text-white/50 flex items-center justify-center flex-1 gap-2" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                    <span className="text-xs font-light font-mono">Instagram</span>
                  </a>
                  <a href="https://wa.me/918799346359" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.08] hover:text-white transition-colors text-white/50 flex items-center justify-center flex-1 gap-2" aria-label="WhatsApp">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-xs font-light font-mono">WhatsApp</span>
                  </a>
                </div>
                <div className="flex justify-center gap-3">
                  <a href="https://github.com/dhanyeshpatel" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.08] hover:text-white transition-colors text-white/50 flex items-center justify-center flex-1 gap-2" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                    <span className="text-xs font-light font-mono">GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/dhanyesh-hirani-125a48349/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.08] hover:text-white transition-colors text-white/50 flex items-center justify-center flex-1 gap-2" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                    <span className="text-xs font-light font-mono">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 p-8 rounded-3xl border border-white/[0.06] bg-[#08080a]/30 backdrop-blur-sm relative min-h-[380px] shadow-xl"
            >
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-4"
                  >
                    <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 animate-bounce">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">Message Transmitted!</h4>
                      <p className="text-xs font-light text-white/50 mt-1 max-w-xs mx-auto">
                        Thank you for reaching out. Your message has been sent successfully.
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

          {/* Section: Collaboration Scopes Grid */}
          <div className="space-y-6 border-t border-white/[0.06] pt-12">
            <h4 className="text-lg font-bold tracking-tight text-white/90">Scope of Collaborations</h4>
            <div className="grid sm:grid-cols-3 gap-6">
              {collaborations.map((collab) => (
                <div
                  key={collab.title}
                  className="p-6 rounded-3xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] w-fit">
                      {collab.icon}
                    </div>
                    <h5 className="font-semibold text-sm tracking-tight text-white/95">{collab.title}</h5>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed font-light mt-4">{collab.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  )
}
