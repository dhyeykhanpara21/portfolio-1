import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Lenis from "lenis"
import "lenis/dist/lenis.css"
import { AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Education } from "@/components/Education"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Home } from "@/components/Home"

function HomeView() {
  return <Home />
}

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F4F4F5] text-[#111111] selection:bg-black selection:text-white flex flex-col justify-between font-sans">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
