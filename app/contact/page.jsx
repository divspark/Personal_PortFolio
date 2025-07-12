"use client"
import ContactForm from "@/components/forms/ContactForm"
import ContactInfo from "@/components/sections/ContactInfo"
import PageHeader from "@/components/ui/PageHeader"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <PageHeader
          title="Get In Touch"
          description="Have a project in mind? Let's discuss how we can work together to bring your ideas to life."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}
