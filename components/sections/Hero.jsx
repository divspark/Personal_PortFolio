"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Download, ArrowDown, Code, Sparkles } from "lucide-react"
import Link from "next/link"
import ParticleBackground from "@/components/ui/ParticleBackground"
import GeometricShapes from "@/components/ui/GeometricShapes"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Background Effects */}
      <ParticleBackground />
      <GeometricShapes />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Hello, I'm Divyansh
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Fullstack</span>
                <br />
                <span className="gradient-text">Developer</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-300 max-w-2xl leading-relaxed"
            >
              I craft exceptional digital experiences with cutting-edge technologies. Specializing in React, Node.js,
              and modern web development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <Button asChild size="lg" className="btn-primary text-white font-semibold px-8 py-3">
                <Link href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Let's Talk
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 bg-transparent backdrop-blur-sm px-8 py-3"
              >
                <Link href="/resume">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-700/50"
            >
              {[
                { number: "5+", label: "Projects" },
                { number: "1+", label: "Year Experience" },
                { number: "2⭐", label: "CodeChef Rating" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Avatar Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 p-1 pulse-glow"
              >
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Divyansh - Fullstack Developer"
                    className="w-72 h-72 rounded-full object-cover"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-full" />
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm"
              >
                <Code className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm"
              >
                <span className="text-white font-bold text-lg">⚛️</span>
              </motion.div>

              <motion.div
                animate={{ x: [-5, 5, -5], rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
              >
                <span className="text-white font-bold text-sm">JS</span>
              </motion.div>

              {/* Orbiting Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 w-80 h-80"
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full transform -translate-x-1/2" />
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2" />
                <div className="absolute left-0 top-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-y-1/2" />
                <div className="absolute right-0 top-1/2 w-3 h-3 bg-green-400 rounded-full transform -translate-y-1/2" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-gray-400 cursor-pointer"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
