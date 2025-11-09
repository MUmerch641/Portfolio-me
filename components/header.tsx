"use client"

import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Header height offset
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold tracking-wider">UMER</div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
          <button onClick={() => scrollToSection('skills')} className="hover:text-gray-400 transition">
            SKILLS
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-gray-400 transition">
            PROJECTS
          </button>
          <button onClick={() => scrollToSection('why-hire')} className="hover:text-gray-400 transition">
            WHY HIRE
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-gray-400 transition">
            CONTACT
          </button>
        </nav>

        <div className="hidden lg:flex items-center gap-4 text-xs">
          <span className="text-gray-500">Full Stack Developer</span>
        </div>

        <button 
          className="md:hidden text-2xl w-8 h-8 flex items-center justify-center" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-black border-t border-gray-900 px-6 py-4 space-y-4 text-sm">
          <button onClick={() => scrollToSection('skills')} className="block w-full text-left hover:text-gray-400">
            SKILLS
          </button>
          <button onClick={() => scrollToSection('projects')} className="block w-full text-left hover:text-gray-400">
            PROJECTS
          </button>
          <button onClick={() => scrollToSection('why-hire')} className="block w-full text-left hover:text-gray-400">
            WHY HIRE
          </button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-gray-400">
            CONTACT
          </button>
        </nav>
      )}
    </header>
  )
}
