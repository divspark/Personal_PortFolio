"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Zap, Smartphone, Globe, Database, Palette } from "lucide-react"
import Footer from "@/components/sections/Footer"

const projectCategories = [
  {
    title: "Web Applications",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    projects: [
      {
        title: "Organic Store",
        description:
          "A full-stack farmers marketplace where farmers can upload their produce like fruits and vegetables and sell them effortlessly. Includes a complete farmer dashboard, admin dashboard, and a clean, user-friendly UI/UX design.",
        image: "/images/OrganicStoreImg.png",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        liveUrl: "https://organic-store-bice.vercel.app/",
        githubUrl: "https://github.com/divspark/OrganicStore",
        featured: true,
      },
      {
        title: "Medicare Hospital Management Website",
        description:
          "A sophisticated hospital management system that manages doctors, departments, and wards, and provides detailed information about various diseases. Includes a responsive and intuitive user interface.",
        image: "/images/MedicarePlusImg.png",
        technologies: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
        liveUrl: "https://medi-care-plus-seven.vercel.app/",
        githubUrl: "https://github.com/divspark/MediCarePlus",
        featured: true,
      },
      {
        title: "College Placement Website",
        description:
          "A comprehensive placement portal featuring a placement calendar to display upcoming company visits, company details, and previous interview questions asked by companies. Designed for smooth and engaging user experience.",
        image: "/images/PlacementWebsiteImg.png",
        technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
        liveUrl: "https://placement-website-rho.vercel.app/",
        githubUrl: "https://github.com/divspark/PlacementWebsite",
        featured: true,
      },
    ],
  },
  // {
  //   title: "Mobile Applications",
  //   icon: Smartphone,
  //   color: "from-purple-500 to-pink-500",
  //   projects: [],
  // },
  {
    title: "API & Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    projects: [
      {
        title: "Organic Store",
        description:
          "Backend services for the Organic Store marketplace managing farmers, products, orders, and admin functionalities.",
        image: "/images/OrganicStoreImg.png",
        technologies: ["Node.js", "Express", "MongoDB", "JWT"],
        liveUrl: "https://organic-store-bice.vercel.app/",
        githubUrl: "https://github.com/divspark/OrganicStore",
        featured: false,
      },
    ],
  },
];


export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 backdrop-blur-sm mb-6"
            >
              <Zap className="w-4 h-4 mr-2" />
              My Portfolio
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Featured </span>
              <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A comprehensive showcase of my work across different technologies and platforms
            </p>
          </motion.div>

          {/* Project Categories */}
          {projectCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{category.title}</h2>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.projects.map((project, projectIndex) => (
                  <motion.div
                    key={projectIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="card-hover bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 overflow-hidden backdrop-blur-sm h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
                              Featured
                            </Badge>
                          </div>
                        )}

                        {/* Overlay with Actions */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                          <div className="flex space-x-3">
                            <Button size="sm" className="btn-primary" asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live
                              </a>
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                              asChild
                            >
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>

                      <CardHeader>
                        <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className={`bg-gradient-to-r ${category.color}/20 border-0 text-white`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
