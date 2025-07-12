"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Download } from "lucide-react"
import Link from "next/link"
import AnimatedTitle from "@/components/ui/AnimatedTitle"
import StatsGrid from "@/components/ui/StatsGrid"

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left space-y-8"
    >
      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-6">
          👋 Hello, I'm Divyansh
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-4"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Fullstack
          <br />
          <AnimatedTitle />
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-lg text-gray-300 max-w-2xl leading-relaxed"
      >
        I build end-to-end web applications with modern technologies. Passionate about creating scalable solutions from
        frontend to backend.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
      >
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link href="/contact">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
        >
          <Link href="/resume">
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Link>
        </Button>
      </motion.div>

      {/* Stats */}
      <StatsGrid />
    </motion.div>
  )
}
