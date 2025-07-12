"use client"

import { motion } from "framer-motion"
import FloatingElements from "@/components/ui/FloatingElements"

export default function HeroImage() {
  return (
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
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-4 w-72 h-72 border-2 border-purple-500/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-8 w-64 h-64 border-2 border-green-500/20 rounded-full"
        />

        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 p-1"
        >
          <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Divyansh - Fullstack Developer"
              className="w-72 h-72 rounded-full object-cover"
            />
          </div>
        </motion.div>

        <FloatingElements />
      </div>
    </motion.div>
  )
}
