import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">At Door HealthCare</h3>
            <p className="text-green-100 text-sm leading-relaxed">
              Compassionate home healthcare services providing dignity, independence, and quality care in the comfort of your home.
            </p>
            <div className="mt-4">
              <p className="text-green-100 text-sm">📞 (555) 302-8572</p>
              <p className="text-green-100 text-sm">📧 info@atdoorhealthcare.com</p>
              <p className="text-green-100 text-sm">📍 Your City, State 12345</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-green-100 text-sm">
              <li>• Personal Care</li>
              <li>• Respite Care</li>
              <li>• Companion Care</li>
              <li>• Light Housekeeping</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-green-100 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Service Hours</h4>
            <ul className="space-y-2 text-green-100 text-sm">
              <li>24/7 Emergency Care</li>
              <li>Mon-Fri: 8AM-8PM</li>
              <li>Saturday: 9AM-5PM</li>
              <li>Sunday: 10AM-4PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-600 mt-8 pt-8 text-center">
          <p className="text-green-100 text-sm">&copy; 2024 At Door HealthCare. All rights reserved.</p>
          <p className="text-green-200 text-xs mt-2">Licensed • Bonded • Insured</p>
        </div>
      </div>
    </footer>
  )
}
