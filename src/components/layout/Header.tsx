"use client"
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import MobileMenu from "@/components/ui/mobile-menu"
import ContactPopup from "@/components/ui/contact-popup"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)
  const pathname = usePathname()

  // Function to determine if a link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  // Function to get link classes based on active state
  const getLinkClasses = (href: string) => {
    const baseClasses = "px-6 py-3 font-medium transition-all duration-300"
    if (isActiveLink(href)) {
      return `${baseClasses} bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 shadow-lg`
    }
    return `${baseClasses} text-white hover:bg-green-700 transition-colors`
  }
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top banner with contact info */}
      <div className="bg-gradient-to-r from-yellow-400 to-green-500 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          {/* Mobile Layout: Inline 24/7 SERVICE + Phone */}
          <div className="sm:hidden flex items-center space-x-2">
            <span>24/7 SERVICE</span>
            <a href="tel:+18043024673" className="flex items-center hover:text-yellow-200 transition-colors">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              (804) 302-4673
            </a>
          </div>

          {/* Desktop Layout: Original with all contact info */}
          <div className="hidden sm:flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              24/7 SERVICE
            </span>
            <a href="tel:+18043024673" className="flex items-center hover:text-yellow-200 transition-colors">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              (804) 302-4673
            </a>
            <span className="flex items-center text-xs">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Fax: (804) 348-2782
            </span>
          </div>
          <div className="mt-1 sm:mt-0">
            <span className="text-xs">Professional Home Healthcare Services</span>
          </div>
        </div>
      </div>
      {/* Top header with logo and contact button */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="AT Door Healthcare"
            width={300}
            height={100}
            className="object-contain md:w-auto w-48 h-auto"
          />
        </div>

        {/* Desktop: Social icons and contact button */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Enhanced Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 group"
              title="Facebook"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 group"
              title="Instagram"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 group"
              title="Twitter"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 group"
              title="YouTube"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          {/* Enhanced Contact Button */}
          <Button
            onClick={() => setIsContactPopupOpen(true)}
            className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Contact Us</span>
          </Button>
        </div>

        {/* Mobile: Enhanced Menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-3 bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation bar - Hidden on mobile, shown on desktop */}
      <nav className="bg-green-600 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex">
            <Link
              href="/"
              className={getLinkClasses("/")}
            >
              Home
            </Link>
            <span className="text-white self-center px-2">|</span>
            <Link
              href="/about"
              className={getLinkClasses("/about")}
            >
              About Us
            </Link>
            <span className="text-white self-center px-2">|</span>
            <Link
              href="/services"
              className={getLinkClasses("/services")}
            >
              Services
            </Link>
            <span className="text-white self-center px-2">|</span>
            <Link
              href="/contact"
              className={getLinkClasses("/contact")}
            >
              Contact us
            </Link>
            <span className="text-white self-center px-2">|</span>
            <Link
              href="/careers"
              className={getLinkClasses("/careers")}
            >
              Careers
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
      />
    </header>
  )
}
