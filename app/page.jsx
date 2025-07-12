import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Tools from "@/components/sections/Tools"
import Projects from "@/components/sections/Projects"
import CircularResumeButton from "@/components/ui/CircularResumeButton"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Tools />
      <Projects />
      <CircularResumeButton />
      <Contact />
      <Footer />
    </main>
  )
}
