import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F4F5]">
      <nav className="w-full px-4 md:px-8 py-6 flex items-center justify-between max-w-[1400px] mx-auto">
        {/* Left - Logo */}
        <Link to="/" className="flex items-center gap-2.5 text-xl md:text-2xl font-black tracking-tighter uppercase text-[#111] hover:opacity-80 transition-opacity">
          <img src={logo} alt="DH Logo" className="h-8 md:h-10 w-auto object-contain" />
          <span>DHANYESH®</span>
        </Link>

        {/* Right - Desktop Links */}
        <div className="hidden md:flex items-center gap-12 text-[#111] font-medium tracking-tight">
          <div className="flex items-center gap-8 text-sm md:text-base">
            <Link to="/projects" className="hover:opacity-50 transition-opacity">Work</Link>
            <Link to="/education" className="hover:opacity-50 transition-opacity">Education</Link>
            <Link to="/about" className="hover:opacity-50 transition-opacity">About</Link>
          </div>
          <Link
            to="/contact"
            className="text-sm md:text-base font-bold border-b-2 border-[#111] pb-0.5 hover:opacity-50 transition-opacity"
          >
            Let's talk
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111] hover:opacity-50 transition-opacity cursor-pointer -mr-2"
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="md:hidden bg-[#F4F4F5] border-t border-[#111]/10 overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col gap-6 text-2xl font-bold tracking-tighter uppercase">
              <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>Work</Link>
              <Link to="/education" onClick={() => setMobileMenuOpen(false)}>Education</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 border-b-2 border-[#111] pb-1 w-fit">
                Let's talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
