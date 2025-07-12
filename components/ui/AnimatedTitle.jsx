"use client"

import { motion } from "framer-motion"

export default function AnimatedTitle() {
  const text = "Developer"

  return (
    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.7 + index * 0.1,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.2,
            color: "#60A5FA",
            transition: { duration: 0.2 },
          }}
          className="inline-block cursor-default"
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}
