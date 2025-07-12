"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Mail, Phone } from "lucide-react"
import PageHeader from "@/components/ui/PageHeader"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <PageHeader title="Resume" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3" />
                  <span className="text-sm">divyansh2004mhj@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3" />
                  <span className="text-sm">+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span className="text-sm">India</span>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-blue-600 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express", "MongoDB", "PostgreSQL", "Python"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-green-600 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "Docker", "AWS", "Figma"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-purple-600 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Experience */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-blue-600 pl-4">
                  <div className="flex items-center mb-2">
                    <h3 className="text-white font-semibold">Fullstack Developer Intern</h3>
                    <Badge variant="outline" className="ml-2 border-gray-600 text-gray-300">
                      2023 - Present
                    </Badge>
                  </div>
                  <p className="text-blue-400 mb-2">Tech Company Inc.</p>
                  <p className="text-gray-300 text-sm">
                    Developed full-stack web applications using React, Node.js, and MongoDB. Collaborated with
                    cross-functional teams to deliver scalable solutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-l-2 border-green-600 pl-4">
                  <div className="flex items-center mb-2">
                    <h3 className="text-white font-semibold">Bachelor of Technology</h3>
                    <Badge variant="outline" className="ml-2 border-gray-600 text-gray-300">
                      2020 - 2024
                    </Badge>
                  </div>
                  <p className="text-green-400 mb-2">Computer Science Engineering</p>
                  <p className="text-gray-300 text-sm">University Name • CGPA: 8.5/10</p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-white font-medium">CodeChef 4-Star Rated</p>
                    <p className="text-gray-300 text-sm">Competitive Programming</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-white font-medium">Codeforces Specialist</p>
                    <p className="text-gray-300 text-sm">Problem Solving</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-white font-medium">Hackathon Winner</p>
                    <p className="text-gray-300 text-sm">Best Fullstack Solution Award</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
