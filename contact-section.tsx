"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, Github, Linkedin, Instagram, Send, MapPin } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Neetesh1541",
      icon: Github,
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/neetesh-kumar-846616287",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/neetesh_sharma____",
      icon: Instagram,
      color: "hover:text-pink-400",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate? Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and innovation.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50"
              >
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a
                    href="mailto:neeteshk1104@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    neeteshk1104@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50"
              >
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Phone className="text-green-400" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <a href="tel:+918218828273" className="text-gray-300 hover:text-green-400 transition-colors">
                    +91 8218828273
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50"
              >
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-300">India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 text-gray-400 ${social.color} transition-all duration-300`}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-400 peer-focus:text-sm peer-focus:bg-gray-900 peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-blue-400 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-gray-900 peer-[:not(:placeholder-shown)]:px-2">
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-400 peer-focus:text-sm peer-focus:bg-gray-900 peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-blue-400 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-gray-900 peer-[:not(:placeholder-shown)]:px-2">
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-400 peer-focus:text-sm peer-focus:bg-gray-900 peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-blue-400 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-gray-900 peer-[:not(:placeholder-shown)]:px-2">
                  Your Message
                </label>
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="mr-2" size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
