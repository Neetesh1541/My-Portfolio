"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ResumeSection from "@/components/resume-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"
import FloatingCursor from "@/components/floating-cursor"
import SnakeGame from "@/components/snake-game"

export default function Portfolio() {
  const [showSnakeGame, setShowSnakeGame] = useState(false)
  const [konamiSequence, setKonamiSequence] = useState<string[]>([])

  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ]

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...konamiSequence, event.code].slice(-10)
      setKonamiSequence(newSequence)

      if (newSequence.join(",") === konamiCode.join(",")) {
        setShowSnakeGame(true)
        setKonamiSequence([])
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [konamiSequence])

  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <FloatingCursor />
        <Navbar />
        <ThemeToggle />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ResumeSection />
          <ContactSection />
        </main>

        <Footer />

        <AnimatePresence>{showSnakeGame && <SnakeGame onClose={() => setShowSnakeGame(false)} />}</AnimatePresence>
      </div>
    </ThemeProvider>
  )
}
