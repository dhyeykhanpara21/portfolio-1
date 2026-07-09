import { Heart, Instagram, Github, Linkedin, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: <Instagram className="h-4 w-4" />, url: "https://www.instagram.com/dhanyash_ptl/" },
    { name: "Gmail", icon: <Mail className="h-4 w-4" />, url: "mailto:dhanyeshpatel@gmail.com" },
    { name: "WhatsApp", icon: <MessageCircle className="h-4 w-4" />, url: "https://wa.me/918799346359" },
    { name: "GitHub", icon: <Github className="h-4 w-4" />, url: "https://github.com/dhanyeshpatel" },
    { name: "LinkedIn", icon: <Linkedin className="h-4 w-4" />, url: "https://www.linkedin.com/in/dhanyesh-hirani-125a48349/" }
  ]

  return (
    <footer className="py-12 border-t border-white/[0.03] bg-[#030303]">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-6">
        
        {/* Social Icons Grid */}
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.06] hover:border-white/[0.15] text-white/50 hover:text-white transition-all shadow-md cursor-pointer"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-white/30 font-light border-t border-white/[0.04] pt-6">
          <p>© 2026 Dhanyesh Hirani. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            Made with <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> & AI Orchestration
          </p>
        </div>
      </div>
    </footer>
  )
}
