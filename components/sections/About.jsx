"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { User, Code, Heart, Target } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-yellow-500/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-sm font-medium text-emerald-300 backdrop-blur-sm"
            >
              <User className="w-4 h-4 mr-2" />
              About Me
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Who is </span>
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                  Divyansh Kesarwani
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate fullstack developer with a love for creating innovative digital solutions. With over a
                year of internship experience, I specialize in building scalable web applications using modern
                technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech started with competitive programming, where I achieved a 2-star rating on CodeChef.
                This problem-solving mindset now drives my approach to software development.
              </p>
            </motion.div>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                { icon: Code, title: "Clean Code", desc: "Writing maintainable and scalable code" },
                { icon: Heart, title: "Passion", desc: "Love for learning new technologies" },
                { icon: Target, title: "Goal-Oriented", desc: "Focused on delivering results" },
                { icon: User, title: "Team Player", desc: "Collaborative and communicative" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Achievement Cards */}
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  number: "5+",
                  label: "Projects Completed",
                  desc: "Full-stack applications built from scratch",
                  color: "from-emerald-500 to-cyan-500",
                },
                {
                  number: "1+",
                  label: "Year Experience",
                  desc: "Professional internship experience",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  number: "2⭐",
                  label: "CodeChef Rating",
                  desc: "Competitive programming achievements",
                  color: "from-yellow-500 to-orange-500",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-hover bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}
                    >
                      <span className="text-2xl font-bold text-white">{stat.number}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{stat.label}</h4>
                      <p className="text-gray-400 text-sm">{stat.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="card-hover bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h4 className="text-white font-bold text-lg mb-4">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "TypeScript", "MongoDB", "Next.js", "Python"].map((tech, index) => (
                  <Badge
                    key={index}
                    className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 border-emerald-500/30"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
