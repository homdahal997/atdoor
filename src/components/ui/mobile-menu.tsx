"use client"
import Link from 'next/link'
import { Button } from './button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About Us', icon: '👥' },
    { href: '/services', label: 'Services', icon: '🏥' },
    { href: '/contact', label: 'Contact Us', icon: '📞' },
    { href: '/careers', label: 'Careers', icon: '💼' },
  ]

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-60 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">At Door HealthCare</h2>
              <p className="text-green-100 text-sm">Hope at Every Turn</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-4">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center px-6 py-4 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-2xl mr-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
              <svg 
                className="w-5 h-5 ml-auto text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t">
          <div className="space-y-3">
            <a href="tel:+18043024673" className="flex items-center text-sm text-gray-600 hover:text-green-600 transition-colors">
              <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              (804) 302-4673
            </a>
            <a href="mailto:info@atdoorhc.com" className="flex items-center text-sm text-gray-600 hover:text-green-600 transition-colors">
              <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              info@atdoorhc.com
            </a>
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Richmond VA 23294
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">
              Schedule Assessment
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
