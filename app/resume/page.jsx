"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Mail, Phone, Github, Linkedin } from "lucide-react"
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
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700"
          >
            <a
              href="https://drive.google.com/file/d/1xJEQfP2Wg8DWAiY1GRJd4CrRVs-wDB9T/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </a>
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
                  <span className="text-sm">+91 9336700274</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Github className="w-4 h-4 mr-3" />
                  <a
                    href="https://github.com/divspark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    github.com/divspark
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Linkedin className="w-4 h-4 mr-3" />
                  <a
                    href="https://www.linkedin.com/in/divyansh-kesharwani-87b5a9195/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    LinkedIn Profile
                  </a>
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
                      {[
                        "HTML","CSS","Javascript","ReactJs","Next.js","React Native","Tailwind CSS","Material UI","Mantine UI"
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-blue-600 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "NodeJs","ExpressJs","Nest.js","Django","SpringBoot","FastApi","Python"
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-green-600 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Databases & Cloud</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "MongoDb","MySQL","PostgreSQL","Microsoft SQL Server","Firebase","Supabase","Appwrite","AWS","Prisma"
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-purple-600 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Tools & Others</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Git","Github","Docker","Figma","Dialogflow"
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-pink-600 text-white">
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
                    <h3 className="text-white font-semibold">Software Engineering Intern</h3>
                    <Badge variant="outline" className="ml-2 border-gray-600 text-gray-300">
                      June 2025 - Present
                    </Badge>
                  </div>
                  <p className="text-blue-400 mb-2">Clinikally (YC W22)</p>
                  <p className="text-gray-300 text-sm">
                    Working on backend microservices, building secure, high-performance APIs and services for
                    healthcare applications, ensuring scalability and reliability.
                  </p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4">
                  <div className="flex items-center mb-2">
                    <h3 className="text-white font-semibold">Full Stack Developer Intern</h3>
                    <Badge variant="outline" className="ml-2 border-gray-600 text-gray-300">
                      2024
                    </Badge>
                  </div>
                  <p className="text-blue-400 mb-2">Serene MINDS</p>
                  <p className="text-gray-300 text-sm">
                    Built a clean, empathetic UI and fast, secure APIs for a mental health startup. Delivered a
                    full-stack solution for booking, assessments, and client-professional communication with high
                    data privacy.
                  </p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4">
                  <div className="flex items-center mb-2">
                    <h3 className="text-white font-semibold">Software Engineering Intern</h3>
                    <Badge variant="outline" className="ml-2 border-gray-600 text-gray-300">
                      2023
                    </Badge>
                  </div>
                  <p className="text-blue-400 mb-2">Yantram Medtech Pvt. Ltd.</p>
                  <p className="text-gray-300 text-sm">
                    Developed visually engaging UI and high-performance REST APIs with React.js, Node.js,
                    MongoDB/PostgreSQL. Focused on secure, reliable healthcare solutions from design to deployment.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-green-600 pl-4">
                  <div className="flex items-center mb-2">
                    <h3 className="text-white font-semibold">
                      B.Tech. Computer Science & Engineering (AI)
                    </h3>
                    <Badge variant="outline" className="ml-2 border-gray-600 text-gray-300">
                      2022 - 2026
                    </Badge>
                  </div>
                  <p className="text-green-400 mb-2">
                    Institute of Engineering & Technology, Lucknow
                  </p>
                  <p className="text-gray-300 text-sm">Ongoing</p>
                </div>
                <div className="border-l-2 border-green-600 pl-4">
                  <div className="flex items-center mb-2">
                    <h3 className="text-white font-semibold">Jawahar Navodaya Vidyalaya,Raebareli - Class 12th</h3>
                    <Badge variant="outline" className="ml-2 border-gray-600 text-gray-300">
                      94.2%
                    </Badge>
                  </div>
                  <p className="text-green-400 mb-2">Physics, Chemistry, Mathematics, Computer Science, English</p>
                </div>
                <div className="border-l-2 border-green-600 pl-4">
                  <div className="flex items-center mb-2">
                    <h3 className="text-white font-semibold">Jawahar Navodaya Vidyalaya,Raebareli - Class 10th</h3>
                    <Badge variant="outline" className="ml-2 border-gray-600 text-gray-300">
                      94.6%
                    </Badge>
                  </div>
                  <p className="text-green-400 mb-2">English, Hindi, Science, Maths, Social Science</p>
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
                    <p className="text-white font-medium">
                      CodeChef 2-Star Rated
                    </p>
                    <a
                      href="https://www.codechef.com/users/kiddodev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 text-sm hover:underline"
                    >
                      Competitive Programming Profile
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-white font-medium">Previous Projects</p>
                    <p className="text-gray-300 text-sm">
                      <a
                        href="https://moviez-mania.vercel.app/"
                        className="hover:underline"
                        target="_blank"
                      >
                        Moviez Mania
                      </a>
                      ,{" "}
                      <a
                        href="https://grow-frontend-lime.vercel.app/"
                        className="hover:underline"
                        target="_blank"
                      >
                        Grow Frontend
                      </a>
                    </p>
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
