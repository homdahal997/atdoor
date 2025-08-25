import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Layout from "@/components/layout/Layout"

export default function ServicesPage() {
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

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Licensing and Accreditation",
                description: "Verify that the agency holds the appropriate business licenses and meets any state-specific regulations. Proper licensing ensures the agency operates within legal frameworks and maintains industry standards."
              },
              {
                title: "Employee Status",
                description: "Ensure that caregivers are classified as employees (not independent contractors). This guarantees that the agency adheres to tax and legal obligations, including paying employee taxes and providing benefits such as Social Security, Medicare, and unemployment insurance."
              },
              {
                title: "Insurance Coverage",
                description: "Confirm that the agency maintains comprehensive insurance, including worker's compensation, professional liability, and fidelity bonding insurance. These protections safeguard both the client and the caregiver."
              },
              {
                title: "Supervision and Oversight",
                description: "Ensure that each caregiver is supervised by a qualified manager, allowing for continuous oversight and evaluation of care standards. Regular supervision maintains quality and addresses any issues promptly."
              },
              {
                title: "Thorough Background Checks",
                description: "The agency should conduct comprehensive background screenings including criminal history, employment verification, and reference checks. This ensures the safety and security of clients in their homes."
              },
              {
                title: "Specialized Training Programs",
                description: "The agency should provide ongoing training in areas such as dementia care, mobility assistance, and other specialized caregiving techniques. Continuous education ensures caregivers stay current with best practices."
              },
              {
                title: "24/7 Availability",
                description: "A robust on-call system ensures that the agency is available to respond to emergencies or sudden changes in care needs. Round-the-clock availability provides peace of mind for families."
              },
              {
                title: "Client and Family Satisfaction",
                description: "Look for agencies with strong, positive customer reviews that reflect their ability to deliver dependable and compassionate care. Client testimonials and satisfaction ratings indicate service quality."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-green-600 text-lg mb-3 group-hover:text-green-700 transition-colors duration-300">{item.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Driver Safety Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Senior Driver Safety: Safeguarding the Independence of Aging Adults
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              As seniors age, maintaining safe driving habits becomes increasingly difficult due to the natural decline in physical and cognitive abilities. If you suspect your loved one may no longer be fit to drive, consider these critical steps:
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Assessing Driving Abilities",
                description: "Look for signs of unsafe driving, such as difficulty navigating intersections, slow reaction times, or reluctance to drive at night. Examine the condition of the vehicle and note any signs of minor accidents or near-misses."
              },
              {
                title: "Gradual Transition",
                description: "Begin by limiting driving to certain hours of the day, such as avoiding night driving, and provide alternative transportation options. This helps ease the transition and ensures continued independence while gradually reducing driving responsibilities."
              },
              {
                title: "Explore Transportation Alternatives",
                description: "Research local transportation services, such as senior ride programs or public transit, to provide viable alternatives. This can maintain mobility while ensuring safety."
              },
              {
                title: "Consulting a Healthcare Professional",
                description: "Work with healthcare providers to assess cognitive and physical abilities that may impact driving safety. Professional evaluation can provide objective guidance on driving capabilities and limitations."
              },
              {
                title: "State Assistance and License Revocation",
                description: "In some cases, it may be necessary to contact the Department of Motor Vehicles (DMV) to revoke a senior's driving license, particularly if their condition makes driving a hazard to themselves or others. Consult your local DMV for specific regulations and procedures."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-green-600 text-lg mb-3 group-hover:text-green-700 transition-colors duration-300">{item.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Driving Safety Conclusion */}
            <div className="text-center mb-12">
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                While this is a sensitive and often difficult decision, ensuring your loved one&apos;s safety and well-being, as well as the safety of others on the road, is paramount. Thoughtful, compassionate discussions and a proactive approach to alternative transportation can ease the transition and preserve independence.
              </p>
            </div>

            {/* Main Conclusion */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 shadow-xl border border-green-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Conclusion
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Selecting the right Home Health provider is a critical decision that requires careful thought and consideration. By asking the right questions and evaluating an agency&apos;s operational standards, transparency, and care philosophy, you can make an informed choice that will provide your loved one with the highest quality care. 
                <span className="font-semibold text-green-700 block mt-4">
                  Let us help guide you through this process with professionalism, compassion, and a steadfast commitment to excellence.
                </span>
              </p>
              
              {/* Decorative elements */}
              <div className="flex justify-center mt-8 space-x-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
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
