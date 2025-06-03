"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Neetesh1541",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/neetesh-kumar-846616287",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/neetesh_sharma____",
      icon: Instagram,
    },
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            >
              Neetesh Sharma
            </motion.h3>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer & CS Engineering Student passionate about creating innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Resume", "Contact"].map((link) => (
                <motion.button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-sm flex items-center"
          >
            Made with <Heart className="mx-1 text-red-500" size={16} /> by Neetesh Sharma
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm mt-2 md:mt-0"
          >
            © 2024 All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
