import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Layout from "@/components/layout/Layout"

export default function ServicesPage() {
  const coreServices = [
    {
      title: "Personal Care",
      description: "Comprehensive assistance with daily living activities including bathing, grooming, dressing, and personal hygiene to maintain dignity and comfort.",
      icon: "👤",
      features: ["Bathing & Grooming", "Dressing Assistance", "Personal Hygiene", "Mobility Support"],
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-500"
    },
    {
      title: "Respite Care",
      description: "Temporary relief for family caregivers, providing professional care while you take time for yourself or handle other responsibilities.",
      icon: "🤝",
      features: ["Short-term Care", "Family Relief", "Flexible Scheduling", "Peace of Mind"],
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-500"
    },
    {
      title: "Companion Care",
      description: "Social interaction and emotional support to combat loneliness and maintain mental well-being through meaningful companionship.",
      icon: "❤️",
      features: ["Social Interaction", "Emotional Support", "Activity Engagement", "Mental Stimulation"],
      gradient: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
      iconBg: "bg-rose-500"
    },
    {
      title: "Light Housekeeping",
      description: "Assistance with household tasks to maintain a clean, safe, and comfortable living environment.",
      icon: "🏠",
      features: ["Cleaning Services", "Laundry Assistance", "Meal Preparation", "Organization"],
      gradient: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-500"
    }
  ]

  const qualityFactors = [
    {
      title: "Transparency and Responsiveness",
      description: "We maintain clear and open channels for dialogue. You can maintain continuous, transparent engagement with both the caregiver and the supervisory team through our accessible case management system.",
      icon: "💬"
    },
    {
      title: "Trustworthiness and Ethical Standards", 
      description: "We foster a culture of reliability and moral fortitude through rigorous background screenings and careful assessment of alignment with our high ethical standards.",
      icon: "🛡️"
    },
    {
      title: "Operational Excellence and Accountability",
      description: "We deliver consistently high-quality care while maintaining a system of accountability and ongoing evaluation, with proactive monitoring and adjustment of care plans.",
      icon: "⭐"
    }
  ]

  const commitmentPrinciples = [
    {
      title: "Excellence in Recruitment & Retention",
      description: "All our caregivers are highly skilled and passionate about their roles, equipped through comprehensive training programs and continued professional development."
    },
    {
      title: "Recognition and Support of Our Caregiving Team", 
      description: "Our caregivers are our most valuable asset. We foster an environment of respect and appreciation, supporting their personal and professional growth."
    },
    {
      title: "Strategic Community Partnerships",
      description: "We build positive and collaborative relationships with local healthcare professionals, organizations, and service providers for comprehensive, integrated care."
    },
    {
      title: "Accountability in Service Delivery",
      description: "We adhere to a strict code of conduct and operational guidelines, ensuring transparent, responsible practices aligned with the highest industry standards."
    }
  ]

  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 text-white py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-orange-300/15 rounded-full blur-xl animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent animate-pulse">
                Our Comprehensive
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-10 font-light">
              Take advantage of our services today, carefully crafted to support your journey toward comprehensive wellness. We provide a range of
              <span className="font-semibold text-yellow-200"> personalized non-medical Home Health solutions</span> tailored to address both your health and individual needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-white to-yellow-100 text-green-600 hover:from-yellow-100 hover:to-white px-10 py-4 rounded-full font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 text-lg"
              >
                <span className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V10a2 2 0 012-2h2m2-4h4a2 2 0 012 2v6a2 2 0 01-2 2h-4m0 0V8a2 2 0 00-2-2H9a2 2 0 00-2 2v8a2 2 0 002 2h4z" />
                  </svg>
                  <span>Talk to Our Team</span>
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-10 py-4 rounded-full font-bold transition-all duration-500 text-lg backdrop-blur-sm"
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className={`text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0 shadow-xl ${service.bgColor} overflow-hidden group`}>
                <CardHeader className="pb-4 relative">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl text-white">{service.icon}</span>
                  </div>
                  <CardTitle className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.title}
                  </CardTitle>
                  {/* Decorative background element */}
                  <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium">{service.description}</p>
                  <div className="space-y-3">
                    <h4 className={`font-semibold text-sm bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      Key Features:
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                          <div className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0 shadow-sm`}></div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Selecting an Exemplary Home Health Provider: A Comprehensive Guide for Families
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              When seeking a home Health service that aligns with your loved one&apos;s needs, it&apos;s essential to assess the agency&apos;s fundamental principles and capabilities. Here are three pivotal elements to consider:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {qualityFactors.map((factor, index) => (
              <Card key={index} className="hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 overflow-hidden group">
                <CardHeader className="text-center pb-6 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                    <span className="text-3xl text-white">{factor.icon}</span>
                  </div>
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
                    {factor.title}
                  </CardTitle>
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-gray-700 text-sm leading-relaxed font-medium group-hover:text-gray-800 transition-colors duration-300">
                    {factor.description}
                  </p>
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Principles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Unwavering Commitment to Superior Care
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are unwavering in our dedication to delivering the highest caliber of care by focusing on the following principles:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {commitmentPrinciples.map((principle, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-bold text-green-600 mb-3">{principle.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Identifying the Need for Home Health: A Guide for Families
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you are uncertain whether your loved one requires Home Health services, consider the following critical factors:
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Comprehensive Care Needs Assessment",
                description: "Evaluate your loved one's daily routine. Compile a detailed list of tasks they can no longer perform independently and identify when and where they require support, from morning routines to evening activities."
              },
              {
                title: "Physical vs. Emotional Support Requirements",
                description: "Determine the balance between physical assistance (e.g., mobility assistance, hygiene care) and emotional support (e.g., companionship, mental stimulation). Knowing the distinction will help identify whether caregiving should lean more toward hands-on physical care or offer supportive companionship."
              },
              {
                title: "Transportation and Mobility Assistance",
                description: "Assess whether your loved one requires help with transportation for medical appointments, errands, or social engagement. Clarify whether the caregiver will be required to drive, and ensure that proper insurance coverage is in place."
              },
              {
                title: "Cognitive Impairment and Specialized Care",
                description: "If your loved one has been diagnosed with cognitive impairments such as Alzheimer's or Parkinson's disease, a comprehensive understanding of the specific condition is essential. This will guide the agency in assigning caregivers with the specialized training and experience needed to provide the highest level of care."
              },
              {
                title: "Language Proficiency",
                description: "Does your loved one require a caregiver who speaks a particular language? If so, ensure the agency can accommodate this request to facilitate smoother interactions and enhance comfort."
              },
              {
                title: "Care Hours and Flexibility",
                description: "Determine the number of care hours required daily and review the types of services that will be needed during each visit. This will help establish a baseline for scheduling and ensure that the caregiver can meet the demands of the role."
              },
              {
                title: "Medical and Skilled Care Needs",
                description: "If your loved one requires specialized medical care—such as medication management, wound care, or vital sign monitoring—ensure that the caregiver has the necessary expertise. These needs should be clearly outlined in advance to ensure the correct caregiver is assigned."
              },
              {
                title: "Nutritional Requirements and Meal Planning",
                description: "If your loved one has special dietary needs, such as allergies or specific meal preferences, it's critical to communicate these requirements. Additionally, consider whether the caregiver will assist with grocery shopping or meal preparation."
              },
              {
                title: "Medication Management and Monitoring",
                description: "Review the medications your loved one takes and confirm they are being taken correctly and on time. Provide the agency with a detailed list of medications and any specific requirements, such as whether certain medications need to be taken with food."
              },
              {
                title: "Comprehensive Care Coordination",
                description: "If your loved one requires oversight beyond basic caregiving, such as coordinating appointments, obtaining medical supplies, or managing prescriptions, it may be beneficial to enlist the services of a professional Care Manager. This individual can supervise the overall care plan and ensure it aligns with your family's goals and medical needs."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 group">
                <h4 className="font-bold text-green-600 text-lg mb-3 group-hover:text-green-700 transition-colors duration-300">{item.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Checklist Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ensuring the Safety and Quality of Home Health Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              When selecting a Home Health provider, ensure that the agency meets the following essential criteria:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Licensing and Accreditation",
              "Employee Status",
              "Insurance Coverage",
              "Supervision and Oversight",
              "Thorough Background Checks",
              "Specialized Training Programs",
              "24/7 Availability",
              "Client and Family Satisfaction"
            ].map((item, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-green-600 text-sm">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600/50 to-transparent"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Contact us today to discuss your specific needs and learn how our
              <span className="font-semibold text-yellow-200"> comprehensive services </span>
              can support you or your loved ones on their journey to wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-white via-yellow-100 to-white text-green-600 hover:from-yellow-100 hover:to-yellow-50 px-10 py-4 rounded-full font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 text-lg group"
              >
                <span className="flex items-center space-x-3">
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Schedule Free Assessment</span>
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-10 py-4 rounded-full font-bold transition-all duration-500 text-lg backdrop-blur-sm group"
              >
                <span className="flex items-center space-x-3">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V10a2 2 0 012-2h2m2-4h4a2 2 0 012 2v6a2 2 0 01-2 2h-4m0 0V8a2 2 0 00-2-2H9a2 2 0 00-2 2v8a2 2 0 002 2h4z" />
                  </svg>
                  <span>Contact Our Team</span>
                </span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-200">24/7</div>
                <div className="text-sm text-green-100">Available Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-200">100%</div>
                <div className="text-sm text-green-100">Licensed & Insured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-200">5★</div>
                <div className="text-sm text-green-100">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-200">FREE</div>
                <div className="text-sm text-green-100">Initial Assessment</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
