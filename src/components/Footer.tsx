import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full flex flex-col font-sans text-[#111]">
      
      {/* Top White Section */}
      <div className="bg-[#F4F4F5] w-full py-12 md:py-24 px-4 md:px-8 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end gap-12 border-t border-[#111]">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
          LET'S BUILD<br/>SOMETHING.
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-16 pb-2">
          <p className="text-xs font-bold tracking-widest uppercase max-w-[200px]">
             HAVE A PROJECT IN MIND? LET'S WORK TOGETHER.
          </p>
          <a href="mailto:dhanyeshpatel@gmail.com" className="text-xs font-bold uppercase tracking-widest border-b-2 border-[#111] pb-0.5 hover:opacity-50 transition-opacity">
            Send me an email ↗
          </a>
        </div>
      </div>

      {/* Bottom Black Section */}
      <div className="bg-[#111] text-[#F4F4F5] w-full pt-20 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col justify-between h-full min-h-[50vh]">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
            <div className="flex flex-col gap-8 max-w-sm">
              <h3 className="text-xl md:text-2xl font-bold tracking-tighter uppercase leading-snug">
                DHANYESH IS A FULL-STACK ENGINEER BUILDING LOGICAL SYSTEMS AND REFINED INTERFACES.
              </h3>
              <div className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest">
                <span className="text-[#F4F4F5]/50">EMAIL</span>
                <a href="mailto:dhanyeshpatel@gmail.com" className="border-b border-[#F4F4F5] w-fit pb-0.5 hover:opacity-50 transition-opacity">
                  dhanyeshpatel@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-16 text-sm font-bold uppercase tracking-widest">
              <div className="flex flex-col gap-2">
                 <span className="text-[#F4F4F5]/50 text-xs mb-2">SOCIALS</span>
                 <a href="https://www.instagram.com/dhanyash_ptl/" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">Instagram</a>
                 <a href="https://github.com/dhanyeshpatel" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">Github</a>
                 <a href="https://www.linkedin.com/in/dhanyesh-hirani-125a48349/" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">LinkedIn</a>
              </div>
              <div className="flex flex-col gap-2">
                 <span className="text-[#F4F4F5]/50 text-xs mb-2">PAGES</span>
                 <a href="/" className="hover:opacity-50 transition-opacity">Home</a>
                 <a href="/projects" className="hover:opacity-50 transition-opacity">Work</a>
                 <a href="/about" className="hover:opacity-50 transition-opacity">About</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-[18vw] font-black tracking-tighter uppercase leading-none text-center">DHANYESH®</h1>
            
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#F4F4F5]/50 border-t border-[#F4F4F5]/20 py-4 mt-8">
              <span>© 2026 DHANYESH HIRANI. ALL RIGHTS RESERVED.</span>
              <span className="flex items-center gap-1">MADE WITH <Heart className="h-2 w-2 text-[#F4F4F5] fill-[#F4F4F5]" /> & AI</span>
            </div>
          </div>
          
        </div>
      </div>

    </footer>
  )
}

