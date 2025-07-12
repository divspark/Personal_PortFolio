"use client"

import { motion } from "framer-motion"

export default function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large rotating hexagon */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 border border-purple-500/20"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />

      {/* Medium triangle */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute bottom-32 left-16 w-24 h-24 border border-blue-500/20"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />

      {/* Small squares */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-1/2 left-10 w-16 h-16 border border-cyan-500/20 rotate-45"
      />

      <motion.div
        animate={{ rotate: -360, scale: [1, 0.8, 1] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-1/3 right-32 w-12 h-12 border border-green-500/20"
      />

      {/* Floating circles */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 w-8 h-8 border border-purple-400/30 rounded-full"
      />

      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/3 w-6 h-6 border border-blue-400/30 rounded-full"
      />
    </div>
  )
}
