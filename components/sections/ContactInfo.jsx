"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin, Code, Trophy } from "lucide-react"

const contactDetails = [
  { icon: Mail, title: "Email", info: "divyansh2004mhj@gmail.com", color: "bg-blue-600" },
  { icon: Phone, title: "Phone", info: "+91 93367 00274", color: "bg-green-600" },
  { icon: MapPin, title: "Location", info: "Lucknow,India", color: "bg-purple-600" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/divspark", icon: Github, color: "hover:text-gray-400" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/divyansh-kesharwani-87b5a9195/", icon: Linkedin, color: "hover:text-blue-400" },
  { name: "CodeChef", href: "https://www.codechef.com/users/kiddodev", icon: Code, color: "hover:text-orange-400" },
  // { name: "Codeforces", href: "https://codeforces.com", icon: Trophy, color: "hover:text-red-400" },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="space-y-8"
    >
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-12 h-12 ${detail.color} rounded-lg flex items-center justify-center mr-4`}>
                <detail.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{detail.title}</h3>
                <p className="text-gray-300">{detail.info}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Let's Connect</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            I'm always interested in hearing about new opportunities and exciting projects. Whether you're a company
            looking to hire, or you're a fellow developer wanting to collaborate, I'd love to hear from you.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
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
          <p className="text-sm text-gray-400">💡 Open to collaborations and interesting projects</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
