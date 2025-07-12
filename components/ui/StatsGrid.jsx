"use client"

import { motion } from "framer-motion"

const stats = [
  { number: "5+", label: "Projects" },
  { number: "1+", label: "Year Internship" },
  { number: "4⭐", label: "CodeChef Rating" },
]

export default function StatsGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
          className="text-center lg:text-left"
        >
          <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}
