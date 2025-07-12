"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import Link from "next/link"

export default function CircularResumeButton() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Circular Resume Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Rotating Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 w-48 h-48 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-1"
            >
              <div className="w-full h-full rounded-full bg-gray-900" />
            </motion.div>

            {/* Main Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-48 h-48 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center cursor-pointer shadow-2xl"
            >
              <Link href="/resume" className="flex flex-col items-center justify-center text-center">
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Download className="w-8 h-8 text-white mb-2" />
                </motion.div>
                <span className="text-white font-bold text-lg">View My</span>
                <span className="text-white font-bold text-lg">Resume</span>
              </Link>
            </motion.div>

            {/* Orbiting Dots */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 w-48 h-48"
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full transform -translate-x-1/2" />
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2" />
              <div className="absolute left-0 top-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-y-1/2" />
              <div className="absolute right-0 top-1/2 w-3 h-3 bg-purple-400 rounded-full transform -translate-y-1/2" />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white">Ready to Work Together?</h3>
            <p className="text-lg text-gray-300 max-w-2xl">
              Download my resume to learn more about my experience, skills, and achievements in fullstack development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
