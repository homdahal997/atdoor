"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Layout from "@/components/layout/Layout"
import FreeMap from "@/components/ui/free-map"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form or show success message
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      title: "Find us Here",
      icon: "📍",
      details: [
        "8501 Mayland Drive",
        "Richmond, VA 23294"
      ]
    },
    {
      title: "Get In Touch",
      icon: "📞",
      details: [
        { type: "phone", value: "(804) 302-4673", href: "tel:+18043024673" },
        { type: "fax", value: "(804) 348-2782" },
        { type: "email", value: "info@atdoorhc.com", href: "mailto:info@atdoorhc.com" }
      ]
    },
    {
      title: "Office Hours",
      icon: "🕒",
      details: [
        "Mon - Fri: 9am - 8pm",
        "Saturday: 10am - 4pm",
        "Sunday: Closed"
      ]
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch with Us</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            At Door is committed to addressing your needs promptly and ensuring you have all the information necessary to make an informed decision. Whether you need clarification, have specific service inquiries, or want to learn more about how we can assist you, we are just a message or call away.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{info.icon}</span>
                      <CardTitle className="text-xl font-bold text-green-600">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <div key={idx}>
                          {typeof detail === 'string' ? (
                            <p className="text-gray-600">{detail}</p>
                          ) : (
                            <div>
                              {detail.href ? (
                                <a 
                                  href={detail.href} 
                                  className="text-gray-600 hover:text-green-600 transition-colors"
                                >
                                  {detail.value}
                                </a>
                              ) : (
                                <p className="text-gray-600">{detail.value}</p>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced Contact Form */}
            <div>
              <Card className="card-elevated">
                <CardHeader className="bg-gradient-primary text-white rounded-t-2xl p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <CardTitle className="heading-card text-white">Send us a Message</CardTitle>
                      <p className="text-green-100">We&apos;ll get back to you within 24 hours</p>
                    </div>
                  </div>
                  <div className="healthcare-badge bg-white/20 text-white border-white/30">
                    ✨ Free Consultation Available
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="form-label">
                          <span className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span>Full Name *</span>
                          </span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="form-label">
                          <span className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>Email Address *</span>
                          </span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label className="form-label">
                          <span className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>Phone Number</span>
                          </span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="(804) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label">
                        <span className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>Address (Optional)</span>
                        </span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your address for service area verification"
                      />
                    </div>

                    <div>
                      <label className="form-label">
                        <span className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span>Message *</span>
                        </span>
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input resize-none"
                        placeholder="Tell us about your healthcare needs, questions, or how we can help you..."
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="btn-primary w-full py-4 text-lg"
                      >
                        <span className="flex items-center justify-center space-x-3">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          <span>Send Message</span>
                        </span>
                      </Button>
                      <p className="text-muted text-center mt-4">
                        We typically respond within 24 hours. For urgent matters, please call{' '}
                        <a href="tel:+18043024673" className="text-green-600 hover:text-green-700 font-medium">
                          (804) 302-4673
                        </a>
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section with Google Maps Integration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Visit Our Office</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re conveniently located in Richmond, VA. Get directions, calculate travel time, and explore our neighborhood with our interactive map.
            </p>
          </div>

          <FreeMap
            businessAddress="8501 Mayland Dr, Suite 103A, Richmond VA 23294"
            businessName="At Door HealthCare"
            businessPhone="(804) 302-4673"
          />
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Our team is here to provide support and guidance when you need it most. Don&apos;t hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <a href="tel:+18043024673" className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now: (804) 302-4673</span>
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Schedule Assessment
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
