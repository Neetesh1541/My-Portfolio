"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import TypingAnimation from "./typing-animation"
import { useTheme } from "./theme-provider"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { theme } = useTheme()

  return (
    <section
      id="about"
      className={`py-20 ${
        theme === "pastel-light"
          ? "bg-gradient-to-b from-purple-50 to-pink-50"
          : "bg-gradient-to-b from-gray-900 to-black"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-6xl font-bold mb-8 ${
              theme === "pastel-light" ? "text-gray-800" : "text-white"
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-24 h-1 mx-auto mb-8 ${
              theme === "neon-dark"
                ? "bg-gradient-to-r from-blue-500 to-purple-600"
                : theme === "pastel-light"
                  ? "bg-gradient-to-r from-pink-400 to-purple-500"
                  : "bg-gradient-to-r from-green-500 to-lime-600"
            }`}
          ></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div
              className={`text-xl md:text-2xl font-semibold ${
                theme === "neon-dark" ? "text-blue-300" : theme === "pastel-light" ? "text-pink-600" : "text-green-400"
              }`}
            >
              {isInView && (
                <TypingAnimation
                  text="Hi, I'm Neetesh Sharma — a developer who loves turning ideas into real-world tools using code. From frontend flair to backend logic, I create, build, and refine."
                  speed={50}
                />
              )}
            </div>

            <div className={`space-y-4 ${theme === "pastel-light" ? "text-gray-600" : "text-gray-300"}`}>
              <p className="text-lg leading-relaxed">
                Currently pursuing Computer Science Engineering at Dr. A.P.J. Abdul Kalam Technical University
                (2023–2027), I'm passionate about creating innovative solutions that make a real impact.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in tech is driven by curiosity and a desire to solve complex problems. I believe in writing
                clean, efficient code and staying updated with the latest technologies.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or
                brainstorming the next big idea.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div
              className={`backdrop-blur-sm border rounded-2xl p-8 ${
                theme === "neon-dark"
                  ? "bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20"
                  : theme === "pastel-light"
                    ? "bg-gradient-to-br from-pink-100/50 to-purple-100/50 border-pink-300/30"
                    : "bg-gradient-to-br from-green-900/20 to-lime-900/20 border-green-500/20"
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${theme === "pastel-light" ? "text-gray-800" : "text-white"}`}>
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      theme === "neon-dark" ? "bg-blue-400" : theme === "pastel-light" ? "bg-pink-400" : "bg-green-400"
                    }`}
                  ></div>
                  <span className={theme === "pastel-light" ? "text-gray-700" : "text-gray-300"}>
                    🎓 3rd Year CS Engineering Student
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      theme === "neon-dark"
                        ? "bg-purple-400"
                        : theme === "pastel-light"
                          ? "bg-purple-400"
                          : "bg-lime-400"
                    }`}
                  ></div>
                  <span className={theme === "pastel-light" ? "text-gray-700" : "text-gray-300"}>
                    🏫 Dr. A.P.J. Abdul Kalam Technical University
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      theme === "neon-dark" ? "bg-green-400" : theme === "pastel-light" ? "bg-blue-400" : "bg-green-400"
                    }`}
                  ></div>
                  <span className={theme === "pastel-light" ? "text-gray-700" : "text-gray-300"}>
                    💻 Full-Stack Developer
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      theme === "neon-dark"
                        ? "bg-yellow-400"
                        : theme === "pastel-light"
                          ? "bg-yellow-400"
                          : "bg-yellow-400"
                    }`}
                  ></div>
                  <span className={theme === "pastel-light" ? "text-gray-700" : "text-gray-300"}>
                    🚀 AI & Web Development Enthusiast
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      theme === "neon-dark" ? "bg-pink-400" : theme === "pastel-light" ? "bg-pink-400" : "bg-pink-400"
                    }`}
                  ></div>
                  <span className={theme === "pastel-light" ? "text-gray-700" : "text-gray-300"}>📍 India</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
