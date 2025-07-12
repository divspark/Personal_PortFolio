"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen p-20 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-4">
                👋 Hello, I'm Divyansh
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Frontend
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                I craft beautiful, responsive, and user-friendly web experiences using modern technologies. Passionate
                about clean code and innovative solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">2+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">4⭐</div>
                <div className="text-gray-400 text-sm">CodeChef Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 w-80 h-80 border-2 border-blue-500/30 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-4 w-72 h-72 border-2 border-purple-500/20 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-8 w-64 h-64 border-2 border-green-500/20 rounded-full"
              ></motion.div>

              {/* Profile Image Placeholder */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 p-1"
              >
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Divyansh - Frontend Developer"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold">JS</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold">⚛️</span>
              </motion.div>
              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-1/2 -left-8 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold">TS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-gray-400 cursor-pointer"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
