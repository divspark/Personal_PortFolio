import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title: "Divyansh - Fullstack Developer Portfolio",
  description:
    "Professional portfolio of Divyansh, a passionate fullstack developer specializing in React, Next.js, Node.js and modern web technologies.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${inter.className}`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
