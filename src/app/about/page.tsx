import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Layout from "@/components/layout/Layout"
import Image from "next/image"

export default function AboutPage() {
  const careValues = [
    {
      title: "Compassionate",
      description: "Providing our clients with care, empathy, kindness, and understanding by recognizing the emotional and psychological aspects of healing and addressing the person as a whole, not just focusing on their medical needs.",
      icon: "❤️"
    },
    {
      title: "Assistance", 
      description: "Offering support to our clients in managing daily tasks or medical needs, helping with personal care and mobility to providing medical treatment like administering medication or assisting with rehabilitation regimen.",
      icon: "🤝"
    },
    {
      title: "Respect",
      description: "Acknowledging and valuing the dignity, preferences, and autonomy of our clients which involves actively listening, honoring wishes, and allowing them to have a say in their treatment and care.",
      icon: "🙏"
    },
    {
      title: "Empowerment",
      description: "Helping our clients take an active role in their own health and decision-making, fostering independence, building confidence and ensuring our clients feel in control of their recovery or care process.",
      icon: "💪"
    }
  ]

  const affiliations = [
    "National Association for Home Care & Hospice (NAHC)",
    "Home Care Association of America (HCAOA)", 
    "Visiting Nurse Association of America (VNNA)",
    "American Physical Therapy Association (APTA)",
    "National Association of Professional Geriatric Care Manager (NAPGCM)",
    "American Nurse Association (ANA)",
    "The Joint Commission (TJC)",
    "National Hospice and Palliative Care Organization (NHPCO)",
    "American Occupational Therapy Association (AOTA)",
    "Centers for Medicare and Medicaid Services (CMS)"
  ]

  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container mx-auto container-padding text-center">
          <div className="healthcare-badge bg-white/20 text-white border-white/30 mx-auto mb-8">
            ✨ About At Door HealthCare
          </div>
          <h1 className="heading-hero text-white mb-8">About Us</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed font-light">
            As a Home Health provider, our approach goes beyond traditional Home Health. We focus on building genuine, lasting relationships with our clients and their families, treating individuals as valued members of our extended family.
          </p>
        </div>
      </section>

      {/* Enhanced Who We Are Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="healthcare-badge mb-6">
                🏥 Professional Healthcare Team
              </div>
              <h2 className="heading-section mb-8">Who We Are</h2>
              <div className="space-y-6 text-body text-lg leading-relaxed">
                <p>
                  We proudly deliver personalized, non-medical Home Health services designed to support individuals with disabilities, mobility limitations, injuries, or chronic health conditions. Our team consists of highly trained professionals who excel in providing exceptional care while fostering independence and comfort in the familiar surroundings of home.
                </p>
                <p>
                  By crafting individualized care solutions, we address the specific needs of each client, ensuring a seamless blend of support and empowerment. Our services are rooted in the principles of CARE: Compassionate Assistance, Respect, and Empowerment, with the goal of enhancing overall well-being and quality of life.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="trust-indicator">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Licensed & Certified</span>
                </div>
                <div className="trust-indicator">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Fully Insured</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="card-elevated bg-gradient-to-br from-green-50 to-emerald-50 p-8 transform hover:scale-105 transition-all duration-500">
                <Image
                  src="https://atdoorhc.com/wp-content/uploads/2025/05/Gemini_Generated_Image_pon681pon681pon6.jpeg"
                  alt="Healthcare professional with elderly client"
                  width={400}
                  height={200}
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                />
              </div>
              {/* Enhanced Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-1/2 -right-3 w-6 h-6 bg-yellow-400 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Mission Statement</h2>
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 md:p-12 rounded-2xl shadow-xl">
              <p className="text-lg md:text-xl leading-relaxed">
                Our mission is to redefine Home Health by delivering exceptional, personalized support that empowers you to live with vitality and dignity in the comfort of your own home. We are committed to providing compassionate, client-centered care that fosters independence and well-being. Rooted in our CARE principles—Compassion, Assistance, Respect, and Empowerment—we strive to elevate your quality of life with unwavering dedication and professionalism, ensuring you thrive in every aspect of your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CARE Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our CARE Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-xl font-bold text-green-600">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Affiliations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {affiliations.map((affiliation, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
                <p className="text-gray-700 font-medium text-sm">{affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Exceptional Care?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our personalized home healthcare services and how we can support you or your loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Schedule Assessment
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
