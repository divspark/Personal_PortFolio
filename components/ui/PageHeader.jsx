"use client"

import { motion } from "framer-motion"

export default function PageHeader({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
      {description && <p className="text-xl text-gray-300 max-w-2xl mx-auto">{description}</p>}
    </motion.div>
  )
}
