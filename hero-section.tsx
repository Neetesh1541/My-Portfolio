"use client"

import { motion } from "framer-motion"
import EnhancedBackground from "./enhanced-background"
import TypingAnimation from "./typing-animation"
import { useTheme } from "./theme-provider"

export default function HeroSection() {
  const { theme } = useTheme()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <EnhancedBackground className="w-full h-screen">
        <div className="flex flex-col items-center justify-center h-full px-4">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-8"
          >
            <div
              className={`w-48 h-48 rounded-full overflow-hidden border-4 shadow-2xl ${
                theme === "neon-dark"
                  ? "border-blue-400/50 shadow-blue-500/25"
                  : theme === "pastel-light"
                    ? "border-pink-400/50 shadow-pink-500/25"
                    : "border-green-400/50 shadow-green-500/25"
              }`}
            >
              <motion.img
                src="https://media.licdn.com/dms/image/v2/D5603AQFhbL0h6trHvg/profile-displayphoto-shrink_400_400/B56ZXiboP9GsAg-/0/1743260649838?e=1754524800&v=beta&t=aaBLQ6Vi146N8-JM-rh-mEMrmbFcT6xeL-GqKhIuYDE"
                alt="Neetesh Sharma"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.div
              className={`absolute inset-0 rounded-full border-4 ${
                theme === "neon-dark"
                  ? "border-purple-500/30"
                  : theme === "pastel-light"
                    ? "border-blue-400/30"
                    : "border-lime-500/30"
              }`}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-4xl md:text-7xl lg:text-8xl font-bold text-center mb-6 ${
              theme === "pastel-light" ? "text-gray-800" : "text-white"
            }`}
          >
            Neetesh Sharma
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-xl md:text-2xl text-center mb-8 ${
              theme === "neon-dark" ? "text-blue-300" : theme === "pastel-light" ? "text-pink-600" : "text-green-400"
            }`}
          >
            <TypingAnimation text="Full-Stack Developer & CS Engineering Student" speed={100} />
          </motion.div>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`text-lg md:text-xl text-center max-w-3xl leading-relaxed ${
              theme === "pastel-light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Passionate 3rd-year Computer Science student at Dr. A.P.J. Abdul Kalam Technical University, crafting
            innovative solutions and bringing ideas to life through code.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className={`px-8 py-4 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                theme === "neon-dark"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : theme === "pastel-light"
                    ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white"
                    : "bg-gradient-to-r from-green-500 to-lime-600 text-black"
              }`}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  theme === "neon-dark"
                    ? "0 20px 40px rgba(59, 130, 246, 0.3)"
                    : theme === "pastel-light"
                      ? "0 20px 40px rgba(244, 114, 182, 0.3)"
                      : "0 20px 40px rgba(34, 197, 94, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className={`px-8 py-4 border-2 font-semibold rounded-full transition-all duration-300 ${
                theme === "neon-dark"
                  ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  : theme === "pastel-light"
                    ? "border-pink-400 text-pink-600 hover:bg-pink-400 hover:text-white"
                    : "border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </EnhancedBackground>
    </section>
  )
}
