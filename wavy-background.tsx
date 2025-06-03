"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface WavyBackgroundProps {
  children: React.ReactNode
  className?: string
}

export default function WavyBackground({ children, className = "" }: WavyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)")
      gradient.addColorStop(0.5, "rgba(147, 51, 234, 0.1)")
      gradient.addColorStop(1, "rgba(236, 72, 153, 0.1)")

      ctx.fillStyle = gradient
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
      gradient2.addColorStop(0, "rgba(34, 197, 94, 0.1)")
      gradient2.addColorStop(1, "rgba(59, 130, 246, 0.1)")

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

      time += 1
      animationId = requestAnimationFrame(drawWave)
    }

    resizeCanvas()
    drawWave()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)" }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
