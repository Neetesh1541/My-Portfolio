"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { useTheme } from "./theme-provider"

interface EnhancedBackgroundProps {
  children: React.ReactNode
  className?: string
}

export default function EnhancedBackground({ children, className = "" }: EnhancedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initParticles = () => {
      particles = []
      const particleCount = 50
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
    }

    const getThemeColors = () => {
      switch (theme) {
        case "neon-dark":
          return {
            primary: "59, 130, 246",
            secondary: "139, 92, 246",
            accent: "6, 182, 212",
            background: "0, 0, 0",
          }
        case "pastel-light":
          return {
            primary: "244, 114, 182",
            secondary: "167, 139, 250",
            accent: "96, 165, 250",
            background: "254, 247, 255",
          }
        case "cyber-terminal":
          return {
            primary: "34, 197, 94",
            secondary: "22, 163, 74",
            accent: "132, 204, 22",
            background: "0, 0, 0",
          }
        default:
          return {
            primary: "59, 130, 246",
            secondary: "139, 92, 246",
            accent: "6, 182, 212",
            background: "0, 0, 0",
          }
      }
    }

    const drawBackground = () => {
      const colors = getThemeColors()

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)

      if (theme === "pastel-light") {
        gradient.addColorStop(0, `rgba(${colors.background}, 1)`)
        gradient.addColorStop(0.5, `rgba(${colors.primary}, 0.1)`)
        gradient.addColorStop(1, `rgba(${colors.secondary}, 0.1)`)
      } else {
        gradient.addColorStop(0, `rgba(${colors.background}, 1)`)
        gradient.addColorStop(0.5, `rgba(${colors.primary}, 0.05)`)
        gradient.addColorStop(1, `rgba(${colors.secondary}, 0.05)`)
      }

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const drawWaves = () => {
      const colors = getThemeColors()

      // First wave
      const gradient1 = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient1.addColorStop(0, `rgba(${colors.primary}, 0.1)`)
      gradient1.addColorStop(1, `rgba(${colors.primary}, 0.05)`)

      ctx.fillStyle = gradient1
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let x = 0; x <= canvas.width; x += 10) {
        const y = Math.sin(x * 0.01 + time * 0.02) * 50 + Math.sin(x * 0.02 + time * 0.03) * 30 + canvas.height * 0.7
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.closePath()
      ctx.fill()

      // Second wave
      const gradient2 = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient2.addColorStop(0, `rgba(${colors.secondary}, 0.08)`)
      gradient2.addColorStop(1, `rgba(${colors.accent}, 0.03)`)

      ctx.fillStyle = gradient2
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      for (let x = 0; x <= canvas.width; x += 10) {
        const y =
          Math.sin(x * 0.015 + time * 0.025) * 40 + Math.sin(x * 0.025 + time * 0.035) * 25 + canvas.height * 0.8
        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.closePath()
      ctx.fill()
    }

    const drawParticles = () => {
      const colors = getThemeColors()

      particles.forEach((particle) => {
        // Update particle position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${colors.accent}, ${particle.opacity})`
        ctx.fill()

        // Add glow effect
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${colors.accent}, ${particle.opacity * 0.1})`
        ctx.fill()
      })
    }

    const drawGrid = () => {
      if (theme !== "cyber-terminal") return

      const colors = getThemeColors()
      const gridSize = 50

      ctx.strokeStyle = `rgba(${colors.primary}, 0.1)`
      ctx.lineWidth = 1

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawBackground()
      drawGrid()
      drawWaves()
      drawParticles()

      time += 1
      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener("resize", () => {
      resizeCanvas()
      initParticles()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
