"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle, ArrowRight, Github, Linkedin, Code, Trophy } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/divspark", icon: Github, color: "hover:text-gray-400" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/divyansh-kesharwani-87b5a9195", icon: Linkedin, color: "hover:text-blue-400" },
  { name: "CodeChef", href: "https://codechef.com", icon: Code, color: "hover:text-orange-400" },
  { name: "Codeforces", href: "https://codeforces.com", icon: Trophy, color: "hover:text-red-400" },
]

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
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
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-blue-400" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300">
                  I'm currently available for freelance work and full-time opportunities. Whether you have a project in
                  mind or just want to chat about technology, I'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">divyansh2004mhj@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Available for chat</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-white">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300">
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
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center p-4 bg-gray-700 rounded-lg transition-colors ${social.color}`}
                    >
                      <social.icon className="w-6 h-6 mr-3" />
                      <span className="text-white font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400">💡 Open to collaborations and interesting projects</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
