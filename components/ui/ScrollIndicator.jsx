"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function ScrollIndicator() {
  return (
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
  )
}
