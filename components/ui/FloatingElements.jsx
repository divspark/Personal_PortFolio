"use client"

import { motion } from "framer-motion"

const floatingElements = [
  {
    content: "JS",
    className: "absolute -top-4 -right-4 w-16 h-16 bg-blue-600",
    animation: { y: [-10, 10, -10] },
    duration: 3,
  },
  {
    content: "⚛️",
    className: "absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600",
    animation: { y: [10, -10, 10] },
    duration: 4,
  },
  {
    content: "TS",
    className: "absolute top-1/2 -left-8 w-12 h-12 bg-green-600 rounded-full",
    animation: { x: [-5, 5, -5] },
    duration: 2.5,
  },
]

export default function FloatingElements() {
  return (
    <>
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          animate={element.animation}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className={`${element.className} rounded-lg flex items-center justify-center shadow-lg`}
        >
          <span className="text-white font-bold">{element.content}</span>
        </motion.div>
      ))}
    </>
  )
}
