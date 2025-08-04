"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle, ArrowRight, Github, Linkedin, Code, Trophy, Send } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/divspark", icon: Github, color: "hover:text-gray-300" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/divyansh-kesharwani-87b5a9195", icon: Linkedin, color: "hover:text-blue-400" },
  { name: "CodeChef", href: "https://codechef.com", icon: Code, color: "hover:text-orange-400" },
  { name: "Codeforces", href: "https://codeforces.com", icon: Trophy, color: "hover:text-red-400" },
]

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 backdrop-blur-sm mb-6"
          >
            <Send className="w-4 h-4 mr-2" />
            Get In Touch
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Let's Work </span>
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'm always open to discussing new opportunities and exciting challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-hover bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  I'm currently available for freelance work and full-time opportunities. Whether you have a project in
                  mind or just want to chat about technology, I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">divyansh2004mhj@gmail.com</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                    <MessageCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Available for chat</span>
                  </div>
                </div>

                <Button asChild className="w-full btn-primary text-white font-semibold py-3">
                  <Link href="/contact">
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="card-hover bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Follow my journey and connect with me on various platforms. I regularly share insights about web
                  development and competitive programming.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center p-4 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl border border-gray-600/30 transition-all duration-300 ${social.color} hover:border-purple-500/50`}
                    >
                      <social.icon className="w-6 h-6 mr-3" />
                      <span className="text-white font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-700/50">
                  <p className="text-sm text-gray-400 flex items-center">
                    <span className="mr-2">💡</span>
                    Open to collaborations and interesting projects
                  </p>
                </div>
              </CardContent>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
