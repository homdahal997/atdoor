
"use client"
import { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Layout from "@/components/layout/Layout"
import Image from "next/image"


export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const attemptPlay = async () => {
      try {
        // Ensure video is muted for autoplay
        video.muted = true
        video.defaultMuted = true

        const playPromise = video.play()
        if (playPromise !== undefined) {
          await playPromise
          console.log("🎉 Video autoplay successful!")
        }
      } catch (error) {
        console.log("⚠️ Autoplay blocked, user interaction required:", error)
      }
    }

    const handleCanPlay = () => {
      console.log("✅ Video can play")
      attemptPlay()
    }

    const handleLoadedData = () => {
      console.log("✅ Video loaded")
      attemptPlay()
    }

    // Set video properties for autoplay compatibility
    video.muted = true
    video.playsInline = true
    video.loop = true
    video.controls = false
    video.defaultMuted = true

    // Add event listeners
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadeddata', handleLoadedData)

    // Try to play immediately
    attemptPlay()

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [])



  return (
    <Layout>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* BULLETPROOF Video Background with multiple strategies */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            zIndex: 1
          }}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          controls={false}
          disablePictureInPicture
        >
          {/* Reliable video sources - tested and working */}
          
          {/* Your custom videos */}
          <source src="/videos/atdoor-services.mp4" type="video/mp4" />
          
          {/* Fallback for very old browsers */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-white">
            <p>Your browser does not support video playback</p>
          </div>
        </video>
        
        {/* Fallback Background Color */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800"
          style={{ zIndex: 0 }}
        ></div>
        
        {/* Light text shadow overlay - minimal impact on video visibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
          style={{ zIndex: 2 }}
        ></div>
        {/* Content Overlay - Positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 pb-16 md:pb-20" style={{ zIndex: 3 }}>
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight drop-shadow-2xl">
              WELCOME TO ATDOOR HEALTH CARE
            </h1>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-2xl mx-auto">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>DOWNLOAD BROCHURE</span>
              </Button>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10m-6-4h6" />
                </svg>
                <span>SCHEDULE ASSESSMENT</span>
              </Button>
            </div>
          </div>
        </div>
        {/* Scroll Down Indicator - Positioned above content */}
        <div className="absolute bottom-32 md:bottom-40 left-1/2 transform -translate-x-1/2" style={{ zIndex: 4 }}>
          <div className="animate-bounce">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* AT DOOR HEALTHCARE Section - Matching the image layout */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left side - Image */}
            <div className="relative order-2 lg:order-1 flex">
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-2xl shadow-xl flex-1">
                <Image
                  src="https://atdoorhc.com/wp-content/uploads/2025/05/Gemini_Generated_Image_pon681pon681pon6.jpeg"
                  alt="Elderly person reading comfortably at home with caregiver nearby"
                  width={600}
                  height={450}
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-200 rounded-full opacity-50"></div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 flex">
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 lg:p-10 rounded-2xl shadow-xl flex flex-col justify-center flex-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                  AT DOOR HEALTHCARE
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-6 text-green-50">
                  Age, quality care, life challenges should not be a barrier to achieving
                  wellness, dignity, and comfort. That is why AT DOOR HEALTH is here to
                  provide you and your loved ones with Home Health services uniquely
                  tailored to meet your specific needs, ensuring that you feel valued,
                  supported and empowered at every step of the way.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-8 text-green-50">
                  What sets us apart is our resolute commitments to excellence, innovation and genuine human
                  connection. Our resolute and professional trained staff are enthusiastic
                  advocates for your well-being, ensuring every interaction foster trust,
                  respect, and positive change.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our CARE Principles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our CARE Principles</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Compassionate */}
            <Card className="text-center p-6 bg-gradient-to-br from-yellow-200 to-yellow-300 border-0">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💝</span>
                </div>
                <CardTitle className="text-gray-800 text-lg font-bold">Compassionate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Providing care with kindness, empathy, understanding, and understanding the person as a whole, not just their medical needs.
                </p>
              </CardContent>
            </Card>

            {/* Assistance */}
            <Card className="text-center p-6 bg-gradient-to-br from-blue-200 to-blue-300 border-0">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <CardTitle className="text-gray-800 text-lg font-bold">Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Offering support to our clients by assessing their needs and providing appropriate assistance to enhance their quality of life.
                </p>
              </CardContent>
            </Card>

            {/* Respect */}
            <Card className="text-center p-6 bg-gradient-to-br from-purple-200 to-purple-300 border-0">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🙏</span>
                </div>
                <CardTitle className="text-gray-800 text-lg font-bold">Respect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  As human beings and valuing their dignity, preferences, and choices while maintaining their autonomy and not allowing them to have a say in their treatment and care.
                </p>
              </CardContent>
            </Card>

            {/* Empowerment */}
            <Card className="text-center p-6 bg-gradient-to-br from-orange-200 to-orange-300 border-0">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💪</span>
                </div>
                <CardTitle className="text-gray-800 text-lg font-bold">Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Enabling our clients to feel confident in their own health and wellness by providing them with the tools and support they need to live their best life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">Comprehensive Care Solutions</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Personal Care */}
            <Card className="bg-green-600 text-white border-0 overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-center">PERSONAL CARE</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed">
                  Comprehensive personal care services tailored to individual needs, ensuring comfort and dignity.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Bathing and grooming assistance</li>
                  <li>• Dressing and mobility support</li>
                  <li>• Medication reminders</li>
                  <li>• Toileting assistance</li>
                  <li>• Personal hygiene care</li>
                </ul>
                <div className="pt-4">
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-green-600 hover:bg-gray-100 font-semibold"
                  >
                    LEARN MORE →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Respite Care */}
            <Card className="bg-green-500 text-white border-0 overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-center">RESPITE CARE</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed">
                  Professional support services providing temporary relief for primary caregivers while maintaining quality care.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Temporary caregiver relief</li>
                  <li>• Companionship services</li>
                  <li>• Light housekeeping</li>
                  <li>• Meal preparation</li>
                  <li>• Transportation assistance</li>
                </ul>
                <div className="pt-4">
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-green-500 hover:bg-gray-100 font-semibold"
                  >
                    LEARN MORE →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and learn how we can help
            your loved one live safely and independently at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 font-semibold">
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
