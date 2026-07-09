import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const navItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "skills", label: "Skills", path: "/skills" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "education", label: "Education", path: "/education" },
  { id: "contact", label: "Contact", path: "/contact" }
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  // Resolve active section based on location pathname
  const currentPath = location.pathname
  const activeSection = currentPath === "/" ? "home" : currentPath.substring(1)

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav className="mx-auto max-w-5xl rounded-full border border-white/[0.08] bg-[#030303]/40 backdrop-blur-md px-6 py-3 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-rose-500 flex items-center justify-center font-bold text-sm tracking-tight text-white shadow-lg">
            DH
          </div>
          <span className="font-semibold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 hidden sm:inline-block">
            Dhanyesh Hirani
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
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
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="px-4 py-1.5 text-xs font-semibold rounded-full border border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.08] transition-all cursor-pointer"
          >
            Get In Touch
          </Link>
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
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left text-lg py-2 border-b border-white/[0.03] transition-colors cursor-pointer ${
                  activeSection === item.id ? "text-indigo-400 font-semibold" : "text-white/60"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-3 text-center rounded-xl bg-gradient-to-r from-indigo-500 to-rose-500 font-semibold text-sm shadow-md cursor-pointer text-white"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
