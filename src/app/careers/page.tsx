"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Layout from "@/components/layout/Layout"
import Image from "next/image"

export default function CareersPage() {
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Application submitted:', applicationForm)
    // Reset form or show success message
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const benefits = [
    "Competitive compensation and benefits",
    "Comprehensive training programs", 
    "Supportive work environment",
    "Career advancement opportunities",
    "Flexible scheduling options",
    "Professional development support"
  ]

  const positions = [
    {
      title: "Personal Care Assistant",
      type: "Full-time / Part-time",
      description: "Provide compassionate personal care services to clients in their homes, including assistance with daily living activities.",
      requirements: ["High school diploma or equivalent", "Previous caregiving experience preferred", "Valid driver's license", "Background check required"]
    },
    {
      title: "Companion Caregiver", 
      type: "Part-time / Flexible",
      description: "Offer companionship and emotional support to clients, engaging in meaningful activities and social interaction.",
      requirements: ["Excellent communication skills", "Empathetic and patient nature", "Reliable transportation", "Flexible schedule availability"]
    },
    {
      title: "Respite Care Provider",
      type: "As-needed / Flexible",
      description: "Provide temporary relief care for family caregivers, ensuring continuity of quality care for clients.",
      requirements: ["Previous healthcare experience", "Ability to work independently", "Strong problem-solving skills", "Professional references"]
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Opportunities</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            ATDOOR HEALTHCARE is actively seeking enthusiastic and committed individuals to join our team of professionals who provide compassionate care services to those facing disabilities, mobility challenges, injuries, or illnesses. As a growing agency in the Health Care industry, we are looking for dedicated caregivers who share our mission of delivering personalized, high-quality care that promotes the well-being and independence of our clients.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Join Us?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                If you have a heart for service and want to make a meaningful impact in the lives of individuals in need, we would love to hear from you. Our team is built on a foundation of empathy, professionalism, and the desire to support others in their daily lives.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-50 p-6 rounded-2xl shadow-xl">
                <Image 
                  src="/api/placeholder/600/400" 
                  alt="Healthcare team working together" 
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Open Positions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-green-600">{position.title}</CardTitle>
                  <p className="text-sm text-gray-500 font-medium">{position.type}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{position.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Requirements:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Opportunities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Internship Opportunities</h2>
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 md:p-12 rounded-2xl shadow-xl">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                At ATDOOR HEALTH, we offer valuable internship opportunities for Undergraduate/graduate students eager to gain firsthand experience in a Home Health care setting. This is an excellent platform to connect with our resolute team and immerse yourself in the dynamic world of personalized care.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-8 text-green-100">
                Our internships provide real-world exposure, skill development, and mentorship, helping you build a solid foundation for your future career in Homecare. Join us and make a meaningful impact while advancing your professional journey.
              </p>
              <Button 
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Apply for Internship
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Referral Program Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Employee Referral Program</h2>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-4xl mb-6">🤝</div>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  At AtDoor HealthCare, we know that exceptional patient experiences begin with exceptional people. If you know a dedicated healthcare professional who shares our passion for innovation, compassion, and excellence, refer them today! For every successful referral, you&apos;ll earn generous rewards—and help us build a stronger, more caring team committed to delivering outstanding patient care.
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-8">
                  Let&apos;s shape a healthier future together, one referral at a time.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Refer Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Apply Now</h2>
              <p className="text-lg text-gray-600">
                Ready to join our team? Submit your application and we&apos;ll get back to you soon.
              </p>
            </div>
            
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold">Career Application</CardTitle>
                <p className="text-green-100">Tell us about yourself and your interest in joining our team</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={applicationForm.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={applicationForm.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={applicationForm.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="(804) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Position of Interest *
                      </label>
                      <select
                        name="position"
                        required
                        value={applicationForm.position}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a position</option>
                        <option value="personal-care">Personal Care Assistant</option>
                        <option value="companion">Companion Caregiver</option>
                        <option value="respite">Respite Care Provider</option>
                        <option value="internship">Internship</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Relevant Experience
                    </label>
                    <textarea
                      name="experience"
                      rows={3}
                      value={applicationForm.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                      placeholder="Describe your relevant experience in healthcare or caregiving..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Why do you want to join our team? *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={applicationForm.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your motivation and what you can bring to our team..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}
